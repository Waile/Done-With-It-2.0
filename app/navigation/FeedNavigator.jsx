import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetails from "../screens/ListingDetailsScreen";
const Stack = createStackNavigator();
const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Listing" component={ListingsScreen} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
