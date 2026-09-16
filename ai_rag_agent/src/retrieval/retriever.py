from langchain_chroma import Chroma

from src.embedding.embedding import get_embeddings
from src.ingestion.loader import load_config
from src.vectordb.vector_store import get_vector_store


def get_retriever(
    top_k: int | None = None,
    search_type: str | None = None,
):
    if top_k is None or search_type is None:
        config = load_config()
        top_k = top_k or config["retrieval"]["top_k"]
        search_type = search_type or config["retrieval"]["search_type"]

    vector_store = get_vector_store()

    return vector_store.as_retriever(
        search_type=search_type,
        search_kwargs={"k": top_k},
    )


def retrieve_documents(query: str, top_k: int | None = None) -> list:
    retriever = get_retriever(top_k=top_k)
    docs = retriever.invoke(query)
    return docs


if __name__ == "__main__":
    results = retrieve_documents("What is graphotherapy?")
    for i, doc in enumerate(results):
        print(f"\n--- Result {i + 1} ---")
        print(doc.page_content[:300])
        print(f"Metadata: {doc.metadata}")
