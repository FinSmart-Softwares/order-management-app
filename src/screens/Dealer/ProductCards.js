import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ProductCards({ products }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>

      {/* ❗ FIX: remove uri wrapper */}
      <Image source={item.image} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹ {item.price}</Text>

      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="cart-outline" size={18} color="#000" />
        <Text style={styles.addTxt}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111",
    width: "48%",
    borderRadius: 22,
    padding: 14,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 16,
    marginBottom: 12,
  },
  name: {
    color: "#FFD75E",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  price: {
    color: "#FF5733",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 14,
  },
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD75E",
    paddingVertical: 8,
    justifyContent: "center",
    borderRadius: 12,
  },
  addTxt: {
    color: "#000",
    marginLeft: 6,
    fontWeight: "700",
    fontSize: 14,
  },
});
