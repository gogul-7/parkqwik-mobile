import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { RadioButton } from "react-native-paper";

const Rent1 = () => {
  const [value, setValue] = useState("");
  const navigation = useNavigation();

  const handlePress = (route) => {
    navigation.navigate(route);
  };

  return (
    <View
      style={{ flex: 1, alignItems: "center", marginVertical: 15, gap: 10 }}
    >
      <View style={{ width: "90%" }}>
        <Text style={[styles.text, { fontSize: 16 }]}>Transfer Money To</Text>
      </View>
      <View style={{ width: "90%" }}>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <TouchableOpacity
            onPress={() => handlePress("rent2")}
            style={styles.content}
          >
            <View style={{ height: 15 }}>
              <RadioButton value="rent2" color="#1A9E75" />
            </View>
            <Text style={[styles.text, { paddingTop: 7, marginLeft: 5 }]}>
              Recipient UPI ID
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress("rent3")}
            style={styles.content}
          >
            <View style={{ height: 15 }}>
              <RadioButton value="rent3" color="#1A9E75" />
            </View>
            <Text style={[styles.text, { paddingTop: 7, marginLeft: 5 }]}>
              Recipient Bank A/C
            </Text>
          </TouchableOpacity>
        </RadioButton.Group>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          alignItems: "center",
          gap: 10,
        }}
      >
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
  text: {
    fontFamily: "Poppins_400Regular",
  },
  content: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
});

export default Rent1;
