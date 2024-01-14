import React, { useEffect, useState } from "react";
import Screen from "./app/components/Screen";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import myTheme from "./app/navigation/navigationTheme";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AccountScreen from "./app/screens/AccountScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Button
//       title="Details"
//       onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
//     />
//   </Screen>
// );
// const TweetDetails = () => (
//   <Screen>
//     <Text>TweetDetails</Text>
//   </Screen>
// );
// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: "tomato" },
//       headerTintColor: "black",
//     }}
//   >
//     <Stack.Screen name="Tweets" component={Tweets} />
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetDetails}
//       options={({ route }) => ({ title: route.params.id })}
//     />
//   </Stack.Navigator>
// );

// const Tab = createBottomTabNavigator();
// const BottomNavigator = () => (
//   <Tab.Navigator
//     tabBarOptions={{
//       activeBackgroundColor: "tomato",
//       activeTintColor: "white",
//       inactiveBackgroundColor: "green",
//       inactiveTintColor: "black",
//     }}
//   >
//     <Tab.Screen
//       name="Feed"
//       component={StackNavigator}
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons size={size} color={color} name="home" />
//         ),
//       }}
//     />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>
// );

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
