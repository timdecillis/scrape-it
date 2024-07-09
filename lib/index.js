const cheerio = require("cheerio");

const { loadHTML } = require("./loader.js");
const { extractHTMLInfo } = require("./extractor.js");

const loadAndExtractFromHTML = async () => {

  const filepath = path.join(process.cwd(), `files/basquiat-paintings.html`);
  const htmlContent = fs.readFileSync(filepath, "utf8");


  const placeholderSrcs = [];
  const $ = cheerio.load(htmlContent);

  $("img").each((index, element) => {
    const src = $(element).attr("src");
    if (src && !placeholderSrcs.includes(src)) {
      placeholderSrcs.push(src);
    }
  });
  try {
    const loadedHTML = await loadHTML(htmlContent);
    return extractHTMLInfo(loadedHTML, placeholderSrcs);
  } catch (error) {
    console.error("Error during loading and extracting:", error);
    throw error;
  }
};

module.exports = { loadAndExtractFromHTML };
