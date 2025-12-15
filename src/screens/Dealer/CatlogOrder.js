import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import CategoriesSidebar from "./CategoriesSidebar";
import ProductCards from "./ProductCards";

// 👉 STEP 1: Import local images correctly
import oilImage from "../../assets/images/oil.jpg";
import masalaImage from "../../assets/images/garam.jpg";
import riceImage from "../../assets/images/rice.png";

export default function CatalogOrder() {
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = ["All", "Oil", "Masala", "Grocery", "Bags"];

  // 👉 STEP 2: Local product list
  const products = [
    {
      id: "1",
      name: "Premium Oil Bottle",
      category: "Oil",
      price: "₹250",
      image: oilImage,
    },
    {
      id: "2",
      name: "Masala Pack",
      category: "Masala",
      price: "₹120",
      image: masalaImage,
    },
    {
      id: "3",
      name: "Rice Bag",
      category: "Bags",
      price: "₹520",
      image: riceImage,
    },
  ];

  const filteredProducts =
    selectedCat === "All"
      ? products
      : products.filter((p) => p.category === selectedCat);

  return (
    <View style={styles.mainContainer}>
      <CategoriesSidebar
        categories={categories}
        selectedCat={selectedCat}
        onSelect={setSelectedCat}
      />

      <View style={styles.rightArea}>
        <ProductCards products={filteredProducts} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  rightArea: {
    width: "88%",
    padding: 16,
  },
});
