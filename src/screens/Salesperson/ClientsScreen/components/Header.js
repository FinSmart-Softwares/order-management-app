import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Client Directory</Text>
      <Text style={styles.subtitle}>
        Manage customers, track visits & outstanding
      </Text>
    </View>
  );
}
