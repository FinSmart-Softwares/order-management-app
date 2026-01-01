import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

export default function StatsBox({ clients }) {
  const totalOutstanding = clients.reduce(
    (sum, c) => sum + parseInt(c.outstanding.replace(/[₹,]/g, "")),
    0
  );

  return (
    <View style={styles.statsBox}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{clients.length}</Text>
        <Text style={styles.statLabel}>Total Clients</Text>
      </View>

      <View style={styles.statItem}>
        <Text style={styles.statNumber}>₹{totalOutstanding}</Text>
        <Text style={styles.statLabel}>Total Outstanding</Text>
      </View>
    </View>
  );
}
