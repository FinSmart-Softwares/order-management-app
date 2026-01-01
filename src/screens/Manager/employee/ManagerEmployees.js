import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const employeesData = [
  {
    id: "EMP-001",
    name: "Rahul Sharma",
    role: "Salesman",
    phone: "9876543210",
    status: "Online",
    orders: 42,
    visits: 18,
    lastActive: "2 min ago",
  },
  {
    id: "EMP-002",
    name: "Priya Verma",
    role: "Salesman",
    phone: "9123456780",
    status: "Offline",
    orders: 31,
    visits: 10,
    lastActive: "1 hr ago",
  },
  {
    id: "EMP-003",
    name: "Amit Singh",
    role: "Salesman",
    phone: "9765432100",
    status: "Online",
    orders: 58,
    visits: 25,
    lastActive: "Just now",
  },
  {
    id: "EMP-004",
    name: "Neha Gupta",
    role: "Salesman",
    phone: "9998887777",
    status: "Offline",
    orders: 0,
    visits: 0,
    lastActive: "Yesterday",
  },
];

const ManagerEmployees = () => {
  const [searchText, setSearchText] = useState("");

  // SEARCH
  const filteredEmployees = employeesData.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchText.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchText.toLowerCase()) ||
      emp.phone.includes(searchText)
  );

  const getStatusColor = (status) =>
    status === "Online" ? "#16a34a" : "#dc2626";

  const getRoleIcon = (role) => {
    if (role === "Salesman") return "person-outline";
    if (role === "Supervisor") return "shield-half-outline";
    if (role === "Manager") return "briefcase-outline";
    return "person-outline";
  };

  const getPerformance = (orders) => {
    if (orders >= 50) return { text: "High", color: "#16a34a" };
    if (orders >= 20) return { text: "Average", color: "#f97316" };
    return { text: "Low", color: "#dc2626" };
  };

  const renderItem = ({ item }) => {
    const performance = getPerformance(item.orders);

    return (
      <TouchableOpacity style={styles.empRow}>
        <View style={styles.iconBox}>
          <Ionicons name={getRoleIcon(item.role)} size={28} color="#1e293b" />
        </View>

        <View style={{ flex: 1, marginLeft: 14 }}>
          {/* NAME & STATUS */}
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.empID}>{item.id}</Text>
            </View>

            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.statusDot,
                  { backgroundColor: getStatusColor(item.status) },
                ]}
              />
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>

          {/* PHONE */}
          <View style={styles.rowBetween}>
            <Text style={styles.phone}>📞 {item.phone}</Text>

            <TouchableOpacity style={styles.callBtn}>
              <Ionicons name="call-outline" size={18} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* ROLE & STATS */}
          <View style={styles.rowBetween}>
            <View
              style={[
                styles.roleBadge,
                { backgroundColor: "#e0e7ff" },
              ]}
            >
              <Text style={[styles.roleText]}>{item.role}</Text>
            </View>

            <Text style={styles.stats}>
              Orders: {item.orders} | Visits: {item.visits}
            </Text>
          </View>

          {/* PERFORMANCE + LAST ACTIVE */}
          <View style={styles.rowBetween}>
            <Text style={[styles.performance, { color: performance.color }]}>
              Performance: {performance.text}
            </Text>

            <Text style={styles.lastActive}>Last active: {item.lastActive}</Text>
          </View>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#9ca3af" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Employee Management</Text>
        <Ionicons name="people-outline" size={28} color="#334155" />
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={22} color="#64748b" />
        <TextInput
          placeholder="Search employee name, ID, phone..."
          placeholderTextColor="#94a3b8"
          style={styles.searchInput}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      {/* LIST */}
      <FlatList
        data={filteredEmployees}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ManagerEmployees;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2ff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1e293b",
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
    marginBottom: 18,
    elevation: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: "#334155",
  },

  empRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  iconBox: {
    width: 56,
    height: 56,
    backgroundColor: "#dbeafe",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e293b",
  },

  empID: {
    fontSize: 13,
    color: "#64748b",
  },

  phone: {
    fontSize: 14,
    color: "#475569",
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },

  statusText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1e293b",
  },

  callBtn: {
    backgroundColor: "#10b981",
    padding: 8,
    borderRadius: 10,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },

  roleBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
  },

  roleText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#4f46e5",
  },

  stats: {
    fontSize: 13,
    fontWeight: "600",
    color: "#475569",
  },

  performance: {
    fontSize: 13,
    fontWeight: "700",
  },

  lastActive: {
    fontSize: 12,
    color: "#64748b",
  },
});
