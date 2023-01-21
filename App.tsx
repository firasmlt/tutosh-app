import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import TransactionsScreen from "./src/screens/main/TransactionsScreen";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigator/RootNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import client from "./src/graphql/client";

export default function App() {
    return (
        // @ts-ignore - TailwindProvider is missing a type definition
        <TailwindProvider utilities={utilities}>
            <NavigationContainer>
                <ApolloProvider client={client}>
                    {false ? <RootNavigator /> : <Text>Hello world</Text>}
                </ApolloProvider>
            </NavigationContainer>
        </TailwindProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
