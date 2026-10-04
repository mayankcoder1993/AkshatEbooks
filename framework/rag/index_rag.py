#!/usr/bin/env python3
"""
Sarva Gyana Koshah - Hierarchical FAISS RAG Indexer
Generates dense vector embeddings and FAISS L2/Cosine indices for:
1. Universal Root RAG (framework/rag/)
2. Book-Level RAG (src/books/.../[book-id]/rag/)
"""

import os
import sys
import json
import glob
import re
import numpy as np
import faiss

EMBEDDING_DIM = 128

def extract_tokens(text):
    """Tokenize and extract unigrams and bigrams."""
    text = text.lower()
    words = re.findall(r'[a-z0-9_]+', text)
    tokens = list(words)
    for i in range(len(words) - 1):
        tokens.append(f"{words[i]}_{words[i+1]}")
    return tokens

def embed_text(text, dim=EMBEDDING_DIM):
    """
    Generate deterministic dense vector embedding using feature hashing
    and L2 normalization. Completely offline, zero external download dependency.
    """
    tokens = extract_tokens(text)
    vec = np.zeros(dim, dtype=np.float32)
    if not tokens:
        return vec
    for tok in tokens:
        h = hash(tok)
        idx = abs(h) % dim
        sign = 1.0 if (h >= 0) else -1.0
        vec[idx] += sign
    norm = np.linalg.norm(vec)
    if norm > 1e-6:
        vec /= norm
    return vec

def chunk_json_document(file_path):
    """Parse JSON and yield searchable chunks with rich provenance metadata."""
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    doc_id = data.get("id", os.path.basename(file_path))
    doc_title = data.get("title", "")
    rag_level = data.get("rag_level", "universal")
    status = data.get("status", "canon")
    
    chunks = []
    
    # 1. Full document overview chunk
    full_text = f"{doc_title}. {data.get('description', '')}. Scope: {data.get('target_scope', '')} Status: {status}"
    chunks.append({
        "doc_id": doc_id,
        "chunk_id": f"{doc_id}_summary",
        "title": doc_title,
        "rag_level": rag_level,
        "source_file": file_path,
        "status": status,
        "category": "summary",
        "text": full_text
    })
    
    # 2. Section chunks
    for key, value in data.items():
        if key in ["rag_level", "id", "title", "version", "status", "supersedes", "superseded_by", "target_scope"]:
            continue
        section_text = f"{doc_title} -> {key}: {json.dumps(value, ensure_ascii=False)}"
        chunks.append({
            "doc_id": doc_id,
            "chunk_id": f"{doc_id}_{key}",
            "title": f"{doc_title} [{key}]",
            "rag_level": rag_level,
            "source_file": file_path,
            "status": status,
            "category": key,
            "text": section_text
        })
        
    return chunks

def build_faiss_index(chunks, index_path, meta_path):
    """Build and serialize FAISS IndexFlatIP (cosine similarity) and metadata."""
    if not chunks:
        print(f"No chunks found for {index_path}")
        return None
    
    vectors = np.array([embed_text(c["text"]) for c in chunks], dtype=np.float32)
    # L2 normalize each row for inner product = cosine similarity
    faiss.normalize_L2(vectors)
    
    index = faiss.IndexFlatIP(EMBEDDING_DIM)
    index.add(vectors)
    
    faiss.write_index(index, index_path)
    with open(meta_path, "w", encoding="utf-8") as f:
        json.dump(chunks, f, indent=2)
        
    print(f"Indexed {len(chunks)} chunks into {index_path} (dim={EMBEDDING_DIM})")
    return index

def index_universal():
    print("\n--- Indexing Universal Canon RAG (Tier 1) ---")
    univ_dir = os.path.abspath("framework/rag")
    files = glob.glob(os.path.join(univ_dir, "*.json"))
    files = [f for f in files if not f.endswith("_meta.json")]
    
    all_chunks = []
    for f in sorted(files):
        print(f"Parsing universal canon: {os.path.basename(f)}")
        all_chunks.extend(chunk_json_document(f))
        
    index_path = os.path.join(univ_dir, "universal.index")
    meta_path = os.path.join(univ_dir, "universal_meta.json")
    build_faiss_index(all_chunks, index_path, meta_path)

def index_book(book_dir):
    print(f"\n--- Indexing Book Canon RAG (Tier 2): {os.path.basename(book_dir)} ---")
    rag_dir = os.path.join(book_dir, "rag")
    if not os.path.exists(rag_dir):
        os.makedirs(rag_dir, exist_ok=True)
        
    files = glob.glob(os.path.join(rag_dir, "*.json"))
    files = [f for f in files if not f.endswith("_meta.json")]
    
    all_chunks = []
    for f in sorted(files):
        print(f"Parsing book canon: {os.path.basename(f)}")
        all_chunks.extend(chunk_json_document(f))
        
    index_path = os.path.join(rag_dir, "book.index")
    meta_path = os.path.join(rag_dir, "book_meta.json")
    build_faiss_index(all_chunks, index_path, meta_path)

if __name__ == "__main__":
    index_universal()
    target_book = "src/books/technical/programming/testing/zero-to-agentic-api-testing"
    if os.path.exists(target_book):
        index_book(target_book)
