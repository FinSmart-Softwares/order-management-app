import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

export default function Header({ setProfileMenuVisible }) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Welcome back 👋</Text>
        <Text style={styles.username}>Manager</Text>
      </View>

      <TouchableOpacity onPress={() => setProfileMenuVisible(v => !v)}>
        <Ionicons name="person-circle-outline" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
