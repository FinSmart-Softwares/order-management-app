import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/dashboardStyles";

export default function SummarySection({ title, data }) {
  return (
    <>
      <Text style={styles.sectionTitle}>{title}</Text>

      <View style={styles.summaryContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.summaryCard}>
            <Ionicons
              name={item.icon}
              size={28}
              color="#2563eb"
            />
            <Text style={styles.summaryNumber}>{item.count}</Text>
            <Text style={styles.summaryLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
    </>
  );
}
