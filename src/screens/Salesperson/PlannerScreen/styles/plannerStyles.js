import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* ---------- SCREEN ---------- */
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    paddingHorizontal: 16,
    paddingTop: 44,
    paddingBottom:120,
  },

  subHeader: {
    fontSize: 15,
    fontWeight: "600",
    color: "#475569",
    marginBottom: 12,
  },

  /* ---------- CALENDAR ---------- */
  calendar: {
    borderRadius: 24,
    backgroundColor: "#ffffff",
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },

  /* ---------- VISIT CARD ---------- */
  visitCard: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 20,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },

  timeText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#020617",
  },

  dateText: {
    fontSize: 13,
    color: "#64748b",
  },

  dealerName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#020617",
    marginTop: 6,
  },

  visitTime: {
    fontSize: 14,
    color: "#334155",
    marginTop: 4,
  },

  visitAddress: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 2,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 14,
    color: "#94a3b8",
  },

  /* ---------- STATUS ---------- */
  statusBadge: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "#e5e7eb",
  },

  statusText: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.4,
    color: "#020617",
  },

  statusMenu: {
    position: "absolute",
    right: 10,
    top: 40,
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 10,
    zIndex: 999,
  },

  statusMenuText: {
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#020617",
  },

  /* ---------- FAB ---------- */
  fab: {
    position: "absolute",
    right: 22,
    bottom: 28,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#2563eb",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 14,
    marginBottom:60,
  },

  /* ---------- MODAL ---------- */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(2,6,23,0.55)",
    justifyContent: "center",
  },

  modalBox: {
    backgroundColor: "#ffffff",
    margin: 20,
    padding: 22,
    borderRadius: 24,
    maxHeight: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 18,
  },

  modalTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#020617",
    marginBottom: 14,
  },

  input: {
    backgroundColor: "#f8fafc",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#020617",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 16,
  },

  dropdown: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  dropdownContainer: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  saveBtn: {
    backgroundColor: "#2563eb",
    paddingVertical: 15,
    borderRadius: 16,
    marginTop: 12,
    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },

  saveBtnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
});
