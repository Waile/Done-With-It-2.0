import React, { useEffect, useState } from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";
import * as ImagePicker from 'expo-image-picker'
import { Alert, Button, Image } from "react-native";


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
     if (!response.canceled) {
      setImageUri(response.assets[0].uri)
     }

   } catch (error) {
    console.log("Error while getting the image",error);
   }
  
  }

  useEffect(() => {
    requestPermission()
  }, [])
  
  return <Screen>
    <Button title="Select Image" onPress={selectImage} />
    <Image source={{uri:imageUri}} style={{height:200,width:200}} />
  </Screen>;
}
