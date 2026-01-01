import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, TextInput } from "react-native-paper";
import DatePicker from "react-native-date-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles";

export default function DateReferenceRow({
  date,
  setDate,
  openDate,
  setOpenDate,
  referenceNo,
  setReferenceNo,
}) {
  return (
    <>
      <View style={styles.dateReferenceRow}>
        {/* DATE CARD */}
        <TouchableOpacity
          style={[styles.cardBox, styles.dateCard]}
  activeOpacity={0.7}
          onPress={() => setOpenDate(true)}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>
              {date.toDateString()}
            </Text>
            <Ionicons name="pencil-outline" size={18} style={styles.cardIcon} />
          </View>
        </TouchableOpacity>

        {/* REFERENCE CARD */}
<View style={[styles.cardBox, styles.referenceCard]}>
          <View style={styles.cardContent}>
            <Ionicons
              name="document-text-outline"
              size={18}
              style={styles.cardIcon}
            />
            <TextInput
              value={referenceNo}
              onChangeText={setReferenceNo}
              placeholder="REF4905"
              mode="flat"
              style={styles.referenceInput}
              underlineColor="transparent"
              activeUnderlineColor="transparent"
            />
            <Ionicons
              name="refresh-outline"
              size={18}
              style={styles.cardIcon}
            />
          </View>
        </View>
      </View>

      {/* DATE PICKER */}
      <DatePicker
        modal
        open={openDate}
        date={date}
        mode="date"
        onConfirm={(d) => {
          setOpenDate(false);
          setDate(d);
        }}
        onCancel={() => setOpenDate(false)}
      />
    </>
  );
}
