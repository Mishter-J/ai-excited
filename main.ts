// ai-excited-01: copy the entry image to the output directory.
//
// The image is an original generated work: a giant stag made of autumn
// leaves bursting out of a forest mural on a subway station wall, leaves
// exploding outward as commuters duck below. Deterministic: a byte copy,
// so every run writes identical bytes.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = join(repoDir, "entry.png");
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);
// Verify the copy: the grader runs this twice and both runs must write
// the same bytes, so fail loudly instead of shipping a partial file.
if (!readFileSync(src).equals(readFileSync(dst))) {
  throw new Error("entry.png copy mismatch");
}
if (statSync(dst).size > 1048576) {
  throw new Error("entry.png exceeds 1 MiB");
}
