const express = require("express");
const router = express.Router();
const { getCurrentPrice } = require("../services/coinbase");

// Example: GET /api/price/ETH-USD
router.get("/price/:pair", async (req, res) => {
  const pair = req.params.pair || "ETH-USD";
  const price = await getCurrentPrice(pair);
  if (!price) return res.status(500).json({ error: "Price not available" });

  res.json({ pair, price });
});

module.exports = router;
