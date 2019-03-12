const fs = require("fs");
const { mergeResolvers } = require("merge-graphql-schemas");

const resolvers = fs
  .readdirSync(__dirname)
  .filter(file => file === "index.js")
  .reduce((acc, curr) => [...acc, require(`./${curr}`)], []);

module.exports = mergeResolvers(resolvers);
