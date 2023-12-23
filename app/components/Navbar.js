import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const navigation = useNavigation();
  const { setHam, setNav, nav } = useContext(AppContext);

  const handleHamburger = () => {
    setHam(true);
  };

  const handlePress = (route) => {
    navigation.navigate(route);
  };
  if (nav) {
    return (
      <View style={styles.navContainer}>
        <View style={styles.navbar}>
          <Pressable onPress={handleHamburger} style={styles.dpContainer}>
            <Image
              style={styles.dp}
              source={require("../assets/images/dp.png")}
            />
            <View style={styles.dpMenu}>
              <FontAwesomeIcon icon="bars" style={{ maxWidth: 12 }} />
            </View>
          </Pressable>
          <View style={styles.navContent}>
            <View style={styles.weclomeContainer}>
              <Text style={styles.text}>Hi, Krishna</Text>
              <Text style={[styles.text, { fontSize: 10, marginTop: -5 }]}>
                Welcome !
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <Image
                style={{ width: 14, height: 15, marginTop: 5 }}
                source={require("../assets/images/whitelocation.png")}
              />
              <View style={styles.underline}>
                <Text style={[styles.text, { marginLeft: -1, height: 18 }]}>
                  Chennai
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handlePress("Notification")}
                style={styles.iconContainer}
              >
                <FontAwesomeIcon
                  icon="fa-regular fa-bell"
                  style={styles.text}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handlePress("Wallet")}
                style={styles.iconContainer}
              >
                <Image
                  style={{ width: 17, height: 17, marginBottom: 2 }}
                  source={require("../assets/images/whitewallet.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  navContainer: {
    backgroundColor: "#1A9E75",
    paddingHorizontal: 5,
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    height: 70,
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dpContainer: {
    position: "relative",
  },
  dp: {
    width: 55,
    height: 55,
    marginTop: 8,
  },
  dpMenu: {
    position: "absolute",
    bottom: 5,
    right: 0,
    backgroundColor: "white",
    borderRadius: 50,
    width: 20,
    height: 20,

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontFamily: "Poppins_400Regular",
  },
  navContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  weclomeContainer: {
    justifyContent: "center",
    gap: 6,
    marginLeft: 12,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 24,
  },
  iconContainer: {
    width: 30,
    height: 30,
    marginLeft: 3,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.35);",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    borderStyle: "dashed",
  },
});

export default Navbar;
