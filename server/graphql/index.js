const { ApolloServer } = require("apollo-server-express");
const schema = require("./types");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { test: "hi" },
  playground: true
});

module.exports = server;
