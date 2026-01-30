import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>IndexScreen</Text>
      <Pressable style={styles.button} onPress={() => router.push("/second")}>
        <Text>Go to SecondScreen</Text>
      </Pressable>

      <Link
        style={styles.button}
        href={{ pathname: "/second", params: { name: "John Doe" } }}
      >
        <Text>Greet John on SecondScreen</Text>
      </Link>

      <Pressable
        style={styles.button}
        onPress={() =>
          router.push({ pathname: "/second", params: { name: "Jane Doe" } })
        }
      >
        <Text>Greet Jane on SecondScreen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#368bb3",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 3,
  },
});
