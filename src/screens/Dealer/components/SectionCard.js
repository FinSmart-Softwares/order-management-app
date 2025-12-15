import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default function SectionCard({ title, children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ marginTop: 8 }}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
  },
});
