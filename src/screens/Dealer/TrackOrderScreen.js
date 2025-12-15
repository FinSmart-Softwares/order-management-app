// screens/TrackOrderScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function TrackOrderScreen({ route, navigation }) {
  const { order } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // goes back to previous screen (OrderHistory)
      >
        <Ionicons name="arrow-back" size={24} color="#2563eb" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Track Order</Text>

      {/* ORDER INFO */}
      <View style={styles.card}>
        <Text style={styles.title}>Order ID</Text>
        <Text style={styles.value}>{order.id}</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{order.date}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Payment</Text>
          <Text style={styles.value}>{order.payment}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Status</Text>
          <Text style={[styles.value, order.status === "Delivered" ? styles.delivered : styles.pending]}>
            {order.status}
          </Text>
        </View>
      </View>

      {/* TIMELINE */}
      <View style={styles.card}>
        <Text style={styles.title}>Order Timeline</Text>
        <View style={styles.timelineContainer}>
          {order.timeline.map((step, index) => (
            <View key={index} style={styles.timelineRow}>
              <View style={styles.timelineIconContainer}>
                <Ionicons name="checkmark" size={16} color="#fff" />
              </View>
              <Text style={styles.timelineText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* DELIVERY ADDRESS */}
      <View style={styles.card}>
        <Text style={styles.title}>Delivery Address</Text>
        <Text style={styles.value}>{order.address}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
    marginTop:40,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backText: {
    color: "#2563eb",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 5,
  },
  header: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: "#64748b",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  timelineContainer: {
    marginTop: 10,
  },
  timelineRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  timelineIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
  },
  timelineText: {
    marginLeft: 12,
    fontSize: 14,
    color: "#1e293b",
    fontWeight: "500",
  },
  delivered: {
    color: "#16a34a",
  },
  pending: {
    color: "#f59e0b",
  },
});
