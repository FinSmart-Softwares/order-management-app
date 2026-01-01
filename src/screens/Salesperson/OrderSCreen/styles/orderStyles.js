import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  /* -------------------------------------------------
     SCREEN
  -------------------------------------------------- */
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
    paddingTop: 48,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: 0.3,
    color: "#0F172A",
    marginBottom: 14,
  },

  /* -------------------------------------------------
     SEARCH BAR
  -------------------------------------------------- */
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 18,
    marginBottom: 8,

    // iOS shadow
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },

    // Android
    elevation: 4,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#0F172A",
  },

  /* -------------------------------------------------
     ORDER CARD
  -------------------------------------------------- */
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 20,
    marginTop: 16,

    borderWidth: 1,
    borderColor: "#F1F5F9",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },

    elevation: 3,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  time: {
    fontSize: 12,
    color: "#64748B",
  },

  orderId: {
    fontSize: 16,
    fontWeight: "700",
    color: "#020617",
    marginTop: 8,
  },

  customer: {
    fontSize: 14,
    color: "#334155",
    marginTop: 6,
  },

  delivery: {
    fontSize: 14,
    color: "#475569",
    marginTop: 4,
  },

  amount: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 10,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },

  labelSmall: {
    fontSize: 13,
    color: "#64748B",
  },

  /* -------------------------------------------------
     STATUS
  -------------------------------------------------- */
  statusWrapper: {
    alignSelf: "flex-end",
    marginTop: 12,
  },

  statusTag: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 14,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});
