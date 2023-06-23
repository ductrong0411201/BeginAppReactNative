import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import FrogIMG from "../assets/frog.jpg";

export default function CategoryList(props) {
  let { category } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.name}</Text>
      <Image style={styles.img} source={FrogIMG}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 128,
    height: 128,
    objectFit: "fill",
    borderRadius: 10
  },
  container: {
    alignItems: "center",
    margin: 16,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor:'#FFF'
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
});
