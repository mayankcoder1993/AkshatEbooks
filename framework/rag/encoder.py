import hashlib
import re
import numpy as np

DIMENSION = 256

def encode_text(text: str, dim: int = DIMENSION) -> np.ndarray:
    """
    Encodes text into a dense semantic feature vector using multi-gram hashing
    and L2 normalization, optimized for FAISS cosine similarity.
    """
    words = re.findall(r'\w+', text.lower())
    vec = np.zeros(dim, dtype=np.float32)
    for word in words:
        # Word level hashing
        w_h = int(hashlib.md5(word.encode('utf-8')).hexdigest(), 16) % dim
        vec[w_h] += 1.0
        # Subword character n-grams (3-grams and 4-grams)
        for n in (3, 4):
            for i in range(len(word) - n + 1):
                sub = word[i:i+n]
                sub_h = int(hashlib.sha256(sub.encode('utf-8')).hexdigest(), 16) % dim
                vec[sub_h] += 0.5

    norm = np.linalg.norm(vec)
    if norm > 0:
        vec /= norm
    return vec.astype(np.float32)
