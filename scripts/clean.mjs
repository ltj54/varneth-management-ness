import { rm } from "node:fs/promises";

const generatedDirectories = [".next", ".vinext", "dist"];

await Promise.all(
  generatedDirectories.map((directory) =>
    rm(new URL(`../${directory}`, import.meta.url), {
      recursive: true,
      force: true,
    }),
  ),
);

console.log("Fjernet genererte byggfiler.");
