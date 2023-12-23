import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Close1 from "../components/fastag/Close1";
import Close2 from "../components/fastag/Close2";
import Close3 from "../components/fastag/Close3";

const CloseStack = createStackNavigator();

const CloseFast = () => {
  return (
    <CloseStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <CloseStack.Screen name="close1" component={Close1} />
      <CloseStack.Screen name="close2" component={Close2} />
      <CloseStack.Screen name="close3" component={Close3} />
    </CloseStack.Navigator>
  );
};

export default CloseFast;
