import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const ImageDetail = ({ name, image }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Image source={image}></Image>
    </View>
  );
};

const Styles = StyleSheet.create({});
export default ImageDetail;
