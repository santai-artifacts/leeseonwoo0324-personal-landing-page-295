import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(join(__dirname, "public/index.html"), "utf-8");

const PORT = process.env.PORT || 3000;

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
}).listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on port ${PORT}`);
});
