import { loadAndExtractFromHTML } from "../../server/scraper/index";
const path = require("path");
const fs = require("fs");

// export async function getStaticProps() {
//   const filepath =
//     "/Users/theresebataclan/Desktop/Projects/scrape-it/files/basquiat-paintings.html";
//   const html = fs.readFileSync(filepath, "utf8");
//   const data = await loadAndExtractFromHTML(html);

//   return {
//     props: {
//       data,
//     },
//   };
// }

const data = [{ name: "foo" }, { name: "bar" }];
const mapped = data.map((item, i) => <div key={i}>{item.name}</div>);

export default function Home() {
  return mapped;
}
