import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListScreen = () => {
  return <Text style={Styles.myFirstStyle}>List Screen is visible</Text>;
};

const Styles = StyleSheet.create({
  myFirstStyle: {
    fontSize: 40,
    color: "red",
  },
});

export default ListScreen;
