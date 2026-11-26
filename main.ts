import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line museum placard for an ordinary office object, written as if it
// were an ancient artifact. Deterministic: the same line on every run.
const PLACARD =
  "Hole Punch, c. 1998. Steel, with one careful hole per prayer. Used to perforate petitions so the gods could read them. Gift of a temp who never returned.";

// The grader mounts its output directory at /output. OUTPUT_DIR exists only
// so the program can be run locally against a scratch directory.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLACARD + "\n", "utf8");
