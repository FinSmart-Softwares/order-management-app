import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import ManagerDashboard from "../screens/Manager/Dashboard/ManagerDashboard";
import ManagerOrders from "../screens/Manager/OrderScreen/ManagerOrders";
import ManagerEmployees from "../screens/Manager/employee/ManagerEmployees";
import ManagerTracking from "../screens/Manager/tracking/ManagerTracking";
import SelectOrg from "../Organization/SelectOrg";
import ManagerProfile from "../screens/Manager/ManagerProfile";

const Tab = createBottomTabNavigator();

export default function ManagerTabNavigator({ setIsLoggedIn }) {
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
          const icons = {
            ManagerDashboard: "grid-outline",
            ManagerOrders: "document-text-outline",
            ManagerEmployees: "person-circle-outline",
            ManagerTracking: "location-outline",
            SelectOrg: "cart-outline",
            ManagerProfile: "settings-outline",
          };

          const iconName = focused
            ? icons[route.name].replace("-outline", "")
            : icons[route.name];

          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "#4da6ff" : "#aaa"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="ManagerDashboard">
        {(props) => (
          <ManagerDashboard {...props} setIsLoggedIn={setIsLoggedIn} />
        )}
      </Tab.Screen>

      <Tab.Screen name="ManagerOrders" component={ManagerOrders} />
      <Tab.Screen name="ManagerEmployees" component={ManagerEmployees} />
      <Tab.Screen name="ManagerTracking" component={ManagerTracking} />
      <Tab.Screen name="SelectOrg" component={SelectOrg} />
      <Tab.Screen name="ManagerProfile" component={ManagerProfile} />
    </Tab.Navigator>
  );
}
