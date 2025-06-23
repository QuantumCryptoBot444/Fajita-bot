const express = require("express");
const router = express.Router();

router.get("/status", (req, res) => {
  res.json({ status: "Online & Scanning Sandbox 🚀" });
});

module.exports = router;