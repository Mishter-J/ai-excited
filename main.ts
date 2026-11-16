import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");
const destPath = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, destPath);

const sourceBytes = readFileSync(sourcePath);
const destBytes = readFileSync(destPath);

if (!sourceBytes.equals(destBytes)) {
  console.error(
    `error: output mismatch: source entry.png is ${sourceBytes.length} bytes, ` +
      `output entry.png is ${destBytes.length} bytes`,
  );
  process.exit(1);
}

console.log(`copied entry.png (${sourceBytes.length} bytes) to ${destPath}`);
