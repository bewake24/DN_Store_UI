import { execSync } from "child_process";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter commit message: ", (message) => {
  try {
    console.log("\nRunning Prettier...");
    execSync("prettier --write .", { stdio: "inherit" });

    console.log("\nStaging files...");
    execSync("git add .", { stdio: "inherit" });

    console.log(`\nCommitting with message: "${message}"`);
    execSync(`git commit -m "${message}"`, { stdio: "inherit" });

    console.log("\nCommit complete!");
  } catch (err) {
    console.error("\nAn error occurred:", err.message);
  }
  rl.close();
});
