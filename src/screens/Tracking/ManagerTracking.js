import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const trackingData = [
  {
    id: "EMP-001",
    name: "Rahul Sharma",
    status: "Online",
    time: "2 min ago",
    location: "Sector 62, Noida",
    map: "https://i.imgur.com/yGWf7HB.png",
  },
  {
    id: "EMP-002",
    name: "Priya Verma",
    status: "Offline",
    time: "Last seen 45 min ago",
    location: "Gomti Nagar, Lucknow",
    map: "https://i.imgur.com/jt8kY5A.png",
  },
  {
    id: "EMP-003",
    name: "Amit Singh",
    status: "Online",
    time: "5 min ago",
    location: "MG Road, Delhi",
    map: "https://i.imgur.com/9Ta7i1Q.png",
  },
];

const ManagerTracking = () => {
  const [searchText, setSearchText] = useState("");

  const getStatusColor = (status) =>
    status === "Online" ? "#16a34a" : "#dc2626";

  const filteredData = trackingData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.location.toLowerCase().includes(searchText.toLowerCase()) ||
      item.id.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      {/* TOP ROW */}
      <View style={styles.rowBetween}>
        <Text style={styles.name}>{item.name}</Text>

        <View
          style={[
            styles.statusBadge,
            { backgroundColor: getStatusColor(item.status) + "22" },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              { color: getStatusColor(item.status) },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>

      {/* LAST SEEN */}
      <Text style={styles.lastSeen}>⏱ {item.time}</Text>

      {/* MAP PREVIEW */}
      <Image source={{ uri: item.map }} style={styles.mapImage} />

      {/* LOCATION */}
      <Text style={styles.location}>📍 {item.location}</Text>

      {/* VIEW BUTTON */}
      <TouchableOpacity style={styles.viewBtn}>
        <Text style={styles.viewBtnText}>View Full Map</Text>
        <Ionicons name="chevron-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Employee Tracking</Text>
        <Ionicons name="map-outline" size={28} color="#334155" />
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={22} color="#64748b" />
        <TextInput
          placeholder="Search employee or location..."
          placeholderTextColor="#94a3b8"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* LIST */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ManagerTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 26,
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
    elevation: 3,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: "#334155",
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 2,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e293b",
  },

  statusBadge: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },

  lastSeen: {
    fontSize: 13,
    color: "#64748b",
    marginVertical: 6,
  },

  mapImage: {
    width: "100%",
    height: 150,
    borderRadius: 14,
    marginVertical: 10,
  },

  location: {
    fontSize: 15,
    color: "#334155",
    marginBottom: 10,
  },

  viewBtn: {
    flexDirection: "row",
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  viewBtnText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
    marginRight: 6,
  },
});
