import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SectionCard from "../../components/SectionCard";
import colors from "../../styles/colors";

export default function OrderCard({ item, expanded, onToggle }) {
  const [trackStatus, setTrackStatus] = useState("Not Started");
  const [progress, setProgress] = useState(0); // 0-100
  const [timeline, setTimeline] = useState(item.timeline);
  const intervalRef = useRef(null);

  // Start Tracking
  const startTracking = () => {
    setTrackStatus("In Progress");
    let step = 0;
    intervalRef.current = setInterval(() => {
      setTimeline((prev) => {
        const newTimeline = prev.map((t, index) => {
          if (index <= step) return { ...t, status: "completed" };
          return { ...t, status: "pending" };
        });
        return newTimeline;
      });

      step++;
      setProgress(((step) / timeline.length) * 100);

      if (step >= timeline.length) {
        clearInterval(intervalRef.current);
        setTrackStatus("Delivered");
      }
    }, 800);
  };

  // Reset Tracking
  const resetTracking = () => {
    clearInterval(intervalRef.current);
    setTimeline(item.timeline.map((t) => ({ ...t, status: "pending" })));
    setProgress(0);
    setTrackStatus("Not Started");
  };

  return (
    <View style={styles.card}>
      {/* Top Row */}
      <TouchableOpacity onPress={onToggle} activeOpacity={0.7}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.orderId}>{item.id}</Text>
            <Text style={styles.customer}>{item.customer}</Text>
          </View>

          <View style={styles.rightBox}>
            <Text style={[styles.status, { color: colors.status[item.status] }]}>
              {item.status}
            </Text>
            <Text style={styles.amount}>₹{item.amount}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Expanded Section */}
      {expanded && (
        <View style={{ marginTop: 14 }}>
          {/* Customer Details */}
          <SectionCard title="Customer Details">
            <Text style={styles.sub}>📞 {item.phone}</Text>
            <Text style={styles.sub}>📍 {item.address}</Text>
            <Text style={styles.sub}>🕒 {item.date}</Text>
          </SectionCard>

          {/* Ordered Items */}
          <SectionCard title="Ordered Items">
            {item.items.map((i, idx) => (
              <Text key={idx} style={styles.sub}>
                • {i.name} — {i.qty} pcs
              </Text>
            ))}
          </SectionCard>

          {/* Payment */}
          <SectionCard title="Payment Info">
            <Text style={styles.sub}>Mode: {item.payment.mode}</Text>
            <Text style={styles.sub}>Status: {item.payment.status}</Text>
          </SectionCard>

          {/* Tracking Timeline */}
          <SectionCard title="Track Order">
            <Text style={styles.sub}>Status: {trackStatus}</Text>
            <Text style={styles.sub}>Progress: {Math.round(progress)}%</Text>

            {timeline.map((t, index) => {
              const isCompleted = t.status === "completed";
              const isLast = index === timeline.length - 1;

              return (
                <View key={index} style={styles.trackRowTimeline}>
                  {/* Dot */}
                  <View
                    style={[
                      styles.trackDot,
                      isCompleted && { backgroundColor: colors.primary },
                    ]}
                  >
                    {isCompleted && <Text style={styles.checkmark}>✓</Text>}
                  </View>

                  {/* Vertical Line */}
                  {!isLast && (
                    <View
                      style={[
                        styles.trackLine,
                        isCompleted && { backgroundColor: colors.primary },
                      ]}
                    />
                  )}

                  {/* Step Name */}
                  <Text
                    style={[
                      styles.trackStepText,
                      isCompleted && { color: colors.primary },
                    ]}
                  >
                    {t.step}
                  </Text>
                </View>
              );
            })}

            {/* Buttons */}
            <View style={styles.trackRow}>
              {trackStatus === "Not Started" && (
                <TouchableOpacity style={styles.btn} onPress={startTracking}>
                  <Text style={styles.btnText}>Start</Text>
                </TouchableOpacity>
              )}

              {trackStatus === "In Progress" && (
                <TouchableOpacity style={styles.btn} onPress={resetTracking}>
                  <Text style={styles.btnText}>Reset</Text>
                </TouchableOpacity>
              )}

              {trackStatus === "Delivered" && (
                <TouchableOpacity style={styles.btn} onPress={resetTracking}>
                  <Text style={styles.btnText}>Restart</Text>
                </TouchableOpacity>
              )}
            </View>
          </SectionCard>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    marginVertical: 8,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderId: {
    fontSize: 16,
    fontWeight: "600",
  },
  customer: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  rightBox: {
    alignItems: "flex-end",
  },
  status: {
    fontSize: 13,
    fontWeight: "600",
  },
  amount: {
    fontSize: 15,
    color: "#222",
    marginTop: 6,
  },
  sub: {
    fontSize: 13,
    marginBottom: 4,
    color: "#444",
  },
  trackRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
  // Timeline styles
  trackRowTimeline: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
    position: "relative",
  },
  trackDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  checkmark: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  trackLine: {
    width: 2,
    height: 30,
    backgroundColor: "#ccc",
    position: "absolute",
    left: 8,
    top: 18,
    zIndex: 1,
  },
  trackStepText: {
    marginLeft: 20,
    fontSize: 14,
    color: "#444",
    marginTop: -2,
  },
});
