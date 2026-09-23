PrereqLock — Submission Note

One-line summary

AI-validator consensus decides whether a condition is truly necessary, then a two-wallet state machine prevents the nominated actor from performing the guarded action until the creator records that condition.

Contract

Name: PrereqLock
Network: GenLayer StudioNet (61999)
Version: 1.1
Source: contract/PrereqLock.py
SHA-256: 1e47fd114f12c4d22d515ef4af4435082269d5e1524110371e3eec111320ab55
Address: 0xa81d04e3D7CC2f6e696666453b1ddD679b88c430
Deploy TX: 0xb02fd55c9394cdd94dcb6af66364b2a66e94a067db9d66fe43c38299ad0e94e1

Links

GitHub: https://github.com/kinhdoanhcam-art/PrereqLock
Live dApp: https://prereq-lock-eosin.vercel.app
Explorer: https://explorer-studio.genlayer.com/address/0xa81d04e3D7CC2f6e696666453b1ddD679b88c430

Verification state

Offline source checks, Unicode parity, npm ci, typecheck, production build and the current StudioNet v1.1 deployment are PASS. K1-K5 semantic classification, negative split-role authorization, replay protection and the two-attempt bound passed on a previous deployment of the same source hash. Full hashes and scope labels are recorded in TESTING.md.

The production Vercel dApp completed a fresh two-wallet happy-path flow against the current contract on 2026-09-23 UTC:

Gate ID: b8264008b1cfcf5f4e550532dd583307f8e0afecbb0e8d8d922d26263ecf9cde
Rule ID: bb36edf83e3c165bdb8e6a8dec2ed85ea390899dcd77b95be6759b4b32521b11
Verdict: CONDITION_NECESSARY
State: LOCKED -> ARMED -> READY -> DONE
Creator: 0x3065E31B1D993d7C0D59E6786844cBa56780B2d3
Actor: 0x5a52d040581A76e2C032542855D31480f2ea7097
Create gate TX: 0x1ec9203484cfbcf7e03c798e0c7d7e54351971a23c244c79002c029f6c257769
Submit rule TX: 0x4a2f9f96e696086d4b361ee1e5b69aa51c767158510e35deb325d7db83212b4a
Record condition TX: 0x5b9d314989879155815ec322a4d30b36d73813cfb372b9570a3e6ece678f325b
Perform action TX: 0x85fd73e7dcc5d5cc9346d427c4d9e6dfa9122f072cfc3bf63a2264d39aab452f

All four application transactions were FINALIZED, GenVM SUCCESS and consensus Accepted. The final accepted state reports edge_installed=true, condition_met=true, action_done=true, attempt_count=1 and state DONE.
