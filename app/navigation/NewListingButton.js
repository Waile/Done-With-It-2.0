import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 60,
    width: 60,
    borderRadius: 30,
    bottom: 20,
    borderWidth: 5,
    borderColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
