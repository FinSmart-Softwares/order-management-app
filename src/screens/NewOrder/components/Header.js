import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import styles from "../styles";

export default function Header({ onSave }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>New Sales Order</Text>
      <TouchableOpacity onPress={onSave}>
        <Text style={styles.headerSave}>💾 Save</Text>
      </TouchableOpacity>
    </View>
  );
}
