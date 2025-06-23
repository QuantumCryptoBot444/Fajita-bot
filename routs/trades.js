const express = require("express");
const router = express.Router();

// Mock trade history – to be replaced later by real logic
const sampleTrades = [
  {
    time: "2025-06-23 04:00",
    type: "buy",
    coin: "XRP",
    price: "0.58",
    profit: "12.5"
  },
  {
    time: "2025-06-23 04:03",
    type: "sell",
    coin: "XRP",
    price: "0.65",
    profit: "15.2"
  },
  {
    time: "2025-06-23 04:06",
    type: "buy",
    coin: "ADA",
    price: "0.42",
    profit: "7.1"
  }
];

// Endpoint to return latest trades
router.get("/trades/latest", (req, res) => {
  res.json(sampleTrades.slice(-10));
});

module.exports = router;
