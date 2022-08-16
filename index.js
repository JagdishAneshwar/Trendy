const connToMongo = require("./conn");
const { port } = require("./config");
const express = require("express");
var cors = require("cors");
require("dotenv").config();
const app = express();
connToMongo();

// to use request.body
app.use(express.json());

//Available routes
app.use("/api/auth", cors(), require("./routes/auth"));
app.use("/api/clothes", cors(), require("./routes/clothes"));
app.use("/api/kart", cors(), require("./routes/kart"));

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
  });
}

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
