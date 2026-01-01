import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function VisitDetailsfullpage({ route, navigation }) {
  const { engineer, city, time, status, duration } = route.params;


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visit Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Engineer</Text>
        <Text style={styles.value}>{engineer}</Text>

        <Text style={styles.label}>City</Text>
        <Text style={styles.value}>{city}</Text>

        <Text style={styles.label}>Time</Text>
        <Text style={styles.value}>{time}</Text>

        <Text style={styles.label}>Duration</Text>
<Text style={styles.value}>{duration}</Text>


        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{status}</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Text style={{ color: "#fff" }}>⬅ Back</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },

  detailRow: {
    marginBottom: 16,
  },

  label: {
    fontSize: 12,
    color: "#64748b",
    fontWeight: "600",
    marginBottom: 4,
    letterSpacing: 0.4,
  },

  value: {
    fontSize: 16,
    fontWeight: "700",
    color: "#020617",
  },

  statusRow: {
    marginTop: 6,
  },

  statusBadge: {
    alignSelf: "flex-start",
    marginTop: 6,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  statusText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.6,
  },

  backBtn: {
    marginTop: 28,
    backgroundColor: "#0f172a",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  backText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
});

