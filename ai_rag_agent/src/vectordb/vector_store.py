import os

import yaml
from dotenv import load_dotenv
from langchain_chroma import Chroma

from src.chunking.chunking import chunk_documents
from src.embedding.embedding import get_embeddings
from src.ingestion.loader import load_config

load_dotenv()


def get_vector_store(
    collection_name: str | None = None,
    persist_directory: str | None = None,
) -> Chroma:
    if collection_name is None or persist_directory is None:
        config = load_config()
        collection_name = collection_name or config["vectordb"]["collection_name"]
        persist_directory = persist_directory or config["vectordb"]["persist_directory"]

    embeddings = get_embeddings()

    return Chroma(
        collection_name=collection_name,
        embedding_function=embeddings,
        persist_directory=persist_directory,
    )


def store_in_vectordb(chunks: list | None = None) -> Chroma:
    if chunks is None:
        chunks = chunk_documents()

    vector_store = get_vector_store()
    vector_store.add_documents(chunks)
    return vector_store


if __name__ == "__main__":
    vector_store = store_in_vectordb()
    count = vector_store._collection.count()
    print(f"Stored documents in ChromaDB. Total records: {count}")
