import type { AppProps } from "next/app";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "@/styles/globals.css";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (true) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export default function App({ Component, pageProps }: AppProps) {
  console.log("hey");
  const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
