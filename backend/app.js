var express = require("express");
const bodyParser = require("body-parser");
var path = require("path");
const cors = require("cors");

var app = express();
const apiRouter = require("./routes/api");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(apiRouter);
//deploy
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html")); //;
});

app.listen(PORT, console.log(`Listening on PORT ${PORT}`));

module.exports = app;
