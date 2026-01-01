import { StyleSheet } from "react-native";

export default StyleSheet.create({

  // date and ref 
   dateReferenceRow: {
    color:'#111',
      alignItems: "center",
     
    textAlign:"center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginBottom: 16,
  },

  cardBox: {
        color:'#111',

    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 2,

    // Shadow (Android + iOS)
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  cardContent: {
        color:'#111',

    flexDirection: "row",
    alignItems: "center",
  },

  cardText: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  /* 👇 NEW */
dateCard: {
  paddingVertical:20,
  flex: 1.5,
},

/* 👇 NEW */
referenceCard: {
  flex: 1.1,
},

  cardIcon: {
    color: "#666",
    marginLeft: 6,
  },

  referenceInput: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 8,
    fontSize: 14,
  },

    // date and ref end 
     
    // add and search customer start
/* SECTION */
sectionWrapper: {
    borderRadius: 12,

  marginVertical: 12,
  backgroundColor:'#fff',
},

sectionLabel: {
  fontSize: 14,
  fontWeight: "500",
  color: "#000000ff",
  marginBottom: 6,
},
/* INPUT CARD */
customerInputCard: {
  flexDirection: "row",
  alignItems: "center",
   backgroundColor:'#fff',

  borderRadius: 12,
  paddingHorizontal: 12,
  // paddingVertical: ,

  elevation: 2,
  shadowColor: "#000",
  shadowOpacity: 0.06,
  shadowRadius: 5,
  shadowOffset: { width: 0, height: 3 },
},

customerInput: {
    backgroundColor:'#fff',
  borderRadius: 12,

  flex: 1,

  fontSize: 14,
  paddingVertical: 6,
},

/* ICONS */
customerActions: {
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
},

actionIcon: {
  color: "#000000ff",
},

addIcon: {
  color: "#2E7D32",
},

/* DROPDOWN */
customerDropdown: {
  backgroundColor: "#fff",
  borderRadius: 10,
  marginTop: 6,
  maxHeight: 160,

  elevation: 3,
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
},

customerItem: {
  paddingVertical: 10,
  paddingHorizontal: 14,
  borderBottomWidth: 0.5,
  borderBottomColor: "#eee",
},

customerName: {
  fontSize: 14,
  color: "#000000ff",
},
searchIcon: {
  color: "#777",
  marginRight: 6,
},

customerInput: {
  flex: 1,
  backgroundColor: "transparent",
  fontSize: 14,
  paddingVertical: 6,
},

    // add and search customer end

// add customer styling start

  /* MODAL */
modalContainer: {
    backgroundColor: "#fff",

  margin: 18,
  borderRadius: 12,
  paddingHorizontal: 12,
  paddingTop: 12,
  paddingBottom: 0, // 🔥 removes bottom padding
},


  /* CARD */
  modalCard: {
      backgroundColor: "#fff",

    borderRadius: 12,
    overflow: "hidden",
  },

  /* HEADERS */
  sectionHeader: {
      backgroundColor: "#fff",

    fontSize: 14,
    fontWeight: "600",
    marginTop: 12,
    // marginBottom: 6,
    color: "#000000ff", // neutral dark
  },

  /* INPUTS */
  modalInput: {
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },

  /* DIVIDER */
  divider: {
    marginVertical: 14,
  },

  /* BUTTON ROW */
modalBtnRow: {
    backgroundColor: "#fff",

  flexDirection: "row",
  justifyContent: "flex-end",
  gap: 12,
  marginTop: 12,       // reduced
  paddingTop: 8,       // reduced
  paddingBottom: 4,    // controlled
  borderTopWidth: 1,
  borderTopColor: "#E5E7EB",
  borderCurve:20,
},


  /* BUTTONS */
  primaryButton: {
    borderRadius: 6,
  },

  cancelButton: {
    borderRadius: 6,
  },

// add customer styling end
// search product start


proContainer: {
  marginTop: 12,
},

proSearchCard: {
  borderRadius: 12,
  borderWidth: 1,
  borderColor: "#E0E0E0",
  elevation: 0,
  paddingVertical:4,
  backgroundColor: "#fff",
},

proSearchRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 12,
  paddingVertical:10,
  height: 52,
},

proInput: {
  flex: 1,
  backgroundColor: "transparent",
  marginLeft: 8,
},

proAddIcon: {
  width: 34,
  height: 34,
  borderRadius: 17,
  borderWidth: 1.5,
  borderColor: "#4CAF50",
  alignItems: "center",
  justifyContent: "center",
},

proResultCard: {
  marginTop: 8,
  borderRadius: 12,
  elevation: 3,
  backgroundColor: "#fff",
},

proProductRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 14,
  borderBottomWidth: 0.5,
  borderColor: "#eee",
},

proProductName: {
  fontSize: 15,
  fontWeight: "600",
},

proProductPrice: {
  fontSize: 13,
  color: "#666",
  marginTop: 2,
},

// search product end

// add product form start
 froModalContainer: {
    margin: 16,
    borderRadius: 14,
  },

  /* CARD */
  froModalCard: {
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },

  /* INPUTS */
  froModalInput: {
    marginTop: 10,
    backgroundColor: "#FAFAFA",
  },

  /* DROPDOWN */
  froDropdown: {
    marginTop: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  /* DROPDOWN TEXT */
  froDropdownText: {
    fontSize: 14,
    color: "#333",
  },

  /* SUMMARY */
  froSummaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },

  froSummaryLabel: {
    fontSize: 13,
    color: "#666",
  },

  froSummaryValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },

  /* SUBMIT BUTTON */
  froSubmitBtn: {
    marginTop: 18,
    paddingVertical: 6,
    borderRadius: 8,
  },

  /* HEADER CLOSE ICON */
  closeIcon: {
    padding: 6,
  },

  // add product form end
// table of total start
  tabContainer: {
  marginTop: 16,
  borderRadius: 10,
  backgroundColor: "#ffffff",
  elevation: 2,
  overflow: "hidden",
},

tabHeaderRow: {
  backgroundColor: "#f5f7fa",
  borderBottomWidth: 1,
  borderBottomColor: "#e0e0e0",
},

tabRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 10,
  paddingHorizontal: 8,
  borderBottomWidth: 1,
  borderBottomColor: "#f0f0f0",
},

tabHeader: {
  width: 50,
  fontSize: 12,
  fontWeight: "600",
  color: "#555",
},

tabCell: {
  width: 50,
  fontSize: 13,
  color: "#000000ff",
},

tabNameCell: {
  width: 60,
},

tabBoldCell: {
  fontWeight: "600",
  color: "#000",
},

tabDeleteBtn: {
  width: 40,
  alignItems: "center",
  justifyContent: "center",
},
//table subtotal end 

//meta styling start
 metaContainer: {
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    // modern card shadow
 
  },

  metaInput: {
    
    marginBottom: 14,
    backgroundColor: "#f9fafb",
  },

  metaDivider: {
    
    marginVertical: 18,
    height: 1,
    backgroundColor: "#e5e7eb",
  },

  menuItem: {
    
    paddingVertical: 8,
  },

//meta styling end
// end button start
actionRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 12,
  marginTop: 24,
},

/* ----- CANCEL BUTTON ----- */
btCancel: {
  flex: 1,
  height: 48,
  borderRadius: 14,
  borderWidth: 1.5,
  borderColor: "#d1d5db",
  justifyContent: "center",
  backgroundColor: "#ffffff",
},

btCancelLabel: {
  fontSize: 15,
  fontWeight: "600",
  color: "#374151",
},

/* ----- SUBMIT BUTTON ----- */
btSubmit: {
  flex: 1,
  height: 48,
  borderRadius: 14,
  justifyContent: "center",
  backgroundColor: "#2563eb",

  // modern elevation
  shadowColor: "#2563eb",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.25,
  shadowRadius: 10,
  elevation: 6,
},

btSubmitLabel: {
  fontSize: 15,
  fontWeight: "600",
  color: "#ffffff",
},

// end button end
  mainContainer: {
    flex: 1,
    backgroundColor: "#f5f6f8",
  },

  header: {
    height: 56,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    
    elevation: 3,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  headerSave: {
    fontSize: 15,
    color: "#2e7d32",
    fontWeight: "600",
  },

  card: {
    margin: 12,
    borderRadius: 10,
  },

  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  totalBox: {
    marginTop: 16,
    padding: 12,
    backgroundColor: "#f1f8e9",
    borderRadius: 8,
  },
});
