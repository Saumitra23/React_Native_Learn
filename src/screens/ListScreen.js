import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const friends = [
    { name: "Friends #1", age: 1, key: "1" },
    { name: "Friends #2", age: 2, key: "2" },
    { name: "Friends #3", age: 3, key: "3" },
    { name: "Friends #4", age: 4, key: "4" },
    { name: "Friends #5", age: 5, key: "5" },
    { name: "Friends #6", age: 6, key: "6" },
    { name: "Friends #7", age: 7, key: "7" },
    { name: "Friends #8", age: 8, key: "8" },
    { name: "Friends #9", age: 9, key: "9" },
    { name: "Friends #10", age: 10, key: "10" },
  ];
  return (
    <FlatList
      // use this if not adding key in the object
      //   keyExtractor={(friend) => {
      //     friend.name;
      //   }}

      //   to scroll horizontally
      //   horizontal

      //   to disable scrollbar
      //   showsHorizontalScrollIndicator={false}

      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={Styles.myFirstStyle}>
            The name is {item.name} having age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const Styles = StyleSheet.create({
  myFirstStyle: {
    fontSize: 20,
    marginVertical: 10,
    color: "hotpink",
  },
});

export default ListScreen;
