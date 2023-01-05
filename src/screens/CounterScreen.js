import React, { useReducer, useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + parseInt(action.payload),
      };
    case "Decrement":
      return {
        count: state.count - parseInt(action.payload),
      };
    default:
      return;
  }
};
const CounterScreen = () => {
  const [Count, onChangeCount] = useState(null);
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  console.log(Count);
  return (
    <View>
      <TextInput
        style={{ padding: 10, margin: 10 }}
        placeholder="value"
        onChangeText={onChangeCount}
        value={Count}
        keyboardType="numeric"
        keyboardAppearance="dark"
      />
      <Button
        title="Increase"
        onPress={() => {
          window.alert("Incremented");
          dispatch({ type: "Increment", payload: Count });
        }}
      ></Button>
      <Text style={Styles.textStyle}>Count is: {state.count}</Text>
      <Button
        title="Decrease"
        onPress={() => {
          window.alert("Decremented");
          dispatch({ type: "Decrement", payload: Count });
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
