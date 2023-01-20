import { View, Text, Button } from "react-native";
import React from "react";

const PrimaryButton = (props) => {
  //   console.log(props);
  return (
    <View>
      <Button title={props.children} style={{}} />
    </View>
  );
};

export default PrimaryButton;
