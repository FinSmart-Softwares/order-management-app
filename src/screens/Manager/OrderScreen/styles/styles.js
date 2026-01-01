import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* ---------------- CONTAINER ---------------- */
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
    paddingTop: 56,
  },

  /* ---------------- HEADER ---------------- */
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0F172A",
    letterSpacing: 0.3,
  },

  /* ---------------- FILTER BAR ---------------- */
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 16,
    flex: 1,
    marginRight: 12,

    /* Modern soft shadow */
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#0F172A",
  },

  /* ---------------- DROPDOWN ---------------- */
  dropdownAbsolute: {
    position: "absolute",
    top: 44,
    right: 0,
    zIndex: 999,
  },

  dropdownBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 6,
    width: 180,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 10,
  },

  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
  },

  dropdownText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0F172A",
  },

  /* ---------------- ORDER CARD ---------------- */
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 20,
    marginTop: 16,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 6,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  time: {
    fontSize: 12,
    fontWeight: "500",
    color: "#64748B",
  },

  orderId: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 6,
  },

  customer: {
    marginTop: 4,
    fontSize: 14,
    color: "#334155",
  },

  created: {
    marginTop: 2,
    fontSize: 13,
    color: "#64748B",
  },

  delivery: {
    marginTop: 2,
    fontSize: 13,
    color: "#64748B",
  },

  amount: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "800",
    color: "#020617",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },

  statusWrapper: {
    alignSelf: "flex-end",
    marginTop: 12,
  },

  /* ---------------- STATUS TAG ---------------- */
  paymentTag: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
  },

  paymentText: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.4,
  },

  /* ---------------- BOTTOM PANEL ---------------- */
  bottomPanel: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 22,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 18,
  },

  bottomTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#020617",
    marginBottom: 14,
  },

  bottomOption: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#F1F5F9",
    marginTop: 10,
  },

  bottomOptionText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },
});

export default styles;
