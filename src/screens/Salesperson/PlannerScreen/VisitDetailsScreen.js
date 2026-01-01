import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { launchImageLibrary } from "react-native-image-picker";
import * as DocumentPicker from "@react-native-documents/picker";

export default function VisitDetailsScreen({ route, navigation }) {
  const { visit, onComplete } = route.params;

  const [purpose, setPurpose] = useState(visit.purpose || "");
  const [workDone, setWorkDone] = useState(visit.workDone || "");
  const [outcome, setOutcome] = useState(visit.outcome || "");
  const [followUpDate, setFollowUpDate] = useState(visit.followUpDate || "");
  const [remarks, setRemarks] = useState(visit.remarks || "");

  const [locationPhoto, setLocationPhoto] = useState(visit.locationPhoto || null);
  const [document, setDocument] = useState(visit.document || null);

  const [stage, setStage] = useState("form");

  /* 📸 PHOTO PICKER */
  const pickPhoto = () => {
    launchImageLibrary({ mediaType: "photo", quality: 0.7 }, res => {
      if (!res.didCancel && res.assets?.length) {
        setLocationPhoto(res.assets[0]);
      }
    });
  };

  /* 📄 DOCUMENT PICKER */
  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      setDocument(res);
    } catch (err) {
      if (err?.code !== "DOCUMENT_PICKER_CANCELED") {
        Alert.alert("Error", "Document selection failed");
      }
    }
  };

  const handleComplete = () => {
    if (!purpose || !workDone || !outcome || !followUpDate) {
      Alert.alert("Incomplete", "Please fill all required fields");
      return;
    }
    setStage("preview");
  };

  const handleConfirm = () => {
    const updatedVisit = {
      ...visit,
      purpose,
      workDone,
      outcome,
      followUpDate,
      remarks,
      locationPhoto,
      document,
      status: "Completed",
    };

    onComplete(updatedVisit);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={{ marginLeft: 14 }}>
          <Text style={styles.dealer}>{visit.dealer}</Text>
          <Text style={styles.sub}>
            {stage === "preview" ? "Confirm Visit Details" : "Fill Visit Information"}
          </Text>
        </View>
      </View>

      {/* ================= FORM ================= */}
      {stage === "form" && (
        <>
          {/* Purpose */}
          <View style={styles.card}>
            <Text style={styles.label}>Purpose *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Product demo / Order discussion"
              placeholderTextColor="#9CA3AF"
              value={purpose}
              onChangeText={setPurpose}
            />
          </View>

          {/* Outcome */}
          <View style={styles.card}>
            <Text style={styles.label}>Outcome *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Order confirmed / Follow-up needed"
              placeholderTextColor="#9CA3AF"
              value={outcome}
              onChangeText={setOutcome}
            />
          </View>

          {/* Follow-up Date */}
          <View style={styles.card}>
            <Text style={styles.label}>Follow-up Date *</Text>
            <TextInput
              style={styles.input}
              placeholder="DD / MM / YYYY"
              placeholderTextColor="#9CA3AF"
              value={followUpDate}
              onChangeText={setFollowUpDate}
            />
          </View>

          {/* Work Done */}
          <View style={styles.card}>
            <Text style={styles.label}>Work Done *</Text>
            <TextInput
              multiline
              style={[styles.input, styles.multiline]}
              placeholder="Describe the work done during the visit..."
              placeholderTextColor="#9CA3AF"
              value={workDone}
              onChangeText={setWorkDone}
            />
          </View>

          {/* Remarks */}
          <View style={styles.card}>
            <Text style={styles.label}>Remarks</Text>
            <TextInput
              multiline
              style={[styles.input, styles.multiline]}
              placeholder="Additional comments or notes (optional)"
              placeholderTextColor="#9CA3AF"
              value={remarks}
              onChangeText={setRemarks}
            />
          </View>

          {/* PHOTO */}
          <View style={styles.card}>
            <Text style={styles.label}>📸 Location Photo</Text>
            <TouchableOpacity style={styles.uploadBtn} onPress={pickPhoto}>
              <Ionicons name="camera-outline" size={20} color="#fff" />
              <Text style={styles.uploadText}>Add Photo</Text>
            </TouchableOpacity>

            {locationPhoto && (
              <Image source={{ uri: locationPhoto.uri }} style={styles.image} />
            )}
          </View>

          {/* DOCUMENT */}
          <View style={styles.card}>
            <Text style={styles.label}>📄 Attach Document</Text>
            <TouchableOpacity style={styles.uploadBtnSecondary} onPress={pickDocument}>
              <Ionicons name="document-attach-outline" size={20} color="#2563EB" />
              <Text style={styles.uploadTextSecondary}>Upload Document</Text>
            </TouchableOpacity>

            {document && <Text style={styles.fileName}>📄 {document.name}</Text>}
          </View>

          <TouchableOpacity style={styles.saveBtn} onPress={handleComplete}>
            <Text style={styles.saveText}>Review & Complete</Text>
          </TouchableOpacity>
        </>
      )}

      {/* ================= PREVIEW ================= */}
      {stage === "preview" && (
        <View style={styles.card}>
          <Text style={styles.previewText}><Text style={styles.bold}>Purpose:</Text> {purpose}</Text>
          <Text style={styles.previewText}><Text style={styles.bold}>Work Done:</Text> {workDone}</Text>
          <Text style={styles.previewText}><Text style={styles.bold}>Outcome:</Text> {outcome}</Text>
          <Text style={styles.previewText}><Text style={styles.bold}>Follow-up:</Text> {followUpDate}</Text>
          <Text style={styles.previewText}><Text style={styles.bold}>Remarks:</Text> {remarks || "-"}</Text>

          {locationPhoto && (
            <Image source={{ uri: locationPhoto.uri }} style={styles.image} />
          )}

          {document && <Text style={styles.fileName}>📄 {document.name}</Text>}

          <TouchableOpacity style={styles.saveBtn} onPress={handleConfirm}>
            <Text style={styles.saveText}>Confirm & Save Visit</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    padding: 16,
    marginBottom: 70,
    paddingBottom:40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#020617",
    padding: 18,
    borderRadius: 18,
    marginBottom: 20,
  },

  dealer: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
  },

  sub: {
    color: "#94A3B8",
    marginTop: 2,
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },

  label: {
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    padding: 14,
    fontSize: 15,
    backgroundColor: "#FAFAFA",
  },

  multiline: {
    height: 110,
    textAlignVertical: "top",
  },

  uploadBtn: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },

  uploadBtnSecondary: {
    flexDirection: "row",
    gap: 8,
    borderWidth: 1,
    borderColor: "#2563EB",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },

  uploadText: {
    color: "#fff",
    fontWeight: "700",
  },

  uploadTextSecondary: {
    color: "#2563EB",
    fontWeight: "700",
  },

  image: {
    height: 170,
    borderRadius: 14,
    marginTop: 12,
  },

  saveBtn: {
    backgroundColor: "#22C55E",
    padding: 18,
    borderRadius: 18,
    marginTop: 10,
  },

  saveText: {
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
    fontSize: 16,
  },

  fileName: {
    marginTop: 10,
    color: "#334155",
    fontWeight: "600",
  },

  previewText: {
    marginBottom: 8,
    color: "#1E293B",
  },

  bold: {
    fontWeight: "700",
  },
});
