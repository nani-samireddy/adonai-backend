const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const songRoutes = require("./routes/songs_routes");
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Adonai API");
});

app.use("/api/songs", songRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://adonai-backend.vercel.app"
  );
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://adonai-api.onrender.com/"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

const connectToDB = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:AdMiN@cluster0.db8llx4.mongodb.net/adonai?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log("Error connecting to the database", err);
    });
};
connectToDB();
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
