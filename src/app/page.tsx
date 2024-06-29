import { loadAndExtractFromHTML } from "../../server/scraper/index";
const path = require("path");

const filepath = path.join(__dirname, "../files/basquiat-paintings");

export default function Home() {
  return <div>Hello, dude</div>;
}
