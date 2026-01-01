import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/dashboardStyles";

export default function DashboardHeader({ onProfilePress }) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Welcome back 👋</Text>
        <Text style={styles.username}>Alex Johnson</Text>
      </View>

      <TouchableOpacity onPress={onProfilePress}>
        <Ionicons name="person-circle-outline" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
