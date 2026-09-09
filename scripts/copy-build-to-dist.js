const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "build");
const destDir = path.join(__dirname, "..", "dist");

if (fs.existsSync(srcDir)) {
  fs.cpSync(srcDir, destDir, { recursive: true, force: true });
  console.log("Successfully mirrored build/ -> dist/");
}
