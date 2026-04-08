import { SectionList, Text, StyleSheet, View, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import DestinationCard from "../components/DestinationCard";

export default function HomeScreen() {

  const data = [
    {
      title: "Pantai Bali",
      location: "Bali",
      rating: "4.9",
      description: "Pantai indah dengan sunset terbaik",
      image: require("../../assets/images/pantaibali.jpg"),
    },
    {
      title: "Gunung Bromo",
      location: "Malang",
      rating: "4.8",
      description: "Gunung dengan pemandangan sunrise epik",
      image: require("../../assets/images/bromo.jpg"),
    },
  ];

  const trending = [
    {
      title: "Labuan Bajo",
      location: "NTT",
      rating: "4.9",
      description: "Surga wisata laut",
      image: require("../../assets/images/labuanbajo.jpg"),
    },
    {
      title: "Raja Ampat",
      location: "Papua",
      rating: "5.0",
      description: "Diving terbaik dunia",
      image: require("../../assets/images/rajaampat.jpg"),
    },
  ];

  const sections = [
    {
      title: "Kategori",
      data: [{}],
      renderItem: () => <CategoryList />,
    },
    {
      title: "Rekomendasi",
      data: [{}],
      renderItem: () => (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => (
            <DestinationCard key={index} item={item} />
          ))}
        </ScrollView>
      ),
    },
    {
      title: "Trending 🔥",
      data: trending,
      renderItem: ({ item }) => <DestinationCard item={item} full />,
    },
    {
      title: "Top Destination",
      data: [{}],
      renderItem: () => (
        <View style={styles.featuredCard}>
          <Image
            source={require("../../assets/images/ijen.jpg")}
            style={styles.featuredImage}
          />

          <View style={styles.featuredContent}>
            <Text style={styles.featuredTitle}>Gunung Ijen</Text>
            <Text style={styles.featuredLocation}>Banyuwangi</Text>

            <Text style={styles.featuredDesc}>
              Gunung Ijen terkenal dengan blue fire dan danau kawah yang indah.
            </Text>
          </View>
        </View>
      ),
    },
  ];

  return (
    <SectionList
      ListHeaderComponent={<Header />}
      sections={sections}
      keyExtractor={(item, index) => index.toString()}
      renderSectionHeader={({ section }) => (
        <Text style={styles.section}>{section.title}</Text>
      )}
      renderItem={({ item, section }) =>
        section.renderItem({ item })
      }
    />
  );
}

const styles = StyleSheet.create({
  section: {
    margin: 15,
    fontSize: 16,
    fontWeight: "bold",
  },

  featuredCard: {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
  },

  featuredImage: {
    width: "100%",
    height: 200,
  },

  featuredContent: {
    padding: 15,
  },

  featuredTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  featuredLocation: {
    color: "gray",
    marginBottom: 5,
  },

  featuredDesc: {
    fontSize: 13,
    color: "#555",
  },
});