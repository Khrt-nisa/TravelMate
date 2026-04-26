import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function DetailScreen({ route }) {

  const item = route?.params?.item || {
    title: "Gunung Bromo",
    location: "Malang",
    rating: "4.8",
    description:
      "Gunung dengan pemandangan sunrise epik dan pemandangan alam yang luar biasa indah.",
    image: require("../../assets/images/bromo.jpg"),
  };

  const imageSource =
    typeof item.image === "string"
      ? { uri: item.image }
      : item.image;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      {/* IMAGE */}
      <Image source={imageSource} style={styles.image} />

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.row}>
          <Text style={styles.location}>📍 {item.location}</Text>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
        </View>

        <Text style={styles.desc}>
          {item.description || "Deskripsi belum tersedia"}
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.info}>🕒 Jam buka: 24 jam</Text>
          <Text style={styles.info}>💰 Tiket: Rp 50.000</Text>
          <Text style={styles.info}>🚗 Akses: Kendaraan pribadi / jeep</Text>
        </View>

        {/* SPACER BIAR FULL */}
        <View style={{ flex: 1 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  scrollContent: {
    flexGrow: 1,
  },

  image: {
    width: "100%",
    height: 260,
  },

  content: {
    flex: 1,
    padding: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  location: {
    color: "gray",
  },

  rating: {
    fontWeight: "bold",
  },

  desc: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
    marginBottom: 15,
  },

  infoBox: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 10,
  },

  info: {
    fontSize: 13,
    marginBottom: 5,
  },
});