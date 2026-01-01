import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

export default function ClientCard({ item }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Ionicons name="person-circle-outline" size={45} color="#444" />

      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text style={styles.clientName}>{item.name}</Text>
        <Text style={styles.clientPhone}>{item.phone}</Text>
        <Text style={styles.clientAddress}>{item.address}</Text>
        <Text style={styles.smallText}>Last Visit: {item.lastVisit}</Text>
        <Text style={styles.smallText}>Next Visit: {item.nextVisit}</Text>
        <Text style={styles.outstanding}>Outstanding: {item.outstanding}</Text>
      </View>

      <View
        style={[
          styles.statusBadge,
          item.status === "Active"
            ? { backgroundColor: "#D1FAD7" }
            : { backgroundColor: "#FFD6D6" },
        ]}
      >
        <Text
          style={{
            color: item.status === "Active" ? "#0A8A1F" : "#B00000",
            fontWeight: "bold",
          }}
        >
          {item.status}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={22} color="#777" />
    </TouchableOpacity>
  );
}
