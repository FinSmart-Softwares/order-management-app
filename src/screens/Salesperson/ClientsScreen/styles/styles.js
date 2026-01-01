import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* ---------------- SCREEN ---------------- */
  container: {
    marginBottom:50,
    flex: 1,
    backgroundColor: "#f8fafc",
    
  },

  /* ---------------- HEADER ---------------- */
  header: {
    paddingTop: 48,
    paddingHorizontal: 20,
    paddingBottom: 22,
    backgroundColor: "#0f172a",
  
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 18,
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: 0.3,
  },

  subtitle: {
    color: "#cbd5f5",
    fontSize: 14,
    marginTop: 6,
  },

  /* ---------------- SEARCH ---------------- */
  searchContainer: {
    marginHorizontal: 16,
    marginTop: -24,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 8,
  },

  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#020617",
  },

  /* ---------------- STATS ---------------- */
  statsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 14,
  },

  statItem: {
    width: "48%",
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 6,
  },

  statNumber: {
    fontSize: 22,
    fontWeight: "800",
    color: "#020617",
  },

  statLabel: {
    marginTop: 4,
    fontSize: 13,
    color: "#64748b",
  },

  /* ---------------- CLIENT CARD ---------------- */
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    padding: 18,
    borderRadius: 22,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.07,
    shadowRadius: 16,
    elevation: 6,
  },

  clientName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#020617",
  },

  clientPhone: {
    fontSize: 14,
    color: "#475569",
    marginTop: 2,
  },

  clientAddress: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 2,
  },

  smallText: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },

  outstanding: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "700",
    color: "#dc2626",
  },

  statusBadge: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    marginRight: 10,
  },

  /* ---------------- FAB ---------------- */
  fab: {
    position: "absolute",
    right: 22,
    bottom: 26,
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.45,
    shadowRadius: 24,
    elevation: 18,
  },

  /* ---------------- MODAL ---------------- */
  formOverlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(2,6,23,0.55)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },

  formContainer: {
    width: "92%",
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 26,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 22,
  },

  formTitle: {
    fontSize: 21,
    fontWeight: "800",
    textAlign: "center",
    color: "#020617",
    marginBottom: 18,
  },

  input: {
    backgroundColor: "#f8fafc",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    marginBottom: 14,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    color: "#020617",
  },

  formBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  cancelBtn: {
    backgroundColor: "#e5e7eb",
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 16,
  },

  saveBtn: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 16,
    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
});
