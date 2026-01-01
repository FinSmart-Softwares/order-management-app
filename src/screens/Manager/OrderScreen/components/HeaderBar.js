import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

const HeaderBar = ({ isSelectMode, onToggle }) => {
  return (
    <View style={styles.headerRow}>
      <Text style={styles.title}>Order List</Text>

      <TouchableOpacity onPress={onToggle}>
        <Ionicons
          name={isSelectMode ? "close-circle-outline" : "add-circle-outline"}
          size={34}
          color="#1d4ed8"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
