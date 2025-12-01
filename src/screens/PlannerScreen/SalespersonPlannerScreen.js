import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dropdown } from 'react-native-element-dropdown';

// Import location data
import { countries, indianStates, citiesByState } from "../../data/locationData";

const SalespersonPlannerScreen = () => {
const [isDatePickerVisible, setDatePickerVisible] = useState(false);
const [openMenuFor, setOpenMenuFor] = useState(null);

  const today = new Date().toISOString().split("T")[0];
const [showCalendar, setShowCalendar] = useState(false);
const [currentTime, setCurrentTime] = useState("");
const [currentDate, setCurrentDate] = useState("");
const [currentDay, setCurrentDay] = useState("");
const [addDealerVisible, setAddDealerVisible] = useState(false);
const [newDealerName, setNewDealerName] = useState("");

  const [visits, setVisits] = useState([]);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(today);
const [dealers, setDealers] = useState([
  { id: "1", name: "Tanishq" },
  { id: "2", name: "Reliance Jewels" },
  { id: "3", name: "Kalyan Jewellers" },
]);

  const [form, setForm] = useState({
    dealer: "",
    time: "",
    date: today,
    country: "",
    state: "",
    city: "",
    address: "",
      status: "Pending", // ⭐ AUTO DEFAULT

  });

  // TIME
  const handleTimeConfirm = (date) => {
    const hr = date.getHours();
    const min = date.getMinutes();
    const formatted = `${hr}:${min < 10 ? "0" + min : min}`;
    setForm({ ...form, time: formatted });
    setTimePickerVisible(false);
  };
// DATE
const handleDateConfirm = (date) => {
  const selected = date.toISOString().split("T")[0];
  setForm({ ...form, date: selected });
  setDatePickerVisible(false);
};

  // SAVE VISIT
  const handleSaveVisit = () => {
    if (!form.dealer.trim()) return;

    const newVisit = {
      id: Date.now().toString(),
      ...form,
    };

    setVisits([...visits, newVisit]);
    setSelectedDate(form.date);

    setForm({
      dealer: "",
      time: "",
      date: today,
      country: "",
      state: "",
      city: "",
      address: "",
        status: "Pending",   // ⭐ keep pending after reset

    });

    setModalVisible(false);
  };

  const filteredVisits = visits.filter(v => v.date === selectedDate);

const renderItem = ({ item }) => {
  const isMenuOpen = openMenuFor === item.id;

  return (
    <View style={styles.visitCard}>

      {/* TOP ROW */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.dealerName}>{item.dealer}</Text>

        {/* STATUS BADGE */}
        <TouchableOpacity
          onPress={() =>
            setOpenMenuFor(isMenuOpen ? null : item.id)
          }
          style={[
            styles.statusBadge,
            item.status === "Pending"
              ? { backgroundColor: "#fde047" }
              : item.status === "Completed"
              ? { backgroundColor: "#4ade80" }
              : { backgroundColor: "#f87171" },
          ]}
        >
          <Text style={styles.statusText}>{item.status}</Text>
        </TouchableOpacity>
      </View>

      {/* STATUS MENU */}
      {isMenuOpen && (
        <View style={styles.statusMenu}>
          <TouchableOpacity
            onPress={() => {
              updateStatus(item.id, "Pending");
              setOpenMenuFor(null);
            }}
          >
            <Text style={styles.statusMenuText}>Pending</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              updateStatus(item.id, "Completed");
              setOpenMenuFor(null);
            }}
          >
            <Text style={styles.statusMenuText}>Completed</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              updateStatus(item.id, "Cancelled");
              setOpenMenuFor(null);
            }}
          >
            <Text style={styles.statusMenuText}>Cancelled</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* OTHER INFO */}
      <Text style={styles.visitTime}>⏰ {item.time}</Text>
      <Text style={styles.visitAddress}>🌍 {item.country}</Text>
      <Text style={styles.visitAddress}>📍 {item.state}, {item.city}</Text>
      <Text style={styles.visitAddress}>🏠 {item.address}</Text>
    </View>
  );
};

  // Calendar marks
  const markedDates = {};
  visits.forEach(v => {
    markedDates[v.date] = { marked: true, dotColor: "#10b981" };
  });

  markedDates[selectedDate] = {
    ...markedDates[selectedDate],
    selected: true,
    selectedColor: "#3b82f6",
    selectedTextColor: "#fff",
  };
React.useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date();

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    setCurrentTime(
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    setCurrentDate(
      now.toLocaleDateString()
    );
    setCurrentDay(weekDays[now.getDay()]);
  }, 1000);

  return () => clearInterval(timer);
}, []);
const handleAddDealer = () => {
  if (!newDealerName.trim()) return;

  const newDealer = {
    id: Date.now().toString(),
    name: newDealerName,
  };

  setDealers([...dealers, newDealer]);           // add to list
  setForm({ ...form, dealer: newDealer.name });  // auto select in form
  setAddDealerVisible(false);
  setNewDealerName("");                          // clear input
};
const updateStatus = (id, newStatus) => {
  const updated = visits.map(v =>
    v.id === id ? { ...v, status: newStatus } : v
  );
  setVisits(updated);
};

  return (
    <View style={styles.container}>
    {/* TOP BAR */}
<View style={styles.topBar}>
  <View>
    <Text style={styles.timeText}>{currentTime}</Text>
    <Text style={styles.dateText}>
      {currentDay}, {currentDate}
    </Text>
  </View>

  <TouchableOpacity onPress={() => setShowCalendar(!showCalendar)}>
    <Ionicons name="calendar" size={32} color="#0f172a" />
  </TouchableOpacity>
</View>

{/* SHOW CALENDAR ONLY IF ICON IS CLICKED */}
{showCalendar && (
  <Calendar
    onDayPress={day => {
      setSelectedDate(day.dateString);
      setShowCalendar(false);
    }}
    markingType="custom"
    markedDates={markedDates}
    style={styles.calendar}
  />
)}


      <Text style={styles.subHeader}>Visits for {selectedDate}</Text>

      {filteredVisits.length > 0 ? (
        <FlatList
          data={filteredVisits}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.emptyText}>No visits scheduled.</Text>
      )}

      {/* ---------------- ADD VISIT MODAL ---------------- */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <ScrollView 
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.modalTitle}>Add Visit</Text>

              {/* Dealer */}
          <View style={{ marginBottom: 15 }}>
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <TextInput
      placeholder="Search Dealer"
      value={form.dealer}
      onChangeText={(t) => setForm({ ...form, dealer: t })}
      style={[styles.input, { flex: 1 }]}
    />

    {/* ADD BUTTON */}
    <TouchableOpacity
      onPress={() => setAddDealerVisible(true)}
      style={{
        backgroundColor: "#2563eb",
        padding: 12,
        marginLeft: 8,
        borderRadius: 10
      }}
    >
      <Ionicons name="add" size={20} color="#fff" />
    </TouchableOpacity>
  </View>

  {/* DROPDOWN FILTER */}
  {form.dealer.length > 0 && (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 12,
        elevation: 4,
        marginTop: 5
      }}
    >
      {dealers
        .filter((d) =>
          d.name.toLowerCase().includes(form.dealer.toLowerCase())
        )
        .map((d) => (
          <TouchableOpacity
            key={d.id}
            onPress={() => setForm({ ...form, dealer: d.name })}
            style={{ padding: 12, borderBottomWidth: 1, borderColor: "#eee" }}
          >
            <Text>{d.name}</Text>
          </TouchableOpacity>
        ))}
    </View>
  )}
</View>


              {/* Time */}
              <TouchableOpacity onPress={() => setTimePickerVisible(true)}>
                <TextInput
                  placeholder="Select Time"
                  value={form.time}
                  editable={false}
                  style={styles.input}
                />
              </TouchableOpacity>
              {/* Date */}
<TouchableOpacity onPress={() => setDatePickerVisible(true)}>
  <TextInput
    placeholder="Select Date"
    value={form.date}
    editable={false}
    style={styles.input}
  />
</TouchableOpacity>

              {/* Country */}
              <View style={{ zIndex: 999 }}>
                <Dropdown
                  data={countries}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Country"
                  value={form.country}
                  onChange={item => {
                    setForm({ ...form, country: item.value, state: "", city: "" });
                  }}
                  style={styles.dropdown}
                  containerStyle={styles.dropdownContainer}
                  maxHeight={250}
                />
              </View>

              {/* State */}
              {form.country === "India" && (
                <View style={{ zIndex: 998 }}>
                  <Dropdown
                    data={indianStates}
                    labelField="label"
                    valueField="value"
                    placeholder="Select State"
                    value={form.state}
                    onChange={item => {
                      setForm({ ...form, state: item.value, city: "" });
                    }}
                    style={styles.dropdown}
                    containerStyle={styles.dropdownContainer}
                    maxHeight={250}
                  />
                </View>
              )}

              {/* City */}
              {form.state !== "" && (
                <View style={{ zIndex: 997 }}>
                  <Dropdown
                    data={
                      citiesByState[form.state]?.map(c => ({ label: c, value: c })) || []
                    }
                    labelField="label"
                    valueField="value"
                    placeholder="Select City"
                    value={form.city}
                    onChange={item => {
                      setForm({ ...form, city: item.value });
                    }}
                    style={styles.dropdown}
                    containerStyle={styles.dropdownContainer}
                    maxHeight={250}
                  />
                </View>
              )}

              {/* Address */}
             <TextInput
  placeholder="Full Address"
  value={form.address}
  onChangeText={(t) => setForm({ ...form, address: t })}
  style={[
    styles.input,
    {
      height: 120,
      paddingTop: 10,
      textAlignVertical: "top",
      borderRadius: 10,
    },
  ]}
  multiline={true}
/>


              {/* Save */}
              <TouchableOpacity style={styles.saveBtn} onPress={handleSaveVisit}>
                <Text style={styles.saveBtnText}>Save</Text>
              </TouchableOpacity>

            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* FAB */}
      <TouchableOpacity
  style={styles.fab}
  onPress={() => {
    console.log("FAB PRESSED");
    setModalVisible(true);
  }}
>
  <Ionicons name="add" size={28} color="#fff" />
</TouchableOpacity>
{/* ADD DEALER SMALL MODAL */}
<Modal visible={addDealerVisible} transparent animationType="fade">
  <View style={styles.modalOverlay}>
    <View style={[styles.modalBox, { maxHeight: "30%" }]}>
      <Text style={styles.modalTitle}>Add Dealer</Text>

      <TextInput
        placeholder="Dealer Name"
        value={newDealerName}
        onChangeText={setNewDealerName}
        style={styles.input}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={handleAddDealer}>
        <Text style={styles.saveBtnText}>Save Dealer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.saveBtn, { backgroundColor: "#dc2626", marginTop: 10 }]}
        onPress={() => setAddDealerVisible(false)}
      >
        <Text style={styles.saveBtnText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

{/* DATE PICKER */}
<DateTimePickerModal
  isVisible={isDatePickerVisible}
  mode="date"
  onConfirm={handleDateConfirm}
  onCancel={() => setDatePickerVisible(false)}
/>
      {/* TIME PICKER */}
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={() => setTimePickerVisible(false)}
      />
      

    </View>
  );
};

export default SalespersonPlannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 16,
    paddingTop: 40,
    marginBottom:60,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  calendar: {
    borderRadius: 20,
    elevation: 3,
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  visitCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 3,
  },
  topBar: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 15,
},
timeText: {
  fontSize: 22,
  fontWeight: "700",
  color: "#0f172a",
},
dateText: {
  fontSize: 14,
  color: "#475569",
},

  dealerName: { fontSize: 16, fontWeight: "700" },
  visitTime: { marginTop: 5, color: "#374151" },
  visitAddress: { marginTop: 3, color: "#6b7280" },
  emptyText: { textAlign: "center", marginTop: 20, color: "#9ca3af" },

  /* FAB */
  statusBadge: {
  paddingVertical: 5,
  paddingHorizontal: 12,
  borderRadius: 12,
},
statusText: {
  fontSize: 12,
  fontWeight: "700",
  color: "#000",
},
statusMenu: {
  position: "absolute",
  right: 10,
  top: 35,
  backgroundColor: "#fff",
  padding: 10,
  borderRadius: 10,
  elevation: 6,
  zIndex: 999,
},
statusMenuText: {
  paddingVertical: 6,
  fontSize: 14,
  color: "#000",
},

  fab: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: "#0f172a",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },

  /* MODAL */
  modalOverlay: {
    flex: 1,
    backgroundColor: "#00000088",
    justifyContent: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 18,
    maxHeight: "85%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  /* INPUTS */
  input: {
    backgroundColor: "#f1f5f9",
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 15,
  },

  /* DROPDOWNS */
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  dropdownContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  saveBtn: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  saveBtnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
}); 