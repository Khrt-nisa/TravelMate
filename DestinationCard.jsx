import { Text, ImageBackground, StyleSheet, View, Dimensions } from "react-native";

export default function DestinationCard({ item, full }) {

  const imageSource =
    typeof item.image === "string"
      ? { uri: item.image }
      : item.image;

  return (
    <ImageBackground
      source={imageSource}
      style={[
        styles.card,
        full && styles.fullCard
      ]}
      imageStyle={{ borderRadius: 15 }}
      resizeMode="cover"
      onError={() => console.log("❌ Gagal load gambar")}
    >

      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.desc}>
          {item.description || "Deskripsi belum tersedia"}
        </Text>

        <Text style={styles.text}>📍 {item.location}</Text>
        <Text style={styles.text}>⭐ {item.rating}</Text>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 160,
    marginLeft: 15,
    backgroundColor: "#ccc",
    borderRadius: 15,
    overflow: "hidden",
  },

  fullCard: {
    width: Dimensions.get("window").width - 30,
    height: 180,
    marginHorizontal: 15,
    marginBottom: 10,
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },

  desc: {
    color: "white",
    fontSize: 12,
    opacity: 0.9,
    marginBottom: 5,
  },

  text: {
    color: "white",
    fontSize: 11,
  },
});