import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CounterScreen = () => {
  const [Count, setCount] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          window.alert("Incremented");
          setCount((prev) => prev + 1);
        }}
      ></Button>
      <Text style={Styles.textStyle}>Count is: {Count}</Text>
      <Button
        title="Decrease"
        onPress={() => {
          window.alert("Decremented");
          setCount((prev) => prev - 1);
        }}
      ></Button>
    </View>
  );
};

const Styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "hotpink",
  },
});

export default CounterScreen;
