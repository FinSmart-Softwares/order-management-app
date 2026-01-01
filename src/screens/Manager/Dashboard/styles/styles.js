import { StyleSheet, Platform } from "react-native";
const CELL_WIDTH = 100;
const NAME_COL_WIDTH = 150;

export default StyleSheet.create({
  /* =========================
     ROOT
  ========================= */
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },

  /* =========================
     HEADER
  ========================= */
  header: {
    paddingTop: 48,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#020617",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 10,
  },

  greeting: {
    color: "#94a3b8",
    fontSize: 13,
    letterSpacing: 0.4,
  },

  username: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 2,
  },

  /* =========================
     SEARCH
  ========================= */
  searchBar: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginTop: -22,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 6,
  },

  searchText: {
    color: "#64748b",
    marginLeft: 10,
    fontSize: 14,
  },

  /* =========================
     SECTION TITLES
  ========================= */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#020617",
    marginHorizontal: 16,
    marginTop: 26,
    letterSpacing: 0.2,
  },

  /* =========================
     SUMMARY CARDS
  ========================= */
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 14,
  },

  summaryCard: {
    backgroundColor: "#ffffff",
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 18,
    alignItems: "center",
    paddingVertical: 12,
    elevation: 4,
  },

  summaryNumber: {
    fontSize: 22,
    fontWeight: "800",
    color: "#020617",
    marginTop: 6,
  },

  summaryLabel: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 2,
  },

  /* =========================
     QUICK ACTIONS
  ========================= */
  actionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 16,
  },

  actionCard: {
    backgroundColor: "#ffffff",
    width: "48%",
    borderRadius: 20,
    paddingVertical: 22,
    marginBottom: 14,
    alignItems: "center",
    elevation: 4,
  },

  actionText: {
    color: "#020617",
    fontWeight: "700",
    marginTop: 8,
    fontSize: 14,
  },

  actionTextLight: {
    color: "#ffffff",
    fontWeight: "700",
    marginTop: 8,
    fontSize: 14,
  },

  /* =========================
     VISIT CARD
  ========================= */
  visitCard: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 18,
    padding: 16,
    elevation: 4,
  },

  visitTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#020617",
  },

  visitSub: {
    color: "#64748b",
    fontSize: 13,
    marginTop: 6,
  },

  /* =========================
     CHART
  ========================= */
  chartStyle: {
    marginVertical: 12,
    borderRadius: 18,
    alignSelf: "center",
  },

  /* =========================
     TIMELINE
  ========================= */
  
  engSectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0f172a",
    padding: 20,
  },

  engTimelineContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },

  engEngineerInfo: {
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    width: NAME_COL_WIDTH,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#f1f5f9",
  },

  engLogo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#2563eb",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  engLogoText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  engName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#020617",
  },

  engCity: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },

  engHourRow: {
    flexDirection: "row",
    height: 36,
  },

  engHourCell: {
    width: CELL_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    borderRightWidth: 1,
    borderColor: "#e5e7eb",
  },
engSlotSubText: {
  color: "#ffffff",
  fontSize: 10,
  fontWeight: "600",
  opacity: 0.9,
  marginTop: 2,
},

  engHourText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#475569",
  },

  engRow: {
    height: 64,
  },

  engGridCell: {
    width: CELL_WIDTH,
    height: 64,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#f1f5f9",
  },

  engSlotBox: {
    position: "absolute",
    top: 14,
    width: CELL_WIDTH - 14,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
  },

  engSlotText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 0.3,
  },

  timelineContainer: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginTop: 18,
    padding: 12,
    borderRadius: 20,
    elevation: 5,
    paddingBottom: 44,
    marginBottom: 40,
  },

  hourCell: {
    alignItems: "center",
    justifyContent: "center",
  },

  hourText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#334155",
  },

  engineerInfo: {
    justifyContent: "center",
    paddingLeft: 10,
  },



  gridCell: {
    borderRightWidth: 1,
    borderColor: "#e5e7eb",
    height: "100%",
  },

  slotBox: {
    position: "absolute",
    backgroundColor: "#e0f2fe",
    borderColor: "#38bdf8",
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 14,
    top: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  slotText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#075985",
  },

  /* =========================
     PROFILE MENU
  ========================= */
  popupMenu: {
    position: "absolute",
    top: 78,
    right: 18,
    zIndex: 999,
    width: 160,
    backgroundColor: "#020617",
    borderRadius: 14,
    paddingVertical: 6,
    elevation: 12,
  },

  menuBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
  },

  menuText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 10,
  },
});
