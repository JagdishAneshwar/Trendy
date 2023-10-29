const mongo = require("mongoose");

const mongoURI =
process.env.MOONGODB_URL;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connToMongo = async () => {
  await mongo.connect(mongoURI, connectionParams).then(() => {
    console.log("Successfully! connected with database");
  });
};

module.exports = connToMongo;
