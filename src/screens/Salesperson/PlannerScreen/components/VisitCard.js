import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/plannerStyles";

export default function VisitCard({ item, isMenuOpen, onToggle, updateStatus, onOpenDetails }) {
  return (
    <TouchableOpacity onPress={() => onOpenDetails(item)}>
      <View style={styles.visitCard}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.dealerName}>{item.dealer}</Text>

          <TouchableOpacity
            onPress={onToggle}
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

        {isMenuOpen && (
          <View style={styles.statusMenu}>
            {["Pending", "Completed", "Cancelled"].map(s => (
              <TouchableOpacity key={s} onPress={() => updateStatus(item.id, s)}>
                <Text style={styles.statusMenuText}>{s}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text style={styles.visitTime}>⏰ {item.time}</Text>
      
        <Text style={styles.visitAddress}>🏠 {item.address}</Text>
      </View>
    </TouchableOpacity>
  );
}
