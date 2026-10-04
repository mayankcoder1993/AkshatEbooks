#!/usr/bin/env python3
"""
Sarva Gyana Koshah - Hierarchical FAISS RAG Search Engine
Queries Tier 1 Universal RAG and Tier 2 Book-Level RAG with priority resolution.
"""

import os
import sys
import json
import argparse
import numpy as np
import faiss

# Import embedding function from indexer
from index_rag import embed_text, EMBEDDING_DIM

def search_index(index_path, meta_path, query_vec, top_k=5):
    if not os.path.exists(index_path) or not os.path.exists(meta_path):
        return []
    
    index = faiss.read_index(index_path)
    with open(meta_path, "r", encoding="utf-8") as f:
        metadata = json.load(f)
        
    query_matrix = np.array([query_vec], dtype=np.float32)
    faiss.normalize_L2(query_matrix)
    
    scores, indices = index.search(query_matrix, min(top_k, len(metadata)))
    
    results = []
    for score, idx in zip(scores[0], indices[0]):
        if idx >= 0 and idx < len(metadata):
            item = dict(metadata[idx])
            item["score"] = float(score)
            results.append(item)
    return results

def main():
    parser = argparse.ArgumentParser(description="Query Sarva Gyana Koshah Hierarchical FAISS RAG")
    parser.add_argument("query", type=str, help="Search query string")
    parser.add_argument("--scope", choices=["all", "universal", "book"], default="all", help="Search scope")
    parser.add_argument("--book-dir", type=str, default="src/books/technical/programming/testing/zero-to-agentic-api-testing", help="Path to book directory")
    parser.add_argument("--top-k", type=int, default=4, help="Number of results to retrieve per scope")
    args = parser.parse_args()

    query_vec = embed_text(args.query)
    
    univ_results = []
    book_results = []
    
    univ_dir = os.path.abspath("framework/rag")
    if args.scope in ["all", "universal"]:
        univ_index = os.path.join(univ_dir, "universal.index")
        univ_meta = os.path.join(univ_dir, "universal_meta.json")
        univ_results = search_index(univ_index, univ_meta, query_vec, top_k=args.top_k)
        
    if args.scope in ["all", "book"]:
        book_rag_dir = os.path.join(args.book_dir, "rag")
        book_index = os.path.join(book_rag_dir, "book.index")
        book_meta = os.path.join(book_rag_dir, "book_meta.json")
        book_results = search_index(book_index, book_meta, query_vec, top_k=args.top_k)
        
    print(f"\n========================================================")
    print(f"  SARVA GYANA KOSHAH - HIERARCHICAL RAG SEARCH")
    print(f"  Query: '{args.query}' | Scope: {args.scope}")
    print(f"========================================================\n")
    
    if univ_results:
        print("🏛️  TIER 1: UNIVERSAL INVARIANTS (Absolute Canon)")
        print("--------------------------------------------------------")
        for res in univ_results:
            print(f"• [{res['doc_id']}] (Score: {res['score']:.3f}) - {res['title']}")
            print(f"  Category: {res['category']} | Status: {res['status']}")
            preview = res['text'][:220].replace('\n', ' ')
            print(f"  Snippet: {preview}...\n")
            
    if book_results:
        print("📖  TIER 2: BOOK-LEVEL CONTINUITY & TECHNICAL STATE")
        print("--------------------------------------------------------")
        for res in book_results:
            print(f"• [{res['doc_id']}] (Score: {res['score']:.3f}) - {res['title']}")
            print(f"  Category: {res['category']} | Status: {res['status']}")
            preview = res['text'][:220].replace('\n', ' ')
            print(f"  Snippet: {preview}...\n")

if __name__ == "__main__":
    main()
