import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import ManagerDashboard from "../screens/Dashboard/ManagerDashboard";
import ManagerOrders from "../screens/OrderSCreen/ManagerOrders";
import ManagerEmployees from "../screens/Employee/ManagerEmployees";
import ManagerTracking from "../screens/Tracking/ManagerTracking";

const Tab = createBottomTabNavigator();

export default function ManagerTabNavigator() {
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
          let icons = {
            ManagerDashboard: "grid-outline",
            ManagerOrders: "document-text-outline",
            ManagerEmployees: "person-circle-outline",
            ManagerTracking: "location-outline",
          };

          const name = icons[route.name];

          return (
            <Ionicons
              name={focused ? name.replace("-outline", "") : name}
              size={28}
              color={focused ? "#4da6ff" : "#aaa"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="ManagerDashboard" component={ManagerDashboard} />
      <Tab.Screen name="ManagerOrders" component={ManagerOrders} />
      <Tab.Screen name="ManagerEmployees" component={ManagerEmployees} />
      <Tab.Screen name="ManagerTracking" component={ManagerTracking} />
    </Tab.Navigator>
  );
}
