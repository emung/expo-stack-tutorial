import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SecondScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ name?: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SecondScreen</Text>
      {params.name && <Text style={styles.text}>Hello {params.name}</Text>}
      <Pressable style={styles.button} onPress={() => router.push("/third")}>
        <Text>Go to ThirdScreen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2ec2c7ff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#62bd6eff",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 3,
  },
});
