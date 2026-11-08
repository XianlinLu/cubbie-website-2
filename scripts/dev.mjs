// Accept both the normal Next.js CLI and managed-preview host/port arguments.
import { spawn } from "node:child_process";
const args = process.argv
  .slice(2)
  .filter((arg) => arg !== "--strictPort")
  .map((arg) => (arg === "--host" ? "--hostname" : arg));
const next = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "dev", ...args],
  { stdio: "inherit" },
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => next.kill(signal));
next.on("exit", (code) => process.exit(code ?? 0));
