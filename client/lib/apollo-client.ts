import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

const httpLink = new HttpLink({
  uri: "http://localhost:3001",
  fetch,
});

const createApolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default createApolloClient;
