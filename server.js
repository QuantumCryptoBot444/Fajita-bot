const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 10000;

// Serve static frontend files (index.html, style.css, etc.)
app.use(express.static(path.join(__dirname, "client")));

// Use your trade API route
const tradeRoutes = require("./routes/trade");
app.use("/api", tradeRoutes);

// Simple health check endpoint
app.get("/api/status", (req, res) => {
  res.json({ status: "Online" });
});

app.listen(PORT, () => {
  console.log(`Fajita Bot running on port ${PORT}`);
});
