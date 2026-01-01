import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

export default function PerformanceCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Performance Summary</Text>

      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.metricValue}>56</Text>
          <Text style={styles.metricLabel}>Orders This Month</Text>
        </View>

        <View>
          <Text style={styles.metricValue}>74%</Text>
          <Text style={styles.metricLabel}>Target Achievement</Text>
        </View>

        <View>
          <Text style={styles.metricValue}>42</Text>
          <Text style={styles.metricLabel}>Daily Visits</Text>
        </View>
      </View>
    </View>
  );
}
