const fs = require("fs");
const path = require("path");

const SCRIPT_DIR = __dirname;
const ROOT_DIR = path.resolve(SCRIPT_DIR, "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");
const OUTPUT_FILE = path.join(DIST_DIR, "handbook.md");

const IGNORE_LIST = [
  "node_modules",
  ".git",
  ".github",
  ".gitignore",
  "dist",
  "script",
  "getting-started.md",
  "guides.md",
];

const isIgnored = (relativePath) => {
  const segments = relativePath.split(path.sep);
  return segments.some((segment) => IGNORE_LIST.includes(segment));
};

const getAllFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const relativePath = path.relative(ROOT_DIR, fullPath);
    const stat = fs.statSync(fullPath);

    if (isIgnored(relativePath)) return;

    if (stat.isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else if (file.endsWith(".md")) {
      fileList.push({ filePath: fullPath, file: file.replace(".md", "") });
    }
  });

  return fileList;
};

const generateMergedMarkdown = () => {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }

  const files = getAllFiles(ROOT_DIR).sort();
  let output = "";

  files.forEach(({ filePath, file }) => {
    const content = fs.readFileSync(filePath, {
      encoding: "utf8",
    });

    const lines = content.split("\n");

    if (lines[0].toLowerCase()?.endsWith?.(`» ${file.toLowerCase()}`)) {
      lines.shift();
    }

    output += `# ${file}\n${lines.join("\n")}\n`;
  });

  fs.writeFileSync(OUTPUT_FILE, output);
  console.log(`✅ Archivo generado: ${OUTPUT_FILE}`);
};

generateMergedMarkdown();
