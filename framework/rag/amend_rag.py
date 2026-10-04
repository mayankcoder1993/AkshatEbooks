#!/usr/bin/env python3
"""
Sarva Gyana Koshah - Autonomous RAG Amendment Tool
Enforces conflict resolution, provenance tracking, user confirmation gates,
and automatic FAISS re-indexing.
"""

import os
import sys
import json
import argparse
from datetime import datetime

# Import indexers
from index_rag import index_universal, index_book

def load_json(path):
    if not os.path.exists(path):
        return None
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def check_conflicts(target_data, proposed_key, proposed_value):
    conflicts = []
    if proposed_key in target_data:
        existing = target_data[proposed_key]
        if existing != proposed_value:
            conflicts.append({
                "type": "key_overwrite",
                "key": proposed_key,
                "current": existing,
                "proposed": proposed_value
            })
    return conflicts

def main():
    parser = argparse.ArgumentParser(description="Amend Sarva Gyana Koshah Hierarchical RAG Canon")
    parser.add_argument("--tier", choices=["universal", "book"], required=True, help="RAG tier to amend")
    parser.add_argument("--file", type=str, required=True, help="Filename of JSON canon document (e.g. character_ledger.json)")
    parser.add_argument("--book-dir", type=str, default="src/books/technical/programming/testing/zero-to-agentic-api-testing", help="Path to book directory if tier is book")
    parser.add_argument("--key", type=str, required=True, help="Top-level key to amend or append")
    parser.add_argument("--value-json", type=str, required=True, help="JSON string of the value to insert")
    parser.add_argument("--rationale", type=str, required=True, help="Engineering rationale for this amendment")
    parser.add_argument("--author", type=str, default="agentic_publishing_engine", help="Author/Agent ID")
    parser.add_argument("--confirm", action="store_true", help="Explicit user confirmation flag required to write changes")
    args = parser.parse_args()

    # Determine file path
    if args.tier == "universal":
        target_dir = os.path.abspath("framework/rag")
    else:
        target_dir = os.path.join(args.book_dir, "rag")
        
    target_path = os.path.join(target_dir, args.file)
    if not os.path.exists(target_path):
        print(f"❌ Error: Target file {target_path} does not exist.")
        sys.exit(1)
        
    doc = load_json(target_path)
    
    try:
        new_val = json.loads(args.value_json)
    except Exception as e:
        print(f"❌ Error: Invalid JSON in --value-json: {e}")
        sys.exit(1)
        
    # Analyze conflicts
    conflicts = check_conflicts(doc, args.key, new_val)
    
    print("\n" + "="*60)
    print("  SARVA GYANA KOSHAH - AUTONOMOUS RAG AMENDMENT GATE")
    print("="*60)
    print(f"Target Document : {target_path}")
    print(f"Tier            : {args.tier.upper()}")
    print(f"Key to Amend    : {args.key}")
    print(f"Author / Agent  : {args.author}")
    print(f"Rationale       : {args.rationale}")
    print(f"Timestamp       : {datetime.utcnow().isoformat()}Z")
    print("-"*60)
    
    if conflicts:
        print("⚠️  POTENTIAL CONFLICTS DETECTED:")
        for c in conflicts:
            print(f"  • Existing value for '{c['key']}': {json.dumps(c['current'], indent=2)}")
            print(f"  • Proposed new value: {json.dumps(c['proposed'], indent=2)}")
    else:
        print("✅ No structural conflicts found. New or additive amendment.")
        
    print("\nPROPOSED CHANGE PAYLOAD:")
    print(json.dumps({args.key: new_val}, indent=2, ensure_ascii=False))
    print("-"*60)
    
    # USER CONFIRMATION GATE
    if not args.confirm:
        print("\n⛔ CONFIRMATION GATE HALTED: --confirm flag was not passed.")
        print("To protect canon integrity, all RAG amendments require explicit agreement.")
        print("Pass '--confirm' to ratify this change and trigger FAISS vector re-indexing.")
        sys.exit(2)
        
    # Write amendment
    doc[args.key] = new_val
    if "_amendments_audit_log" not in doc:
        doc["_amendments_audit_log"] = []
        
    doc["_amendments_audit_log"].append({
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "author": args.author,
        "key": args.key,
        "rationale": args.rationale,
        "status": "ratified"
    })
    
    save_json(target_path, doc)
    print(f"✨ Canon file updated successfully: {target_path}")
    
    # Trigger automatic FAISS re-indexing
    print("\n🔄 Re-indexing FAISS vector embeddings...")
    if args.tier == "universal":
        index_universal()
    else:
        index_book(args.book_dir)
        
    print("\n✅ Amendment ratified, saved, and FAISS vector index recomputed!\n")

if __name__ == "__main__":
    main()
