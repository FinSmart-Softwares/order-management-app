import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

const OrderCard = ({
  item,
  isSelectMode,
  selectedOrder,
  setSelectedOrder,
  renderOrderStatus,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (isSelectMode) setSelectedOrder(item);
      }}
      style={[
        styles.card,
        selectedOrder?.id === item.id &&
          isSelectMode && {
            borderWidth: 2,
            borderColor: "#2563eb",
          },
      ]}
    >
      {isSelectMode && (
        <View style={styles.checkboxRow}>
          <Ionicons
            name={
              selectedOrder?.id === item.id
                ? "checkbox"
                : "square-outline"
            }
            size={28}
            color="#1d4ed8"
          />
          <Text style={{ marginLeft: 8 }}>Select</Text>
        </View>
      )}

      <View style={styles.topRow}>
        <Text style={styles.time}>{item.time}</Text>
        <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
      </View>

      <Text style={styles.orderId}>Reference No: {item.id}</Text>
      <Text style={styles.customer}>Customer: {item.customer}</Text>
      <Text style={styles.created}>Created By: {item.createdBy}</Text>
      <Text style={styles.delivery}>Delivery: {item.deliveryDate}</Text>
      <Text style={styles.amount}>Total: ₹{item.grandTotal}</Text>

      <View style={styles.rowBetween}>
        <Text style={styles.labelSmall}>Paid: ₹{item.paid}</Text>
        <Text style={styles.labelSmall}>Balance: ₹{item.balance}</Text>
      </View>

      <View style={styles.statusWrapper}>
        {renderOrderStatus(item.orderStatus)}
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
