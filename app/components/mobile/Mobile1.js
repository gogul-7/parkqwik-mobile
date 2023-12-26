import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const Mobile1 = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("mobile2");
  };
  return (
    <View
      style={{
        alignItems: "center",
        paddingVertical: 15,
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <View style={[styles.inputCotainer]}>
        <Text style={styles.header}>Enter Mobile Number</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 40,
            gap: 5,
          }}
        >
          <Text
            style={[styles.text, { position: "absolute", left: 10, top: 10 }]}
          >
            +91
          </Text>
          <TextInput
            style={[styles.input, { paddingLeft: 40 }]}
            placeholder="| Enter your mobile number"
            placeholderTextColor="#AFAFAF"
          />
          <TouchableOpacity onPress={handlePress} style={styles.contact}>
            <FontAwesomeIcon color="#1A9E75" size={22} icon={"user-plus"} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          alignItems: "center",
          gap: 15,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text
            style={[
              styles.bold,
              { color: "#FFF", fontSize: 16, paddingTop: 2 },
            ]}
          >
            Continue
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text style={[styles.text, { fontSize: 12 }]}>
            Secured by Bharat BillPay
          </Text>
          <Image
            style={{ width: 47, height: 25 }}
            source={require("../assets/images/bps.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputCotainer: {
    width: "90%",
    display: "flex",
    gap: 5,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  input: {
    flex: 1,
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: "#AFAFAF",
    fontFamily: "Poppins_400Regular",
    paddingTop: 3,
  },
  contact: {
    borderRadius: 8,
    borderColor: "#1A9E75",
    backgroundColor: "#F0FFFA",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: 38,
    height: 40,
  },
  button: {
    width: "90%",
    alignSelf: "center",
    height: 40,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Mobile1;
