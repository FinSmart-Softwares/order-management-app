// src/screens/Salesperson/OrdersListScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SalespersonOrderScreen = () => {
  const [search, setSearch] = useState("");

  const orders = [
    { id: "ORD001", customer: "Ricon Pharma", status: "Delivered", total: "₹5,000" },
    { id: "ORD002", customer: "Groz Tools", status: "Pending", total: "₹2,400" },
    { id: "ORD003", customer: "Alpha Med", status: "Cancelled", total: "₹3,800" },
        { id: "ORD004", customer: "Ricon Pharma", status: "Delivered", total: "₹5,000" },

  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return { color: "#16a34a", backgroundColor: "#dcfce7" };
      case "Pending":
        return { color: "#f59e0b", backgroundColor: "#fef3c7" };
      case "Cancelled":
        return { color: "#dc2626", backgroundColor: "#fee2e2" };
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Orders List</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#6b7280" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search order or customer..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Order Cards */}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.orderId}>{item.id}</Text>
              <Text style={styles.customer}>{item.customer}</Text>
              <Text style={styles.total}>{item.total}</Text>
            </View>
            <View
              style={[
                styles.statusBadge,
                { backgroundColor: getStatusStyle(item.status).backgroundColor },
              ]}
            >
              <Text style={[styles.statusText, { color: getStatusStyle(item.status).color }]}>
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb", padding: 16 },
  header: { fontSize: 20, fontWeight: "600", color: "#111827", marginBottom: 12 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 16,
    elevation: 1,
  },
  searchInput: { flex: 1, marginLeft: 8, color: "#374151" },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    marginBottom: 10,
    elevation: 1,
  },
  orderId: { fontWeight: "600", fontSize: 16, color: "#1f2937" },
  customer: { fontSize: 14, color: "#6b7280", marginTop: 4 },
  total: { fontSize: 14, fontWeight: "500", color: "#3b82f6", marginTop: 4 },
  statusBadge: {
    alignSelf: "center",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  statusText: { fontWeight: "500" },
});

export default SalespersonOrderScreen;
