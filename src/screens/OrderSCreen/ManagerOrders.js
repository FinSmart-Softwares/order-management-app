import React, { useReducer, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ordersReducer, initialState } from "../../reducer/ordersReducer";

// ------------------------------------------------
// MOCK ORDERS
// ------------------------------------------------
const ordersDataList = [
  {
    id: "2025/11/1318",
    customer: "Walkin Customer",
    createdBy: "Demo Finsmart",
    deliveryDate: "22/11/2025",
    orderStatus: "Completed",
    orderType: "Staff",
    warehouse: "Warehouse 1",
    grandTotal: "630.00",
    paid: "0.00",
    balance: "630.00",
    paymentStatus: "Due",
    time: "21/11/2025 17:36:00",
  },
  {
    id: "2025/11/1317",
    customer: "Walkin Customer",
    createdBy: "Demo Finsmart",
    deliveryDate: "22/11/2025",
    orderStatus: "Pending",
    orderType: "Staff",
    warehouse: "Warehouse 2",
    grandTotal: "630.00",
    paid: "0.00",
    balance: "630.00",
    paymentStatus: "Paid",
    time: "21/11/2025 17:36:00",
  },
  {
    id: "2025/11/1319",
    customer: "Walkin Customer",
    createdBy: "Demo Finsmart",
    deliveryDate: "22/11/2025",
    orderStatus: "Pending",
    orderType: "Staff",
    warehouse: "Warehouse 2",
    grandTotal: "630.00",
    paid: "0.00",
    balance: "630.00",
    paymentStatus: "Due",
    time: "21/11/2025 17:36:00",
  },
];

const ManagerOrders = () => {
  const [state, dispatch] = useReducer(ordersReducer, initialState);

  // NEW STATE: Select mode + selected order + final list
  const [orderList, setOrderList] = useState(ordersDataList);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const {
    searchText,
    warehouseFilter,
    orderStatusFilter,
    orderTypeFilter,
    openDropdown,
  } = state;

  // ------------------------------------------------
  // FILTERING (NO CHANGE)
  // ------------------------------------------------
  const filteredOrders = orderList.filter((o) => {
    const s = searchText.toLowerCase();

    const matchesSearch =
      o.customer.toLowerCase().includes(s) ||
      o.id.toLowerCase().includes(s);

    const matchesWarehouse =
      !warehouseFilter || o.warehouse === warehouseFilter;

    const matchesStatus =
      !orderStatusFilter || o.orderStatus === orderStatusFilter;

    const matchesType =
      !orderTypeFilter || o.orderType === orderTypeFilter;

    return matchesSearch && matchesWarehouse && matchesStatus && matchesType;
  });

  // ------------------------------------------------
  // STATUS BADGES (NO CHANGE)
  // ------------------------------------------------
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

  const renderPaymentStatus = (status) => {
    let bg = "#E5E7EB";
    let color = "#374151";

    if (status === "Pending") {
      bg = "#FEF3C7";
      color = "#B45309";
    } else if (status === "Due") {
      bg = "#FEE2E2";
      color = "#B91C1C";
    } else if (status === "Completed") {
      bg = "#DCFCE7";
      color = "#15803D";
    }

    return (
      <View style={[styles.paymentTag, { backgroundColor: bg }]}>
        <Text style={[styles.paymentText, { color }]}>{status}</Text>
      </View>
    );
  };

  const Dropdown = ({ options, onSelect }) => (
    <View style={styles.dropdownBox}>
      {options.map((opt) => (
        <TouchableOpacity
          key={opt}
          style={styles.dropdownItem}
          onPress={() => {
            onSelect(opt === "All" ? null : opt);
            dispatch({ type: "CLOSE_DROPDOWN" });
          }}
        >
          <Text style={styles.dropdownText}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  // ------------------------------------------------
  // RENDER ORDER WITH SELECT CHECKBOX (NEW)
  // ------------------------------------------------
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        if (isSelectMode) setSelectedOrder(item);
      }}
      style={[
        styles.card,
        selectedOrder?.id === item.id && isSelectMode && {
          borderWidth: 2,
          borderColor: "#2563eb",
        },
      ]}
    >
      {/* NEW: Checkbox */}
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

      <View style={styles.statusWrapper}>{renderOrderStatus(item.orderStatus)}</View>
    </TouchableOpacity>
  );

  // ------------------------------------------------
  // CHANGE WAREHOUSE FUNCTION
  // ------------------------------------------------
  const handleWarehouseChange = (newWarehouse) => {
    const updated = orderList.map((o) =>
      o.id === selectedOrder.id ? { ...o, warehouse: newWarehouse } : o
    );

    setOrderList(updated);
    setSelectedOrder(null);
    setIsSelectMode(false);
  };

  // ------------------------------------------------
  // MAIN UI
  // ------------------------------------------------
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Order List</Text>

        {/* NEW: Add Icon */}
        <TouchableOpacity
          onPress={() => {
            setIsSelectMode(!isSelectMode);
            setSelectedOrder(null);
          }}
        >
          <Ionicons
            name={isSelectMode ? "close-circle-outline" : "add-circle-outline"}
            size={34}
            color="#1d4ed8"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.filterRow}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={22} />
          <TextInput
            placeholder="Search orders…"
            style={styles.searchInput}
            value={searchText}
            onChangeText={(t) => dispatch({ type: "SET_SEARCH", payload: t })}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          {/* WAREHOUSE FILTER ICON */}
          <View style={{ marginHorizontal: 6 }}>
            <TouchableOpacity
              onPress={() =>
                dispatch({ type: "TOGGLE_DROPDOWN", payload: "warehouse" })
              }
            >
              <Ionicons name="business-outline" size={28} color="#334155" />
            </TouchableOpacity>

            {openDropdown === "warehouse" && (
              <View style={styles.dropdownAbsolute}>
                <Dropdown
                  options={["All", "Warehouse 1", "Warehouse 2", "Warehouse 3"]}
                  onSelect={(v) =>
                    dispatch({ type: "SET_WAREHOUSE", payload: v })
                  }
                />
              </View>
            )}
          </View>

          {/* STATUS FILTER */}
          <View style={{ marginHorizontal: 6 }}>
            <TouchableOpacity
              onPress={() =>
                dispatch({ type: "TOGGLE_DROPDOWN", payload: "status" })
              }
            >
              <Ionicons name="swap-vertical-outline" size={28} color="#334155" />
            </TouchableOpacity>

            {openDropdown === "status" && (
              <View style={styles.dropdownAbsolute}>
                <Dropdown
                  options={["All", "Pending", "Completed", "Rejected"]}
                  onSelect={(v) =>
                    dispatch({ type: "SET_ORDER_STATUS", payload: v })
                  }
                />
              </View>
            )}
          </View>

          {/* ORDER TYPE FILTER */}
          <View style={{ marginHorizontal: 6 }}>
            <TouchableOpacity
              onPress={() =>
                dispatch({ type: "TOGGLE_DROPDOWN", payload: "type" })
              }
            >
              <Ionicons name="funnel-outline" size={28} color="#334155" />
            </TouchableOpacity>

            {openDropdown === "type" && (
              <View style={styles.dropdownAbsolute}>
                <Dropdown
                  options={["All", "Staff", "Shop Order"]}
                  onSelect={(v) =>
                    dispatch({ type: "SET_ORDER_TYPE", payload: v })
                  }
                />
              </View>
            )}
          </View>
        </View>
      </View>

      <FlatList data={filteredOrders} keyExtractor={(i) => i.id} renderItem={renderItem} />

      {/* NEW: BOTTOM ACTION BAR */}
      {isSelectMode && selectedOrder && (
        <View style={styles.bottomPanel}>
          <Text style={styles.bottomTitle}>Change Warehouse</Text>

          {["Warehouse 1", "Warehouse 2", "Warehouse 3"].map((wh) => (
            <TouchableOpacity
              key={wh}
              style={styles.bottomOption}
              onPress={() => handleWarehouseChange(wh)}
            >
              <Text style={styles.bottomOptionText}>{wh}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default ManagerOrders;

// ------------------------------------------------
// SAME STYLES + NEW STYLES (ADDED BELOW)
// ------------------------------------------------
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc", padding: 16, paddingTop: 50 },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: { fontSize: 26, fontWeight: "700", marginBottom: 16 },

  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  searchBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    elevation: 3,
    flex: 1,
    marginRight: 12,
  },

  searchInput: { flex: 1, marginLeft: 10 },

  dropdownAbsolute: {
    position: "absolute",
    top: 40,
    right: 0,
    zIndex: 999,
  },

  dropdownBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 4,
    paddingVertical: 6,
    width: 160,
  },

  dropdownItem: { padding: 10 },
  dropdownText: { fontSize: 15, fontWeight: "600" },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginTop: 16,
    elevation: 3,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  topRow: { flexDirection: "row", justifyContent: "space-between" },
  time: { color: "#475569" },

  orderId: { fontSize: 16, fontWeight: "700" },
  customer: { marginTop: 4 },
  created: { marginTop: 4 },
  delivery: { marginTop: 4 },
  amount: { marginTop: 6, fontWeight: "700" },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },

  statusWrapper: { alignSelf: "flex-end", marginTop: 10 },

  paymentTag: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  paymentText: { fontWeight: "700" },

  // BOTTOM PANEL
  bottomPanel: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },

  bottomTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  bottomOption: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#e2e8f0",
    marginTop: 8,
  },

  bottomOptionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },
});
