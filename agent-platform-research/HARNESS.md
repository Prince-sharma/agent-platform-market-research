# Research harness

The durable protocol for running this campaign across sessions. It has three
jobs: let any session resume cold, keep every unit of work verified on disk,
and let the harness itself improve between phases without drifting.

Read order for a new session: `STATE.md` (where things stand), this file (how
to work), then `tasks/phase-N.md` for the current phase (what was dispatched).

## The pieces

- `STATE.md` - campaign state: phase snapshot, current focus, next actions,
  open decisions. Updated at every session close; checked by the verifier.
- `tasks/phase-N.md` - per-phase record: goal, assignments, completion
  checks, final status.
- `wiki/` - the knowledge base (companies, clusters, themes) and templates.
- `data/` - structured datasets. The TSV is the single source of truth for
  structured facts; derived stats land here as JSON.
- `scripts/verify.py` - the structural gate. Must exit 0 before any phase is
  called done.
- `scripts/build_app.py` - legacy builder for the old single-file HTML app
  (v6); kept for campaign history. The standing deliverable is the React app
  in `../app/`, deployed to GitHub Pages.
- `scripts/verify_app.js` - the runtime gate for the legacy built app (Phase 4).
- `sessions/log.md` - append-only session log: what each session did, what
  the gate caught, and the retro that feeds harness changes.

## Bootstrap: the first five minutes of any session

1. Read `STATE.md`.
2. Run `python3 agent-platform-research/scripts/verify.py`. Reconcile its
   output with the "Verifier right now" line in STATE.md; if they disagree,
   fix STATE.md before touching any research file.
3. `git status`: note uncommitted work; never revert or rewrite it.
4. Take the top action in STATE.md "Next actions". An empty list means the
   campaign is done or blocked on the user; say so, do not invent work.

## The unit of work

A research unit is one dispatchable brief with a named output file, named
inputs, and a check that settles whether it is done. A phase is a batch of
units plus a synthesis. Nothing is done because an agent reported it done;
only because the output file on disk passes its check.

## Phase protocol

0. **Pre-register the gate.** Extend `verify.py` with the phase's completion
   checks before any work is dispatched, and confirm they fail. The gate is
   written before the work so it cannot drift to flatter the result; red at
   the start is the measure of remaining work.
1. **Plan.** Write `tasks/phase-N.md`: goal, assignments, completion checks
   (mirroring the verifier), and the pause point for user review.
2. **Prepare data.** Any column the phase needs is extracted into the TSV
   first (scripted, never by eye), so `build_app.py` can pick it up. Derived
   stats land in `data/` as JSON.
3. **Dispatch.** One brief per unit to a subagent. Every brief names: the
   exact output file, the inputs, the template, the conventions (scripted
   counts, date-stamped figures, reported/estimated/inferred labels, public
   web only, no em dashes, unknown over guessed), and the verification to run
   before reporting back.
4. **Collect and verify.** Check every output on disk, never from the
   agent's summary: template sections present, counts re-derived,
   conventions held. `verify.py` is the mechanical part; spot-read the rest.
5. **Synthesize.** The phase report (`reports/agent-platform-phaseN-*.md`)
   synthesizes the units, cross-references the other phases, and states the
   open questions that carry forward.
6. **Rebuild the app.** Extend `build_app.py` with the phase's fields and
   views, rerun it, and spot-check the app in a browser. The app is the
   standing deliverable; it evolves every phase.
7. **Close.** `verify.py` exits 0; `tasks/phase-N.md` gets its status line;
   the README phase history gets its entry; STATE.md is refreshed; a session
   log entry with a retro is appended; a git checkpoint is committed.

## Conventions

- No em dashes anywhere in wiki or report prose (spaced hyphen instead).
- Every count quoted in a report is script-derived or sourced; state which.
  Private ARR is "as reported/claimed".
- Wiki pages are the unit of evidence; reports cite them by slug.
- The TSV is the single source of truth for structured facts; the wiki holds
  the researched detail; the app renders the TSV and links the wiki.
- Mark anything unverified as `unknown` rather than guessing.

## Improving this harness

The harness is itself under improvement, one change per phase:

- At every phase close, the session log entry ends with a retro: what the
  gate caught, what agents got wrong, what was expensive.
- Harness changes (this file, templates, brief wording, verifier checks) are
  proposed from the retro and applied between phases, one per phase, so
  attribution stays clean.
- The gate is never weakened mid-phase to make work pass; if a check is
  wrong, fixing it is itself a logged harness change.
- Anything learned twice becomes a convention above.
