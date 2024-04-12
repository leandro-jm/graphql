const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Ticket {
    id: ID!
    client: String
    email: String
    title: String
  }

  type Query {
    getTicket(id: ID!): Ticket
  }
`;

const tickets = [
  { id: '1', client: 'BB', email: 'alice@example.com', title: 'Defeito no roteador' },
  { id: '2', client: 'BB', email: 'alice@example.com', title: 'Link com problema' },
  { id: '3', client: 'Caixa', email: 'alice@example.com', title: 'Defeito no roteador' }
];

const resolvers = {
  Query: {
    getTicket: (_, { id }) => {
      return tickets.find(ticket => ticket.id === id);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
