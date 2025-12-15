import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DealerTabNavigator from "./DealerTabNavigator";
import TrackOrderScreen from "../screens/Dealer/TrackOrderScreen";

const Stack = createNativeStackNavigator();

export default function DealerStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DealerTabs" component={DealerTabNavigator} />
      <Stack.Screen name="TrackOrderScreen" component={TrackOrderScreen} />
    </Stack.Navigator>
  );
}
