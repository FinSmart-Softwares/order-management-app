import React, { useReducer, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { ordersReducer, initialState } from "../../../reducer/ordersReducer";
import { ordersDataList } from "./data/ordersData";

import HeaderBar from "./components/HeaderBar";
import FiltersBar from "./components/FiltersBar";
import OrderCard from "./components/OrderCard";
import BottomWarehousePanel from "./components/BottomWarehousePanel";

import styles from "./styles/styles";

const ManagerOrders = () => {
  const [state, dispatch] = useReducer(ordersReducer, initialState);
  const [orderList, setOrderList] = useState(ordersDataList);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const {
    searchText,
    warehouseFilter,
    orderStatusFilter,
    orderTypeFilter,
  } = state;

  const filteredOrders = orderList.filter((o) => {
    const s = searchText.toLowerCase();

    return (
      (o.customer.toLowerCase().includes(s) ||
        o.id.toLowerCase().includes(s)) &&
      (!warehouseFilter || o.warehouse === warehouseFilter) &&
      (!orderStatusFilter || o.orderStatus === orderStatusFilter) &&
      (!orderTypeFilter || o.orderType === orderTypeFilter)
    );
  });

  const renderOrderStatus = (status) => {
    let bg = "#E5E7EB";
    let color = "#374151";

    if (status === "Pending") {
      bg = "#FEF3C7";
      color = "#B45309";
    } else if (status === "Completed") {
      bg = "#DCFCE7";
      color = "#15803D";
    } else if (status === "Rejected") {
      bg = "#FEE2E2";
      color = "#B91C1C";
    }

    return (
      <View style={[styles.paymentTag, { backgroundColor: bg }]}>
        <Text style={[styles.paymentText, { color }]}>{status}</Text>
      </View>
    );
  };

  const handleWarehouseChange = (warehouse) => {
    setOrderList((prev) =>
      prev.map((o) =>
        o.id === selectedOrder.id ? { ...o, warehouse } : o
      )
    );
    setSelectedOrder(null);
    setIsSelectMode(false);
  };

  return (
    <View style={styles.container}>
      <HeaderBar
        isSelectMode={isSelectMode}
        onToggle={() => {
          setIsSelectMode(!isSelectMode);
          setSelectedOrder(null);
        }}
      />

      {/* SEARCH + DROPDOWNS */}
      <FiltersBar state={state} dispatch={dispatch} />

      <FlatList
        data={filteredOrders}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <OrderCard
            item={item}
            isSelectMode={isSelectMode}
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
            renderOrderStatus={renderOrderStatus}
          />
        )}
      />

      {isSelectMode && selectedOrder && (
        <BottomWarehousePanel onSelect={handleWarehouseChange} />
      )}
    </View>
  );
};

export default ManagerOrders;
