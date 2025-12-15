import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default function Filters({ selected, onSelect }) {
  const options = ["All", "Pending", "Delivered"];

  return (
    <View style={styles.container}>
      {options.map((opt) => (
        <TouchableOpacity
          key={opt}
          onPress={() => onSelect(opt)}
          style={[
            styles.chip,
            selected === opt && { backgroundColor: colors.primary },
          ]}
        >
          <Text
            style={[
              styles.text,
              selected === opt && { color: "#fff", fontWeight: "600" },
            ]}
          >
            {opt}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 14,
  },
  chip: {
    paddingVertical: 7,
    paddingHorizontal: 18,
    backgroundColor: "#eee",
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 13,
    color: "#333",
  },
});
