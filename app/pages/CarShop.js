import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import Shop1 from "../components/shop/Shop1";
import Customheader from "../components/shop/Customheader";
import Perfume from "../components/shop/Perfume";
import Shop3 from "../components/shop/Shop3";
import Shop4 from "../components/shop/Shop4";

const ShopStack = createStackNavigator();

const CarShop = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <ShopStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      {/* <ShopStack.Screen name="ev1" component={Ev1} /> */}
      <ShopStack.Screen
        options={{
          header: () => {
            return <Header title={"Shop"} />;
          },
        }}
        name="shop1"
        component={Shop1}
      />
      <ShopStack.Screen
        options={{
          header: () => {
            return <Header title={"Car Perfumes"} />;
          },
        }}
        name="shop2"
        component={Perfume}
      />
      <ShopStack.Screen
        options={{
          header: () => {
            return <Header />;
          },
        }}
        name="shop3"
        component={Shop3}
      />
      <ShopStack.Screen
        options={{
          header: () => {
            return <Header title={"Car Perfumes"} />;
          },
        }}
        name="shop4"
        component={Shop4}
      />
    </ShopStack.Navigator>
  );
};

export default CarShop;

const Header = ({ title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={handlePress}>
        <Image
          style={{ width: 23, height: 23 }}
          source={require("../assets/images/arrowleft.png")}
        />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
      <View style={{ position: "absolute", right: 20, bottom: 10 }}>
        {(title === "Shop" || "Car Perfumes") && <Customheader />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    paddingTop: 20,
    backgroundColor: "#1A9E75",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    paddingTop: 3,
  },
});
