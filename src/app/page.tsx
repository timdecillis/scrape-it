import { loadAndExtractFromHTML } from "../../server/scraper/index";
const path = require("path");
const fs = require("fs");
import { useState } from "react";

export default async function Home() {
  const [term, setTerm] = useState("");
  const filepath = path.join(process.cwd(), "files/basquiat-paintings.html");
  const html = fs.readFileSync(filepath, "utf8");
  const data = await loadAndExtractFromHTML(html);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
      {data ? (
        data.map((artwork, i) => {
          let year;
          if (artwork.extensions) {
            year = artwork.extensions[0];
          }
          return (
            <>
              <div key={i}>
                {i + 1}.) {artwork.name}
                {year && `, ${year}`}
              </div>
              <div>link: {artwork.link.slice(-5)}</div>
              <div>{artwork.image && `image: ${artwork.image.slice(-5)}`}</div>
            </>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
