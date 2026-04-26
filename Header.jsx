import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../assets/theme";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TravelMate ✈️</Text>
      <Text style={styles.subtitle}>Teman Perjalanan Pintar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.primary(),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
  },
});