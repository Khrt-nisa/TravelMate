import React, { useState } from "react";
import {
  SectionList,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from "react-native";

import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import DestinationCard from "../components/DestinationCard";

export default function HomeScreen() {

  const [data] = useState([
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
  ]);

  const [trending] = useState([
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
  ]);

  // ✅ FIXED sections
  const sections = [
    { title: "Kategori", type: "kategori", data: [{}] },
    { title: "Rekomendasi", type: "rekomendasi", data: [{}] },
    { title: "Trending 🔥", type: "trending", data: trending },
    { title: "Top Destination", type: "top", data: [{}] },
  ];

  return (
    <SectionList
      ListHeaderComponent={<Header />}
      sections={sections}
      keyExtractor={(item, index) => index.toString()}

      renderSectionHeader={({ section }) => (
        <Text style={styles.section}>{section.title}</Text>
      )}

      // 🔥 FIX UTAMA DI SINI
      renderItem={({ item, section }) => {

        if (section.type === "kategori") {
          return <CategoryList />;
        }

        if (section.type === "rekomendasi") {
          return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {data.map((item, index) => (
                <DestinationCard key={index} item={item} />
              ))}
            </ScrollView>
          );
        }

        if (section.type === "trending") {
          return <DestinationCard item={item} full />;
        }

        if (section.type === "top") {
          return (
            <View style={styles.featuredCard}>
              <Image
                source={require("../../assets/images/ijen.jpg")}
                style={styles.featuredImage}
              />

              <View style={styles.featuredContent}>
                <Text style={styles.featuredTitle}>Gunung Ijen</Text>
                <Text style={styles.featuredLocation}>
                  Banyuwangi, Jawa Timur
                </Text>

                <Text style={styles.featuredDesc}>
                  Gunung Ijen terkenal dengan blue fire yang langka.
                </Text>
              </View>
            </View>
          );
        }

      }}
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