import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SalespersonPlannerScreen from "../screens/Salesperson/PlannerScreen/SalespersonPlannerScreen";
import VisitDetailsScreen from "../screens/Salesperson/PlannerScreen/VisitDetailsScreen";

const Stack = createNativeStackNavigator();

export default function PlannerStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PlannerMain" component={SalespersonPlannerScreen} />
      <Stack.Screen name="VisitDetails" component={VisitDetailsScreen} />
    </Stack.Navigator>
  );
}
