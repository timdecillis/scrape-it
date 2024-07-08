const path = require("path");
const fs = require("fs");

import { loadAndExtractFromHTML } from "../../server/scraper/index";

export default async function Home() {
  const filepath = path.join(process.cwd(), `files/basquiat-paintings.html`);
  const htmlContent = fs.readFileSync(filepath, "utf8");

  const artworks = await loadAndExtractFromHTML(htmlContent);

  return (
    <div>
      <form>
        <input type="text" />
        <input type="submit"/>
      </form>
      <h1>Artworks</h1>
      {artworks.length ? (
        artworks.map((artwork, i) => {
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
