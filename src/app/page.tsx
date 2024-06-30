import { loadAndExtractFromHTML } from "../../server/scraper/index";
const path = require("path");
const fs = require("fs");

export default async function Home() {
  const filepath = path.join(process.cwd(), "files/basquiat-paintings.html");
  console.log("path:", filepath);

  const html = fs.readFileSync(filepath, "utf8");
  const data = await loadAndExtractFromHTML(html);

  return (
    <div>
      {data ? (
        data.map((artwork, i) => {
          let year;
          if (artwork.extensions) {
            year = artwork.extensions[0];
          }
          return (
            <div key={i}>
              {artwork.name}
              {year && `, ${year}`}
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
