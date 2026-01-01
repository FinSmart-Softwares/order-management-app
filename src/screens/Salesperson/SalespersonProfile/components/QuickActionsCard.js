import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

export default function QuickActionsCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="settings-outline" size={22} color="#334155" />
        <Text style={styles.actionText}>Account Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="key-outline" size={22} color="#334155" />
        <Text style={styles.actionText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="map-outline" size={22} color="#334155" />
        <Text style={styles.actionText}>Today’s Route Plan</Text>
      </TouchableOpacity>
    </View>
  );
}
