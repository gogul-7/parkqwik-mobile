import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Navbar = () => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.navbar}>
        <View style={styles.dpContainer}>
          <Image
            style={styles.dp}
            source={require("../assets/images/dp.png")}
          />
          <View style={styles.dpMenu}>
            <FontAwesomeIcon icon="bars" style={{ maxWidth: 12 }} />
          </View>
        </View>
        <View style={styles.navContent}>
          <View style={styles.weclomeContainer}>
            <Text style={styles.text}>Hi, Krishna</Text>
            <Text style={[styles.text, { fontSize: 10 }]}>Welcome !</Text>
          </View>
          <View style={styles.detailContainer}>
            <FontAwesomeIcon
              icon="fa-solid fa-location-dot"
              style={styles.text}
            />
            <Text
              style={[
                styles.text,
                {
                  textDecorationLine: "underline",
                  textDecorationStyle: "dashed",
                },
              ]}
            >
              Chennai
            </Text>
            <View style={styles.iconContainer}>
              <FontAwesomeIcon icon="fa-regular fa-bell" style={styles.text} />
            </View>
            <View style={styles.iconContainer}>
              <FontAwesomeIcon icon="fa-solid fa-wallet" style={styles.text} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  navContainer: {
    backgroundColor: "#1A9E75",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    marginTop: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dpContainer: {
    position: "relative",
  },
  dp: {
    width: 50,
    height: 50,
  },
  dpMenu: {
    position: "absolute",
    bottom: 5,
    right: 0,
    backgroundColor: "white",
    borderRadius: 50,
    width: 20,
    height: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  navContent: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  weclomeContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 6,
    marginLeft: 12,
  },
  detailContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.35);",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navbar;
