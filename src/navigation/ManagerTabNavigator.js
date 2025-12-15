import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import ManagerDashboard from "../screens/Dashboard/ManagerDashboard";
import ManagerOrders from "../screens/OrderSCreen/ManagerOrders";
import ManagerEmployees from "../screens/Employee/ManagerEmployees";
import ManagerTracking from "../screens/Tracking/ManagerTracking";
import SelectOrg from "../Organization/SelectOrg";
import ManagerProfile from "../screens/Manager/ManagerProfile";   // <-- NEW SCREEN

const Tab = createBottomTabNavigator();

export default function ManagerTabNavigator({ setIsLoggedIn }) {
  const screenComponents = {
    ManagerDashboard,
    ManagerOrders,
    ManagerEmployees,
    ManagerTracking,
    SelectOrg,
    ManagerProfile, // <-- ADDED
  };

  const icons = {
    ManagerDashboard: "grid-outline",
    ManagerOrders: "document-text-outline",
    ManagerEmployees: "person-circle-outline",
    ManagerTracking: "location-outline",
    SelectOrg: "cart-outline",
    ManagerProfile: "settings-outline", // <-- ICON FOR NEW TAB
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0A0E1A",
          height: 70,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused }) => {
          const iconName = icons[route.name];
          const finalIcon = focused
            ? iconName.replace("-outline", "")
            : iconName;

          return (
            <Ionicons
              name={finalIcon}
              size={28}
              color={focused ? "#4da6ff" : "#aaa"}
            />
          );
        },
      })}
    >
      {Object.entries(screenComponents).map(([name, Component]) => (
        <Tab.Screen key={name} name={name}>
          {(props) => <Component {...props} setIsLoggedIn={setIsLoggedIn} />}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
}
