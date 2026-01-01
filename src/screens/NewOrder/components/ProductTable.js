import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { Text, Divider } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles";

export default function ProductTable({ selectedProducts, setSelectedProducts }) {
  if (!selectedProducts.length) return null;

  return (
    <View style={styles.tabContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          {/* HEADER */}
          <View style={[styles.tabRow, styles.tabHeaderRow]}>
            <Text style={styles.tabHeader}>Code</Text>
            <Text style={styles.tabHeader}>Product</Text>
            <Text style={styles.tabHeader}>Qty</Text>
            <Text style={styles.tabHeader}>Unit</Text>
            <Text style={styles.tabHeader}>Price</Text>
            <Text style={styles.tabHeader}>Tax</Text>
            <Text style={styles.tabHeader}>Disc</Text>
            <Text style={styles.tabHeader}>Subtotal</Text>
            <Text style={styles.tabHeader} />
          </View>

          <Divider />

          {/* ROWS */}
          {selectedProducts.map((item, index) => (
            <View key={index} style={styles.tabRow}>
              <Text style={styles.tabCell}>{item.code || "-"}</Text>
              <Text style={[styles.tabCell, styles.tabNameCell]}>
                {item.name}
              </Text>
              <Text style={styles.tabCell}>{item.qty}</Text>
              <Text style={styles.tabCell}>{item.unit}</Text>
              <Text style={styles.tabCell}>
                ₹{item.price.toFixed(2)}
              </Text>
              <Text style={styles.tabCell}>{item.tax}%</Text>
              <Text style={styles.tabCell}>{item.discount}%</Text>
              <Text style={[styles.tabCell, styles.tabBoldCell]}>
                ₹{item.subtotal.toFixed(2)}
              </Text>

              <TouchableOpacity
                onPress={() =>
                  setSelectedProducts(
                    selectedProducts.filter((_, i) => i !== index)
                  )
                }
                style={styles.tabDeleteBtn}
              >
                <Ionicons name="trash-outline" size={18} color="#d32f2f" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
