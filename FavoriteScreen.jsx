import { View, Text, StyleSheet, FlatList } from "react-native";
import DestinationCard from "../components/DestinationCard";

export default function FavoriteScreen() {
  const favoriteData = [
    {
      title: "Bali",
      location: "Indonesia",
      rating: "4.9",
      image: require("../../assets/images/pantaibali.jpg"),
    },
    {
      title: "Bromo",
      location: "Malang",
      rating: "4.8",
      image: require("../../assets/images/bromo.jpg"),
    },
    {
      title: "Ijen",
      location: "Banyuwangi",
      rating: "4.7",
      image: require("../../assets/images/ijen.jpg"),
    },
    {
      title: "Raja Ampat",
      location: "Papua",
      rating: "5.0",
      image: require("../../assets/images/rajaampat.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>❤️ Favorite Destinasi</Text>

      <FlatList
        data={favoriteData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <DestinationCard item={item} full />}

        ListEmptyComponent={
          <Text style={styles.empty}>Belum ada favorit 😢</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  empty: {
    textAlign: "center",
    marginTop: 50,
    color: "gray",
  },
});