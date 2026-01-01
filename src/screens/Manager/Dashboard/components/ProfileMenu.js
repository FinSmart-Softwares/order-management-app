import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

export default function ProfileMenu({
  navigation,
  setIsLoggedIn,
  setProfileMenuVisible,
}) {
  return (
    <View style={styles.popupMenu}>
      <TouchableOpacity
        style={styles.menuBtn}
        onPress={() => {
          setProfileMenuVisible(false);
          navigation.navigate("ManagerProfile");
        }}
      >
        <Ionicons name="person-outline" size={20} color="#fff" />
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuBtn, { backgroundColor: "#ef4444" }]}
        onPress={() => {
          setIsLoggedIn(false);
          setProfileMenuVisible(false);
        }}
      >
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.menuText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
