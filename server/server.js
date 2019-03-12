import express from "express";
import path from "path";
import fs from "fs";
import ApolloServer from "./graphql";
import ReactDOMServer from "react-dom/server";
import App from "../client/components/app";

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "public")));

ApolloServer.applyMiddleware({ app, path: "/graphql" });

const serverRenderer = (req, res, next) => {
  const app = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve(__dirname, "..", "public", "index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Please try again.");
    }

    return res.send(
      data.replace('<div id="app"></div>', `<div id="app">${app}</div>`)
    );
  });
};

// app.get("/*", (request, response) => {
//   const app = ReactDOMServer.renderToString(<App />);
//   const indexFile = path.resolve(__dirname, "..", "public", "index.html");

//   fs.readFile(indexFile, "utf8", (err, data) => {
//     if (err) {
//       console.error("Something went wrong:", err);
//       return res.status(500).send("Please try again.");
//     }

//     return res.send(
//       data.replace('<div id="app"></div>', `<div id="app">${app}</div>`)
//     );
//   });
//   // response.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
// });

router.use("^/$", serverRenderer);
app.use(router);

app.listen({ port: 3000 }, () => {
  console.log("Apollo Server on http://localhost:3000/graphql");
});
