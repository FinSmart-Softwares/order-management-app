import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { BarChart, PieChart } from "react-native-chart-kit";
import { useState } from 'react';
export default function ManagerDashboard({ setIsLoggedIn }) {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;

  // ----- CONFIG -----
  const CELL_WIDTH = 100;
  const NAME_COL_WIDTH = 140;

  const TIME_SLOTS = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

const engineers = [
  { 
    name: "Stewart Waters", 
    city: "Meerut", 
    slots: [
      { time: "10:21 AM", pos: 2, status: "completed" } 
    ] 
  },
  { 
    name: "Horace Miller", 
    city: "Meerut", 
    slots: [
      { time: "11:40 AM", pos: 3, status: "pending" } 
    ] 
  },
  { 
    name: "Susie Heaney", 
    city: "Meerut", 
    slots: [
      { time: "02:30 PM", pos: 6, status: "cancelled" } 
    ] 
  },
  { 
    name: "Edmund Sanford", 
    city: "Lucknow", 
    slots: [
      { time: "03:10 PM", pos: 7, status: "completed" } 
    ] 
  },
];

const [profileMenuVisible, setProfileMenuVisible] = useState(false);

  const gridWidth = TIME_SLOTS.length * CELL_WIDTH;

  return (
   <View style={{ flex: 1, position: "relative" }}>
  <ScrollView style={styles.container}>


      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back 👋</Text>
          <Text style={styles.username}>Manager</Text>
        </View>
   <TouchableOpacity onPress={() => setProfileMenuVisible(!profileMenuVisible)}>
  <Ionicons name="person-circle-outline" size={40} color="#fff" />
</TouchableOpacity>

      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#aaa" />
        <Text style={styles.searchText}>Search</Text>
      </View>

      {/* ORDER SUMMARY */}
      <Text style={styles.sectionTitle}>Order Summary</Text>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Ionicons name="cart-outline" size={28} color="#2563eb" />
          <Text style={styles.summaryNumber}>32</Text>
          <Text style={styles.summaryLabel}>Total Orders</Text>
        </View>

        <View style={styles.summaryCard}>
          <Ionicons name="checkmark-done-outline" size={28} color="#16a34a" />
          <Text style={styles.summaryNumber}>18</Text>
          <Text style={styles.summaryLabel}>Approved</Text>
        </View>

        <View style={styles.summaryCard}>
          <Ionicons name="close-circle-outline" size={28} color="#dc2626" />
          <Text style={styles.summaryNumber}>07</Text>
          <Text style={styles.summaryLabel}>Pending</Text>
        </View>
      </View>

      {/* BAR CHART */}
      <Text style={styles.sectionTitle}>Monthly Orders</Text>
      <BarChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [{ data: [40, 55, 28, 80, 99] }]
        }}
        width={screenWidth - 20}
        height={220}
        chartConfig={{
          backgroundColor: "#1d4ed8",
          backgroundGradientFrom: "#60a5fa",
          backgroundGradientTo: "#1d4ed8",
          decimalPlaces: 0,
          color: () => `#fff`,
          labelColor: () => `#fff`,
        }}
        style={styles.chartStyle}
      />

      {/* PIE CHART */}
      <Text style={styles.sectionTitle}>Order Status Breakdown</Text>

      <PieChart
        data={[
          { name: "Approved", population: 18, color: "#22c55e", legendFontColor: "#0f172a", legendFontSize: 12 },
          { name: "Pending", population: 7, color: "#eab308", legendFontColor: "#0f172a", legendFontSize: 12 },
          { name: "Rejected", population: 7, color: "#ef4444", legendFontColor: "#0f172a", legendFontSize: 12 }
        ]}
        width={screenWidth - 20}
        height={220}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={15}          // FIXED (number, not string)
        chartConfig={{
          color: () => "#000",
          labelColor: () => "#000",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff"
        }}
      />

      {/* QUICK ACTIONS */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: '#2563eb' }]}
          onPress={() => navigation.navigate("OrdersList")}
        >
          <Ionicons name="list-outline" size={28} color="#fff" />
          <Text style={styles.actionTextLight}>Orders List</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Employees")}
        >
          <Ionicons name="people-outline" size={28} color="#2563eb" />
          <Text style={styles.actionText}>Employees</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("SelectOrg")}
        >
          <Ionicons name="bar-chart-outline" size={28} color="#2563eb" />
          <Text style={styles.actionText}>Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="map-outline" size={28} color="#ef4444" />
          <Text style={styles.actionText}>Tracking</Text>
        </TouchableOpacity>
      </View>

      {/* UPCOMING VISITS */}
      <Text style={styles.sectionTitle}>Upcoming Visits</Text>

      <View style={styles.visitCard}>
        <Text style={styles.visitTitle}>Visit to Ricon Pharma</Text>
        <Text style={styles.visitSub}>Thu - Oct 30, 2025 | 10:30 AM</Text>
      </View>

      <View style={styles.visitCard}>
        <Text style={styles.visitTitle}>Visit to Groz Tools</Text>
        <Text style={styles.visitSub}>Fri - Oct 31, 2025 | 3:00 PM</Text>
      </View>

      <Text style={styles.sectionTitle}>Engineers Timeline</Text>

      <View style={styles.timelineContainer}>

        {/* LEFT FIXED COLUMN + RIGHT SCROLLABLE GRID */}
        <View style={{ flexDirection: "row" }}>

          {/* FIXED NAME COLUMN */}
          <View>
            <View style={{ height: 25 }} />
            {engineers.map((eng, i) => (
              <View key={i} style={[styles.engineerInfo, { height: 50, width: NAME_COL_WIDTH }]}>
                <Text style={styles.engName}>{eng.name}</Text>
                <Text style={styles.engCity}>{eng.city}</Text>
              </View>
            ))}
          </View>

          {/* 👉 ONE SINGLE SCROLL VIEW FOR ALL ROWS */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View>

              {/* HOURS ROW */}
              <View style={{ flexDirection: "row", height: 25 }}>
                {TIME_SLOTS.map((t, i) => (
                  <View key={i} style={[styles.hourCell, { width: CELL_WIDTH }]}>
                    <Text style={styles.hourText}>{t}</Text>
                  </View>
                ))}
              </View>

              {/* ENGINEER TIMELINE ROWS */}
              {engineers.map((eng, idx) => (
                <View key={idx} style={{ flexDirection: "row", height: 50 }}>

                  {/* GRID CELLS */}
                  <View style={{ flexDirection: "row", position: "relative" }}>
                    {TIME_SLOTS.map((_, i) => (
                      <View key={i} style={[styles.gridCell, { width: CELL_WIDTH }]} />
                    ))}

                   {/* SLOT BOXES */}
{eng.slots.map((s, i) => {
  let slotColor = "#dbeafe"; // default (blue-ish)
  if (s.status === "completed") slotColor = "#22c55e"; // green
  else if (s.status === "cancelled") slotColor = "#ef4444"; // red
  else if (s.status === "pending") slotColor = "#3b82f6"; // blue

  return (
    <View
      key={i}
      style={[
        styles.slotBox,
        { left: s.pos * CELL_WIDTH, backgroundColor: slotColor }
      ]}
    >
      <Text style={styles.slotText}>{s.time}</Text>
    </View>
  )
})}

                  </View>

                </View>
              ))}

            </View>
          </ScrollView>

        </View>
      </View>

{profileMenuVisible && (
  <View style={styles.popupMenu}>

    {/* PROFILE BUTTON */}
    <TouchableOpacity
      style={styles.menuBtn}
      onPress={() => {
        setProfileMenuVisible(false);
        navigation.navigate("ManagerProfile");  // GO TO PROFILE PAGE
      }}
    >
      <Ionicons name="person-outline" size={20} color="#fff" />
      <Text style={styles.menuText}>Profile</Text>
    </TouchableOpacity>

    {/* LOGOUT BUTTON */}
    <TouchableOpacity
      style={[styles.menuBtn, { backgroundColor: "#ef4444" }]}
      onPress={() => {
        setIsLoggedIn(false);
        setProfileMenuVisible(false);
      }}
    >
      <Ionicons name="log-out-outline" size={20} color="#fff" />
      <Text style={styles.menuText}>Logout</Text>
    </TouchableOpacity>

  </View>
)}


    </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    // paddingBottom: 40,
    // marginBottom: 40
  },

  header: {
        paddingTop:40,

    backgroundColor: '#0f172a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  greeting: { color: '#cbd5e1', fontSize: 14 },
  username: { color: '#fff', fontSize: 20, fontWeight: '600' },

  searchBar: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 15,
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },

  searchText: { color: '#94a3b8', marginLeft: 8 },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginHorizontal: 16,
    marginTop: 20,
  },

  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 12,
  },

  summaryCard: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 12,
    alignItems: 'center',
    padding: 14,
    elevation: 3,
  },

  summaryNumber: { fontSize: 20, fontWeight: '700', color: '#1e293b', marginTop: 6 },
  summaryLabel: { fontSize: 13, color: '#64748b' },

  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 12,
  },

popupMenu: {
  position: "absolute",
  top: 70,
  right: 20,
 
  // elevation: 8,
  // paddingVertical: 8,
  paddingHorizontal: 0,
  zIndex: 999,
  width: 140,
  flexDirection: "column", // stack items vertically
  alignItems: "stretch",   // button fills width
},

// Logout button inside popup
logoutBtn: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: "#ef4444", // red
  paddingVertical: 10,
  paddingHorizontal: 12,
  borderRadius: 8,
  marginHorizontal: 8,
  marginVertical: 4,
}, 

// Logout text styling
logoutText: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "600",
  marginLeft: 8,
},
menuBtn: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#0f172a",
  paddingVertical: 10,
  paddingHorizontal: 12,
  borderRadius: 8,
  marginHorizontal: 8,
  marginVertical: 4,
},

menuText: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "600",
  marginLeft: 8,
},



  actionCard: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 14,
    paddingVertical: 20,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 3,
  },

  actionText: { color: '#1e293b', fontWeight: '600', marginTop: 6 },
  actionTextLight: { color: '#fff', fontWeight: '600', marginTop: 6 },

  visitCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 12,
    padding: 14,
    elevation: 3,
  },

  visitTitle: { fontSize: 15, fontWeight: '600', color: '#1e293b' },
  visitSub: { color: '#64748b', fontSize: 13, marginTop: 4 },

  chartStyle: {
    marginVertical: 10,
    borderRadius: 12,
    alignSelf: "center"
  },

  timelineContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 16,
    padding: 10,
    borderRadius: 12,
    elevation: 3,
    paddingBottom: 40,
    marginBottom: 40
  },

  hoursRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  hoursRow: {
    flexDirection: "row",
  },

  hourCell: {
    alignItems: "center",
    justifyContent: "center",
  },

  hourText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#475569",
  },

  engineerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  engineerInfo: {
    justifyContent: "center",
    paddingLeft: 8,
  },

  engName: { fontSize: 14, fontWeight: "700", color: "#1e293b" },
  engCity: { fontSize: 12, color: "#64748b" },

  slotRow: { marginLeft: 5, flex: 1 },

  timelineGrid: {
    height: 50,
    position: "relative",
    flexDirection: "row",
  },

  gridCell: {
    borderRightWidth: 1,
    borderColor: "#e2e8f0",
    height: "100%",
  },

  slotBox: {
    position: "absolute",
    backgroundColor: "#dbeafe",
    borderColor: "#60a5fa",
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    top: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  slotText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1e3a8a",
  },
});
