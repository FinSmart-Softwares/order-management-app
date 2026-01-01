import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/dashboardStyles";

export default function OrderSummary() {
  return (
    <>
      <Text style={styles.sectionTitle}>Order Summary</Text>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Ionicons name="cart-outline" size={28} color="#2563eb" />
          <Text style={styles.summaryNumber}>5</Text>
          <Text style={styles.summaryLabel}>Orders Placed</Text>
        </View>

        <View style={styles.summaryCard}>
          <Ionicons name="calendar-outline" size={28} color="#2563eb" />
          <Text style={styles.summaryNumber}>2</Text>
          <Text style={styles.summaryLabel}>Visits Today</Text>
        </View>

        <View style={styles.summaryCard}>
          <Ionicons name="people-outline" size={28} color="#2563eb" />
          <Text style={styles.summaryNumber}>15</Text>
          <Text style={styles.summaryLabel}>Customers</Text>
        </View>
      </View>
    </>
  );
}
