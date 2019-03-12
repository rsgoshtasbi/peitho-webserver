const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    me: User
  }

  type Mutation {
    signup(user: SignupInput): Signup
  }

  input SignupInput {
    first_name: String!
    last_name: String!
    phone: String!
    email: String!
    password: String!
    bu: String
  }

  type Signup {
    email: String
    status_code: String
    uuid: String!
    first_name: String
    last_name: String
    bu: String
  }

  type User {
    username: String!
  }
`;
