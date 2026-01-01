import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

export default function QuickActions({ navigation }) {
  return (
    <>
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: "#2563eb" }]}
          onPress={() => navigation.navigate("OrdersList")}
        >
          <Ionicons name="list-outline" size={28} color="#fff" />
          <Text style={styles.actionTextLight}>Orders List</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Employees")}
        >
          <Ionicons name="people-outline" size={28} color="#2563eb" />
          <Text style={styles.actionText}>Employees</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("SelectOrg")}
        >
          <Ionicons name="bar-chart-outline" size={28} color="#2563eb" />
          <Text style={styles.actionText}>Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="map-outline" size={28} color="#ef4444" />
          <Text style={styles.actionText}>Tracking</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
