const express = require("express");
const app = express();

// For taking inputs via forms
const bodyParser = require("body-parser");
// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DATABASE
const mongoose = require("mongoose");
// mongodb://anu:anucool123@ds231537.mlab.com:31537/college-api
mongoose
  .connect("mongodb+srv://admin:admin@cluster0-0p4tg.mongodb.net/Udemy?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDbConnected"))
  .catch((err) => console.log(err));

// Routes
const news = require("./routes/news");
app.use("/news", news);

// Listenings at port:
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server running at port:" + port);
});
