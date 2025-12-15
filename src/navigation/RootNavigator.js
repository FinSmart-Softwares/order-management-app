import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/Auth/LoginScreen";

import SalesTabNavigator from "./SalesTabNavigator";
import ManagerTabNavigator from "./ManagerTabNavigator";
import DealerStackNavigator from "./DealerStackNavigator";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // manager | salesperson | dealer

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* --------------- LOGIN SCREEN --------------- */}
        {!isLoggedIn ? (
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen
                {...props}
                setIsLoggedIn={setIsLoggedIn}
                setUserRole={setUserRole}
              />
            )}
          </Stack.Screen>
        ) : (
          <>
            {/* --------------- MANAGER --------------- */}
            {userRole === "manager" && (
              <Stack.Screen name="ManagerMain">
                {(props) => (
                  <ManagerTabNavigator
                    {...props}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              </Stack.Screen>
            )}

            {/* --------------- SALESPERSON --------------- */}
            {userRole === "salesperson" && (
              <Stack.Screen name="SalesMain">
                {(props) => (
                  <SalesTabNavigator
                    {...props}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              </Stack.Screen>
            )}

            {/* --------------- DEALER --------------- */}
          {userRole === "dealer" && (
  <Stack.Screen name="DealerMain">
    {(props) => (
      <DealerStackNavigator
        {...props}
        setIsLoggedIn={setIsLoggedIn}
      />
    )}
  </Stack.Screen>
)}

          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
