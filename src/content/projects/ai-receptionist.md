---
# Design page from December; status becomes "public" when the repo opens (target end Feb 2027).
title: AI Receptionist
summary: A self-hosted support assistant that answers only from a business's own documents, refuses rather than guesses, and hands the chat to a person.
pillar: AI in production
order: 2
status: coming
# repo: your-username/repo-name
stack: [Python, FastAPI, Postgres full-text, Chroma, Celery, Ollama]
numbers: []
# The re-ranker figures go here only with their method stated, for example:
#   - value: "420–700 MB, up to 2.4 s"
#     label: Cross-encoder re-ranker memory and latency per question
#     method: <model, hardware, cold or warm, date>
decisions:
  - chose: Rank fusion (RRF) of keyword and vector results.
    rejected: A neural cross-encoder re-ranker.
    why: The re-ranker broke the 4 GB server's memory and latency budget.
  - chose: Refuse and hand over to a person when evidence is weak.
    rejected: Always answering with a disclaimer.
    why: A disclaimer still invents prices, dates and policies.
limits:
  - Retrieval, confidence and refusal were first verified with fake embeddings and a fake model; the evaluation set results replace this line once measured.
draft: true
---

## The problem

Small service businesses want an assistant on their website, but a chatbot that invents a
price or a policy costs them more than having none.

## What it does

It answers customer questions from the owner's own documents, cites the passage behind every
claim, says "I don't have that information" when the evidence is weak, and hands the
conversation to a person in a team inbox. Every conversation shows what it cost.

<!-- After the evaluation runs, add a short self-review here under the heading:
## What I'd change next
-->

