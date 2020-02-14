import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation/MainNavigation";
import ApolloClient, { HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://us1.prisma.sh/byjiwon2-7d96eb/forU/dev"
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainNavigation>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </MainNavigation>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
