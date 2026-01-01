import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { TextInput, Menu, Divider } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles";

export default function OrderMetaFields({
  paymentTerm,
  setPaymentTerm,
  orderTax,
  setOrderTax,
  orderStatus,
  setOrderStatus,
  paymentStatus,
  setPaymentStatus,
  orderDiscount,
  setOrderDiscount,
  shipping,
  setShipping,
}) {
  const [taxMenuVisible, setTaxMenuVisible] = useState(false);
  const [orderStatusMenuVisible, setOrderStatusMenuVisible] = useState(false);
  const [paymentStatusMenuVisible, setPaymentStatusMenuVisible] = useState(false);

  const taxOptions = ["5%", "12%", "18%"];
  const orderStatuses = ["Pending", "Delivered", "Completed"];
  const paymentStatuses = ["Due", "Paid"];

  return (
    <View style={styles.metaContainer}>
      {/* Payment Term */}
      <TextInput
        label="Payment Term"
        placeholder="e.g. 30 Days"
        value={paymentTerm}
          theme={{ roundness: 8 }}

        onChangeText={setPaymentTerm}
        mode="outlined"
        left={<TextInput.Icon icon={() => (
          <Ionicons name="calendar-outline" size={18} />
        )} />}
        style={styles.metaInput}
      />

      {/* Order Tax */}
      <Menu
        visible={taxMenuVisible}
        onDismiss={() => setTaxMenuVisible(false)}
        anchor={
          <Pressable onPress={() => setTaxMenuVisible(true)}>
            <TextInput
              label="Order Tax"
              value={orderTax}
                theme={{ roundness: 8 }}

              mode="outlined"
              editable={false}
              pointerEvents="none"
             
              left={<TextInput.Icon icon={() => (
                <Ionicons name="receipt-outline" size={18} />
              )} />}
              style={styles.metaInput}
            />
          </Pressable>
        }
      >
        {taxOptions.map((tax) => (
          <Menu.Item
            key={tax}
            title={tax}
            onPress={() => {
              setOrderTax(tax);
              setTaxMenuVisible(false);
            }}
          />
        ))}
      </Menu>

      {/* Order Status */}
      <Menu
        visible={orderStatusMenuVisible}
        onDismiss={() => setOrderStatusMenuVisible(false)}
        anchor={
          <Pressable onPress={() => setOrderStatusMenuVisible(true)}>
            <TextInput
              label="Order Status"
              value={orderStatus}
                              theme={{ roundness: 8 }}

              mode="outlined"
              editable={false}
              pointerEvents="none"
              // right={<TextInput.Icon icon="chevron-down" />}
              left={<TextInput.Icon icon={() => (
                <Ionicons name="cube-outline" size={18} />
              )} />}
              style={styles.metaInput}
            />
          </Pressable>
        }
      >
        {orderStatuses.map((status) => (
          <Menu.Item
            key={status}
            title={status}
            onPress={() => {
              setOrderStatus(status);
              setOrderStatusMenuVisible(false);
            }}
          />
        ))}
      </Menu>

      {/* Payment Status */}
      <Menu
        visible={paymentStatusMenuVisible}
        onDismiss={() => setPaymentStatusMenuVisible(false)}
        anchor={
          <Pressable onPress={() => setPaymentStatusMenuVisible(true)}>
            <TextInput
              label="Payment Status"
              value={paymentStatus}
                              theme={{ roundness: 8 }}

              mode="outlined"
              editable={false}
              pointerEvents="none"
              // right={<TextInput.Icon icon="chevron-down" />}
              left={<TextInput.Icon icon={() => (
                <Ionicons name="wallet-outline" size={18} />
              )} />}
              style={styles.metaInput}
            />
          </Pressable>
        }
      >
        {paymentStatuses.map((status) => (
          <Menu.Item
            key={status}
            title={status}
            onPress={() => {
              setPaymentStatus(status);
              setPaymentStatusMenuVisible(false);
            }}
          />
        ))}
      </Menu>

      <Divider style={styles.metaDivider} />

      {/* Order Discount */}
      <TextInput
        label="Order Discount (%)"
        keyboardType="numeric"
                        theme={{ roundness: 8 }}

        value={orderDiscount}
        onChangeText={setOrderDiscount}
        mode="outlined"
        left={<TextInput.Icon icon={() => (
          <Ionicons name="pricetag-outline" size={18} />
        )} />}
        style={styles.metaInput}
      />

      {/* Shipping */}
      <TextInput
        label="Shipping (₹)"
        keyboardType="numeric"
        value={shipping}
                        theme={{ roundness: 8 }}

        onChangeText={setShipping}
        mode="outlined"
        left={<TextInput.Icon icon={() => (
          <Ionicons name="car-outline" size={18} />
        )} />}
        style={styles.metaInput}
      />
    </View>
  );
}
