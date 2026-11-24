import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TITLE = "Senior Penguin Relocation Coordinator for Divorcing Couples";

// The competition caps a title at 60 characters; fail loudly rather than
// ever emitting an over-long entry.
if (TITLE.length > 60) {
  throw new Error(`Entry title is ${TITLE.length} characters, over the 60-character limit.`);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputPath = process.env.ENTRY_OUTPUT_PATH ?? join(scriptDir, "entry.txt");

writeFileSync(outputPath, TITLE, "utf8");
