import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

export default function OrderSummary() {
  return (
    <>
      <Text style={styles.sectionTitle}>Order Summary</Text>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Ionicons name="cart-outline" size={28} color="#2563eb" />
          <Text style={styles.summaryNumber}>32</Text>
          <Text style={styles.summaryLabel}>Total Orders</Text>
        </View>

        <View style={styles.summaryCard}>
          <Ionicons name="checkmark-done-outline" size={28} color="#16a34a" />
          <Text style={styles.summaryNumber}>18</Text>
          <Text style={styles.summaryLabel}>Approved</Text>
        </View>

        <View style={styles.summaryCard}>
          <Ionicons name="close-circle-outline" size={28} color="#dc2626" />
          <Text style={styles.summaryNumber}>07</Text>
          <Text style={styles.summaryLabel}>Pending</Text>
        </View>
      </View>
    </>
  );
}
