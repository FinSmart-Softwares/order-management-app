import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import colors from "../styles/colors";

export default function Dropdown({ label, options, value, onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.wrapper}>
      {/* Label */}
      <Text style={styles.label}>{label}</Text>

      {/* Selected Box */}
      <TouchableOpacity
        style={styles.box}
        onPress={() => setOpen((prev) => !prev)}
      >
        <Text style={styles.boxText}>{value || "Select"}</Text>
      </TouchableOpacity>

      {/* Dropdown List */}
      {open && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  onSelect(item);
                  setOpen(false);
                }}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    marginBottom: 6,
    color: "#444",
  },
  box: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  boxText: {
    fontSize: 14,
    color: "#333",
  },
  dropdown: {
    marginTop: 6,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    maxHeight: 150,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 14,
    color: "#333",
  },
});
