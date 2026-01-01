import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

export default function BasicInfoCard() {
  return (
    <View style={styles.card}>
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.name}>Rohit Sharma</Text>
          <Text style={styles.role}>Sales Executive</Text>
        </View>
        <Ionicons name="person-circle-outline" size={60} color="#4da6ff" />
      </View>

      <View style={styles.divider} />

      <Text style={styles.label}>Email</Text>
      <Text style={styles.value}>rohit.sharma@example.com</Text>

      <Text style={styles.label}>Employee ID</Text>
      <Text style={styles.value}>SP-10234</Text>

      <Text style={styles.label}>Phone</Text>
      <Text style={styles.value}>+91 98765 44112</Text>
    </View>
  );
}
