const connToMongo = require("./conn");
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
app.get('/', cors(), (req, res)=>{ res.json("Hello") })



app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
