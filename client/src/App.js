import React from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import LandingPage from "./layout/LandingPage";
import Mars from "./layout/Mars";
import Andromeda from "./layout/Andromeda";
import Moon from "./layout/Moon";
import TicketForm from "./layout/TicketForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./layout/HomePage";
import Footer from "./components/Footer";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import StripeCheckout from "react-stripe-checkout";

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
//any pages you want to exist you put in the routes

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <div>
              <NavbarComponent />

              <Footer />
              <Container>
                <Route exact path="/Homepage" component={HomePage} />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/Mars" component={Mars} />
                <Route exact path="/Moon" component={Moon} />
                <Route exact path="/Andromeda" component={Andromeda} />
                <Route exact path="/TicketForm" component={TicketForm} />
              </Container>
            </div>
          </Switch>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
