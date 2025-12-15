import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CategoriesSidebar({ categories, selectedCat, onSelect }) {
  return (
    <View style={styles.sidebar}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          onPress={() => onSelect(cat)}
          style={[
            styles.catItem,
            selectedCat === cat && styles.catItemActive,
          ]}
        >
          <Text
            style={[styles.catText, selectedCat === cat && styles.catTextActive]}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: "15%",
    backgroundColor: "#4da6ff",
    paddingVertical: 20,
    alignItems: "center",
  },
  catItem: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 12,
    borderRadius: 8,
  },
  catItemActive: {
    backgroundColor: "#4da6ff",
  },
  catText: {
    color: "#ffffffff",
    fontSize: 13,
    textAlign: "center",
  },
  catTextActive: {
    color: "#fff",
    fontWeight: "700",
  },
});
