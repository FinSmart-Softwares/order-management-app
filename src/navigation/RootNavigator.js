import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";

import SalesTabNavigator from "./SalesTabNavigator";
import ManagerTabNavigator from "./ManagerTabNavigator";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // manager | salesperson

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen 
                {...props}
                setIsLoggedIn={setIsLoggedIn}
                setUserRole={setUserRole}   // ⬅ add this
              />
            )}
          </Stack.Screen>
        ) : userRole === "manager" ? (
          
          // MANAGER UI
          <Stack.Screen name="ManagerMain" component={ManagerTabNavigator} />

        ) : (
          
          // SALESPERSON UI
          <Stack.Screen name="SalesMain" component={SalesTabNavigator} />

        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
