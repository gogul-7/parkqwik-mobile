import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ActivateFast1 from "../components/ActivateFast1";
import ActivateFast2 from "../components/ActivateFast2";
import ActivateFast3 from "../components/ActivateFast3";

const FastagStack = createStackNavigator();

const Fastag = () => {
  return (
    <FastagStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <FastagStack.Screen name="subscreen1" component={ActivateFast1} />
      <FastagStack.Screen name="subscreen2" component={ActivateFast2} />
      <FastagStack.Screen name="subscreen3" component={ActivateFast3} />
    </FastagStack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Fastag;
