const express = require("express");
const router = express.Router();

// Store live trades here (can be replaced with DB or cache later)
let tradeLog = [];

// Simulate AI logic or pull from Coinbase sandbox (this is fake for now)
function simulateTrade() {
  const coins = ["XRP", "ETH", "ADA", "DOGE", "TRX"];
  const randomCoin = coins[Math.floor(Math.random() * coins.length)];
  const buyPrice = (Math.random() * 1).toFixed(4);
  const sellPrice = (parseFloat(buyPrice) + Math.random() * 0.1).toFixed(4);
  const profit = ((sellPrice - buyPrice) / buyPrice * 100).toFixed(2);

  const newTrade = {
    time: new Date().toLocaleTimeString(),
    type: Math.random() > 0.5 ? "buy" : "sell",
    coin: randomCoin,
    price: (Math.random() > 0.5 ? buyPrice : sellPrice),
    profit: profit
  };

  tradeLog.push(newTrade);

  // Keep only the last 10
  if (tradeLog.length > 10) {
    tradeLog = tradeLog.slice(-10);
  }
}

// Run a new simulated trade every 20 seconds
setInterval(simulateTrade, 20000);

// Endpoint to return trades
router.get("/trades/latest", (req, res) => {
  res.json(tradeLog);
});

module.exports = router;
