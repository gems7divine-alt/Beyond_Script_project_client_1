import os

import yaml
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI

from src.ingestion.loader import load_config

load_dotenv()


def get_llm(
    model: str | None = None,
    temperature: float = 0.3,
) -> ChatGoogleGenerativeAI:
    if model is None:
        config = load_config()
        model = config["llm"]["model"]

    return ChatGoogleGenerativeAI(
        model=model,
        temperature=temperature,
        google_api_key=os.getenv("GOOGLE_API_KEY"),
    )


if __name__ == "__main__":
    llm = get_llm()
    response = llm.invoke("What is Beyond Script?")
    print(response.content)
