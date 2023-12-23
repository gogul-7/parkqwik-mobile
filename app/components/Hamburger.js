import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Animated,
  Pressable,
  Easing,
  ScrollView,
  Image,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const options = [
  {
    id: 1,
    icon: require("../assets/images/greenperson.png"),
    title: "My Profile",
    details: "Your Personal Details",
    route: "My Profile",
  },
  {
    id: 2,
    icon: require("../assets/images/greentrans.png"),
    title: "Transactions",
    details: "Your Transaction History, Bill Payments & more",
    route: "Transaction",
  },
  {
    id: 3,
    icon: require("../assets/images/greencart.png"),
    title: "Bookings & Orders",
    details: "Your Transaction History, Bill Payments & more",
    route: "Bookings",
  },
  {
    id: 4,
    icon: require("../assets/images/greenlocation2.png"),
    title: "Saved Address",
    details: "Manage Your Saved Address",
    route: "Address",
  },
  {
    id: 5,
    icon: require("../assets/images/greencard2.png"),
    title: "Saved Cards",
    details: "Manage Your Debit / Credit Cards",
    route: "Cards",
  },
  {
    id: 6,
    icon: require("../assets/images/gift.png"),
    title: "Rewards",
    details: "Scratch Cards & Discounts",
    route: "Rewards",
  },
  {
    id: 7,
    icon: require("../assets/images/greenhelp.png"),
    title: "Help & Support",
    details: "Customer Support, FAQ’s & more",
    route: "Help",
  },
  {
    id: 8,
    icon: require("../assets/images/greenabout.png"),
    title: "About Us",
    details: "Privacy Policy, Terms & Conditions",
  },
];

const Hamburger = () => {
  const { setHam } = useContext(AppContext);
  const navigation = useNavigation();

  const handleHam = () => {
    setHam(false);
  };

  const handleNavigate = (route) => {
    navigation.navigate(route);
    setHam(false);
  };

  return (
    <View style={[styles.contanier]}>
      <View style={styles.topContainer}>
        <Pressable style={styles.backArrow} onPress={handleHam}>
          <FontAwesomeIcon icon={"angle-left"} color="white" size={24} />
        </Pressable>
        <View style={[styles.row, { width: "80%" }]}>
          <Image
            style={{ width: 55, height: 55 }}
            source={require("../assets/images/dp.png")}
          />
          <View>
            <Text style={[styles.header, { color: "white" }]}>Krishna</Text>
            <Text style={[styles.text, { color: "white" }]}>
              +91 8200089270
            </Text>
          </View>
        </View>
        <View style={styles.qrContainer}>
          <Image
            style={{ width: "90%", height: "90%" }}
            source={require("../assets/images/qr.png")}
          />
        </View>
        <View
          style={[
            styles.row,
            { justifyContent: "space-between", marginTop: 15 },
          ]}
        >
          <View style={styles.button}>
            <Image
              style={{ height: 18, width: 18 }}
              source={require("../assets/images/share.png")}
            />
            <Text style={[styles.header, { color: "white", fontSize: 12 }]}>
              Share QR
            </Text>
          </View>
          <View style={styles.button}>
            <Image
              style={{ height: 18, width: 18 }}
              source={require("../assets/images/share.png")}
            />
            <Text style={[styles.header, { color: "white", fontSize: 12 }]}>
              Share Link
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: "100%",
            gap: 10,
            borderBottomColor: "#E4E4E4",
            borderBottomWidth: 1,
            paddingStart: 15,
          }}
        >
          {options.map((item) => (
            <Pressable
              onPress={() => handleNavigate(item.route)}
              key={item.id}
              style={[styles.row, { alignItems: "flex-start" }]}
            >
              <Image
                style={{ height: 25, width: 25, marginTop: 2 }}
                source={item.icon}
              />
              <View
                style={
                  item.id === 8
                    ? [
                        styles.row,
                        {
                          flex: 1,
                          justifyContent: "space-between",
                          paddingRight: 10,
                          paddingBottom: 8,
                        },
                      ]
                    : [
                        styles.row,
                        {
                          borderBottomWidth: 1,
                          borderBottomColor: "#E6E6E6",
                          flex: 1,
                          justifyContent: "space-between",
                          paddingRight: 10,
                          paddingBottom: 8,
                        },
                      ]
                }
              >
                <View style={{ width: "95%" }}>
                  <Text style={[styles.header, { fontSize: 14 }]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 12,
                        color: "#A0A0A0",
                        lineHeight: 15,
                        width: "100%",
                      },
                    ]}
                  >
                    {item.details}
                  </Text>
                </View>
                <FontAwesomeIcon
                  icon={"angle-right"}
                  color="rgba(160, 160, 160, 1)"
                  style={{ position: "absolute", right: 8 }}
                />
              </View>
            </Pressable>
          ))}
        </View>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={[styles.row, { height: 60, paddingStart: 25 }]}
        >
          <Image
            style={{ height: 25, width: 25 }}
            source={require("../assets/images/greenlogout.png")}
          />
          <Text style={[styles.header, { fontSize: 16, color: "#1A9E75" }]}>
            Logout
          </Text>
          <FontAwesomeIcon
            icon={"angle-right"}
            color="rgba(160, 160, 160, 1)"
            style={{ position: "absolute", right: 8 }}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Hamburger;

const styles = StyleSheet.create({
  contanier: {
    width: "90%",
    height: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
    flex: 1,
    overflow: "hidden",
  },
  topContainer: {
    backgroundColor: "#1A9E75",
    height: 400,
    width: "100%",
    borderRadius: 22,
    borderTopLeftRadius: 0,
    alignItems: "center",
    paddingTop: 30,
    gap: 10,
  },
  backArrow: {
    position: "absolute",
    top: 25,
    right: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    paddingTop: 2,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#1A9E75",
    marginTop: 2,
  },
  qrContainer: {
    width: 230,
    height: 230,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 2,
    gap: 5,
  },
});
