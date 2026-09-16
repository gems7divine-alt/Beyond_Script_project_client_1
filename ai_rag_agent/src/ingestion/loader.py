import os
from pathlib import Path

import yaml
from langchain_community.document_loaders import PyPDFLoader


def load_config(config_path: str = "config.yaml") -> dict:
    with open(config_path, "r") as f:
        return yaml.safe_load(f)


def load_pdfs(data_path: str | None = None) -> list:
    if data_path is None:
        config = load_config()
        data_path = config["ingestion"]["data_path"]

    pdf_dir = Path(data_path)
    if not pdf_dir.exists():
        raise FileNotFoundError(f"Data directory not found: {pdf_dir}")

    pdf_files = list(pdf_dir.glob("*.pdf"))
    if not pdf_files:
        raise ValueError(f"No PDF files found in: {pdf_dir}")

    documents = []
    for pdf_file in pdf_files:
        loader = PyPDFLoader(str(pdf_file))
        docs = loader.load()
        for doc in docs:
            doc.metadata["source_file"] = pdf_file.name 
            documents.extend(docs)

    return documents


if __name__ == "__main__":
    docs = load_pdfs()
    print(f"Loaded {len(docs)} document pages")
    for doc in docs[:3]:
        print(f"- {doc.metadata['source_file']} (page {doc.metadata.get('page', '?')})")
