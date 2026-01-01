import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { TextInput, Text } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles";

export default function CustomerSelector({
  customers,
  customerSearch,
  setCustomerSearch,
  selectedCustomer,
  setSelectedCustomer,
  setCustomerModal, // 👈 NEW
}) {
  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(customerSearch.toLowerCase())
  );

  return (
    <View style={styles.sectionWrapper}>
    

      {/* INPUT CARD */}
      <View style={styles.customerInputCard}>
        {/* SEARCH ICON */}
        <Ionicons
          name="search-outline"
          size={20}
          style={styles.searchIcon}
        />

        {/* INPUT */}
        <TextInput
          placeholder="Search Customer"
          value={customerSearch}
          onChangeText={setCustomerSearch}
          style={styles.customerInput}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
        />

        {/* ACTION ICONS */}
        <View style={styles.customerActions}>
          {/* VIEW */}
          <TouchableOpacity
            disabled={!selectedCustomer}
            onPress={() =>
              setCustomerModal({ visible: true, mode: "view" })
            }
          >
            <Ionicons
              name="eye-outline"
              size={22}
              style={styles.actionIcon}
            />
          </TouchableOpacity>

          {/* EDIT */}
          <TouchableOpacity
            disabled={!selectedCustomer}
            onPress={() =>
              setCustomerModal({ visible: true, mode: "edit" })
            }
          >
            <Ionicons
              name="pencil-outline"
              size={22}
              style={styles.actionIcon}
            />
          </TouchableOpacity>

          {/* ADD */}
          <TouchableOpacity
            onPress={() =>
              setCustomerModal({ visible: true, mode: "add" })
            }
          >
            <Ionicons
              name="add-circle-outline"
              size={24}
              style={styles.addIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* DROPDOWN LIST */}
      {customerSearch.length > 0 && filtered.length > 0 && (
        <View style={styles.customerDropdown}>
          <ScrollView nestedScrollEnabled>
            {filtered.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.customerItem}
                onPress={() => {
                  setSelectedCustomer(item);
                  setCustomerSearch(item.name);
                }}
              >
                <Text style={styles.customerName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
