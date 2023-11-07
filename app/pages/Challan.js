import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PayChallan from "../components/PayChallan";
import ChallanDetails from "../components/ChallanDetails";
import ChallanHeader from "../components/ChallanHeader";
import ChallanPayment from "../components/ChallanPayment";
import ChallanPaySuccess from "../components/ChallanPaySuccess";

const Challan = () => {
  const Challan = createStackNavigator();

  return (
    <Challan.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <Challan.Screen name="challan1" component={PayChallan}></Challan.Screen>
      <Challan.Screen
        name="challan2"
        component={ChallanDetails}
        options={{
          header: () => {
            return <ChallanHeader />;
          },
        }}
      ></Challan.Screen>
      <Challan.Screen
        name="challan3"
        component={ChallanPayment}
      ></Challan.Screen>
      <Challan.Screen
        name="challan4"
        component={ChallanPaySuccess}
      ></Challan.Screen>
    </Challan.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Challan;
