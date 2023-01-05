import React, { useReducer } from "react";
import { View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  // state = {r,g,b => number}
  // action = {type: red || green || blue, amount: 15 || -15}
  switch (action.type) {
    case "change_red":
      return state.r + action.payload > 0 && state.r + action.payload < 255
        ? { ...state, r: state.r + action.payload }
        : state;
    case "change_green":
      return state.g + action.payload > 0 && state.g + action.payload < 255
        ? { ...state, g: state.g + action.payload }
        : state;
    case "change_blue":
      return state.b + action.payload > 0 && state.b + action.payload < 255
        ? { ...state, b: state.b + action.payload }
        : state;
    default:
      return state;
  }
};

const SqaureScreen2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    r: 0,
    g: 0,
    b: 0,
  });
  console.log(state);
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => {
          dispatch({ type: "change_red", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          dispatch({ type: "change_green", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT });
        }}
      />
      <View
        style={{
          padding: 100,
          margin: 100,
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.r},${state.g},${state.b})`,
        }}
      ></View>
    </View>
  );
};

export default SqaureScreen2;
