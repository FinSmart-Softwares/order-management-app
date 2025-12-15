export const initialState = {
  searchText: "",
  warehouseFilter: null,
  orderStatusFilter: null,
  orderTypeFilter: null,
  openDropdown: null,

  updateWarehouseModalOpen: false,
  selectedOrderId: null,
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
        openDropdown:
          state.openDropdown === action.payload ? null : action.payload,
      };

    case "CLOSE_DROPDOWN":
      return { ...state, openDropdown: null };

    case "OPEN_WAREHOUSE_MODAL":
      return { 
        ...state,
        updateWarehouseModalOpen: true,
        selectedOrderId: action.payload,
      };

    case "CLOSE_WAREHOUSE_MODAL":
      return { 
        ...state,
        updateWarehouseModalOpen: false,
        selectedOrderId: null,
      };

    default:
      return state;
  }
}
