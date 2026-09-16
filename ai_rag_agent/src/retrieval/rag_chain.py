from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough

from src.llm.llm_config import get_llm
from src.prompts.system_prompt import SYSTEM_PROMPT
from src.retrieval.retriever import get_retriever


def format_docs(docs: list) -> str:
    return "\n\n".join(doc.page_content for doc in docs)


def build_rag_chain():
    retriever = get_retriever()
    llm = get_llm()

    prompt = ChatPromptTemplate.from_template(SYSTEM_PROMPT)

    chain = (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )
    return chain


def ask(query: str) -> str:
    chain = build_rag_chain()
    return chain.invoke(query)


if __name__ == "__main__":
    answer = ask("What services does Beyond Script offer?")
    print(answer)
