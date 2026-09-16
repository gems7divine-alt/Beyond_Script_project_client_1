import yaml
from langchain_text_splitters import RecursiveCharacterTextSplitter

from src.ingestion.loader import load_config, load_pdfs


def chunk_documents(
    documents: list | None = None,
    chunk_size: int | None = None,
    chunk_overlap: int | None = None,
) -> list:
    if chunk_size is None or chunk_overlap is None:
        config = load_config()
        chunk_size = chunk_size or config["chunking"]["chunk_size"]
        chunk_overlap = chunk_overlap or config["chunking"]["chunk_overlap"]

    if documents is None:
        documents = load_pdfs()

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
    )
    chunks = splitter.split_documents(documents)
    return chunks


if __name__ == "__main__":
    chunks = chunk_documents()
    print(f"Total chunks: {len(chunks)}")
    for i, chunk in enumerate(chunks[:5]):
        print(f"\n--- Chunk {i + 1} ---")
        print(chunk.page_content[:200])
        print(f"Metadata: {chunk.metadata}")
