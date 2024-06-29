import { loadAndExtractFromHTML } from "../../server/scraper/index";
const path = require("path");
const fs = require("fs");

const filepath =
  "/Users/theresebataclan/Desktop/Projects/scrape-it/files/basquiat-paintings.html";
const html = fs.readFileSync(filepath, "utf8");
let array = null;
const load = async () => {
  const data = await loadAndExtractFromHTML(html).then((data) => data);
  array = data;
};
const mapped = array && array.map((artwork) => <div>{artwork.name}</div>);

export default function Home() {
  return <div>Hello, dude</div>;
}
