const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const rawMongoUri = process.env.MONGODB_URI || process.env.MONGODB_LOCAL;
const MONGO_URI = typeof rawMongoUri === "string"
  ? rawMongoUri.trim().replace(/^['"]|['"]$/g, "")
  : rawMongoUri;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  // Serve the React build in production.
  app.use(express.static("client/build"));
}

app.get("/healthz", function (_req, res) {
  res.status(200).json({ status: "ok" });
});

app.use(routes);

if (!MONGO_URI) {
  console.error("Missing MongoDB connection string. Set MONGODB_URI or MONGODB_LOCAL.");
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(function () {
    app.listen(PORT, function () {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  })
  .catch(function (error) {
    console.error("MongoDB connection failed:", error.message);
    console.error(
      "Check MONGODB_URI in Render: no surrounding quotes, no extra spaces, and URL-encode special characters in the password."
    );
    process.exit(1);
  });
