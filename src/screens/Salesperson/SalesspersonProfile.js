import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SalespersonProfile({ setIsLoggedIn }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <Text style={styles.title}>Salesperson Profile</Text>

      {/* Basic Info Card */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.name}>Rohit Sharma</Text>
            <Text style={styles.role}>Sales Executive</Text>
          </View>
          <Ionicons name="person-circle-outline" size={60} color="#4da6ff" />
        </View>

        <View style={styles.divider} />

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>rohit.sharma@example.com</Text>

        <Text style={styles.label}>Employee ID</Text>
        <Text style={styles.value}>SP-10234</Text>

        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>+91 98765 44112</Text>
      </View>

      {/* Organization Details */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Organization Details</Text>

        <Text style={styles.label}>Organization</Text>
        <Text style={styles.value}>Global Traders Pvt Ltd</Text>

        <Text style={styles.label}>Branch</Text>
        <Text style={styles.value}>Delhi – Pitampura</Text>

        <Text style={styles.label}>Reporting Manager</Text>
        <Text style={styles.value}>Alex Johnson (Sales Manager)</Text>
      </View>

      {/* Performance Summary */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Performance Summary</Text>

        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.metricValue}>56</Text>
            <Text style={styles.metricLabel}>Orders This Month</Text>
          </View>

          <View>
            <Text style={styles.metricValue}>74%</Text>
            <Text style={styles.metricLabel}>Target Achievement</Text>
          </View>

          <View>
            <Text style={styles.metricValue}>42</Text>
            <Text style={styles.metricLabel}>Daily Visits</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
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

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => setIsLoggedIn(false)}
      >
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, 
    backgroundColor: "#f1f5f9", 
    padding: 20,
     paddingBottom:60,
    marginBottom:50, },

  title: { fontSize: 22, fontWeight: "700", marginBottom: 20, color: "#0f172a" },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 14,
    marginBottom: 18,
    elevation: 3,
  },

  name: { fontSize: 20, fontWeight: "700", color: "#0f172a" },
  role: { fontSize: 14, color: "#475569", marginTop: 2 },

  label: { fontSize: 13, color: "#64748b", marginTop: 12 },
  value: { fontSize: 15, color: "#0f172a", marginTop: 2 },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    color: "#0f172a",
  },
  

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  divider: { height: 1, backgroundColor: "#e2e8f0", marginVertical: 12 },

  metricValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1e293b",
    textAlign: "center",
  },

  metricLabel: {
    fontSize: 11,
    textAlign: "center",
    color: "#64748b",
    marginTop: 4,
    width: 80,
  },

  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  actionText: { marginLeft: 10, fontSize: 15, color: "#334155" },

  logoutButton: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#ef4444",
    padding: 14,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 6,
    fontWeight: "600",
  },
});
