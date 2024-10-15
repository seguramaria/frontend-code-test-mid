import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:3001",
    fetch,
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
