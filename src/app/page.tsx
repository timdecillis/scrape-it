import { loadAndExtractFromHTML } from "../../server/scraper/index";
const path = require("path");
const fs = require("fs");

const filepath =
  "/Users/theresebataclan/Desktop/Projects/scrape-it/files/basquiat-paintings.html";
const html = fs.readFileSync(filepath, "utf8");
const array = loadAndExtractFromHTML(html);

export default function Home() {
  return <div>Hello, dude</div>;
}
