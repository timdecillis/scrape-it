import scrapeData from '../lib/scrape';

export default async function handler(req, res) {
  try {
    const data = await scrapeData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to scrape data' });
  }
}