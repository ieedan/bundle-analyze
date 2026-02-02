import { program } from "commander";
import pkg from "../package.json";
import { analyzePackage } from "./utils/analyze";

const cli = program
  .name(pkg.name)
  .description(pkg.description)
  .argument("[cwd]", "The directory to analyze", process.cwd())
  .option(
    "--fail-if-exceeds-bytes <bytes>",
    "Exit with code 1 if bundle size exceeds the specified bytes",
    (val) => Number.parseInt(val, 10)
  )
  .option("--json", "Output results as JSON")
  .action(
    async (
      cwd: string,
      options: { failIfExceedsBytes?: number; json?: boolean }
    ) => {
      await analyzePackage(cwd, options);
    }
  );

export { cli };
