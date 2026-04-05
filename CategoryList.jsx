import { ScrollView, Text, View, StyleSheet } from "react-native"; 
import { colors } from "../../assets/theme";

export default function CategoryList() {
  const data = ["Destinasi", "Hotel", "Kuliner", "Transport"];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.primary(0.1),
    padding: 10,
    borderRadius: 20,
    marginLeft: 15,
  },
  text: {
    color: colors.primary(),
  },
});