import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/plannerStyles";

export default function PlannerTopBar({ onCalendarPress }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      setDate(now.toLocaleDateString());
      setDay(days[now.getDay()]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.topBar}>
      <View>
        <Text style={styles.timeText}>{time}</Text>
        <Text style={styles.dateText}>{day}, {date}</Text>
      </View>
      <TouchableOpacity onPress={onCalendarPress}>
        <Ionicons name="calendar" size={32} color="#0f172a" />
      </TouchableOpacity>
    </View>
  );
}
