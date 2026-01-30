import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ThirdScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ThirdScreen</Text>

      <Pressable style={styles.button} onPress={() => router.push("/")}>
        <Text>Go to IndexScreen</Text>
      </Pressable>

      <Link style={styles.button} href="/" dismissTo>
        <Text>Dismiss to IndexScreen with Link</Text>
      </Link>

      <Pressable style={styles.button} onPress={() => router.dismissAll()}>
        <Text>Dismiss to IndexScreen with Pressable</Text>
      </Pressable>

      <Link style={styles.button} href="/second" replace>
        <Text>Replace to SecondScreen with Link</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#62bd6eff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#2ec2c7ff",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 3,
  },
});
