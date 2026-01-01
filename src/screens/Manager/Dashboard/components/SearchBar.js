import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search-outline" size={20} color="#aaa" />
      <Text style={styles.searchText}>Search</Text>
    </View>
  );
}
