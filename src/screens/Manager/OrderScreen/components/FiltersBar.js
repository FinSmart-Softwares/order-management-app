import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Dropdown from "./Dropdown";
import styles from "../styles/styles";

const FiltersBar = ({ state, dispatch }) => {
  const { searchText, openDropdown } = state;

  return (
    <View style={styles.filterRow}>
      {/* SEARCH */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={22} />
        <TextInput
          placeholder="Search orders…"
          style={styles.searchInput}
          value={searchText}
          onChangeText={(t) =>
            dispatch({ type: "SET_SEARCH", payload: t })
          }
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        {/* WAREHOUSE */}
        <View style={{ marginHorizontal: 6 }}>
          <TouchableOpacity
            onPress={() =>
              dispatch({
                type: "TOGGLE_DROPDOWN",
                payload: "warehouse",
              })
            }
          >
            <Ionicons
              name="business-outline"
              size={28}
              color="#334155"
            />
          </TouchableOpacity>

          {openDropdown === "warehouse" && (
            <View style={styles.dropdownAbsolute}>
              <Dropdown
                options={[
                  "All",
                  "Warehouse 1",
                  "Warehouse 2",
                  "Warehouse 3",
                ]}
                dispatch={dispatch}
                onSelect={(v) =>
                  dispatch({
                    type: "SET_WAREHOUSE",
                    payload: v,
                  })
                }
              />
            </View>
          )}
        </View>

        {/* STATUS */}
        <View style={{ marginHorizontal: 6 }}>
          <TouchableOpacity
            onPress={() =>
              dispatch({
                type: "TOGGLE_DROPDOWN",
                payload: "status",
              })
            }
          >
            <Ionicons
              name="swap-vertical-outline"
              size={28}
              color="#334155"
            />
          </TouchableOpacity>

          {openDropdown === "status" && (
            <View style={styles.dropdownAbsolute}>
              <Dropdown
                options={["All", "Pending", "Completed", "Rejected"]}
                dispatch={dispatch}
                onSelect={(v) =>
                  dispatch({
                    type: "SET_ORDER_STATUS",
                    payload: v,
                  })
                }
              />
            </View>
          )}
        </View>

        {/* TYPE */}
        <View style={{ marginHorizontal: 6 }}>
          <TouchableOpacity
            onPress={() =>
              dispatch({
                type: "TOGGLE_DROPDOWN",
                payload: "type",
              })
            }
          >
            <Ionicons
              name="funnel-outline"
              size={28}
              color="#334155"
            />
          </TouchableOpacity>

          {openDropdown === "type" && (
            <View style={styles.dropdownAbsolute}>
              <Dropdown
                options={["All", "Staff", "Shop Order"]}
                dispatch={dispatch}
                onSelect={(v) =>
                  dispatch({
                    type: "SET_ORDER_TYPE",
                    payload: v,
                  })
                }
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default FiltersBar;
