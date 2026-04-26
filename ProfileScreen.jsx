import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER PROFILE */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/profile.jpg")}
          style={styles.avatar}
        />

        <Text style={styles.name}>Nisa Travel Lover 🌍</Text>
        <Text style={styles.email}>📧 nisa@email.com</Text>

        {/* BUTTON EDIT */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* STATS */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Trips</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Countries</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Wishlist</Text>
        </View>
      </View>

      {/* INFO CARD */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌟 Travel Highlights</Text>
        <Text>📍 Favorite: Banyuwangi</Text>
        <Text>✈️ Wishlist: Jepang</Text>
        <Text>🏝 Most Visited: Lombok</Text>
        <Text>📸 Travel Style: Adventure & Nature</Text>
      </View>

      {/* JOURNEY SECTION */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧭 My Journey</Text>

        <View style={styles.journeyItem}>
          <Text>🇮🇩 Bali - 2024</Text>
        </View>

        <View style={styles.journeyItem}>
          <Text>🇮🇩 Yogyakarta - 2023</Text>
        </View>

        <View style={styles.journeyItem}>
          <Text>🇮🇩 Malang - 2023</Text>
        </View>

        <View style={styles.journeyItem}>
          <Text>🇮🇩 Banyuwangi - 2022</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9ff",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  email: {
    color: "gray",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#4f46e5",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    padding: 10,
  },

  statBox: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },

  statLabel: {
    fontSize: 12,
    color: "gray",
  },

  card: {
    backgroundColor: "#f5f5f5",
    margin: 15,
    padding: 15,
    borderRadius: 15,
  },

  cardTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  section: {
    margin: 15,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },

  journeyItem: {
    padding: 12,
    backgroundColor: "#f1f5f9",
    borderRadius: 10,
    marginBottom: 8,
  },
});