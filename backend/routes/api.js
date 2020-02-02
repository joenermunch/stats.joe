var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET users listing. */
router.post("/api/data", async function(req, res, next) {
  const response = await axios.get("http://ws.audioscrobbler.com/2.0/", {
    params: {
      method: "user.getTopAlbums",
      user: req.body.username,
      period: "7day",
      limit: 9,
      api_key: "5a0b9889aaf6694b1bb5f7b34e111339",
      format: "json"
    }
  });

  res.send(response.data);
});

module.exports = router;
