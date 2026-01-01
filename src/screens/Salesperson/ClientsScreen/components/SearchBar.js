import React from "react";
import { View, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

export default function SearchBar({ search, setSearch }) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={22} color="#666" />
      <TextInput
        placeholder="Search clients by name, phone..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />
      <Ionicons name="options-outline" size={22} color="#666" />
    </View>
  );
}
