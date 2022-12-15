import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to the HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Component Screen"
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text style={styles.button_el2}>List Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: "rgb(110,122,223)",
    fontStyle: "italic",
    textTransform: "capitalize",
  },
  button_el2: {
    fontSize: 25,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: 10,
    margin: 20,
  },
});

export default HomeScreen;
