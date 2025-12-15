import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SalespersonClientScreen() {
  // -------------------------------
  // ALL HOOKS AT VERY TOP
  // -------------------------------
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [clients, setClients] = useState([
    {
      id: "1",
      name: "Apex Traders",
      phone: "9876543210",
      address: "Station Road, Lucknow",
      lastVisit: "2025-11-20",
      outstanding: "₹12,500",
      status: "Active",
      nextVisit: "2025-12-05",
    },
    {
      id: "2",
      name: "Sharma Electronics",
      phone: "9658423012",
      address: "Sector 18, Noida",
      lastVisit: "2025-11-10",
      outstanding: "₹7,800",
      status: "Inactive",
      nextVisit: "2025-12-18",
    },
    {
      id: "3",
      name: "RK Hardware",
      phone: "9123456700",
      address: "Gandhi Nagar, Kanpur",
      lastVisit: "2025-11-28",
      outstanding: "₹0",
      status: "Active",
      nextVisit: "2025-12-03",
    },
  ]);

  const [newClient, setNewClient] = useState({
    name: "",
    phone: "",
    address: "",
    lastVisit: "",
    nextVisit: "",
    outstanding: "",
    status: "Active",
  });

  // -------------------------------
  // SAVE NEW CLIENT
  // -------------------------------
  const handleSaveClient = () => {
    if (!newClient.name.trim()) return;

    const newEntry = {
      id: Date.now().toString(),
      ...newClient,
    };

    setClients((prev) => [...prev, newEntry]);
    setShowForm(false);

    setNewClient({
      name: "",
      phone: "",
      address: "",
      lastVisit: "",
      nextVisit: "",
      outstanding: "",
      status: "Active",
    });
  };

  // -------------------------------
  // UI RETURN
  // -------------------------------
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Client Directory</Text>
        <Text style={styles.subtitle}>
          Manage customers, track visits & outstanding
        </Text>
      </View>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={22} color="#666" />
        <TextInput
          placeholder="Search clients by name, phone..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
        <Ionicons name="options-outline" size={22} color="#666" />
      </View>

      {/* STATS */}
      <View style={styles.statsBox}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{clients.length}</Text>
          <Text style={styles.statLabel}>Total Clients</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            ₹
            {clients.reduce(
              (sum, c) => sum + parseInt(c.outstanding.replace(/[₹,]/g, "")),
              0
            )}
          </Text>
          <Text style={styles.statLabel}>Total Outstanding</Text>
        </View>
      </View>

      {/* ADD CLIENT FORM */}
      {showForm && (
        <View style={styles.formOverlay}>
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Add New Client</Text>

            <TextInput
              placeholder="Client Name"
              style={styles.input}
              value={newClient.name}
              onChangeText={(text) => setNewClient({ ...newClient, name: text })}
            />
            <TextInput
              placeholder="Phone Number"
              style={styles.input}
              keyboardType="number-pad"
              value={newClient.phone}
              onChangeText={(text) =>
                setNewClient({ ...newClient, phone: text })
              }
            />
            <TextInput
              placeholder="Address"
              style={styles.input}
              value={newClient.address}
              onChangeText={(text) =>
                setNewClient({ ...newClient, address: text })
              }
            />
            <TextInput
              placeholder="Last Visit (YYYY-MM-DD)"
              style={styles.input}
              value={newClient.lastVisit}
              onChangeText={(text) =>
                setNewClient({ ...newClient, lastVisit: text })
              }
            />
            <TextInput
              placeholder="Next Visit (YYYY-MM-DD)"
              style={styles.input}
              value={newClient.nextVisit}
              onChangeText={(text) =>
                setNewClient({ ...newClient, nextVisit: text })
              }
            />
            <TextInput
              placeholder="Outstanding Amount (₹)"
              style={styles.input}
              keyboardType="number-pad"
              value={newClient.outstanding}
              onChangeText={(text) =>
                setNewClient({ ...newClient, outstanding: `₹${text}` })
              }
            />

            <View style={styles.formBtns}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setShowForm(false)}
              >
                <Text style={{ color: "#333" }}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.saveBtn} onPress={handleSaveClient}>
                <Text style={{ color: "#fff" }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {/* LIST */}
      <FlatList
        data={clients.filter((c) =>
          c.name.toLowerCase().includes(search.toLowerCase())
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Ionicons name="person-circle-outline" size={45} color="#444" />

            <View style={{ marginLeft: 12, flex: 1 }}>
              <Text style={styles.clientName}>{item.name}</Text>
              <Text style={styles.clientPhone}>{item.phone}</Text>
              <Text style={styles.clientAddress}>{item.address}</Text>

              <Text style={styles.smallText}>Last Visit: {item.lastVisit}</Text>
              <Text style={styles.smallText}>Next Visit: {item.nextVisit}</Text>

              <Text style={styles.outstanding}>Outstanding: {item.outstanding}</Text>
            </View>

            {/* STATUS */}
            <View
              style={[
                styles.statusBadge,
                item.status === "Active"
                  ? { backgroundColor: "#D1FAD7" }
                  : { backgroundColor: "#FFD6D6" },
              ]}
            >
              <Text
                style={{
                  color: item.status === "Active" ? "#0A8A1F" : "#B00000",
                  fontWeight: "bold",
                }}
              >
                {item.status}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={22} color="#777" />
          </TouchableOpacity>
        )}
      />

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={() => setShowForm(true)}>
        <Ionicons name="add" size={33} color="white" />
      </TouchableOpacity>
    </View>
  );
}

// ---------------------------------
// STYLES
// ---------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  header: {
    padding: 20,
    backgroundColor: "#0047BA",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#E0E0E0",
    fontSize: 14,
    marginTop: 4,
  },

  searchContainer: {
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 3,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  statsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginBottom: 10,
  },

  statItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    elevation: 2,
    width: "48%",
  },

  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  statLabel: {
    marginTop: 3,
    fontSize: 13,
    color: "#666",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    alignItems: "center",
  },

  clientName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  clientPhone: {
    color: "#555",
    marginTop: 2,
  },

  clientAddress: {
    color: "#666",
    marginTop: 2,
    fontSize: 13,
  },

  smallText: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },

  outstanding: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600",
    color: "#B00020",
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 8,
  },

  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#0047BA",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },

  formOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 50,
  },

  formContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 10,
  },

  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#F1F1F1",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  formBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  cancelBtn: {
    backgroundColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  saveBtn: {
    backgroundColor: "#0047BA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
