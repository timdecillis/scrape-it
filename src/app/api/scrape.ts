import { loadAndExtractFromHTML } from "../../../lib/index";

export default async function handler(req: any, res: any) {
  try {
    const data = await loadAndExtractFromHTML();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to scrape data" });
  }
}
