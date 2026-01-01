import React from "react";
import { View, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/orderStyles";

export default function OrderSearchBar({ value, onChange }) {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search-outline" size={22} color="#64748b" />
      <TextInput
        placeholder="Search by reference or customer"
        value={value}
        onChangeText={onChange}
        style={styles.searchInput}
      />
    </View>
  );
}
