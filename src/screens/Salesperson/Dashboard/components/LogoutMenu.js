import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/dashboardStyles";

export default function LogoutMenu({ onProfile, onLogout }) {
  return (
    <View style={styles.popupMenu}>
      <TouchableOpacity style={styles.menuBtn} onPress={onProfile}>
        <Ionicons name="person-outline" size={20} color="#fff" />
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuBtn, { backgroundColor: "#ef4444" }]}
        onPress={onLogout}
      >
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.menuText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
