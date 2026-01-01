import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";

// ----- CONFIG -----
const CELL_WIDTH = 100;
const NAME_COL_WIDTH = 150;

const TIME_SLOTS = [
  "8:00 AM","9:00 AM","10:00 AM","11:00 AM",
  "12:00 PM","1:00 PM","2:00 PM","3:00 PM",
  "4:00 PM","5:00 PM",
];

const engineers = [
  {
    name: "Stewart Waters",
    city: "Meerut",
    slots: [
      { time: "9:15 AM", pos: 1, status: "completed" , duration: "45 min" },
      { time: "10:21 AM", pos: 2, status: "pending" , duration: "45 min" },
      { time: "2:40 PM", pos: 6, status: "completed" , duration: "45 min" },
    ],
  },
  {
    name: "Horace Miller",
    city: "Meerut",
    slots: [
      { time: "11:58 AM", pos: 3, status: "pending" , duration: "45 min" },
      { time: "9:35 PM", pos: 8, status: "cancelled" , duration: "45 min" },
    ],
  },
  {
    name: "Susie Heaney",
    city: "Meerut",
    slots: [{ time: "9:30 PM", pos: 6, status: "cancelled"  , duration: "45 min"}],
  },
  {
    name: "Edmund Sanfordh",
    city: "Lucknow",
    slots: [{ time: "12:10 PM", pos: 7, status: "completed" , duration: "45 min" }],
  },
];

export default function EngineersTimeline() {
  const navigation = useNavigation();

  const getColor = (status) => {
    if (status === "completed") return "#22c55e";
    if (status === "cancelled") return "#ef4444";
    return "#3b82f6";
  };

  return (
    <>
      <Text style={styles.engSectionTitle}>Engineers Timeline</Text>

      <View style={styles.engTimelineContainer}>
        <View style={{ flexDirection: "row" }}>

          {/* FIXED NAME COLUMN */}
          <View>
            <View style={{ height: 36 }} />

            {engineers.map((eng, i) => (
              <View key={i} style={styles.engEngineerInfo}>
                <View style={styles.engLogo}>
                  <Text style={styles.engLogoText}>bb</Text>
                </View>

                <View>
                  <Text style={styles.engName}>{eng.name}</Text>
                  <Text style={styles.engCity}>{eng.city}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* SCROLLABLE GRID */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>

              {/* HOURS */}
              <View style={styles.engHourRow}>
                {TIME_SLOTS.map((t, i) => (
                  <View key={i} style={styles.engHourCell}>
                    <Text style={styles.engHourText}>{t}</Text>
                  </View>
                ))}
              </View>

              {/* ENGINEER ROWS */}
              {engineers.map((eng, idx) => (
                <View key={idx} style={styles.engRow}>
                  <View style={{ position: "relative", flexDirection: "row" }}>
                    {TIME_SLOTS.map((_, i) => (
                      <View key={i} style={styles.engGridCell} />
                    ))}

                    {/* VISITS */}
                    {eng.slots.map((s, i) => (
                      <TouchableOpacity
                        key={i}
                        activeOpacity={0.85}
                        onPress={() =>
                          navigation.navigate("VisitDetails", {
                            engineer: eng.name,
                            city: eng.city,
                            time: s.time,
                            status: s.status,
                              duration: s.duration,   // 👈 NEW

                          })
                        }
                        style={[
                          styles.engSlotBox,
                          {
                            left: s.pos * CELL_WIDTH,
                            backgroundColor: getColor(s.status),
                            shadowColor: getColor(s.status),
                          },
                        ]}
                      >
                      <Text style={styles.engSlotText}>{s.time}</Text>
<Text style={styles.engSlotSubText}>{s.duration}</Text>

                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ))}

            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

/* ---------------- MODERN STYLES ---------------- */
