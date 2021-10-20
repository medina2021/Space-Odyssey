import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import React from "react";
import LandingPage from "./layout/LandingPage";
import Mars from "./layout/Mars";
import Andromeda from "./layout/Andromeda";
import Moon from "./layout/Moon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./layout/HomePage";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import StripeCheckout from "react-stripe-checkout"

import gql from "graphql-tag";
import { graphql } from "@apollo/react-hoc";


// Initialize the Apollo Client
const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:3001/graphql" }),
  cache: new InMemoryCache(),
});

// Define query types
const DATA_QUERY = gql`
  query {
    getVersion {
      version
    }
  }
`;
// must wrap apolloProvider to use tech
//
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <div>
              <NavbarComponent />
              <Container>
                <Route exact path="/Homepage" component={HomePage} />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/Mars" component={Mars} />
                <Route exact path="/Moon" component={Moon} />
                <Route exact path="/Andromeda" component={Andromeda} />
              </Container>
            </div>
          </Switch>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;

