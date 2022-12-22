import React, { useState } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import ColorAdjust from "../components/ColorAdjust";

const ColorScreen = () => {
  const [Color, setColor] = useState(["rgb(122,124,234)"]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          const r = Math.floor(Math.random() * 255);
          const g = Math.floor(Math.random() * 255);
          const b = Math.floor(Math.random() * 255);
          const newColor = `rgb(${r},${g},${b})`;
          setColor([...Color, newColor]);
          console.log(Color);
        }}
      ></Button>
      <View
        style={{
          flex: 4,
          flexDirection: "column",
          marginHorizontal: "auto",
        }}
      >
        {Color.map((color) => (
          <View
            key={Math.random()}
            style={{
              height: 100,
              width: 100,
              backgroundColor: color,
            }}
          ></View>
        ))}
      </View>
      {/*<FlatList
        data={Color}
        renderItem={({ item }) => (
          <View
            key={Math.random()}
            style={{
              height: 100,
              width: 100,
              flex: 4,
              backgroundColor: item,
            }}
          ></View>
        )}
          ></FlatList>*/}
      <View>
        <ColorAdjust />
      </View>
    </View>
  );
};
export default ColorScreen;
