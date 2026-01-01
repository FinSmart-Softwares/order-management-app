import React from "react";
import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/plannerStyles";

export default function AddDealerModal({
  visible,
  dealerName,
  setDealerName,
  onSave,
  onClose,
}) {
  const handleSave = () => {
    if (!dealerName.trim()) return;
    onSave(dealerName.trim());
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={[styles.modalBox, { maxHeight: "30%" }]}>
          <Text style={styles.modalTitle}>Add Dealer</Text>

          <TextInput
            placeholder="Dealer Name"
            value={dealerName}
            onChangeText={setDealerName}
            style={styles.input}
          />

          <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveBtnText}>Save Dealer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.saveBtn, { backgroundColor: "#dc2626" }]}
            onPress={onClose}
          >
            <Text style={styles.saveBtnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
