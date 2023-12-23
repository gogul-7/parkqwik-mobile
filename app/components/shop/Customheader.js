import { StyleSheet, Image, View } from "react-native";
import React from "react";

const Customheader = () => {
  return (
    <View style={{ flexDirection: "row", gap: 18 }}>
      <Image
        source={require("../assets/logos/Search1.png")}
        style={{ width: 20, height: 20 }}
      ></Image>
      <Image
        source={require("../assets/logos/favorite1.png")}
        style={{ width: 24, height: 24 }}
      ></Image>
      <Image
        source={require("../assets/logos/shopping_cart.png")}
        style={{ width: 24, height: 24 }}
      ></Image>
    </View>
  );
};

export default Customheader;

const styles = StyleSheet.create({});
