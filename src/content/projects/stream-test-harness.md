---
# Draft until the repo is public (target 31 Dec 2026). Set draft: false to publish.
title: Stream test harness
summary: Feeds a stream pipeline faulty events, kills its workers mid-run, and checks that nothing was lost or doubled.
pillar: Scale and reliability
order: 1
status: coming
# repo: your-username/repo-name   # uncomment when the repo exists
stack: [Python, Redis Streams, TimescaleDB, Docker, Hypothesis]
numbers: []
# Fill from the claim ledger after the first measured runs, for example:
#   - value: "N events/s"
#     label: Sustained rate of the reference pipeline
#     method: Highest load step with flat lag for 5 minutes, on <CPU, cores, RAM>
decisions:
  - chose: Check what the pipeline stored against an oracle computed from the same seeded events.
    rejected: Counting acknowledged messages.
    why: A count passes even when a pipeline writes a bar twice or drops a late event.
  - chose: Faults are data in a seeded scenario file.
    rejected: Unseeded random chaos.
    why: A failing run must replay exactly, or nobody can fix what it found.
limits:
  - Version 0.1 supports Redis Streams and HTTP input and a SQL checker only.
draft: true
---

## The problem

Every stream consumer claims "at-least-once delivery, made safe". Few prove it. The usual
tests send clean, ordered events to a healthy worker, which is the one case that never fails in
production.

## What it does

The harness generates seeded events with duplicates, reordering, late arrivals and bursts,
drives them into a pipeline, kills and restarts its workers at chosen moments, then compares
what the pipeline stored with the answer computed from the same events. The report gives
throughput, latency percentiles, and counts of lost, doubled, late and rejected events.

Its first target is a small reference pipeline: ticks through Redis Streams into TimescaleDB,
aggregated into 1-minute to 1-day bars.

<!-- After the first release, add a short self-review here under the heading:
## What I'd change next
-->

