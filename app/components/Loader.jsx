import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import colors from "../config/colors";

const Loader = ({ visible = false }) => {
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={colors.primary} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
