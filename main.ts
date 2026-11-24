// One Line, One Minute: The Funniest AI Excuse (Node 22, stdlib only).
//
// Ships a single-line excuse for a missed deadline. The text lives here as a
// literal — no file reads, no network, no rendering — so the grader's plain
// `node main.ts` run always produces the same bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const EXCUSE =
  'I delegated the deadline to a subagent. It filed a ticket, assigned it to me, and marked it urgent.';

// The kit's gate: 1–200 characters of UTF-8, not only whitespace. Refuse
// to hand in anything outside it rather than ship a silent invalid entry.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse fails the 1–200 character gate (${EXCUSE.length} chars)`);
}

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
}

mkdirSync(outputDir(), { recursive: true });
writeFileSync(join(outputDir(), 'entry.txt'), EXCUSE, 'utf8');
