import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 20,
    paddingBottom: 60,
    marginBottom: 50,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#0f172a",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 14,
    marginBottom: 18,
    elevation: 3,
  },

  name: { fontSize: 20, fontWeight: "700", color: "#0f172a" },
  role: { fontSize: 14, color: "#475569", marginTop: 2 },

  label: { fontSize: 13, color: "#64748b", marginTop: 12 },
  value: { fontSize: 15, color: "#0f172a", marginTop: 2 },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    color: "#0f172a",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  divider: {
    height: 1,
    backgroundColor: "#e2e8f0",
    marginVertical: 12,
  },

  metricValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1e293b",
    textAlign: "center",
  },

  metricLabel: {
    fontSize: 11,
    textAlign: "center",
    color: "#64748b",
    marginTop: 4,
    width: 80,
  },

  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  actionText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#334155",
  },

  logoutButton: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#ef4444",
    padding: 14,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 6,
    fontWeight: "600",
  },
});
