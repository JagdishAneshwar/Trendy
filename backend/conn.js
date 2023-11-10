const mongo = require("mongoose");

//mongodb+srv://Jagdish:dF5Y51Bz5dknw7wn@cluster0.jmpfje9.mongodb.net/test
const mongoURI ='mongodb+srv://aneshwarjagdish:FbhOWfhjTmQMeDe6@trendy.m4fetu3.mongodb.net/?retryWrites=true&w=majority';

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
