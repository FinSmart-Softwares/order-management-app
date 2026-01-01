import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ManagerTabNavigator from "./ManagerTabNavigator";
import VisitDetailsfullpage from "../screens/Manager/Dashboard/VisitDetailsfullpage"

const Stack = createNativeStackNavigator();

export default function ManagerStackNavigator({ setIsLoggedIn }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      {/* Bottom Tabs */}
      <Stack.Screen name="ManagerTabs">
        {(props) => (
          <ManagerTabNavigator {...props} setIsLoggedIn={setIsLoggedIn} />
        )}
      </Stack.Screen>

      {/* Full Page (NO TAB) */}
      <Stack.Screen
        name="VisitDetails"
        component={VisitDetailsfullpage}
      />
    </Stack.Navigator>
  );
}
