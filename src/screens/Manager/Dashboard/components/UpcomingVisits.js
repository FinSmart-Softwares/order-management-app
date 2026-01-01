import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

export default function UpcomingVisits() {
  return (
    <>
      <Text style={styles.sectionTitle}>Upcoming Visits</Text>

      <View style={styles.visitCard}>
        <Text style={styles.visitTitle}>Visit to Ricon Pharma</Text>
        <Text style={styles.visitSub}>Thu - Oct 30, 2025 | 10:30 AM</Text>
      </View>

      <View style={styles.visitCard}>
        <Text style={styles.visitTitle}>Visit to Groz Tools</Text>
        <Text style={styles.visitSub}>Fri - Oct 31, 2025 | 3:00 PM</Text>
      </View>
    </>
  );
}
