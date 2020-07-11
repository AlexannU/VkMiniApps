const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = config.get("port") || 5000;
const DbUri = config.get("MongoDBUri");

const app = express();

app.use(cors());
app.use(express.json());

async function start() {
  try {
    await mongoose.connect(DbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect succes");
  } catch (err) {
    console.log(err);
  }
}
start();

app.use("/api", require("./routes/api"));

app.listen(PORT, () => {
  console.log(`Server start on localhost:${PORT}`);
});
