import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* ================= CONTAINER ================= */
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9", // softer slate background
  },

  /* ================= HEADER ================= */
  header: {
    backgroundColor: "#020617", // near-black premium
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 26,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 18,

    // Android
    elevation: 18,
  },

  greeting: {
    color: "#94a3b8",
    fontSize: 13,
    letterSpacing: 0.3,
  },

  username: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 2,
  },

  /* ================= POPUP MENU ================= */
  popupMenu: {
    position: "absolute",
    top: 78,
    right: 18,
    width: 160,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#020617",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,

    elevation: 20,
    zIndex: 999,
  },

  menuBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  menuText: {
    color: "#f8fafc",
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 10,
  },

  /* ================= SEARCH BAR ================= */
  searchBar: {
    backgroundColor: "#ffffff",
    marginHorizontal: 18,
    marginTop: 18,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 16,

    elevation: 10,
  },

  searchText: {
    color: "#94a3b8",
    marginLeft: 10,
    fontSize: 15,
  },

  /* ================= SECTION TITLE ================= */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#020617",
    marginHorizontal: 18,
    marginTop: 20,
    letterSpacing: 0.4,
  },

  /* ================= SUMMARY ================= */
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 16,
  },

  summaryCard: {
    backgroundColor: "#ffffff",
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 10,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 18,

    elevation: 12,
  },

  summaryNumber: {
    fontSize: 23,
    fontWeight: "800",
    color: "#020617",
    marginTop: 10,
  },

  summaryLabel: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 4,
  },

  /* ================= QUICK ACTIONS ================= */
  actionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 12,
  },

  actionCard: {
    backgroundColor: "#ffffff",
    width: "48%",
    borderRadius: 22,
    paddingVertical: 16,
    marginBottom: 16,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.14,
    shadowRadius: 22,

    elevation: 14,
  },

  actionText: {
    color: "#020617",
    fontWeight: "700",
    marginTop: 10,
    fontSize: 15,
  },

  actionTextLight: {
    color: "#ffffff",
    fontWeight: "700",
    marginTop: 10,
    fontSize: 15,
  },

  /* ================= VISITS ================= */
  visitCard: {
    backgroundColor: "#ffffff",
    marginHorizontal: 12,
    marginTop: 14,
    borderRadius: 22,
    padding: 14,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 18,

    elevation: 12,
  },

  visitTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#020617",
  },

  visitSub: {
    color: "#64748b",
    fontSize: 14,
    marginTop: 6,
  },
});
