import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Auth
import LoginScreen from "../screens/Auth/LoginScreen";

// Navigators
import SalesTabNavigator from "./SalesTabNavigator";
import ManagerStackNavigator from "./ManagerStackNavigator"; // ✅ IMPORTANT
import DealerStackNavigator from "./DealerStackNavigator";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // manager | salesperson | dealer

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* ---------------- LOGIN ---------------- */}
        {!isLoggedIn && (
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen
                {...props}
                setIsLoggedIn={setIsLoggedIn}
                setUserRole={setUserRole}
              />
            )}
          </Stack.Screen>
        )}

        {/* ---------------- MANAGER ---------------- */}
        {isLoggedIn && userRole === "manager" && (
          <Stack.Screen name="ManagerMain">
            {(props) => (
              <ManagerStackNavigator
                {...props}
                setIsLoggedIn={setIsLoggedIn}
              />
            )}
          </Stack.Screen>
        )}

        {/* ---------------- SALESPERSON ---------------- */}
        {isLoggedIn && userRole === "salesperson" && (
          <Stack.Screen name="SalesMain">
            {(props) => (
              <SalesTabNavigator
                {...props}
                setIsLoggedIn={setIsLoggedIn}
              />
            )}
          </Stack.Screen>
        )}

        {/* ---------------- DEALER ---------------- */}
        {isLoggedIn && userRole === "dealer" && (
          <Stack.Screen name="DealerMain">
            {(props) => (
              <DealerStackNavigator
                {...props}
                setIsLoggedIn={setIsLoggedIn}
              />
            )}
          </Stack.Screen>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
