import react from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const data = [
    { id: 1, name: "Beach", url: require("../../assets/beach.jpg") },
    { id: 2, name: "Forest", url: require("../../assets/forest.jpg") },
    { id: 3, name: "Mountain", url: require("../../assets/mountain.jpg") },
  ];
  const result = data.map((item) => {
    return <ImageDetail key={item.id} name={item.name} image={item.url} />;
  });

  return <View>{result}</View>;
};

export default ImageScreen;
