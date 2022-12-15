import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>HomeScreen is working!!!!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "rgb(110,122,223)",
    fontStyle: "italic",
    textTransform: "capitalize",
  },
});

export default HomeScreen;
