import React, { useContext } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Replace1 from "../components/fastag/Replace1";
import Replace3 from "../components/fastag/Replace3";
import BuyFastPay from "../components/fastag/BuyFastPay";
import AppContext from "../context/AppContext";
import Replace2 from "../components/fastag/Replace2";

const ReplaceStack = createStackNavigator();

const ReplaceFast = () => {
  return (
    <ReplaceStack.Navigator
      screenOptions={{
        header: () => {
          return <Header />;
        },
      }}
    >
      <ReplaceStack.Screen name="replace1" component={Replace1} />
      <ReplaceStack.Screen name="replace2" component={Replace2} />
      <ReplaceStack.Screen name="replace3" component={Replace3} />
      <ReplaceStack.Screen name="replace4" component={BuyFastPay} />
    </ReplaceStack.Navigator>
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

export default ReplaceFast;
