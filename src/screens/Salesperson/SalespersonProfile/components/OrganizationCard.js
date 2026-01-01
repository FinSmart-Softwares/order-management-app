import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

export default function OrganizationCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Organization Details</Text>

      <Text style={styles.label}>Organization</Text>
      <Text style={styles.value}>Global Traders Pvt Ltd</Text>

      <Text style={styles.label}>Branch</Text>
      <Text style={styles.value}>Delhi – Pitampura</Text>

      <Text style={styles.label}>Reporting Manager</Text>
      <Text style={styles.value}>Alex Johnson (Sales Manager)</Text>
    </View>
  );
}
