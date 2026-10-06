#!/usr/bin/env python3
import sys
import argparse
import os

# Add parent of framework to python path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

from framework.rag.store import KnowledgeStore

def main():
    parser = argparse.ArgumentParser(description="Query the Framework FAISS Vector Knowledge Store")
    parser.add_argument("query", help="Text query or keyword to search for")
    parser.add_argument("--keyword", "-k", help="Exact keyword match", action="store_true")
    parser.add_argument("--top", "-t", type=int, default=3, help="Number of results to return")
    args = parser.parse_args()

    store = KnowledgeStore()

    print("\n" + "=" * 60)
    print("  FRAMEWORK FAISS RAG KNOWLEDGE QUERY")
    print("=" * 60)
    print(f"Query: '{args.query}' | Indexed Documents: {len(store.documents)}\n")

    if args.keyword:
        results = store.search_by_keyword(args.query)
        if not results:
            print("No exact keyword matches found. Falling back to semantic search...\n")
            results = store.search_semantic(args.query, top_k=args.top)
    else:
        # Check keyword first
        kw_matches = store.search_by_keyword(args.query)
        if kw_matches:
            results = kw_matches
        else:
            results = store.search_semantic(args.query, top_k=args.top)

    if not results:
        print("No matching knowledge base documents found.")
        return

    for i, (score, doc) in enumerate(results, start=1):
        print(f"[{i}] Match Score: {score:.4f}")
        print(f"    Category: {doc.get('category', 'general')}")
        print(f"    Keyword:  {doc.get('keyword', 'None')}")
        print(f"    Title:    {doc.get('title', 'Untitled')}")
        if 'url' in doc:
            print(f"    Link/URL: {doc.get('url')}")
        print(f"    Tags:     {', '.join(doc.get('tags', []))}")
        print(f"    Content Preview:\n{doc.get('content', '')[:300]}...\n")
        print("-" * 60)

if __name__ == '__main__':
    main()
