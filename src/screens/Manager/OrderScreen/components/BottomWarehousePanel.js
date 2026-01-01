import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const BottomWarehousePanel = ({ onSelect }) => {
  return (
    <View style={styles.bottomPanel}>
      <Text style={styles.bottomTitle}>Change Warehouse</Text>

      {["Warehouse 1", "Warehouse 2", "Warehouse 3"].map((wh) => (
        <TouchableOpacity
          key={wh}
          style={styles.bottomOption}
          onPress={() => onSelect(wh)}
        >
          <Text style={styles.bottomOptionText}>{wh}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomWarehousePanel;
