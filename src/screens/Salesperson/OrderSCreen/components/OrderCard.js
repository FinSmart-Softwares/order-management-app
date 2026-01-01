import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import OrderStatusBadge from "./OrderStatusBadge";
import styles from "../styles/orderStyles";

export default function OrderCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.time}>{item.time}</Text>
        <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
      </View>

      <Text style={styles.orderId}>
        Reference No: {item.id}
      </Text>

      <Text style={styles.customer}>
        Customer: {item.customer}
      </Text>

      <Text style={styles.delivery}>
        Delivery: {item.deliveryDate}
      </Text>

      <Text style={styles.amount}>
        Total: ₹{item.grandTotal}
      </Text>

      <View style={styles.rowBetween}>
        <Text style={styles.labelSmall}>
          Paid: ₹{item.paid}
        </Text>
        <Text style={styles.labelSmall}>
          Balance: ₹{item.balance}
        </Text>
      </View>

      <View style={styles.statusWrapper}>
        <OrderStatusBadge status={item.orderStatus} />
      </View>
    </View>
  );
}
