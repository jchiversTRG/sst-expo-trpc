import { trpc } from "./utils/trpc";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const greeting = trpc.hello.useQuery();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hi</Text>
      <Text>{greeting.data}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
