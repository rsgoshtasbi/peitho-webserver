const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.use("/graphql", (request, response) => {
  console.log(request.body);
});

// server.use(
//   `${BASE_URL}/graphql`,
//   bodyParser.json({
//     limit: '1000kb', // defaults to '100kb'
//   }),
//   graphqlExpress(request => ({
//     schema,
//     context: { ...request.cookies, featureFlags: Object(request.body.featureFlags) },
//   })),
// );

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
