const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const tradeRoutes = require("./routes/trade");

app.use(express.static(path.join(__dirname, "../../client")));
app.use("/api", tradeRoutes);

app.listen(PORT, () => {
  console.log("Fajita Bot running on port", PORT);
});
