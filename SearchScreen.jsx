import { View, TextInput, StyleSheet, FlatList, Text } from "react-native";
import { useState } from "react";
import DestinationCard from "../components/DestinationCard";

const data = [
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
];

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Cari destinasi..."
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <DestinationCard item={item} full />}

        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              😢 Destinasi tidak ditemukan
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#eee",
  },
  empty: {
    marginTop: 50,
    alignItems: "center",
  },
  emptyText: {
    color: "gray",
    fontSize: 16,
  },
});