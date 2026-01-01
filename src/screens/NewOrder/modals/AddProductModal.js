import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Portal,
  Modal,
  Card,
  TextInput,
  Button,
  Text,
  Divider,
  Menu,
} from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles";

export default function AddProductModal({
  addProductVisible,
  setAddProductVisible,
  selectedProducts,
  setSelectedProducts,
}) {
  // ---------------- STATES ----------------
  const [form, setForm] = useState({
    code: "",
    name: "",
    qty: "1",
    unit: "pcs",
    price: "",
    tax: "5",
    discount: "0",
  });

  const [taxMenuVisible, setTaxMenuVisible] = useState(false);
  const [unitMenuVisible, setUnitMenuVisible] = useState(false);

  const update = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  // ---------------- CALCULATIONS ----------------
  const price = Number(form.price || 0);
  const qty = Number(form.qty || 0);
  const tax = Number(form.tax || 0);
  const discount = Number(form.discount || 0);

  const netUnitPrice = price - (price * discount) / 100;
  const taxAmount = (netUnitPrice * qty * tax) / 100;

  // ---------------- ADD PRODUCT ----------------
  const addProduct = () => {
    if (!form.name || !form.price) return;

    setSelectedProducts([
      ...selectedProducts,
      {
        id: Date.now(),
        code: form.code,
        name: form.name,
        qty,
        unit: form.unit,
        price: netUnitPrice,
        tax,
        discount,
        subtotal: netUnitPrice * qty + taxAmount,
      },
    ]);

    setAddProductVisible(false);
  };

  return (
    <Portal>
      <Modal
        visible={addProductVisible}
        onDismiss={() => setAddProductVisible(false)}
        contentContainerStyle={styles.froModalContainer}
      >
        <Card>
          <Card.Title
            title="ADD PRODUCT MANUALLY"
            right={() => (
              <TouchableOpacity
                onPress={() => setAddProductVisible(false)}
                style={{ marginRight: 12 }}
              >
                <Ionicons name="close" size={22} />
              </TouchableOpacity>
            )}
          />

          <Card.Content>
            {/* PRODUCT CODE */}
            <TextInput
              label="Product Code *"
              value={form.code}
              onChangeText={(v) => update("code", v)}
              style={styles.froModalInput}
            />

            {/* PRODUCT NAME */}
            <TextInput
              label="Product Name *"
              value={form.name}
              onChangeText={(v) => update("name", v)}
              style={styles.froModalInput}
            />

            {/* PRODUCT TAX */}
            <Menu
              visible={taxMenuVisible}
              onDismiss={() => setTaxMenuVisible(false)}
              anchor={
                <TouchableOpacity
                  style={styles.froDropdown}
                  onPress={() => setTaxMenuVisible(true)}
                >
                  <Text>Product Tax: {form.tax}%</Text>
                  <Ionicons name="chevron-down" size={18} />
                </TouchableOpacity>
              }
            >
              {["5", "12", "18"].map((t) => (
                <Menu.Item
                  key={t}
                  title={`${t}%`}
                  onPress={() => {
                    update("tax", t);
                    setTaxMenuVisible(false);
                  }}
                />
              ))}
            </Menu>

            {/* QUANTITY */}
            <TextInput
              label="Quantity *"
              keyboardType="numeric"
              value={form.qty}
              onChangeText={(v) => update("qty", v)}
              style={styles.froModalInput}
            />

            {/* UNIT */}
            <Menu
              visible={unitMenuVisible}
              onDismiss={() => setUnitMenuVisible(false)}
              anchor={
                <TouchableOpacity
                  style={styles.froDropdown}
                  onPress={() => setUnitMenuVisible(true)}
                >
                  <Text>Unit: {form.unit}</Text>
                  <Ionicons name="chevron-down" size={18} />
                </TouchableOpacity>
              }
            >
              {["pcs", "kg", "liter"].map((u) => (
                <Menu.Item
                  key={u}
                  title={u}
                  onPress={() => {
                    update("unit", u);
                    setUnitMenuVisible(false);
                  }}
                />
              ))}
            </Menu>

            {/* DISCOUNT */}
            <TextInput
              label="Product Discount (%)"
              keyboardType="numeric"
              value={form.discount}
              onChangeText={(v) => update("discount", v)}
              style={styles.froModalInput}
            />

            {/* UNIT PRICE */}
            <TextInput
              label="Unit Price *"
              keyboardType="numeric"
              value={form.price}
              onChangeText={(v) => update("price", v)}
              style={styles.froModalInput}
            />

            <Divider style={{ marginVertical: 12 }} />

            {/* SUMMARY */}
            <View style={styles.froSummaryRow}>
              <Text>Net Unit Price</Text>
              <Text>{netUnitPrice.toFixed(2)}</Text>
            </View>

            <View style={styles.froSummaryRow}>
              <Text>Product Tax</Text>
              <Text>{taxAmount.toFixed(2)}</Text>
            </View>

            <Button
              mode="contained"
              style={{ marginTop: 16 }}
              onPress={addProduct}
            >
              Submit
            </Button>
          </Card.Content>
        </Card>
      </Modal>
    </Portal>
  );
}
