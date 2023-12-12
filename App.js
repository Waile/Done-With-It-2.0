import React, { useEffect, useState } from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";
import * as ImagePicker from 'expo-image-picker'
import { Alert } from "react-native";


export default function App() {
  const [imageUri, setImageUri] = useState()
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      Alert("You need to enable permission to access the library")
    }
  }

  const selectImage = async () => {
   try {
     const response = await ImagePicker.launchImageLibraryAsync()
     

   } catch (error) {
    console.log("Error while getting the image",error);
   }
  
  }

  useEffect(() => {
    requestPermission()
  }, [])
  
  return <Screen></Screen>;
}
