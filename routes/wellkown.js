const express = require("express");
const router = express.Router();

router.get("/web-identity", async (req, res, next) => {
  return res.status(200).json({
   provider_urls: ["https://pypl-ten.vercel.app/auth/fedcm.json"]
  });
});

module.exports = router;
