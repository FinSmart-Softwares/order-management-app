import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StatsBox from "./components/StatsBox";
import ClientCard from "./components/ClientCard";
import AddClientForm from "./components/AddClientForm";

import styles from "./styles/styles";

export default function SalespersonClientScreen() {
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

  const handleSaveClient = (newClient) => {
    const newEntry = {
      id: Date.now().toString(),
      ...newClient,
    };

    setClients(prev => [...prev, newEntry]);
    setShowForm(false);
  };

  return (
    <View style={styles.container}>
      <Header />

      <SearchBar search={search} setSearch={setSearch} />

      <StatsBox clients={clients} />

      {showForm && (
        <AddClientForm
          onClose={() => setShowForm(false)}
          onSave={handleSaveClient}
        />
      )}

      <FlatList
        data={clients.filter(c =>
          c.name.toLowerCase().includes(search.toLowerCase())
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => <ClientCard item={item} />}
      />

      <TouchableOpacity style={styles.fab} onPress={() => setShowForm(true)}>
        <Ionicons name="add" size={33} color="white" />
      </TouchableOpacity>
    </View>
  );
}
