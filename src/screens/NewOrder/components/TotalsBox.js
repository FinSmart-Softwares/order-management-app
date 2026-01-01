import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../styles";

export default function TotalsBox({ calculateTotals }) {
  const { itemsTotal } = calculateTotals();

  return (
    <View style={styles.totalBox}>
      <Text>Total Items: ₹{itemsTotal.toFixed(2)}</Text>
    </View>
  );
}
