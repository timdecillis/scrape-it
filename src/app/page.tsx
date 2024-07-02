const path = require("path");
const fs = require("fs");
import { loadAndExtractFromHTML } from "../../server/scraper/index";

import { SyntheticEvent, useState } from "react";

interface Artwork {
  name: string;
  extensions?: string[];
  link: string;
  image: string;
}

export default function Home() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const inputElement = e.target as HTMLInputElement;
    const filepath = path.join(process.cwd(), `files/${inputElement}-paintings.html`);
    const htmlContent = fs.readFileSync(filepath, "utf8");
    const data = await loadAndExtractFromHTML(htmlContent);
    console.log("data:", data);
    setArtworks(data);
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

// {artworks.length ? (
//   artworks.map((artwork, i) => {
//     let year;
//     if (artwork.extensions) {
//       year = artwork.extensions[0];
//     }
//     return (
//       <>
//         <div key={i}>
//           {i + 1}.) {artwork.name}
//           {year && `, ${year}`}
//         </div>
//         <div>link: {artwork.link.slice(-5)}</div>
//         <div>{artwork.image && `image: ${artwork.image.slice(-5)}`}</div>
//       </>
//     );
//   })
// ) : (
//   <p>Loading...</p>
// )}
