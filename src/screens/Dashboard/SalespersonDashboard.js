import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


export default function SalespersonDashboard({ setIsLoggedIn }) {
    const navigation = useNavigation(); // 👈 Add this line

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back 👋</Text>
          <Text style={styles.username}>Alex Johnson</Text>
        </View>
        <Ionicons name="person-circle-outline" size={40} color="#fff" />
      </View>

      {/* ✅ Logout button */}
      <TouchableOpacity style={styles.logoutBtn} onPress={() => setIsLoggedIn(false)}>
        <Ionicons name="log-out-outline" size={18} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#aaa" />
        <Text style={styles.searchText}>Search</Text>
      </View>

      {/* JOB SUMMARY */}
      <Text style={styles.sectionTitle}>Order Summary</Text>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Ionicons name="cart-outline" size={28} color="#2563eb" />
          <Text style={styles.summaryNumber}>5</Text>
          <Text style={styles.summaryLabel}>Orders Placed</Text>
        </View>
        <View style={styles.summaryCard}>
          <Ionicons name="calendar-outline" size={28} color="#2563eb" />
          <Text style={styles.summaryNumber}>2</Text>
          <Text style={styles.summaryLabel}>Visits Today</Text>
        </View>
        <View style={styles.summaryCard}>
          <Ionicons name="people-outline" size={28} color="#2563eb" />
          <Text style={styles.summaryNumber}>15</Text>
          <Text style={styles.summaryLabel}>Customers</Text>
        </View>
      </View>

      {/* ACTION CARDS */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={[styles.actionCard, { backgroundColor: '#2563eb' }]} onPress={() => navigation.navigate("NewOrder")} >
          <Ionicons name="add-circle-outline" size={28} color="#fff" />
          <Text style={styles.actionTextLight}>New Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}  onPress={() => navigation.navigate("Orders")}>
          <Ionicons name="people-outline" size={28} color="#2563eb" />

          <Text style={styles.actionText}>Customer List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="calendar-outline" size={28} color="#2563eb" />
          <Text style={styles.actionText}>Visit Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="alert-circle-outline" size={28} color="#ef4444" />
          <Text style={styles.actionText}>Pending Orders</Text>
        </TouchableOpacity>
      </View>

      {/* UPCOMING VISITS */}
      <Text style={styles.sectionTitle}>Upcoming Visits</Text>
      <View style={styles.visitCard}>
        <Text style={styles.visitTitle}>Visit to Dealer: Ricon Pharma</Text>
        <Text style={styles.visitSub}>Thu - Oct 30, 2025 | 10:30 AM</Text>
      </View>
      <View style={styles.visitCard}>
        <Text style={styles.visitTitle}>Visit to Dealer: Groz Tools</Text>
        <Text style={styles.visitSub}>Fri - Oct 31, 2025 | 3:00 PM</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: {
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
  logoutBtn: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: '#ef4444',
    marginTop: 10,
    marginRight: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    gap: 6,
  },
  logoutText: { color: '#fff', fontWeight: '600' },
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
    fontWeight: '600',
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
  summaryNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginTop: 6,
  },
  summaryLabel: { fontSize: 13, color: '#64748b' },
  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 12,
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
});
