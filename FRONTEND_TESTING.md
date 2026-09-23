PrereqLock v1.1 — Frontend Testing

This document separates the test procedure from the execution ledger. Expected behavior is not evidence that the behavior was observed.

Automated local checks

npm ci: PASS (2026-09-23 UTC)
npm run typecheck: PASS
npm run build: PASS

The production build completed with a non-blocking bundle-size warning. On 2026-09-23 UTC, the Vercel UI, both wallet roles, the same-origin RPC path and the complete positive state flow were exercised against the current contract address.

Manual procedure

1. Wallet roles and gate creation

Connect the creator wallet on StudioNet.

Enter a different valid actor wallet and create a gate.

Record the full transaction hash; after accepted-state refresh, verify the displayed creator and actor match the inputs and state is LOCKED.

Expected UI properties:

creator wallet is labelled Creator controls;

actor wallet is labelled Actor controls action after switching accounts;

every other wallet sees Read only;

the transaction banner links to the exact explorer transaction.

2. Consensus and accepted state

As creator, submit one kill-suite rule.

Confirm the button remains locked while the expected accepted transition is pending.

Verify the accepted state and immutable attempt log after consensus.

Expected behavior:

no automatic resubmission;

local rule ID uses collapsed Python whitespace;

accepted-state matching is primary;

after timeout only, a finalized leader rollback is shown as an error;

a slow transaction remains pending rather than being labelled successful.

3. Split-role execution

As creator, record the condition after a necessary verdict.

Switch to the actor wallet and reload the gate.

Perform the guarded action and verify accepted state DONE.

The creator action button must remain disabled; the actor record-condition button must remain disabled.

4. Resilience and layout

Verify:

disconnected state;

account and chain changes clear wallet-scoped state;

observer/read-only mode;

long labels and rule text;

mobile viewport;

stale pending transaction handling;

manual accepted-state refresh;

Rule log after one and two attempts.

Execution ledger

Environment

URL/build

Wallet flow

State flow

Rollback display

Responsive UI

Status

Local production build

dist/

NOT RUN

NOT RUN

NOT RUN

NOT RUN

NOT RUN

Vercel production

https://prereq-lock-eosin.vercel.app

PASS

PASS happy path

NOT RUN

PASS desktop

PASS happy path

Do not change a row to PASS without recording date, URL, wallet roles and transaction hashes in TESTING.md.

Vercel production evidence

Execution date: 2026-09-23 UTC.

Contract: 0xa81d04e3D7CC2f6e696666453b1ddD679b88c430
Creator: 0x3065E31B1D993d7C0D59E6786844cBa56780B2d3
Actor: 0x5a52d040581A76e2C032542855D31480f2ea7097
Gate ID: b8264008b1cfcf5f4e550532dd583307f8e0afecbb0e8d8d922d26263ecf9cde
Rule ID: bb36edf83e3c165bdb8e6a8dec2ed85ea390899dcd77b95be6759b4b32521b11

UI step

Transaction

Observed accepted state

Create gate

0x1ec9203484cfbcf7e03c798e0c7d7e54351971a23c244c79002c029f6c257769

LOCKED; creator and actor displayed correctly

Submit rule

0x4a2f9f96e696086d4b361ee1e5b69aa51c767158510e35deb325d7db83212b4a

ARMED; prerequisite edge installed; rule log shows CONDITION_NECESSARY

Record condition

0x5b9d314989879155815ec322a4d30b36d73813cfb372b9570a3e6ece678f325b

READY; condition recorded by creator

Perform action

0x85fd73e7dcc5d5cc9346d427c4d9e6dfa9122f072cfc3bf63a2264d39aab452f

DONE; action completed by actor

The executed happy path confirms the corrected UI role mapping: the creator controls Record condition, while the actor controls Perform action. Rollback display, mobile layout and the remaining resilience cases are deliberately left unmarked because they were not freshly executed on the canonical deployment.- Rule log after one and two attempts.

## Execution ledger

| Environment | URL/build | Wallet flow | State flow | Rollback display | Responsive UI | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Local production build | `dist/` | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN |
| Vercel production | `https://prereq-lock-eosin.vercel.app` | PARTIAL | NOT RUN on current address | PARTIAL | PASS desktop | NOT RUN |

Do not change a row to `PASS` without recording date, URL, wallet roles and transaction hashes in `TESTING.md`.
