export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Yalnızca POST desteklenir" });
  }

  const { siteUrl } = req.body;
  if (!siteUrl) {
    return res.status(400).json({ error: "Site URL gerekli" });
  }

  const fakeData = {
    game: "sweetbonanza",
    freespinCostTL: Math.floor(Math.random() * 100) + 1,
    estimatedProfit: Math.floor(Math.random() * 500),
    risk: "Düşük",
    analysisAt: new Date().toISOString()
  };

  return res.status(200).json(fakeData);
}