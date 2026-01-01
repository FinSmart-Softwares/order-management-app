import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

export default function LogoutButton({ onLogout }) {
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
      <Ionicons name="log-out-outline" size={20} color="#fff" />
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  );
}
