import React from "react";
import { View, Text, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  const buttonTitleIncrease = `Increase ${color}`;
  const buttonTitleDecrease = `Derease ${color}`;
  return (
    <View>
      <Text>{color}</Text>
      <Button title={buttonTitleIncrease} onPress={onIncrease}>
        {" "}
      </Button>
      <Button title={buttonTitleDecrease} onPress={onDecrease}>
        {" "}
      </Button>
    </View>
  );
};

export default ColorCounter;
