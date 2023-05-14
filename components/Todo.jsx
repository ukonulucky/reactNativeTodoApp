import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Todo({ item, handlePress }) {
  return (
    <TouchableOpacity
   
      onPress={() => {
        handlePress(item.key);
      }}
    >
      <Text    style={styles.item}>{item.task}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    borderBottomColor: "gray",
    borderWidth: 1,
    borderBottomWidth: 2,
    borderStyle: "dotted",
    marginVertical: 10,
    padding: 5,
    borderRadius: 10,
    color: "white",
    backgroundColor:"purple"
  },
});
