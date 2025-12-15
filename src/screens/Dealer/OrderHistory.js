import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function DealerOrderHistory() {
  const [openId, setOpenId] = useState(null);
  const [search, setSearch] = useState("");

  const [filterStatus, setFilterStatus] = useState(null);
  const [filterPayment, setFilterPayment] = useState(null);
  const [sortType, setSortType] = useState(null);

  const [openStatusFilter, setOpenStatusFilter] = useState(false);
  const [openPaymentFilter, setOpenPaymentFilter] = useState(false);
  const [openSortFilter, setOpenSortFilter] = useState(false);

  const orders = [
    {
      id: "DLR-5001",
      date: "2025-12-02",
      total: "₹ 3,250",
      payment: "UPI",
      status: "Delivered",
      deliveryCharge: "₹150",
      tax: "₹120",
      discount: "₹200",
      address: "Shop No. 14, MG Road, Jaipur, Rajasthan",
      timeline: ["Placed", "Packed", "Shipped", "Delivered"],
      items: [
        { name: "Oil Bottle", qty: 4, price: "₹1000" },
        { name: "Masala Pack", qty: 5, price: "₹1250" },
        { name: "Rice Bag", qty: 1, price: "₹1000" },
      ],
    },
    {
      id: "DLR-5002",
      date: "2025-12-01",
      total: "₹ 1,150",
      payment: "COD",
      status: "Pending",
      deliveryCharge: "₹80",
      tax: "₹40",
      discount: "₹0",
      address: "Near Bus Stand, Sikar, Rajasthan",
      timeline: ["Placed", "Packed"],
      items: [
        { name: "Plastic Container", qty: 3, price: "₹450" },
        { name: "Oil Bottle", qty: 1, price: "₹250" },
        { name: "Masala Pack", qty: 2, price: "₹450" },
      ],
    },
    {
      id: "DLR-5003",
      date: "2025-11-29",
      total: "₹ 840",
      payment: "Card",
      status: "Cancelled",
      deliveryCharge: "₹0",
      tax: "₹30",
      discount: "₹50",
      address: "Near Railway Colony, Ajmer, Rajasthan",
      timeline: ["Placed", "Cancelled"],
      items: [{ name: "Masala Pack", qty: 6, price: "₹840" }],
    },
      {
      id: "DLR-5004",
      date: "2025-12-29",
      total: "₹ 840",
      payment: "Card",
      status: "Pending",
      deliveryCharge: "₹0",
      tax: "₹30",
      discount: "₹50",
      address: "Near Railway Colony, Ajmer, Rajasthan",
      timeline: ["Placed", "Cancelled"],
      items: [{ name: "Masala Pack", qty: 6, price: "₹840" }],
    },
      {
      id: "DLR-5006",
      date: "2025-12-29",
      total: "₹ 840",
      payment: "Card",
      status: "Cancelled",
      deliveryCharge: "₹0",
      tax: "₹30",
      discount: "₹50",
      address: "Near Railway Colony, Ajmer, Rajasthan",
      timeline: ["Placed", "Cancelled"],
      items: [{ name: "Masala Pack", qty: 6, price: "₹840" }],
    },
  ];

  // FILTER + SORT LOGIC
  const filteredOrders = orders
    .filter((o) => o.id.toLowerCase().includes(search.toLowerCase()))
    .filter((o) => (filterStatus ? o.status === filterStatus : true))
    .filter((o) => (filterPayment ? o.payment === filterPayment : true))
    .sort((a, b) => {
      if (sortType === "Newest") return new Date(b.date) - new Date(a.date);
      if (sortType === "Oldest") return new Date(a.date) - new Date(b.date);
      if (sortType === "High")
        return parseInt(b.total.replace(/[₹, ]/g, "")) - parseInt(a.total.replace(/[₹, ]/g, ""));
      if (sortType === "Low")
        return parseInt(a.total.replace(/[₹, ]/g, "")) - parseInt(b.total.replace(/[₹, ]/g, ""));
      return 0;
    });

  const toggle = (id) => {
    LayoutAnimation.easeInEaseOut();
    setOpenId(openId === id ? null : id);
  };

  // DROPDOWN COMPONENT
  const RenderDropdown = ({ visible, options, onSelect }) => {
    if (!visible) return null;
    return (
      <View style={styles.dropdownBox}>
        {options.map((o, idx) => (
          <TouchableOpacity key={idx} style={styles.dropdownItem} onPress={() => onSelect(o)}>
            <Text style={styles.dropdownText}>{o}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dealer Order History</Text>

      {/* SEARCH + FILTER BAR */}
      <View style={styles.searchFilterRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color="#64748b" />
          <TextInput
            placeholder="Search Order ID"
            placeholderTextColor="#64748b"
            style={styles.input}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <View style={styles.filtersRow}>
          <TouchableOpacity
            style={styles.filterIconBox}
            onPress={() => {
              setOpenStatusFilter(!openStatusFilter);
              setOpenPaymentFilter(false);
              setOpenSortFilter(false);
            }}
          >
            <Ionicons name="funnel-outline" size={22} color="#0f172a" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterIconBox}
            onPress={() => {
              setOpenPaymentFilter(!openPaymentFilter);
              setOpenStatusFilter(false);
              setOpenSortFilter(false);
            }}
          >
            <Ionicons name="card-outline" size={22} color="#0f172a" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterIconBox}
            onPress={() => {
              setOpenSortFilter(!openSortFilter);
              setOpenPaymentFilter(false);
              setOpenStatusFilter(false);
            }}
          >
            <Ionicons name="swap-vertical-outline" size={22} color="#0f172a" />
          </TouchableOpacity>
        </View>
      </View>

      {/* DROPDOWNS */}
      <RenderDropdown
        visible={openStatusFilter}
        options={["Delivered", "Pending", "Cancelled", "Clear Filter"]}
        onSelect={(o) => {
          setFilterStatus(o === "Clear Filter" ? null : o);
          setOpenStatusFilter(false);
        }}
      />

      <RenderDropdown
        visible={openPaymentFilter}
        options={["UPI", "COD", "Card", "Clear Filter"]}
        onSelect={(o) => {
          setFilterPayment(o === "Clear Filter" ? null : o);
          setOpenPaymentFilter(false);
        }}
      />

      <RenderDropdown
        visible={openSortFilter}
        options={["Newest", "Oldest", "High", "Low", "Clear Sort"]}
        onSelect={(o) => {
          setSortType(o === "Clear Sort" ? null : o);
          setOpenSortFilter(false);
        }}
      />

      {/* ORDER LIST */}
      <FlatList
        data={filteredOrders}
        renderItem={({ item }) => <OrderCard item={item} expandedItem={openId} toggle={toggle} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

// ----------------- ORDER CARD -----------------
function OrderCard({ item, expandedItem, toggle }) {
  const expanded = expandedItem === item.id;
  const navigation = useNavigation();

  const statusColors = {
    Delivered: "#16a34a",
    Pending: "#f59e0b",
    Cancelled: "#ef4444",
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => toggle(item.id)} style={styles.card}>
      <View style={styles.rowBetween}>
        <Text style={styles.orderId}>{item.id}</Text>
        <View style={[styles.badge, { backgroundColor: statusColors[item.status] }]}>
          <Text style={styles.badgeText}>{item.status}</Text>
        </View>
      </View>

      <Text style={styles.date}>Date: {item.date}</Text>

      <View style={styles.rowBetween}>
        <Text style={styles.total}>Total: {item.total}</Text>
        <Text style={styles.payment}>{item.payment}</Text>
      </View>

      <View style={styles.iconBox}>
        <Ionicons name={expanded ? "chevron-up" : "chevron-down"} size={20} color="#0f172a" />
      </View>

      {expanded && (
        <View style={styles.expandedBox}>
          {/* ORDER DETAILS */}
          <View style={styles.sectionCard}>
            <Text style={styles.cardTitle}>Order Details</Text>

            <View style={styles.detailRow}>
              <Ionicons name="document-text-outline" size={18} color="#3b82f6" />
              <Text style={styles.detailValue}>Order ID: {item.id}</Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="calendar-outline" size={18} color="#3b82f6" />
              <Text style={styles.detailValue}>Date: {item.date}</Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="card-outline" size={18} color="#3b82f6" />
              <Text style={styles.detailValue}>Payment: {item.payment}</Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="time-outline" size={18} color="#3b82f6" />
              <Text style={styles.detailValue}>Delivery Type: Express</Text>
            </View>
          </View>

          {/* CUSTOMER INFO */}
          <View style={styles.sectionCard}>
            <Text style={styles.cardTitle}>Customer Information</Text>

            <View style={styles.detailRow}>
              <Ionicons name="person-outline" size={18} color="#3b82f6" />
              <Text style={styles.detailValue}>Ramesh Kumar</Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="call-outline" size={18} color="#3b82f6" />
              <Text style={styles.detailValue}>+91 9876543210</Text>
            </View>

            <View style={{ marginTop: 6 }}>
              <Text style={styles.address}>{item.address}</Text>
            </View>
          </View>

          {/* ITEMS ORDERED */}
          <View style={styles.sectionCard}>
            <Text style={styles.cardTitle}>Items Ordered</Text>

            {item.items.map((i, idx) => (
              <View key={idx} style={styles.itemRow}>
                <Text style={styles.itemName}>{i.name}</Text>
                <Text style={styles.itemQty}>Qty: {i.qty}</Text>
                <Text style={styles.itemPrice}>{i.price}</Text>
              </View>
            ))}
          </View>

          {/* BILLING */}
          <View style={styles.sectionCard}>
            <Text style={styles.cardTitle}>Billing Summary</Text>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Discount</Text>
              <Text style={styles.summaryValue}>{item.discount}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tax</Text>
              <Text style={styles.summaryValue}>{item.tax}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Charge</Text>
              <Text style={styles.summaryValue}>{item.deliveryCharge}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Packing Charge</Text>
              <Text style={styles.summaryValue}>₹30</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Grand Total</Text>
              <Text style={styles.totalValue}>{item.total}</Text>
            </View>
          </View>

          {/* ORDER TIMELINE */}
          <View style={styles.sectionCard}>
            <Text style={styles.cardTitle}>Order Timeline</Text>

            {item.timeline.map((step, index) => (
              <View key={index} style={styles.timelineRow}>
                <Ionicons name="checkmark-circle-outline" size={20} color="#3b82f6" />
                <Text style={styles.timelineText}>{step}</Text>
              </View>
            ))}
          </View>

          {/* TRACK ORDER BUTTON */}
          {item.status !== "Cancelled" && (
            <TouchableOpacity
              style={styles.trackButton}
           onPress={() =>
  navigation.navigate("TrackOrderScreen", {
    order: item,
  })
}

            >
              <Text style={styles.trackButtonText}>Track Order</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

// ----------------- STYLES -----------------
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
  header: { fontSize: 24, fontWeight: "700", color: "#0f172a", marginBottom: 12 },

  // SEARCH FILTER
  searchFilterRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#94a3b8",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 42,
    backgroundColor: "#fff",
  },
  input: { flex: 1, marginLeft: 8, color: "#0f172a" },

  filtersRow: { flexDirection: "row", marginLeft: 10, gap: 8 },
  filterIconBox: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#94a3b8",
    justifyContent: "center",
    alignItems: "center",
  },

  sectionCard: {
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 10,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  detailValue: {
    marginLeft: 8,
    fontSize: 14,
    color: "#475569",
  },

  address: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
  },

  itemName: { color: "#1e293b", fontSize: 14, flex: 1 },
  itemQty: { color: "#64748b", fontSize: 14, width: 60 },
  itemPrice: { color: "#3b82f6", fontSize: 14, width: 70, textAlign: "right" },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  summaryLabel: { color: "#64748b", fontSize: 14 },
  summaryValue: { color: "#1e293b", fontSize: 14 },

  totalLabel: { color: "#1e293b", fontSize: 15, fontWeight: "700" },
  totalValue: { color: "#3b82f6", fontSize: 15, fontWeight: "700" },

  timelineRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  timelineText: { color: "#475569", marginLeft: 8, fontSize: 14 },

  dropdownBox: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#94a3b8",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 180,
  },
  dropdownItem: { paddingVertical: 6 },
  dropdownText: { fontSize: 14, color: "#0f172a" },

  // ORDER CARD
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  orderId: { fontSize: 16, fontWeight: "700", color: "#0f172a" },
  date: { fontSize: 13, color: "#64748b", marginVertical: 4 },
  total: { fontSize: 14, fontWeight: "700", color: "#0f172a" },
  payment: { fontSize: 13, color: "#64748b" },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  badgeText: { color: "#fff", fontWeight: "700", fontSize: 12 },
  iconBox: { alignItems: "center", marginTop: 6 },
  expandedBox: { marginTop: 12, padding: 10, backgroundColor: "#f1f5f9", borderRadius: 10 },

  trackButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  trackButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});
