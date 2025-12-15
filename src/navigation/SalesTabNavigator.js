import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import SalespersonDashboard from "../screens/Dashboard/SalespersonDashboard";
import SalespersonClientScreen from "../screens/ClientsScreen/SalespersonClientScreen";
import SalespersonOrderScreen from "../screens/OrderSCreen/SalespersonOrderScreen";
import SalespersonPlannerScreen from "../screens/PlannerScreen/SalespersonPlannerScreen";
import SalesNewOrder from "../screens/NewOrder/SalesNewOrder";
import SalespersonProfile from "../screens/Salesperson/SalesspersonProfile";  // <-- ADDED

const Tab = createBottomTabNavigator();

export default function SalesTabNavigator({ setIsLoggedIn }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0A0E1A",
          borderTopWidth: 0,
          height: 70,
          position: "absolute",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarIcon: ({ focused }) => {
          const icon = {
            Home: "home-outline",
            Orders: "cart-outline",
            Clients: "people-outline",
            Planner: "calendar-outline",
            NewOrder: "add-circle-outline",
            Profile: "person-circle-outline", // <-- ADDED
          };

          const iconName = icon[route.name] || "help-circle-outline";

          return (
            <Ionicons
              name={focused ? iconName.replace("-outline", "") : iconName}
              size={28}
              color={focused ? "#97bdfcff" : "#aaa"}
            />
          );
        },
      })}
    >

      <Tab.Screen name="Home">
        {(props) => <SalespersonDashboard {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>

      <Tab.Screen name="Orders" component={SalespersonOrderScreen} />

      <Tab.Screen name="NewOrder" component={SalesNewOrder} />

      <Tab.Screen name="Clients" component={SalespersonClientScreen} />

      <Tab.Screen name="Planner" component={SalespersonPlannerScreen} />

      {/* NEW PROFILE TAB */}
      <Tab.Screen name="Profile">
        {(props) => <SalespersonProfile {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>

    </Tab.Navigator>
  );
}
