#!/usr/bin/env python3
"""
Automated Gemini Sparkle Watermark Removal Pipeline
SARVA GYANA KOSHAH - High-Fidelity Pedagogical Publishing Architecture

Mathematically reverses Google Gemini / ImageFX 4-pointed sparkle watermark
using calibrated alpha unblending and Telea inpainting across all image assets.
"""

import os
import sys
import glob
import json
import hashlib
import cv2
import numpy as np

RECORD_FILE = 'scripts/assets/cleaned_hashes.json'

def get_file_hash(path):
    with open(path, 'rb') as f:
        return hashlib.sha256(f.read()).hexdigest()

def load_records():
    if os.path.exists(RECORD_FILE):
        try:
            with open(RECORD_FILE, 'r') as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def save_records(records):
    os.makedirs(os.path.dirname(RECORD_FILE), exist_ok=True)
    with open(RECORD_FILE, 'w') as f:
        json.dump(records, f, indent=2)

def load_calibration():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    alpha_path = os.path.join(base_dir, 'assets', 'perfect_alpha_map.npy')
    mask_exact_path = os.path.join(base_dir, 'assets', 'exact_star_mask.png')
    if not os.path.exists(alpha_path):
        raise FileNotFoundError(f"Missing calibration alpha map at {alpha_path}")
    alpha = np.load(alpha_path)
    mask_exact = cv2.imread(mask_exact_path, cv2.IMREAD_GRAYSCALE)
    mask_dilated = cv2.dilate(mask_exact, np.ones((7, 7), np.uint8))
    mask_f = (alpha > 0.04).astype(float)[:, :, None]
    star_area = (alpha > 0.15)
    outside_area = (alpha == 0) & (cv2.dilate((alpha > 0).astype(np.uint8), np.ones((7, 7))) > 0)
    return alpha, mask_dilated, mask_f, star_area, outside_area

def process_image(img_path, alpha, mask_dilated, mask_f, star_area, outside_area):
    img = cv2.imread(img_path)
    if img is None:
        return False, "Failed to load image"
    h, w, c = img.shape
    if h < 140 or w < 140:
        return False, f"Image too small ({w}x{h})"

    roi = img[h - 130 : h - 65, w - 130 : w - 65]
    if roi.shape != (65, 65, 3):
        return False, "Invalid ROI shape"

    # Check presence of watermark
    gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY).astype(float)
    star_lum = np.mean(gray[star_area])
    outside_lum = np.mean(gray[outside_area])
    diff = star_lum - outside_lum

    # If diff is too low or negative and no high-pass correlation, no watermark is present
    if diff < 2.0:
        # Double check template match
        hp = gray - cv2.GaussianBlur(gray, (15, 15), 3)
        template = (star_area).astype(np.float32)
        res = cv2.matchTemplate(hp.astype(np.float32), template, cv2.TM_CCORR_NORMED)
        if res.max() < 0.10:
            return False, f"No watermark detected (diff={diff:.2f})"

    # Check background characteristics
    border = np.concatenate([
        roi[0:6, :].reshape(-1, 3),
        roi[-6:, :].reshape(-1, 3),
        roi[:, 0:6].reshape(-1, 3),
        roi[:, -6:].reshape(-1, 3)
    ])
    b_std = np.std(border)
    b_mean = np.mean(border)

    # Inpaint candidate
    inp = cv2.inpaint(roi, mask_dilated, 5, cv2.INPAINT_TELEA).astype(float)

    # Alpha reversal candidate
    roi_f = roi.astype(float)
    rec = np.zeros_like(roi_f)
    for ch in range(3):
        rec[:, :, ch] = (roi_f[:, :, ch] - 255.0 * alpha) / np.maximum(1.0 - alpha, 0.05)
    rec_blended = roi_f * (1.0 - mask_f) + rec * mask_f

    if b_mean > 210 or b_std < 8.0:
        clean = inp
    elif b_std > 18.0:
        clean = rec_blended
    else:
        w_rec = (b_std - 8.0) / 10.0
        clean = (1.0 - w_rec) * inp + w_rec * rec_blended

    img[h - 130 : h - 65, w - 130 : w - 65] = np.clip(clean, 0, 255).astype(np.uint8)

    # Write cleaned image back
    ext = os.path.splitext(img_path)[1].lower()
    if ext in ['.jpg', '.jpeg']:
        cv2.imwrite(img_path, img, [cv2.IMWRITE_JPEG_QUALITY, 95])
    else:
        cv2.imwrite(img_path, img)

    return True, f"Cleaned (diff={diff:.2f}, std={b_std:.2f})"

def main():
    alpha, mask_dilated, mask_f, star_area, outside_area = load_calibration()
    records = load_records()

    search_dirs = [
        'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts',
        'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets',
        'assets/illustrations',
        'src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/downloaded_assets'
    ]

    total_checked = 0
    total_cleaned = 0

    for d in search_dirs:
        pattern = os.path.join(d, '**', '*.jpg')
        files = glob.glob(pattern, recursive=True)
        files += glob.glob(os.path.join(d, '**', '*.png'), recursive=True)
        print(f"\nScanning directory: {d} ({len(files)} files found)")

        for f in sorted(files):
            rel_f = os.path.relpath(f, '.')
            total_checked += 1
            file_h = get_file_hash(f)
            if records.get(rel_f) == file_h:
                # Already cleaned and file has not changed
                continue

            success, msg = process_image(f, alpha, mask_dilated, mask_f, star_area, outside_area)
            if success:
                total_cleaned += 1
                # Save new file hash so it is never double processed
                records[rel_f] = get_file_hash(f)
                print(f"  [CLEANED] {rel_f}: {msg}")

    save_records(records)

    print(f"\n==========================================")
    print(f"Watermark Removal Complete!")
    print(f"Total checked: {total_checked}")
    print(f"Total cleaned: {total_cleaned}")
    print(f"==========================================")

if __name__ == '__main__':
    main()
