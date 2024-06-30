import { loadAndExtractFromHTML } from "../../server/scraper/index";
const path = require("path");
const fs = require("fs");

// export async function getStaticProps() {

//   return {
//     props: {
//       data,
//     },
//   };
// }

// export async function getStaticProps() {
//   const html = fs.readFileSync(filepath, "utf8");
//   const data = await loadAndExtractFromHTML(html);
//   return {
//     props: {
//       data,
//     },
//   };
// }

// const data = [{ name: "foo" }, { name: "bar" }, { name: "foobar" }];
// const mapped = data.map((item, i) => <div key={i}>{item.name}</div>);

// export default function Home({ data }: any) {
//   return data.map((item: any, i: number) => {
//     return <div key={i}>{item.name}</div>;
//   });
// }

export default async function Home() {
  const filepath =
    "/Users/theresebataclan/Desktop/Projects/scrape-it/files/basquiat-paintings.html";
  const html = fs.readFileSync(filepath, "utf8");
  const data = await loadAndExtractFromHTML(html);

  return (
    <div>
      {data ? (
        data.map((artwork, i) => <div key={i}>{artwork.name}</div>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
