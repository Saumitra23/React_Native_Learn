import React, { useState } from "react";
import { Text, View, Button } from "react-native";
const ColorAdjust = () => {
  const [Color, setColor] = useState({
    r: 0,
    g: 0,
    b: 0,
  });
  return (
    <View>
      <Button
        title="Add Red"
        onPress={() => {
          setColor({ ...Color, r: Color.r + 1 });
        }}
      ></Button>
      <Button
        title="Add Green"
        onPress={() => {
          setColor({ ...Color, g: Color.g + 1 });
        }}
      ></Button>
      <Button
        title="Add Blue"
        onPress={() => {
          setColor({ ...Color, b: Color.b + 1 });
        }}
      ></Button>
      <View
        key={Math.random()}
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${Color.r},${Color.g},${Color.b})`,
        }}
      ></View>
      <Text>
        R:{Color.r} G:{Color.g} B:{Color.b}
      </Text>
    </View>
  );
};

export default ColorAdjust;
