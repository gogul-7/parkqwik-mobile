import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Water3 = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("waterpay");
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={[styles.text, { color: "#1B9D76", fontSize: 20 }]}>
          ₹ 600
        </Text>
        <Text style={[styles.text, { color: "#8E8E8E", fontSize: 14 }]}>
          Due Date:
          <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
            {" "}
            12 Sep 23
          </Text>
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Pressable onPress={handlePress} style={styles.button}>
          <Text style={[styles.text, { color: "white" }]}>Continue</Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={[styles.text, { fontSize: 12, marginTop: 4 }]}>
            Secured by Bharat BillPay
          </Text>
          <Image
            style={{ width: 48, height: 24 }}
            source={require("../assets/images/bps.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20,
    flex: 1,
  },
  card: {
    backgroundColor: "#e3e1e1",
    height: 170,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: 28,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  button: {
    width: "90%",
    height: 40,
    marginTop: 30,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Water3;
