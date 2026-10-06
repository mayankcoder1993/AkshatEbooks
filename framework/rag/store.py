import json
import os
import faiss
import numpy as np
from framework.rag.encoder import encode_text, DIMENSION

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
DEFAULT_DB_PATH = os.path.join(ROOT_DIR, 'knowledge_base.json')
DEFAULT_INDEX_PATH = os.path.join(ROOT_DIR, 'knowledge.index')

class KnowledgeStore:
    def __init__(self, db_path=DEFAULT_DB_PATH, index_path=DEFAULT_INDEX_PATH):
        self.db_path = db_path
        self.index_path = index_path
        self.documents = []
        self.index = None
        self.load()

    def load(self):
        if os.path.exists(self.db_path):
            with open(self.db_path, 'r', encoding='utf-8') as f:
                self.documents = json.load(f)
        else:
            self.documents = []

        if os.path.exists(self.index_path) and len(self.documents) > 0:
            self.index = faiss.read_index(self.index_path)
        else:
            self.rebuild_index()

    def save(self):
        with open(self.db_path, 'w', encoding='utf-8') as f:
            json.dump(self.documents, f, indent=2)
        if self.index is not None:
            faiss.write_index(self.index, self.index_path)

    def rebuild_index(self):
        self.index = faiss.IndexFlatIP(DIMENSION)
        if not self.documents:
            return
        vectors = []
        for doc in self.documents:
            text_repr = f"{doc.get('keyword', '')} {doc.get('title', '')} {doc.get('content', '')} {' '.join(doc.get('tags', []))}"
            vectors.append(encode_text(text_repr))
        v_mat = np.array(vectors, dtype=np.float32)
        self.index.add(v_mat)
        self.save()

    def add_document(self, doc_data: dict):
        self.documents.append(doc_data)
        self.rebuild_index()

    def search_by_keyword(self, keyword: str):
        kw_lower = keyword.strip().lower()
        matches = []
        for doc in self.documents:
            if doc.get('keyword', '').lower() == kw_lower:
                matches.append((1.0, doc))
            elif kw_lower in [k.lower() for k in doc.get('aliases', [])]:
                matches.append((0.99, doc))
        return matches

    def search_semantic(self, query: str, top_k: int = 5):
        if not self.documents or self.index is None or self.index.ntotal == 0:
            return []
        q_vec = encode_text(query).reshape(1, -1)
        distances, indices = self.index.search(q_vec, min(top_k, self.index.ntotal))
        results = []
        for score, idx in zip(distances[0], indices[0]):
            if idx >= 0 and idx < len(self.documents):
                results.append((float(score), self.documents[idx]))
        return results
