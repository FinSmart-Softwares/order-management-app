import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { TextInput, Button, Text, Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles";

export default function ProductSearch({
  products,
  searchQuery,
  setSearchQuery,
  selectedProducts,
  setSelectedProducts,
  setAddProductVisible,
}) {
  return (
    <View style={styles.proContainer}>
      {/* SEARCH CARD */}
      <Card style={styles.proSearchCard}>
        <View style={styles.proSearchRow}>
          <Ionicons name="search-outline" size={20} color="#777" />

          <TextInput
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            mode="flat"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            style={styles.proInput}
          />

          {/* ADD ICON INSIDE CARD */}
          <TouchableOpacity
            style={styles.proAddIcon}
            onPress={() => setAddProductVisible(true)}
          >
            <Ionicons name="add" size={20} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </Card>

      {/* SEARCH RESULT */}
      {searchQuery !== "" && (
        <Card style={styles.proResultCard}>
          <FlatList
            data={products.filter((p) =>
              p.name.toLowerCase().includes(searchQuery.toLowerCase())
            )}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.proProductRow}>
                <View>
                  <Text style={styles.proProductName}>{item.name}</Text>
                  <Text style={styles.proProductPrice}>₹{item.price}</Text>
                </View>

                <Button
                  mode="outlined"
                  compact
                  onPress={() =>
                    setSelectedProducts([
                      ...selectedProducts,
                      {
                        ...item,
                        qty: 1,
                        discount: 0,
                        tax: 0,
                        subtotal: item.price,
                      },
                    ])
                  }
                >
                  Add
                </Button>
              </View>
            )}
          />
        </Card>
      )}
    </View>
  );
}
