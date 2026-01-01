import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/dashboardStyles";

export default function QuickActions({ navigation }) {
  return (
    <>
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.actionsContainer}>
        {/* New Order */}
        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: "#2563eb" }]}
          onPress={() => navigation.navigate("NewOrder")}
        >
          <Ionicons name="add-circle-outline" size={28} color="#fff" />
          <Text style={styles.actionTextLight}>New Order</Text>
        </TouchableOpacity>

        {/* Customer List */}
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Clients")}
        >
          <Ionicons name="people-outline" size={28} color="#2563eb" />
          <Text style={styles.actionText}>Customer List</Text>
        </TouchableOpacity>

        {/* Visit Planning */}
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Planner")}
        >
          <Ionicons name="calendar-outline" size={28} color="#2563eb" />
          <Text style={styles.actionText}>Visit Planning</Text>
        </TouchableOpacity>

        {/* Order History */}
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Orders")}
        >
          <Ionicons name="time-outline" size={28} color="#2563eb" />
          <Text style={styles.actionText}>Order History</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
