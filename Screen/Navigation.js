import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen01 from "./Screen01";
import Screen02 from "./Screen02";
import Screen03 from "./Screen03";
import React from "react";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen name="Screen01" component={Screen01} options={{ headerShown: false }}/>
        <Stack.Screen name="Screen02" component={Screen02} options={{ headerShown: false }}/>
        <Stack.Screen name="Screen03" component={Screen03} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;