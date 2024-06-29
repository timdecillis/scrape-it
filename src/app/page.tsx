import { loadAndExtractFromHTML } from "../../server/scraper/index";
const path = require("path");
const fs = require("fs");

const filepath = path.join(__dirname, "../files/basquiat-paintings");
const html = fs.readFile(filepath, "utf8");

export default function Home() {
  return <div>Hello, dude</div>;
}
