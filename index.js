const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const env = require("dotenv");
const app = express();

env.config({ path: ".env" });

app.use(cors());
app.use(express.json());
app.use("/static", express.static(path.join(`${__dirname}/public`)));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", path.join(`${__dirname}/views`));

app.use("/", routes);

app.use("*", (req, res) => {
  res.redirect("/");
});

const mongodb = process.env.mongodb;
const port = process.env.port;

app.listen(port, async () => {
  console.log(`Server on port ${port}`);
  try {
    await mongoose.connect(mongodb);
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
});
