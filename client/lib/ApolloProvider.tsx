import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";

function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloWrapper;
