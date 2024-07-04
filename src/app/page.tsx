const path = require("path");
const fs = require("fs");
import { SyntheticEvent } from "react";

import { loadAndExtractFromHTML } from "../../server/scraper/index";

interface Artwork {
  name: string;
  extensions?: string[];
  link: string;
  image: string;
}

export default async function Home() {
  // const handleSubmit = async (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   const inputElement = e.target as HTMLInputElement;

  //   const data = await loadAndExtractFromHTML(inputElement);
  //   console.log("data:", data);
  // };


  const filepath = path.join(process.cwd(), `files/basquiat-paintings.html`);
  const htmlContent = fs.readFileSync(filepath, "utf8");

  const artworks = await loadAndExtractFromHTML()

  return (
    <div>
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
