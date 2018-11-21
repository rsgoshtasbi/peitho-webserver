const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
