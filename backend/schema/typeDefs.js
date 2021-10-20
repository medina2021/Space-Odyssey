// graphql schema CRUD OPERATIONS
// typeDefs is the graphql schema

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    name: String
    password: String
    email: String
    token: String
  }
  type Form {
    id: ID
    FirstName: String
    LastName: String
    address: String
    areacode: String
    state: String
    PhoneNumber: String
  }

  type Query {
    hello: String!
  }

  input registerInput {
    name: String
    password: String
    email: String
  }
  input registerForm {
    FirstName: String
    LastName: String
    address: String
    areacode: String
    state: String
    PhoneNumber: String
  }

  type Mutation {
    RegisterUser(post: registerInput): User
    LoginUser(email: String, password: String): User
    RegisterForm(post: registerForm): Form
  }
`;

// mutation is a post/ put / delete in rest api
//RegisterUser is variale that holds resgisterInput
// :User it returns a template
module.exports = typeDefs;
