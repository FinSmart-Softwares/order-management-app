import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

import OrderSearchBar from "./components/OrderSearchBar";
import OrderCard from "./components/OrderCard";
import styles from "./styles/orderStyles";

// MOCK DATA
const ordersDataList = [
  {
    id: "2025/11/1318",
    customer: "Walkin Customer",
    deliveryDate: "22/11/2025",
    orderStatus: "Completed",
    grandTotal: "630.00",
    paid: "0.00",
    balance: "630.00",
    time: "21/11/2025 17:36:00",
  },
  {
    id: "2025/11/1317",
    customer: "Walkin Customer",
    deliveryDate: "22/11/2025",
    orderStatus: "Pending",
    grandTotal: "630.00",
    paid: "0.00",
    balance: "630.00",
    time: "21/11/2025 17:36:00",
  },
  {
    id: "2025/11/1319",
    customer: "Walkin Customer",
    deliveryDate: "22/11/2025",
    orderStatus: "Pending",
    grandTotal: "630.00",
    paid: "0.00",
    balance: "630.00",
    time: "21/11/2025 17:36:00",
  },
];

export default function SalespersonOrderScreen() {
  const [searchText, setSearchText] = useState("");

const filteredOrders = ordersDataList.filter((o) => {
  const s = (searchText || "").toLowerCase();
  return (
    o.id.toLowerCase().includes(s) ||
    o.customer.toLowerCase().includes(s)
  );
});


  return (
    <View style={styles.container}>
  <Text style={styles.title}>Order List</Text>
  <OrderSearchBar
    value={searchText}
    onChange={setSearchText}
  />

  <View style={{ flex: 1 }}>
    <FlatList
      data={filteredOrders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <OrderCard item={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    />
  </View>
</View>

  );
}
