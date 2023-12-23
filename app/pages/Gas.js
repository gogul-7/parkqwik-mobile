import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GasHeader from "../components/gas/GasHeader";
import Gas1 from "../components/gas/Gas1";
import Gas2 from "../components/gas/Gas2";
import Gas3 from "../components/gas/Gas3";
import Gas4 from "../components/gas/Gas4";
import GasPaySuccess from "../components/gas/GasPaySuccess";

const GasStack = createStackNavigator();

const Gas = () => {
  return (
    <GasStack.Navigator
      screenOptions={{
        header: ({ route }) => {
          return <GasHeader name={route.name} />;
        },
      }}
    >
      <GasStack.Screen name="gas1" component={Gas1} />
      <GasStack.Screen name="gas2" component={Gas2} />
      <GasStack.Screen name="gas3" component={Gas3} />
      <GasStack.Screen name="gas4" component={Gas4} />
      <GasStack.Screen name="gaspaysuccess" component={GasPaySuccess} />
    </GasStack.Navigator>
  );
};

export default Gas;
