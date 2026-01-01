import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Calendar } from "react-native-calendars";

import PlannerTopBar from "./components/PlannerTopBar";
import VisitList from "./components/VisitList";
import AddVisitModal from "./components/AddVisitModal";
import AddDealerModal from "./components/AddDealerModal";
import styles from "./styles/plannerStyles";

const today = new Date().toISOString().split("T")[0];

export default function SalespersonPlannerScreen({ navigation }) {
  const [visits, setVisits] = useState([]);
  const [dealers, setDealers] = useState([]);
  const [selectedDate, setSelectedDate] = useState(today);
  const [showCalendar, setShowCalendar] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [addDealerVisible, setAddDealerVisible] = useState(false);

  const [form, setForm] = useState({
    dealer: "",
    time: "",
    date: today,
    address: "",
    status: "Pending",
  });

  const openVisitDetails = visit => {
    navigation.navigate("VisitDetails", {
      visit,
      onComplete: updatedVisit => {
        setVisits(prev =>
          prev.map(v => (v.id === updatedVisit.id ? updatedVisit : v))
        );
      },
    });
  };

  const handleSaveVisit = () => {
    if (!form.dealer.trim()) return;

    setVisits(prev => [
      ...prev,
      { id: Date.now().toString(), ...form },
    ]);
    setModalVisible(false);
  };

  const filteredVisits = visits.filter(v => v.date === selectedDate);

  const markedDates = {};
  visits.forEach(v => {
    markedDates[v.date] = { marked: true, dotColor: "#10b981" };
  });
  markedDates[selectedDate] = {
    ...(markedDates[selectedDate] || {}),
    selected: true,
    selectedColor: "#2563eb",
  };

  return (
    <View style={styles.container}>
      <PlannerTopBar onCalendarPress={() => setShowCalendar(!showCalendar)} />

      {showCalendar && (
        <Calendar
          markedDates={markedDates}
          onDayPress={d => {
            setSelectedDate(d.dateString);
            setShowCalendar(false);
          }}
        />
      )}

      <Text style={styles.subHeader}>Visits for {selectedDate}</Text>

      <VisitList visits={filteredVisits} onOpenDetails={openVisitDetails} />

      <AddVisitModal
        visible={modalVisible}
        form={form}
        setForm={setForm}
        onSave={handleSaveVisit}
        onClose={() => setModalVisible(false)}
        setAddDealerVisible={setAddDealerVisible}
        dealers={dealers}
      />

      <AddDealerModal
        visible={addDealerVisible}
        dealerName={form.dealer}
        setDealerName={name => setForm(p => ({ ...p, dealer: name }))}
        onSave={name => {
          setDealers(p => [...p, name]);
          setForm(p => ({ ...p, dealer: name }));
          setAddDealerVisible(false);
        }}
        onClose={() => setAddDealerVisible(false)}
      />

      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
