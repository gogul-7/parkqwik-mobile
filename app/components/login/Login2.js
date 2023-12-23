import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const Login2 = () => {
  const [disbale, setDisable] = useState(true);
  const navigation = useNavigation();

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  const handleNavigate = () => {
    navigation.navigate("login2");
  };

  const handleChangeText = (text, value1, value2, value3) => {
    if (value1 === input4 && text.length === 1) {
      value1.current.setNativeProps({
        style: { borderColor: "#1A9E75" },
      });
      setDisable(false);
    } else {
      if (text.length >= 1) {
        value2.current.focus();
        value1.current.setNativeProps({
          style: { borderColor: "#1A9E75" },
        });
      }
    }
    if (text.length === 0) {
      value1.current.setNativeProps({
        style: { borderColor: "#E5E5E5" },
      });
      value3.current.focus();
    }
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

      <View
        style={{
          backgroundColor: "#FFF",
          width: "100%",
          alignItems: "center",
          gap: 15,
          height: 150,
        }}
      >
        <Text style={[styles.header, { width: "90%" }]}>
          Enter verification code sent to number
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "90%",
            marginTop: -15,
            gap: 10,
          }}
        >
          <Text style={[styles.header]}>+91 8200089270</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginBottom: 5,
            }}
          >
            <Image
              style={{ width: 10, height: 10 }}
              source={require("../assets/images/pencil1.png")}
            />
            <Text
              style={[
                styles.header,
                { color: "#1A9E75", fontSize: 12, paddingTop: 2 },
              ]}
            >
              Edit
            </Text>
          </View>
        </View>
        <View style={styles.otpContianer}>
          <TextInput
            style={[styles.input]}
            ref={input1}
            onChangeText={(text) =>
              handleChangeText(text, input1, input2, input1)
            }
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input]}
            ref={input2}
            onChangeText={(text) =>
              handleChangeText(text, input2, input3, input1)
            }
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input]}
            ref={input3}
            onChangeText={(text) =>
              handleChangeText(text, input3, input4, input2)
            }
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input]}
            ref={input4}
            onChangeText={(text) =>
              handleChangeText(text, input4, input1, input3)
            }
            maxLength={1}
            keyboardType="numeric"
          />
        </View>
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

export default Login2;

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
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "white",
    borderColor: "#E5E5E5",
    paddingTop: 4,
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
  },
  otpContianer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
