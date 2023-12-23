import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Layer from "../assets/logos/Search.png";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Insurance6 from "./Insurance6";

const Insurance5 = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          height: 100,
          backgroundColor: "#1A9E75",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 318,
            height: 63,
            backgroundColor: "white",
            alignSelf: "center",
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/logos/car1.png")}
            style={{ width: 37.39, height: 28, left: 20, top: 30 }}
          ></Image>
          <Text
            style={{
              left: 60,
              fontFamily: "Poppins_500Medium",
              color: "black",
            }}
          >
            TN05BM5656
          </Text>
          <Text
            style={{ fontFamily: "Poppins_500Medium", fontSize: 12, left: 60 }}
          >
            Maruti Dzire | Diesal | 2017
          </Text>
          <View
            style={{
              width: 61,
              height: 25,
              borderWidth: 1.5,
              borderColor: "#1A9E75",
              left: 240,
              bottom: 40,
              borderRadius: 15,
              backgroundColor: "#F0FFFA",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#1A9E75",
                fontFamily: "Poppins_500Medium",
                fontSize: 10,
              }}
            >
              Change
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Image source={Layer} style={styles.searchIcon} />
        <TextInput
          placeholder="Search a plan or enter amount"
          placeholderTextColor="#A0A0A0"
          style={{
            height: 40,
            width: 328,
            fontFamily: "Poppins_400Regular",
            top: 4,
          }}
        />
      </View>
      <Tab.Navigator
        initialRouteName="Item1"
        screenOptions={{
          tabBarPressColor: "white",
          tabBarGap: 0,
          tabBarInactiveTintColor: "black",
          tabBarActiveTintColor: "black",
          tabBarLabelStyle: {
            fontSize: 11,
            textTransform: "none",
            fontFamily: "Poppins_500Medium",
            top: 5,
            gap: 5,
          },
          tabBarStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#E6E6E6",
            shadowColor: "white",
          },
          tabBarIndicatorStyle: { borderWidth: 1, borderColor: "#1A9E75" },
        }}
      >
        <Tab.Screen
          name="Item1"
          component={Item1Screen}
          options={{
            tabBarLabel: "Comprehensive Plans",
            tabBarIndicatorStyle: {
              borderWidth: 2,
              borderColor: "#1A9E75",
              width: 135,
              left: 25,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            },
          }}
        />
        <Tab.Screen
          name="Item2"
          component={Item2Screen}
          options={{
            tabBarLabel: "Third Party Plans",
            tabBarIndicatorStyle: {
              borderWidth: 2,
              borderColor: "#1A9E75",
              borderTopStartRadius: 5,
              borderTopRightRadius: 5,
              width: 125,
              left: 30,
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
const Item1Screen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/logos/oriental.png")}
            style={styles.oriental}
          ></Image>
          <View style={{ flexDirection: "column" }}>
            <Text
              onPress={() => {
                setModalVisible(true);
              }}
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              {" "}
              IDV: ₹ 1,15,193
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 10,
                color: "#00A638",
              }}
            >
              {" "}
              94% Claims Settled
            </Text>
          </View>
          <Text style={{ color: "black", fontSize: 20, left: 30 }}>
            {" "}
            ₹ 2,431
          </Text>
        </View>
        <Image
          source={require("../assets/logos/recline.png")}
          style={{ height: 2, alignSelf: "center", width: 293, top: 10 }}
        ></Image>
        <Text
          style={{
            top: 20,
            fontFamily: "Poppins_500Medium",
            color: "black",
            right: 5,
          }}
        >
          24X7 Roadside Assistance..
          <Text style={{ color: "#1A9E75" }}>See More</Text>
        </Text>
        <Image
          source={require("../assets/logos/chevron.png")}
          style={{ width: 7.77, height: 12, left: 280 }}
        ></Image>
        <Insurance6
          show={isModalVisible}
          close={() => setModalVisible(false)}
        />
      </View>

      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/logos/shriram.png")}
            style={styles.oriental}
          ></Image>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontFamily: "Poppins_500Medium" }}>
              {" "}
              IDV: ₹ 1,00,342
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 10,
                color: "#00A638",
              }}
            >
              {" "}
              96% Claims Settled
            </Text>
          </View>
          <Text style={{ color: "black", fontSize: 20, left: 30 }}>
            {" "}
            ₹ 2,608
          </Text>
        </View>
        <Image
          source={require("../assets/logos/recline.png")}
          style={{ height: 2, alignSelf: "center", width: 293, top: 10 }}
        ></Image>
        <Text
          style={{
            top: 20,
            fontFamily: "Poppins_500Medium",
            color: "black",
            right: 5,
          }}
        >
          Accidental Damage to the..
          <Text style={{ color: "#1A9E75" }}>See More</Text>
        </Text>
        <Image
          source={require("../assets/logos/chevron.png")}
          style={{ width: 7.77, height: 12, left: 280 }}
        ></Image>
      </View>

      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/logos/kotak.png")}
            style={styles.oriental}
          ></Image>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontFamily: "Poppins_500Medium" }}>
              {" "}
              IDV: ₹ 1,14,736
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 10,
                color: "#00A638",
              }}
            >
              {" "}
              98% Claims Settled
            </Text>
          </View>
          <Text style={{ color: "black", fontSize: 20, left: 30 }}>
            {" "}
            ₹ 2,746
          </Text>
        </View>
        <Image
          source={require("../assets/logos/recline.png")}
          style={{ height: 2, alignSelf: "center", width: 293, top: 10 }}
        ></Image>
        <Text
          style={{
            top: 20,
            fontFamily: "Poppins_500Medium",
            color: "black",
            right: 5,
          }}
        >
          Accidental Damage to the..
          <Text style={{ color: "#1A9E75" }}>See More</Text>
        </Text>
        <Image
          source={require("../assets/logos/chevron.png")}
          style={{ width: 7.77, height: 12, left: 280 }}
        ></Image>
      </View>

      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/logos/bajaj1.png")}
            style={styles.oriental}
          ></Image>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontFamily: "Poppins_500Medium" }}>
              {" "}
              IDV: ₹ 1,14,736
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 10,
                color: "#00A638",
              }}
            >
              {" "}
              98% Claims Settled
            </Text>
          </View>
          <Text style={{ color: "black", fontSize: 20, left: 30 }}>
            {" "}
            ₹ 2,746
          </Text>
        </View>
        <Image
          source={require("../assets/logos/recline.png")}
          style={{ height: 2, alignSelf: "center", width: 293, top: 10 }}
        ></Image>
        <Text
          style={{
            top: 20,
            fontFamily: "Poppins_500Medium",
            color: "black",
            right: 5,
          }}
        >
          Accidental Damage to the..
          <Text style={{ color: "#1A9E75" }}>See More</Text>
        </Text>
        <Image
          source={require("../assets/logos/chevron.png")}
          style={{ width: 7.77, height: 12, left: 280 }}
        ></Image>
      </View>
    </SafeAreaView>
  );
};
const Item2Screen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          width: 328,
          height: 66,
          backgroundColor: "white",
          shadowColor: "black",
          elevation: 10,
          alignSelf: "center",
          top: 23,
          borderRadius: 15,
          flexDirection: "row",
          padding: 15,
          gap: 20,
          marginBottom: 13,
        }}
      >
        <Image
          source={require("../assets/logos/oriental.png")}
          style={{ width: 87, height: 34 }}
        ></Image>
        <Text style={{ fontFamily: "Poppins_500Medium", top: 5, fontSize: 12 }}>
          Third Party
        </Text>
        <Text style={{ color: "black", fontSize: 20 }}> ₹ 2,094</Text>
        <Image
          source={require("../assets/logos/chevron.png")}
          style={{ width: 7.4, height: 12, top: 8, left: 5 }}
        ></Image>
      </View>

      <View
        style={{
          width: 328,
          height: 66,
          backgroundColor: "white",
          shadowColor: "black",
          elevation: 10,
          alignSelf: "center",
          top: 23,
          borderRadius: 15,
          flexDirection: "row",
          padding: 15,
          gap: 20,
          marginBottom: 13,
        }}
      >
        <Image
          source={require("../assets/logos/kotak.png")}
          style={{ width: 87, height: 34 }}
        ></Image>
        <Text style={{ fontFamily: "Poppins_500Medium", top: 5, fontSize: 12 }}>
          Third Party
        </Text>
        <Text style={{ color: "black", fontSize: 20 }}> ₹ 2,094</Text>
        <Image
          source={require("../assets/logos/chevron.png")}
          style={{ width: 7.4, height: 12, top: 8, left: 5 }}
        ></Image>
      </View>

      <View
        style={{
          width: 328,
          height: 66,
          backgroundColor: "white",
          shadowColor: "black",
          elevation: 10,
          alignSelf: "center",
          top: 23,
          borderRadius: 15,
          flexDirection: "row",
          padding: 15,
          gap: 20,
          marginBottom: 13,
        }}
      >
        <Image
          source={require("../assets/logos/bajaj.png")}
          style={{ width: 87, height: 34 }}
        ></Image>
        <Text style={{ fontFamily: "Poppins_500Medium", top: 5, fontSize: 12 }}>
          Third Party
        </Text>
        <Text style={{ color: "black", fontSize: 20 }}> ₹ 2,094</Text>
        <Image
          source={require("../assets/logos/chevron.png")}
          style={{ width: 7.4, height: 12, top: 8, left: 5 }}
        ></Image>
      </View>

      <View
        style={{
          width: 328,
          height: 66,
          backgroundColor: "white",
          shadowColor: "black",
          elevation: 10,
          alignSelf: "center",
          top: 23,
          borderRadius: 15,
          flexDirection: "row",
          padding: 15,
          gap: 20,
          marginBottom: 13,
        }}
      >
        <Image
          source={require("../assets/logos/zuno.png")}
          style={{ width: 87, height: 34 }}
        ></Image>
        <Text style={{ fontFamily: "Poppins_500Medium", top: 5, fontSize: 12 }}>
          Third Party
        </Text>
        <Text style={{ color: "black", fontSize: 20 }}> ₹ 2,094</Text>
        <Image
          source={require("../assets/logos/chevron.png")}
          style={{ width: 7.4, height: 12, top: 8, left: 5 }}
        ></Image>
      </View>

      <View
        style={{
          width: 328,
          height: 66,
          backgroundColor: "white",
          shadowColor: "black",
          elevation: 10,
          alignSelf: "center",
          top: 23,
          borderRadius: 15,
          flexDirection: "row",
          padding: 15,
          gap: 20,
          marginBottom: 13,
        }}
      >
        <Image
          source={require("../assets/logos/royal.png")}
          style={{ width: 87, height: 34 }}
        ></Image>
        <Text style={{ fontFamily: "Poppins_500Medium", top: 5, fontSize: 12 }}>
          Third Party
        </Text>
        <Text style={{ color: "black", fontSize: 20 }}> ₹ 2,094</Text>
        <Image
          source={require("../assets/logos/chevron.png")}
          style={{ width: 7.4, height: 12, top: 8, left: 5 }}
        ></Image>
      </View>

      <View
        style={{
          width: 328,
          height: 66,
          backgroundColor: "white",
          shadowColor: "black",
          elevation: 10,
          alignSelf: "center",
          top: 23,
          borderRadius: 15,
          flexDirection: "row",
          padding: 15,
          gap: 20,
          marginBottom: 13,
        }}
      >
        <Image
          source={require("../assets/logos/reliance.png")}
          style={{ width: 87, height: 34 }}
        ></Image>
        <Text style={{ fontFamily: "Poppins_500Medium", top: 5, fontSize: 12 }}>
          Third Party
        </Text>
        <Text style={{ color: "black", fontSize: 20 }}> ₹ 2,094</Text>
        <Image
          source={require("../assets/logos/chevron.png")}
          style={{ width: 7.4, height: 12, top: 8, left: 5 }}
        ></Image>
      </View>
    </SafeAreaView>
  );
};

export default Insurance5;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 328,
    height: 40,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 0,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  oriental: {
    width: 87,
    height: 34,
  },
  modal: {
    top: "50%",
    padding: 20,
    shadowColor: "black",
    elevation: 10,
    height: "90%",
    backgroundColor: "white",
    width: "100%",
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "black",
  },
  card: {
    width: 328,
    height: 111,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 10,
    alignSelf: "center",
    top: 20,
    padding: 20,
    marginBottom: 13,
  },
});
