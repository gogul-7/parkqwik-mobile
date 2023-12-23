import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";

const Mobile1 = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("mobile2");
  };
  return (
    <View style={{ alignItems: "center", paddingVertical: 15 }}>
      <View style={[styles.inputCotainer]}>
        <Text style={styles.text}>Enter Mobile Number</Text>
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            alignItems: "center",
            height: 40,
            gap: 5,
          }}
        >
          <Text
            style={[styles.text, { position: "absolute", left: 10, top: 11 }]}
          >
            +91
          </Text>
          <TextInput
            style={[styles.input, { paddingLeft: 40 }]}
            placeholder="| Enter your mobile number"
            placeholderTextColor="#AFAFAF"
          />
          <Pressable onPress={handlePress} style={styles.contact}>
            <FontAwesomeIcon color="#1A9E75" size={22} icon={"user-plus"} />
          </Pressable>
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
  input: {
    flex: 1,
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: "#AFAFAF",
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
});

export default Mobile1;
