const fs = require("fs");
const { mergeTypes } = require("merge-graphql-schemas");

const types = fs
  .readdirSync(__dirname)
  .filter(file => file !== "index.js")
  .reduce((acc, curr) => [...acc, require(`./${curr}`)], []);

module.exports = mergeTypes(types);
