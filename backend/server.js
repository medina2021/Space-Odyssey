// graphql with mongodb and apollo server express set-up
const express = require("express");
// Import the ApolloServer class
const { ApolloServer } = require("apollo-server-express");
// Import the two parts of a GraphQL schema
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolver");
const db = require("../backend/database/db");
const PORT = process.env.PORT || 3001;

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  server.applyMiddleware({ app });
  app.listen(PORT, () =>
    console.log(`server ready at http://localhost:${PORT}${server.graphqlPath}`)
  );
}
// Update Express.js to use Apollo server features

require("dotenv").config();

// Utilization
db();

// estential files needed for graphql
startApolloServer(typeDefs, resolvers);
