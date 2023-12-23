import React, { useContext } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BuyFast1 from "../components/fastag/BuyFast1";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
const BuyFastagStack = createStackNavigator();
import BuyFast2 from "../components/fastag/BuyFast2";
import BuyFast3 from "../components/fastag/BuyFast3";
import BuyFastPay from "../components/fastag/BuyFastPay";
import AppContext from "../context/AppContext";

const BuyFastag = () => {
  return (
    <BuyFastagStack.Navigator
      screenOptions={{
        header: () => {
          return <Header />;
        },
      }}
    >
      <BuyFastagStack.Screen name="buyscreen1" component={BuyFast1} />
      <BuyFastagStack.Screen name="buyscreen2" component={BuyFast2} />
      <BuyFastagStack.Screen name="buyscreen3" component={BuyFast3} />
      <BuyFastagStack.Screen name="buyscreen4" component={BuyFastPay} />
    </BuyFastagStack.Navigator>
  );
};

const Header = () => {
  const { headerNum, hideHeader } = useContext(AppContext);
  if (!hideHeader)
    return (
      <View style={styles.header}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <View style={styles.circle}>
            <Image
              style={{ maxWidth: 25, maxHeight: 25 }}
              source={require("../assets/images/greencar.png")}
            />
          </View>
          <Text style={[styles.text, { fontSize: 9 }]}>Vehicle Details</Text>
        </View>
        <View
          style={
            headerNum < 2
              ? [styles.line, { marginLeft: -10, opacity: 0.5 }]
              : [styles.line, { marginLeft: -10 }]
          }
        ></View>
        <View
          style={
            headerNum < 2
              ? { display: "flex", alignItems: "center", gap: 8, opacity: 0.5 }
              : { display: "flex", alignItems: "center", gap: 8 }
          }
        >
          <View style={styles.circle}>
            <Image
              style={{ maxWidth: 25, maxHeight: 25 }}
              source={require("../assets/images/greenlocation.png")}
            />
          </View>
          <Text style={[styles.text, { fontSize: 9 }]}>Location</Text>
        </View>
        <View
          style={
            headerNum < 3 ? [styles.line, { opacity: 0.5 }] : [styles.line]
          }
        ></View>
        <View
          style={
            headerNum < 3
              ? { display: "flex", alignItems: "center", gap: 8, opacity: 0.5 }
              : { display: "flex", alignItems: "center", gap: 8 }
          }
        >
          <View style={styles.circle}>
            <FontAwesomeIcon size={25} icon="money-bills" color="#1A9E75" />
          </View>
          <Text style={[styles.text, { fontSize: 9 }]}>Payment</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "#1A9E75",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
  },
  text: {
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: 55,
    height: 1,
    borderBottomWidth: 0.5,
    borderStyle: "dashed",
    borderColor: "white",
    marginBottom: 20,
  },
});

export default BuyFastag;
