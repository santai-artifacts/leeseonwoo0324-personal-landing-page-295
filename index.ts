import { readFileSync } from "fs";
import { join } from "path";

const html = readFileSync(join(import.meta.dir, "public/index.html"), "utf-8");

export default {
  port: process.env.PORT || 3000,
  fetch(req: Request): Response {
    const url = new URL(req.url);
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
    return new Response("Not found", { status: 404 });
  },
};
