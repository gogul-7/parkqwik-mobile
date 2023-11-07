import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const discover = [
  {
    id: 1,
    title: "Buy FASTag",
    image: require("../assets/images/shopping.png"),
    route: "Buy FASTag",
  },
  {
    id: 2,
    title: "Replace FASTag",
    image: require("../assets/images/published.png"),
    route: "",
  },
  {
    id: 3,
    title: "Active FASTag",
    image: require("../assets/images/done.png"),
    route: "Activate FASTag",
  },
  {
    id: 4,
    title: "Close FASTag",
    image: require("../assets/images/scan.png"),
    route: "",
  },
];

const FastRecharge = () => {
  const navigation = useNavigation();

  const handlePress = (route) => {
    navigation.navigate(`${route}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FASTag Recharge</Text>
      <Text style={[styles.text, { color: "#A0A0A0" }]}>
        Get upto 100% cashback on first 3 Fastag Recharge
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add vehicle or chassis number"
          placeholderTextColor="#1A9E75"
        />
        <View style={styles.button}>
          <Text style={[styles.text, { color: "white" }]}>Recharge</Text>
        </View>
      </View>
      <View style={styles.bannerContainer}>
        <Text style={[styles.text, { color: "#A0A0A0" }]}>Powered by</Text>
        <Image
          style={{ maxWidth: 60, maxHeight: 20 }}
          source={require("../assets/images/netc.png")}
        />
        <Image
          style={{ maxWidth: 50, maxHeight: 15 }}
          source={require("../assets/images/bps.png")}
        />
      </View>
      <View style={styles.line}></View>

      <Text style={styles.header}>Discover</Text>
      <View style={styles.discContainer}>
        {discover.map((item) => (
          <Pressable key={item.id} onPress={() => handlePress(item.route)}>
            <View style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <View style={styles.icon}>
                <Image
                  style={{ maxHeight: 25, maxWidth: 30 }}
                  source={item.image}
                />
              </View>
              <Text style={styles.iconText}>{item.title}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    display: "flex",
    gap: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  input: {
    borderColor: "#1A9E75",
    height: 45,
    flex: 1,
    paddingLeft: 10,
    borderRadius: 8,
    backgroundColor: "#F0FFFA",
    borderWidth: 1,
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A9E75",
    height: 45,
    width: 75,
    borderRadius: 8,
  },
  bannerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  line: {
    flex: 1,
    height: 3,
    backgroundColor: "#F5F4F4",
  },
  discContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FFFA",
    width: 60,
    borderRadius: 9,
    height: 50,
    elevation: 3,
  },
  iconText: {
    width: 50,
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
});

export default FastRecharge;
