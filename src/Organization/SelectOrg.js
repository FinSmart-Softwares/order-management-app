import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  Image,
  useColorScheme,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// -------------------------------------------------------------
// SAMPLE ORGANIZATIONS
// -------------------------------------------------------------
const sampleOrgs = [
  { id: "ORG-001", name: "Astra Labs", subtitle: "Design & Innovation", logo: null },
  { id: "ORG-002", name: "Blue Harbor", subtitle: "Logistics Solutions", logo: null },
  { id: "ORG-003", name: "Citrine Health", subtitle: "Healthcare & Wellness", logo: null },
  { id: "ORG-004", name: "Delta Finance", subtitle: "Financial Services", logo: null },
];

// -------------------------------------------------------------
// SELECT ORG COMPONENT
// order history, invoice add order payment option -------------------------------------------------------------
export default function SelectOrg({ orgs = sampleOrgs, onSelect = () => {} }) {
  // ✅ Hooks must always be at the top
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const scheme = useColorScheme();

  // ✅ Safe dynamic colors using useMemo
  const colors = useMemo(
    () => ({
      background: scheme === "dark" ? "#121212" : "#f4f5fa",
      card: scheme === "dark" ? "#1e1e1e" : "#fff",
      cardSelected: scheme === "dark" ? "#2c2c54" : "#e8ebff",
      textPrimary: scheme === "dark" ? "#fff" : "#111",
      textSecondary: scheme === "dark" ? "#ccc" : "#777",
      inputBackground: scheme === "dark" ? "#1e1e1e" : "#fff",
      inputText: scheme === "dark" ? "#fff" : "#000",
      placeholder: "#888",
      bottomPanel: scheme === "dark" ? "#1e1e1e" : "#fff",
      button: "#4e6bff",
      buttonText: "#fff",
      logoBox: scheme === "dark" ? "#333" : "#eceffd",
    }),
    [scheme]
  );

  // ✅ Filtered organizations
  const filteredOrgs = orgs.filter(
    (o) =>
      o.name.toLowerCase().includes(query.toLowerCase()) ||
      o.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>Select Your Organization</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Choose one to continue</Text>
      </View>

      {/* Search Box */}
      <View style={[styles.searchBox, { backgroundColor: colors.inputBackground }]}>
        <Ionicons name="search" size={20} color={colors.placeholder} style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search organizations"
          placeholderTextColor={colors.placeholder}
          value={query}
          onChangeText={setQuery}
          style={[styles.input, { color: colors.inputText }]}
        />
      </View>

      {/* Organization List */}
      <FlatList
        data={filteredOrgs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 180 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isSelected = selected?.id === item.id;
          return (
            <TouchableOpacity
              onPress={() => {
                setSelected(item);
                onSelect(item);
              }}
              style={[
                styles.card,
                { backgroundColor: colors.card },
                isSelected && { backgroundColor: colors.cardSelected, borderLeftWidth: 5, borderLeftColor: "#4e6bff" },
              ]}
            >
              <View style={styles.cardInner}>
                <View style={[styles.logoBox, { backgroundColor: colors.logoBox }]}>
                  {item.logo ? (
                    <Image source={{ uri: item.logo }} style={styles.logo} />
                  ) : (
                    <Text style={[styles.logoText, { color: colors.textPrimary }]}>
                      {item.name
                        .split(" ")
                        .map((a) => a[0])
                        .join("")}
                    </Text>
                  )}
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={[styles.orgName, { color: colors.textPrimary }]}>{item.name}</Text>
                  <Text style={[styles.orgSubtitle, { color: colors.textSecondary }]}>{item.subtitle}</Text>
                </View>

                <Ionicons name="chevron-forward" size={22} color={colors.textPrimary} />
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* Bottom Panel */}
      <View style={[styles.bottomPanel, { backgroundColor: colors.bottomPanel }]}>
        {selected ? (
          <>
            <Text style={[styles.selectedTitle, { color: colors.textPrimary }]}>{selected.name}</Text>
            <Text style={[styles.selectedSubtitle, { color: colors.textSecondary }]}>{selected.subtitle}</Text>

            <TouchableOpacity style={[styles.button, { backgroundColor: colors.button }]}>
              <Text style={[styles.buttonText, { color: colors.buttonText }]}>Continue</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={[styles.noneText, { color: colors.textSecondary }]}>
            Select an organization to see more details
          </Text>
        )}
      </View>
    </View>
  );
}

// -------------------------------------------------------------
// STYLES
// -------------------------------------------------------------
const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 60 },
  header: { marginBottom: 25 },
  title: { fontSize: 26, fontWeight: "800" },
  subtitle: { fontSize: 14, marginTop: 4 },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    borderRadius: 14,
    height: 50,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  input: { flex: 1, fontSize: 15 },
  card: {
    marginVertical: 8,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  cardInner: { flexDirection: "row", padding: 16, borderRadius: 16, alignItems: "center", gap: 12 },
  logoBox: { width: 55, height: 55, borderRadius: 14, justifyContent: "center", alignItems: "center" },
  logoText: { fontWeight: "bold", fontSize: 18 },
  logo: { width: "100%", height: "100%", borderRadius: 14 },
  orgName: { fontSize: 17, fontWeight: "700" },
  orgSubtitle: { fontSize: 13, marginTop: 2 },
  bottomPanel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 22,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 12,
    elevation: 10,
  },
  selectedTitle: { fontSize: 20, fontWeight: "800", marginBottom: 4 },
  selectedSubtitle: { fontSize: 14, marginBottom: 16 },
  noneText: { textAlign: "center", fontSize: 14 },
  button: { paddingVertical: 14, borderRadius: 12, alignItems: "center", marginTop: 10 },
  buttonText: { fontSize: 16, fontWeight: "bold" },
});
