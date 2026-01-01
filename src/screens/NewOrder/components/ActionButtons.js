import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles";

export default function ActionButtons({ onSubmit, onCancel }) {
  return (
    <View style={styles.actionRow}>
      {/* CANCEL */}
      <Button
        mode="outlined"
        onPress={onCancel}
        style={styles.btCancel}
        labelStyle={styles.btCancelLabel}
        icon={() => (
          <Ionicons name="close-circle-outline" size={18} />
        )}
      >
        Cancel
      </Button>

      {/* SUBMIT */}
      <Button
        mode="contained"
        onPress={onSubmit}
        style={styles.btSubmit}
        labelStyle={styles.btSubmitLabel}
        icon={() => (
          <Ionicons name="checkmark-circle-outline" size={18} />
        )}
      >
        Submit
      </Button>
    </View>
  );
}
