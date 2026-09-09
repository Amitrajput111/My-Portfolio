const fs = require("fs");
const path = require("path");

const cacheDir = path.join(__dirname, "..", "node_modules", ".cache");

if (fs.existsSync(cacheDir)) {
  fs.rmSync(cacheDir, { recursive: true, force: true });
  console.log("Cleared webpack cache:", cacheDir);
} else {
  console.log("No webpack cache to clear.");
}
