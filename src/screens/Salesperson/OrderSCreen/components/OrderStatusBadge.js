import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/orderStyles";

export default function OrderStatusBadge({ status }) {
  let bg = "#E5E7EB";
  let color = "#374151";

  if (status === "Pending") {
    bg = "#FEF3C7";
    color = "#B45309";
  } else if (status === "Completed") {
    bg = "#DCFCE7";
    color = "#15803D";
  }

  return (
    <View style={[styles.statusTag, { backgroundColor: bg }]}>
      <Text style={[styles.statusText, { color }]}>
        {status}
      </Text>
    </View>
  );
}
