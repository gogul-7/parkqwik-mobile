import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Vehicle from "../components/myvehicle/Vehicle";
import Vehicle2 from "../components/myvehicle/Vehicle2";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const VehicleStack = createStackNavigator();

const MyVehicle = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <VehicleStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <VehicleStack.Screen
        name="vehicle1"
        options={{
          header: () => {
            return <Header title={"Checkout"} />;
          },
        }}
        component={Vehicle}
      />
      <VehicleStack.Screen
        name="vehicle2"
        options={{
          header: () => {
            return <Header title={"Checkout"} />;
          },
        }}
        component={Vehicle2}
      />
    </VehicleStack.Navigator>
  );
};

export default MyVehicle;

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
    height: 100,
    paddingTop: 45,
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
