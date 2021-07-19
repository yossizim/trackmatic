const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./graphql");
console.log(`typeDefs`, typeDefs);
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
