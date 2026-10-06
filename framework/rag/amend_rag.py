#!/usr/bin/env python3
import sys
import argparse
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

from framework.rag.store import KnowledgeStore

def main():
    parser = argparse.ArgumentParser(description="Amend or Add an Entry to the Framework FAISS Knowledge Base")
    parser.add_argument("--keyword", "-k", required=True, help="Unique trigger keyword (e.g. SYSTEM-DOUBTS)")
    parser.add_argument("--title", "-t", required=True, help="Entry or Book Title")
    parser.add_argument("--category", "-c", default="future_book_concept", help="Category of entry")
    parser.add_argument("--url", "-u", default="", help="Relevant reference URL or inspiration link")
    parser.add_argument("--content", help="Detailed content or summary")
    parser.add_argument("--tags", default="", help="Comma separated tags")
    parser.add_argument("--aliases", default="", help="Comma separated keyword aliases")
    parser.add_argument("--confirm", action="store_true", help="Auto confirm amendment")

    args = parser.parse_args()
    store = KnowledgeStore()

    doc_data = {
        "id": f"kb-{args.keyword.lower().replace('_', '-')}",
        "keyword": args.keyword.upper(),
        "aliases": [a.strip().upper() for a in args.aliases.split(",") if a.strip()],
        "title": args.title,
        "category": args.category,
        "url": args.url,
        "tags": [t.strip() for t in args.tags.split(",") if t.strip()],
        "content": args.content or f"Knowledge base entry for {args.title}."
    }

    print("\n" + "=" * 60)
    print("  PROPOSED FAISS RAG KNOWLEDGE BASE AMENDMENT")
    print("=" * 60)
    print(f"Keyword:  {doc_data['keyword']}")
    print(f"Aliases:  {doc_data['aliases']}")
    print(f"Title:    {doc_data['title']}")
    print(f"Category: {doc_data['category']}")
    print(f"URL:      {doc_data['url']}")
    print(f"Tags:     {doc_data['tags']}")
    print(f"Content:  {doc_data['content']}")
    print("=" * 60)

    if not args.confirm:
        user_input = input("\nDo you agree and confirm adding this entry to FAISS? (y/N): ").strip().lower()
        if user_input not in ('y', 'yes'):
            print("Amendment aborted by user.")
            sys.exit(0)

    store.add_document(doc_data)
    print(f"\n[SUCCESS] Entry '{doc_data['keyword']}' successfully indexed in FAISS vector store!")

if __name__ == '__main__':
    main()
