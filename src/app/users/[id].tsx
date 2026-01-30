import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const users = [
  { id: "1", fullname: "John Doe", company: "Tech Corp" },
  { id: "2", fullname: "Jane Smith", company: "Innovate Inc" },
  { id: "3", fullname: "Bob Johnson", company: "Solutions Ltd" },
  { id: "4", fullname: "Alice Williams", company: "Digital Dynamics" },
  { id: "5", fullname: "Charlie Brown", company: "Creative Studios" },
  { id: "6", fullname: "Diana Prince", company: "Future Systems" },
  { id: "7", fullname: "Edward Norton", company: "Global Tech" },
  { id: "8", fullname: "Fiona Green", company: "Next Gen Solutions" },
  { id: "9", fullname: "George Miller", company: "Data Driven Co" },
  { id: "10", fullname: "Helen Troy", company: "AI Innovations" },
];

export default function UserScreen() {
  const params = useLocalSearchParams<{ id: string }>();

  const user = users.find((user) => user.id === params.id);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>User not found</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user.fullname}</Text>
      <Text style={styles.text}>{user.company}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dba758ff",
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
