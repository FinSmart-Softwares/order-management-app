import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../styles/plannerStyles";

export default function AddVisitModal({
  visible,
  onClose,
  onSave,
  form,
  setForm,
  setAddDealerVisible,
  dealers,
}) {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  /* ---------- TIME ---------- */
  const handleTimeConfirm = (date) => {
    const hr = date.getHours();
    const min = date.getMinutes();
    const formatted = `${hr}:${min < 10 ? "0" + min : min}`;
    setForm({ ...form, time: formatted });
    setTimePickerVisible(false);
  };

  /* ---------- DATE ---------- */
  const handleDateConfirm = (date) => {
    const selected = date.toISOString().split("T")[0];
    setForm({ ...form, date: selected });
    setDatePickerVisible(false);
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalBox}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <Text style={styles.modalTitle}>Add Visit</Text>

            {/* ================= DEALER ================= */}
            <View style={{ marginBottom: 15 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Dropdown
                  data={dealers.map((d) => ({ label: d, value: d }))}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Dealer"
                  search
                  value={form.dealer}
                  onChange={(item) =>
                    setForm({ ...form, dealer: item.value })
                  }
                  style={[styles.dropdown, { flex: 1 }]}
                  containerStyle={styles.dropdownContainer}
                />

                <TouchableOpacity
                  onPress={() => setAddDealerVisible(true)}
                  style={{
                    backgroundColor: "#2563eb",
                    padding: 12,
                    marginLeft: 8,
                    borderRadius: 10,
                  }}
                >
                  <Ionicons name="add" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>

            {/* ================= TIME ================= */}
            <TouchableOpacity onPress={() => setTimePickerVisible(true)}>
              <TextInput
                placeholder="Select Time"
                value={form.time}
                editable={false}
                style={styles.input}
              />
            </TouchableOpacity>

            {/* ================= DATE ================= */}
            <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
              <TextInput
                placeholder="Select Date"
                value={form.date}
                editable={false}
                style={styles.input}
              />
            </TouchableOpacity>

            {/* ================= ADDRESS ================= */}
            <TextInput
              placeholder="Full Address"
              value={form.address}
              onChangeText={(t) => setForm({ ...form, address: t })}
              style={[styles.input, { height: 120 }]}
              multiline
            />

            {/* ================= SAVE ================= */}
            <TouchableOpacity style={styles.saveBtn} onPress={onSave}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>

            {/* ================= CANCEL ================= */}
            <TouchableOpacity
              style={[styles.saveBtn, { backgroundColor: "#dc2626" }]}
              onPress={onClose}
            >
              <Text style={styles.saveBtnText}>Cancel</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

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
    </Modal>
  );
}
