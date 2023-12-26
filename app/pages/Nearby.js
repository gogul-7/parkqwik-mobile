import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Nearby1 from "../components/nearby/Nearby1";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import Nearby2 from "../components/nearby/Nearby2";

const NearbyStack = createStackNavigator();

const Nearby = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <NearbyStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <NearbyStack.Screen name="nearby1" component={Nearby1} />
      <NearbyStack.Screen
        options={{
          header: () => {
            return <Header title={"Checkout"} />;
          },
        }}
        name="nearby2"
        component={Nearby2}
      />
    </NearbyStack.Navigator>
  );
};

export default Nearby;

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
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
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
