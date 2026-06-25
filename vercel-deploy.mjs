import { execSync } from "node:child_process";

const projectDir = process.cwd();

function run(cmd) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: projectDir, shell: true });
}

const args = process.argv.slice(2);

// Usage:
// node vercel-deploy.mjs login
// node vercel-deploy.mjs link
// node vercel-deploy.mjs deploy
// node vercel-deploy.mjs deploy --prod

const action = args[0] || "deploy";

if (action === "login") {
  run("vercel login");
} else if (action === "link") {
  // Prompts for org/project; you can also provide answers via env vars
  run("vercel link");
} else if (action === "deploy") {
  // Forward any extra flags
  const extra = args.slice(1).join(" ");
  run(`vercel deploy ${extra}`.trim());
} else {
  console.error(`Unknown action: ${action}`);
  console.error("Use: node vercel-deploy.mjs [login|link|deploy] [--prod]");
  process.exit(1);
}

