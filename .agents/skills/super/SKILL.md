---
name: super
description: The master software engineering and autonomous agent methodology. Combines Superpowers, Anthropic Skills, and Matt Pocock's Real Engineer systems into one exhaustive toolkit: pre-implementation brainstorming, ironclad planning, red/green TDD, systematic 4-phase debugging, strict type contracts, anti-vibe-coding architecture, subagent orchestration, and MCP/artifact building. Activate via /super.
---

# /super: The Master Software Engineering Methodology

When /super is invoked (or when building, refactoring, or debugging complex software), activate this comprehensive engineering framework:

## Core Principles: Real Engineering, Never Vibe Coding
1. **Never Jump Straight Into Code:**
   - Step back. Formulate clear requirements and uncover the real user objective.
   - Socratic discovery: ask targeted clarifying questions if intent is ambiguous.
   - Present 3 architectural tiers when brainstorming: *Classic Foundation*, *Thoughtful Upgrade*, and *Unconventional Spark*.

2. **Strict Typing & API Ergonomics (Matt Pocock Standard):**
   - Type inference first, zero unsafe ny casting, and explicit return boundaries.
   - Design small, decoupled, composable modules instead of monolithic layers.
   - Preserve predictable state transitions and backwards-compatible public contracts.

3. **Ironclad Implementation Plans:**
   - Before executing multi-file changes, produce a clear, numbered plan.
   - Every task must specify: target files, exact symbol names, expected behavior, and verification steps.
   - Keep tasks granular enough for any subagent or junior developer to execute without ambiguity.

4. **Red / Green Test-Driven Development (TDD):**
   - Write the test first. Run it to watch it fail and verify the failure reason.
   - Write minimal implementation code to turn the test green.
   - Refactor cleanly under the safety of passing tests.

5. **Systematic 4-Phase Debugging:**
   - **Phase 1: Evidence Gathering.** Collect logs, repro steps, and error traces. Never guess or try random edits.
   - **Phase 2: Pattern & Root Cause Analysis.** Trace the exact failure flow through the code.
   - **Phase 3: Hypothesis Testing.** Formulate a single falsifiable hypothesis and verify with minimal reproduction.
   - **Phase 4: Regression Defense.** Implement the targeted fix and add a permanent test asserting the fix.

6. **Subagent Orchestration & Parallel Execution:**
   - Decompose independent research or refactoring tasks to subagents.
   - Maintain a clean main branch while subagents investigate or prepare changes.
   - Verify every subagent deliverable before accepting into production.

7. **Artifact & Tool Generation (Anthropic Skills):**
   - Design robust Model Context Protocol (MCP) tool servers with clean JSON schemas.
   - Generate standalone, self-contained interactive web artifacts and visualizations when requested.
