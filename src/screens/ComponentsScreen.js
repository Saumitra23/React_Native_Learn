import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const temp = "Learning React native is fun though";
  return (
    <View>
      <Text style={Styles.textStyle}>
        This is the Components Screen and it works
      </Text>
      <Text style={Styles.tempStyle}>{temp}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
  tempStyle: {
    marginTop: 20,
    fontSize: 30,
    color: "red",
    textTransform: "capitalize",
  },
});

export default ComponentsScreen;
