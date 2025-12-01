export const initialState = {
  searchText: "",
  warehouseFilter: null,
  orderStatusFilter: null,
  orderTypeFilter: null,
  openDropdown: null,
};

export function ordersReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, searchText: action.payload };

    case "SET_WAREHOUSE":
      return { ...state, warehouseFilter: action.payload };

    case "SET_ORDER_STATUS":
      return { ...state, orderStatusFilter: action.payload };

    case "SET_ORDER_TYPE":
      return { ...state, orderTypeFilter: action.payload };

    case "TOGGLE_DROPDOWN":
      return {
        ...state,
        openDropdown: state.openDropdown === action.payload ? null : action.payload,
      };

    case "CLOSE_DROPDOWN":
      return { ...state, openDropdown: null };

    default:
      return state;
  }
}
