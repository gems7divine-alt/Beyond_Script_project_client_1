import os

import yaml
from dotenv import load_dotenv
from langchain_google_genai import GoogleGenerativeAIEmbeddings

from src.chunking.chunking import chunk_documents
from src.ingestion.loader import load_config

load_dotenv()


def get_embeddings(model: str | None = None) -> GoogleGenerativeAIEmbeddings:
    if model is None:
        config = load_config()
        model = config["embedding"]["model"]

    return GoogleGenerativeAIEmbeddings(
        model=model,
        google_api_key=os.getenv("GOOGLE_API_KEY"),
    )


def embed_chunks(chunks: list | None = None) -> tuple[list, list]:
    if chunks is None:
        chunks = chunk_documents()

    embeddings = get_embeddings()
    texts = [chunk.page_content for chunk in chunks]
    vectors = embeddings.embed_documents(texts)
    return chunks, vectors


if __name__ == "__main__":
    chunks, vectors = embed_chunks()
    print(f"Embedded {len(chunks)} chunks")
    print(f"Embedding dimension: {len(vectors[0])}")
    print(f"Sample chunk metadata: {chunks[0].metadata}")
