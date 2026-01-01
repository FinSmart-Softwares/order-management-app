import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const Dropdown = ({ options, onSelect, dispatch }) => {
  return (
    <View style={styles.dropdownBox}>
      {options.map((opt) => (
        <TouchableOpacity
          key={opt}
          style={styles.dropdownItem}
          onPress={() => {
            onSelect(opt === "All" ? null : opt);
            dispatch({ type: "CLOSE_DROPDOWN" });
          }}
        >
          <Text style={styles.dropdownText}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Dropdown;
