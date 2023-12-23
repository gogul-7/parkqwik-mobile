import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { launchImageLibrary } from 'react-native-image-picker';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";

export default function Insurance6(props) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView>
      <View>
        <Modal
          animationType={"slide"}
          visible={props.show}
          onRequestClose={props.close}
          transparent={true}
        >
          <SafeAreaView style={styles.modal}>
            <TouchableOpacity onPress={props.close}>
              <Image
                source={require("../assets/logos/slidedown.png")}
                style={{ alignSelf: "center", width: 29, height: 4 }}
              ></Image>
            </TouchableOpacity>
            <Tab.Navigator
              initialRouteName="Item1"
              screenOptions={{
                tabBarPressColor: "white",
                tabBarGap: 0,
                tabBarInactiveTintColor: "#A0A0A0",
                tabBarActiveTintColor: "#1A9E75",
                tabBarLabelStyle: {
                  fontSize: 14,
                  textTransform: "none",
                  fontFamily: "Poppins_400Regular",
                  top: 5,
                  gap: 5,
                },
                tabBarStyle: {
                  borderBottomWidth: 1,
                  borderBottomColor: "#E6E6E6",
                  shadowColor: "white",
                },
                tabBarIndicatorStyle: {
                  borderWidth: 1,
                  borderColor: "#1A9E75",
                },
              }}
            >
              <Tab.Screen
                name="Item1"
                component={Item1Screen}
                options={{
                  tabBarLabel: "About Policy",
                  tabBarIndicatorStyle: {
                    borderWidth: 2,
                    borderColor: "#1A9E75",
                    width: 100,
                    left: 30,
                    borderTopRightRadius: 5,
                    borderTopLeftRadius: 5,
                  },
                }}
              />
              <Tab.Screen
                name="Item2"
                component={Item2Screen}
                options={{
                  tabBarLabel: "Premium Breakup",
                  tabBarIndicatorStyle: {
                    borderWidth: 2,
                    borderColor: "#1A9E75",
                    borderTopStartRadius: 5,
                    borderTopRightRadius: 5,
                    width: 125,
                    left: 20,
                  },
                }}
              />
            </Tab.Navigator>
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
const Item1Screen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/logos/check_circle.png")}
          style={styles.check}
        ></Image>
        <Text style={{ fontFamily: "Poppins_400Regular", color: "black" }}>
          {" "}
          What Covered
        </Text>
        <Image
          source={require("../assets/logos/expand_more.png")}
          style={{ width: 24, height: 8, left: 140 }}
        ></Image>
      </View>
      <View style={styles.container}>
        <Image
          source={require("../assets/logos/cancel1.png")}
          style={styles.check}
        ></Image>
        <Text style={{ fontFamily: "Poppins_400Regular", color: "black" }}>
          {" "}
          What Not Covered
        </Text>
        <Image
          source={require("../assets/logos/expand_more.png")}
          style={{ width: 24, height: 8, left: 105 }}
        ></Image>
      </View>
      <View style={styles.container}>
        <Image
          source={require("../assets/logos/added_value.png")}
          style={styles.check}
        ></Image>
        <Text style={{ fontFamily: "Poppins_400Regular", color: "black" }}>
          {" "}
          Added Coverage
        </Text>
        <Image
          source={require("../assets/logos/expand_more.png")}
          style={{ width: 24, height: 8, left: 110 }}
        ></Image>
      </View>
    </SafeAreaView>
  );
};
const Item2Screen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          width: 322,
          height: 375,
          backgroundColor: "white",
          borderRadius: 15,
          top: 29,
          padding: 20,
          shadowColor: "black",
          elevation: 5,
        }}
      >
        <Text style={{ fontFamily: "Poppins_400Regular", color: "black" }}>
          Basic Cover
        </Text>
        <View style={{ flexDirection: "row", gap: 40 }}>
          <Text style={{ fontFamily: "Poppins_400Regular" }}>
            Basic Own Damage Premium
          </Text>
          <Text style={{ color: "black" }}>₹ 2,431</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 55 }}>
          <Text style={{ fontFamily: "Poppins_400Regular" }}>
            Third Party Cover Premium
          </Text>
          <Text style={{ color: "black" }}>₹ 2,431</Text>
        </View>
        <Image
          source={require("../assets/logos/recline.png")}
          style={{
            width: 293,
            alignSelf: "center",
            height: 2,
            top: 10,
            marginBottom: 20,
          }}
        ></Image>
        <Text style={{ fontFamily: "Poppins_400Regular", color: "black" }}>
          Addon & Accessories
        </Text>
        <View style={{ flexDirection: "row", gap: 60 }}>
          <Text style={{ fontFamily: "Poppins_400Regular" }}>
            24x7 Roadside Assistance
          </Text>
          <Text style={{ color: "black", fontFamily: "Poppins_500Medium" }}>
            Free
          </Text>
        </View>
        <Image
          source={require("../assets/logos/recline.png")}
          style={{
            width: 293,
            alignSelf: "center",
            height: 2,
            top: 10,
            marginBottom: 20,
          }}
        ></Image>
        <Text style={{ fontFamily: "Poppins_400Regular", color: "black" }}>
          Discounts
        </Text>
        <View style={{ flexDirection: "row", gap: 120 }}>
          <Text style={{ fontFamily: "Poppins_400Regular" }}>
            No-Claim Bonus
          </Text>
          <Text style={{ color: "#00A638" }}>-₹ 181</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 120 }}>
          <Text style={{ fontFamily: "Poppins_400Regular" }}>
            Other Discounts
          </Text>
          <Text style={{ color: "#00A638" }}>-₹ 3,240</Text>
        </View>
        <Image
          source={require("../assets/logos/recline.png")}
          style={{
            width: 293,
            alignSelf: "center",
            height: 2,
            top: 5,
            marginBottom: 10,
          }}
        ></Image>
        <Text style={{ fontFamily: "Poppins_400Regular", color: "black" }}>
          Premium Details
        </Text>
        <View style={{ flexDirection: "row", gap: 40 }}>
          <Text style={{ fontFamily: "Poppins_400Regular" }}>
            Package Premium
          </Text>
          <Text style={{ color: "red" }}> ₹ 2,431</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 180 }}>
          <Text style={{ fontFamily: "Poppins_400Regular" }}>GST 18%</Text>
          <Text style={{ color: "black" }}> ₹ 438</Text>
        </View>
        <View
          style={{
            width: 322,
            height: 35,
            backgroundColor: "#F0FFFA",
            alignSelf: "center",
            borderBottomEndRadius: 15,
            borderBottomLeftRadius: 15,
            top: 7,
            flexDirection: "row",
            gap: 170,
            padding: 5,
          }}
        >
          <Text style={{ fontFamily: "Poppins_500Medium", color: "#1A9E75" }}>
            Total Amount
          </Text>
          <Text style={{ color: "#1A9E75", right: 15 }}>₹ 2,869</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("CheckoutI")}
        style={styles.btn}
      >
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            fontSize: 16,
            color: "white",
          }}
        >
          Proceed To Checkout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 317,
    height: 41,
    backgroundColor: "#1A9E75",
    top: 220,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  check: {
    width: 20,
    height: 20,
  },
  rcpoints: {
    color: "#434343",
    fontSize: 14,
  },
  image1: {
    width: 30,
    height: 40,
  },
  inputContainer2: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 8,
    borderColor: "#6ADEB9",
    left: 120,
    top: -20,
  },
  text1: {
    fontSize: 16,
    fontWeight: "500",
    position: "relative",
    top: -20,
    fontFamily: "Poppins_500Medium",
    color: "black",
    fontSize: 18,
    // color : "#6ADEB9",
    // marginTop : -15,
    // textAlign : "center"
  },

  main1Text5: {
    fontSize: 20,
    fontWeight: "500",
    color: "black",
    fontFamily: "Poppins_500Medium",
    marginLeft: 150,
  },
  modal: {
    padding: 20,

    height: "100%",
    backgroundColor: "white",
    width: "100%",
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    top: 25,
    shadowColor: "black",
    elevation: 10,
  },

  input: {
    borderWidth: 1,
    width: 320,
    height: 40,
    left: 10,
    top: 10,
    borderColor: "lightgrey",
    borderRadius: 15,
  },
  main1: {
    backgroundColor: "rgba(238, 232, 232, 0.442)",
    height: 600,
    zIndex: 1,
  },

  tamil1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -45,
    zIndex: 1,
    left: 100,
  },
  location1: {
    width: 15,
    height: 20,
    resizeMode: "stretch",
    marginRight: 5,
    // backgroundColor : "red"
  },
  tamil1Text: {
    fontSize: 12,
    fontWeight: "500",
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgb(250 250 250)",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 320,
    marginLeft: 20,
    backgroundColor: "rgba(238, 232, 232, 0.442)",
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: "black",
  },

  tamil1Text1: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: -100,
    marginBottom: 20,
  },
  inputContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 5,
    borderColor: "rgb(250 250 250)",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 320,
    marginLeft: 20,
    height: 70,
    // marginTop : -70,
    backgroundColor: "white",
    position: "relative",
    top: -145,
    zIndex: 10,
  },

  inputContainer4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 280,
    marginLeft: 20,
    height: 70,

    backgroundColor: "white",

    // top: -145,
    // zIndex: 10
  },

  searchIcon1: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },

  inputContainer3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  searchIcon2: {
    width: 30,
    height: 20,
    resizeMode: "stretch",
  },
  inputContainer3Text: {
    fontSize: 10,
  },
  searchIconTan: {
    width: 40,
    height: 40,
    resizeMode: "stretch",
    marginRight: 10,
  },
  searchIconTan1: {
    width: 40,
    height: 40,
    resizeMode: "stretch",
    marginLeft: 10,
  },
  tamil1Text2: {
    fontSize: 12,
    top: -20,
    left: 15,
    color: "#A0A0A0",
    fontFamily: "Poppins_500Medium",
  },

  main1Text1: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
  },
  main1Text4: {
    fontSize: 12,
    fontWeight: "500",
    color: "blue",
  },
  main1Text2: {
    color: "rgb(5,166,90)",
    fontSize: 10,
    borderWidth: 1,
    borderColor: "rgb(5,166,90)",
    borderRadius: 20,
    paddingHorizontal: 1,
    paddingVertical: 5,
    width: 70,
    textAlign: "center",
    marginLeft: 15,
  },
  main1Text3: {
    fontSize: 9,
    marginLeft: 25,
    color: "#A0A0A0",
    marginTop: 5,
  },

  backButton: {
    // color: "rgb(5,166,90)",
    fontSize: 10,
    borderWidth: 1,
    borderColor: "rgb(5,166,90)",
    borderRadius: 15,
    paddingHorizontal: 1,
    paddingVertical: 5,
    width: 330,
    textAlign: "center",
    backgroundColor: "rgb(5,166,90)",
    marginTop: 300,
    marginLeft: 15,
  },

  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },

  backButton1: {
    // color: "rgb(5,166,90)",
    fontSize: 10,
    borderWidth: 1,
    borderColor: "rgb(5,166,90)",
    borderRadius: 15,
    paddingHorizontal: 1,
    paddingVertical: 5,
    width: 300,
    textAlign: "center",
    backgroundColor: "#1A9E75",
    marginTop: 20,
    marginLeft: 10,
  },

  title1: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },

  text1Recharge: {
    color: "black",
    fontFamily: "Poppins_400Regular",
  },

  main1Text1: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  },
  container: {
    width: 322,
    height: 56,
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 5,
    borderRadius: 15,
    top: 20,
    //justifyContent:'center',
    padding: 20,
    flexDirection: "row",
    marginBottom: 13,
  },
});
