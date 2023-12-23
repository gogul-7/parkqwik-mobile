import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Login1 = () => {
  const [border, setBorder] = useState("#E5E5E5");
  const [disbale, setDisable] = useState(true);
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("login2");
  };

  const handleChangeText = (value) => {
    if (value.length === 0) setBorder("#E5E5E5");
    else setBorder("#1A9E75");
    value.length === 10 ? setDisable(false) : setDisable(true);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        gap: 15,
      }}
    >
      <View
        style={{ width: "100%", height: "58%", backgroundColor: "#1A9E75" }}
      >
        <ImageBackground
          style={styles.background}
          source={require("../assets/images/loginbg.png")}
        >
          <View style={styles.greenContainer}>
            <Text
              style={[
                styles.header,
                {
                  color: "#FFF",
                  fontSize: 18,
                  paddingTop: 3,
                },
              ]}
            >
              Let’s start with phone number
            </Text>
          </View>
        </ImageBackground>
      </View>

      <Text style={[styles.header, { width: "90%" }]}>
        Enter your number for verification
      </Text>
      <View style={{ width: "90%", justifyContent: "center" }}>
        <Text
          style={[
            styles.text,
            { position: "absolute", left: 10, zIndex: 5, paddingBottom: 2 },
          ]}
        >
          +91
        </Text>

        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => handleChangeText(text)}
          maxLength={10}
          style={[
            styles.input,
            {
              borderColor: border,
            },
          ]}
          placeholder="| Enter Your Mobile Number"
        />
      </View>
      <View
        style={{
          width: "90%",
          position: "absolute",
          bottom: 25,
          alignItems: "center",
          gap: 15,
          zIndex: -5,
        }}
      >
        <Text
          style={[
            styles.text,
            {
              width: "60%",
              color: "#858585",
              fontSize: 10,
              textAlign: "center",
            },
          ]}
        >
          By joining Parkqwik you agree with our Terms of services and Privacy
          policy
        </Text>
        <TouchableOpacity
          onPress={handleNavigate}
          style={disbale ? [styles.button, styles.disabled] : styles.button}
        >
          <Text style={disbale ? [styles.bold, styles.disabled] : styles.bold}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login1;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  greenContainer: {
    width: "100%",
    backgroundColor: "#1A9E75",
    height: 76,
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#393939",
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  bold: { fontFamily: "Poppins_600SemiBold", color: "#FFF", paddingTop: 2 },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 40,
    fontFamily: "Poppins_400Regular",
    paddingTop: 3,
    marginTop: -5,
    backgroundColor: "white",
  },
  button: {
    width: "95%",
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
  },
  disabled: {
    backgroundColor: "#DFDFDF",
    color: "#9F9F9F",
    pointerEvents: "none",
  },
});
