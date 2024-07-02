import { loadAndExtractFromHTML } from "../../server/scraper/index";
const path = require("path");
const fs = require("fs");
import { SyntheticEvent, useState } from "react";

export default async function Home() {
  const [term, setTerm] = useState("");
  const [artworks, setArtworks] = useState([]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const filepath = path.join(process.cwd(), `files/${term}-paintings.html`);
    const html = fs.readFileSync(filepath, "utf8");
    const data = await loadAndExtractFromHTML(html);
    const inputElement = e.target as HTMLInputElement;
    setTerm(inputElement.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  );
}
