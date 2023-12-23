import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Electricity1 from "../components/electricty/Electricity1";
import ElectricityHeader from "../components/electricty/ElectricityHeader";
import Electricity2 from "../components/electricty/Electricity2";
import Electricity3 from "../components/electricty/Electricity3";
import ElectricityPay from "../components/electricty/ElectricityPay";
import PaySuccess from "../components/electricty/PaySuccess";

const ElectricityStack = createStackNavigator();

const Electricity = () => {
  return (
    <ElectricityStack.Navigator
      screenOptions={{
        header: ({ route }) => {
          return <ElectricityHeader name={route.name} />;
        },
      }}
    >
      <ElectricityStack.Screen
        name="electricity1"
        component={Electricity1}
      ></ElectricityStack.Screen>
      <ElectricityStack.Screen
        name="electricity2"
        component={Electricity2}
      ></ElectricityStack.Screen>
      <ElectricityStack.Screen
        name="electricity3"
        component={Electricity3}
      ></ElectricityStack.Screen>
      <ElectricityStack.Screen
        name="electricitypay"
        component={ElectricityPay}
      ></ElectricityStack.Screen>
      <ElectricityStack.Screen
        name="paysuccess"
        component={PaySuccess}
      ></ElectricityStack.Screen>
    </ElectricityStack.Navigator>
  );
};

export default Electricity;
