import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const Rent2 = () => {
  const [upload, setUpload] = useState(false);
  const [disable, setDisable] = useState(true);
  const navigation = useNavigation();

  const handleUpload = () => {
    setUpload(true);
    setDisable(false);
  };

  const handleChange = () => {};

  const handlePress = () => {
    navigation.navigate("rent4");
  };

  return (
    <View
      style={{ flex: 1, alignItems: "center", paddingVertical: 15, gap: 5 }}
    >
      <View style={{ width: "90%" }}>
        <Text style={[styles.text, { fontSize: 16 }]}>Recipient UPI ID</Text>
      </View>
      <TextInput
        onChangeText={(value) => handleChange(value)}
        placeholder="Enter Recipient UPI ID"
        style={[styles.input]}
      />
      <View style={{ width: "90%" }}>
        <Text style={[styles.text, { fontSize: 16 }]}>Mobile Number</Text>
      </View>
      <TextInput
        onChangeText={(value) => handleChange(value)}
        placeholder="Enter Mobile Number"
        style={[styles.input]}
      />
      <View style={{ width: "90%" }}>
        <Text style={[styles.text, { fontSize: 16 }]}>
          Upload Rental Agreement
        </Text>
      </View>
      <View style={{ width: "90%" }}>
        {upload ? (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
            >
              <Text style={[styles.text, { color: "#1A9E75" }]}>Uploaded</Text>
              <FontAwesomeIcon color="#1A9E75" size={12} icon="fa-check" />
            </View>
            <TouchableOpacity
              onPress={() => setUpload(false)}
              style={[
                styles.rcContainer,
                { borderRadius: 15, width: 70, height: 25 },
              ]}
            >
              <Text style={[styles.text, { color: "#1A9E75", fontSize: 12 }]}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleUpload} style={styles.rcContainer}>
            <FontAwesomeIcon
              style={{ color: "#1A9E75" }}
              icon="fa-arrow-up-from-bracket"
            />
            <Text style={[styles.text, { color: "#1A9E75", fontSize: 12 }]}>
              Upload
            </Text>
          </TouchableOpacity>
        )}
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
        <TouchableOpacity
          onPress={handlePress}
          style={disable ? styles.disabledBtn : styles.button}
        >
          <Text
            style={
              disable
                ? [styles.text, { color: "#9F9F9F" }]
                : [styles.text, { color: "white" }]
            }
          >
            Continue
          </Text>
        </TouchableOpacity>
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
  input: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 9,
    height: 40,
    paddingLeft: 10,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
    borderColor: "#A0A0A0",
    marginBottom: 8,
  },
  rcContainer: {
    width: 90,
    height: 33,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#1A9E75",
    backgroundColor: "#F0FFFA",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
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
  disabledBtn: {
    width: "90%",
    height: 40,
    marginTop: 30,
    backgroundColor: "#DFDFDF",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  },
});

export default Rent2;
