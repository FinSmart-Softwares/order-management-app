import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const trackingData = [
  {
    id: "EMP-001",
    name: "Rahul Sharma",
    status: "Online",
    latitude: 28.6272,
    longitude: 77.3686,
  },
  {
    id: "EMP-002",
    name: "Priya Verma",
    status: "Offline",
    latitude: 26.8467,
    longitude: 80.9462,
  },
  {
    id: "EMP-003",
    name: "Amit Singh",
    status: "Online",
    latitude: 28.5672,
    longitude: 77.2100,
  },
];

export default function ManagerTracking() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Employee Live Tracking</Text>

      <FlatList
        data={trackingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.left}>
              <Ionicons
                name="person-circle"
                size={40}
                color={item.status === "Online" ? "green" : "gray"}
              />
            </View>

            <View style={styles.middle}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.id}>{item.id}</Text>
              <Text>
                Lat: {item.latitude} | Lng: {item.longitude}
              </Text>
            </View>

            <View style={styles.right}>
              <Text
                style={{
                  color: item.status === "Online" ? "green" : "red",
                  fontWeight: "700",
                }}
              >
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  left: {
    marginRight: 12,
  },
  middle: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  id: {
    color: "#666",
    marginBottom: 4,
  },
  right: {
    alignItems: "flex-end",
  },
});
