import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import CatalogOrder from "../screens/Dealer/CatlogOrder"
import FormOrder from "../screens/Dealer/FormOrder"
import OrderHistory from "../screens/Dealer/OrderHistory"
import Cart from "../screens/Dealer/DealerCart";

const Tab = createBottomTabNavigator();

export default function DealerTabNavigator() {
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
            CatalogOrder: "grid-outline",
            FormOrder: "document-text-outline",
            OrderHistory: "time-outline",
            Cart: "cart-outline",
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
      <Tab.Screen name="CatalogOrder" component={CatalogOrder} />
      <Tab.Screen name="FormOrder" component={FormOrder} />
      <Tab.Screen name="OrderHistory" component={OrderHistory} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
