// ai-excited-01: "Kraken Tower" — a colossal kraken smashing through a glass
// skyscraper at dusk, tentacles bursting out of shattered windows while a
// tiny helicopter circles below. One impossible collision, frozen mid-burst:
// the image is built to hit the judge with a jolt on the first look.
//
// The program is deliberately trivial and deterministic: it copies the
// entry image that ships beside this file into the grader's output
// directory, byte for byte, every run. No randomness, no timestamps,
// no network, no dependencies beyond the Node standard library.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Grader run: the sandbox sets /output itself; MAKEFUN_OUTPUT_DIR is unset.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const IMAGE_NAME = "entry.png";

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(
  new URL(`./${IMAGE_NAME}`, import.meta.url),
  join(OUTPUT_DIR, IMAGE_NAME),
);
