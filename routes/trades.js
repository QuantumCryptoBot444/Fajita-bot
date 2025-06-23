const express = require("express");
const router = express.Router();
const { getCurrentPrice } = require("../services/coinbase");

let tradeLog = [];

async function simulateLiveTrade() {
  const coins = ["XRP-USD", "ETH-USD", "ADA-USD"];
  const pair = coins[Math.floor(Math.random() * coins.length)];
  const coin = pair.split("-")[0];
  const price = await getCurrentPrice(pair);
  if (!price) return;

  const profit = (Math.random() * 20).toFixed(2); // Simulate ROI %

  const newTrade = {
    time: new Date().toLocaleTimeString(),
    type: Math.random() > 0.5 ? "buy" : "sell",
    coin,
    price: price.toFixed(4),
    profit
  };

  tradeLog.push(newTrade);
  if (tradeLog.length > 10) {
    tradeLog = tradeLog.slice(-10);
  }
}

setInterval(simulateLiveTrade, 20000); // Pull new trade every 20 sec

router.get("/trades/latest", (req, res) => {
  res.json(tradeLog);
});

module.exports = router;
