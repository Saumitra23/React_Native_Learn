import React, { useState } from "react";
import { View, Text, Stylesheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const SqaureScreen = () => {
  const [color, setColor] = useState({
    r: 0,
    g: 0,
    b: 0,
  });

  const changeHandler = (str, value) => {
    switch (str) {
      case "red":
        if (color.r + value > 0 && color.r + value < 255)
          setColor({ ...color, r: color.r + value });
        break;
      case "green":
        if (color.g + value > 0 && color.g + value < 255)
          setColor({ ...color, g: color.g + value });
        break;
      case "blue":
        if (color.b + value > 0 && color.b + value < 255)
          setColor({ ...color, b: color.b + value });
        break;
      default:
        console.log("nothing");
    }
  };
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => {
          changeHandler("red", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          changeHandler("red", -1 * COLOR_INCREMENT);
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          changeHandler("green", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          changeHandler("green", -1 * COLOR_INCREMENT);
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          changeHandler("blue", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          changeHandler("blue", -1 * COLOR_INCREMENT);
        }}
      />
      <View
        style={{
          padding: 100,
          margin: 100,
          height: 100,
          width: 100,
          backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
        }}
      ></View>
    </View>
  );
};

export default SqaureScreen;
