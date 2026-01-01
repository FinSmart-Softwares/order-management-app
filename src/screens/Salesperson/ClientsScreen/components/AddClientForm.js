import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function AddClientForm({ onClose, onSave }) {
  const [newClient, setNewClient] = useState({
    name: "",
    phone: "",
    address: "",
    lastVisit: "",
    nextVisit: "",
    outstanding: "",
    status: "Active",
  });

  return (
    <View style={styles.formOverlay}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Add New Client</Text>

        <TextInput
          placeholder="Client Name"
          style={styles.input}
          value={newClient.name}
          onChangeText={text => setNewClient({ ...newClient, name: text })}
        />

        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          keyboardType="number-pad"
          value={newClient.phone}
          onChangeText={text => setNewClient({ ...newClient, phone: text })}
        />

        <TextInput
          placeholder="Address"
          style={styles.input}
          value={newClient.address}
          onChangeText={text => setNewClient({ ...newClient, address: text })}
        />

        <TextInput
          placeholder="Last Visit (YYYY-MM-DD)"
          style={styles.input}
          value={newClient.lastVisit}
          onChangeText={text => setNewClient({ ...newClient, lastVisit: text })}
        />

        <TextInput
          placeholder="Next Visit (YYYY-MM-DD)"
          style={styles.input}
          value={newClient.nextVisit}
          onChangeText={text => setNewClient({ ...newClient, nextVisit: text })}
        />

        <TextInput
          placeholder="Outstanding Amount (₹)"
          style={styles.input}
          keyboardType="number-pad"
          value={newClient.outstanding}
          onChangeText={text =>
            setNewClient({ ...newClient, outstanding: `₹${text}` })
          }
        />

        <View style={styles.formBtns}>
          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveBtn}
            onPress={() => onSave(newClient)}
          >
            <Text style={{ color: "#fff" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
