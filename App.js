import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CatgoriesScreen from "./screens/CatgoriesScreen";
import Login from "./screens/Login";
import AddNewMemberScreen from "./screens/AddNewMemberScreen";
import ViewPaymentStatusScreen from "./screens/ViewPaymentStatusScreen";
import MemberPaymentConfirmationScreen from "./screens/MemberPaymentConfirmationScreen";
import WaitingListDetailsScreen from "./screens/WaitingListDetailsScreen";
import AllMembersScreen from "./screens/AllMembersScreen";
import AddMembertoWaiting from "./screens/AddMembertoWaiting";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleLogin = () => {
    setIsButtonPressed(true);
    
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000); 
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Login"}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Home" component={CatgoriesScreen} />
        <Stack.Screen
          name="ViewPaymentStatus"
          component={ViewPaymentStatusScreen}
        />
        <Stack.Screen name="AddNewMember" component={AddNewMemberScreen} />
        <Stack.Screen
          name="MemberPaymentConfirmation"
          component={MemberPaymentConfirmationScreen}
        />
        <Stack.Screen
          name="WaitingListDetails"
          component={WaitingListDetailsScreen}
        />
        <Stack.Screen name="AllMemberDetails" component={AllMembersScreen} />
        <Stack.Screen
          name="AddMembertoWaiting"
          component={AddMembertoWaiting}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
