import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const BuyFast2 = () => {
  const { setHeaderNum } = useContext(AppContext);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("buyscreen3");
  };

  useEffect(() => {
    setHeaderNum(2);
    return () => {
      setHeaderNum(1);
    };
  }, []);
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.inputCotainer}>
          <Text style={styles.text}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#AFAFAF"
          />
        </View>
        <View style={[styles.inputCotainer, { position: "relative" }]}>
          <Text style={styles.text}>Mobile Number</Text>
          <Text
            style={[styles.text, { position: "absolute", top: 39, left: 10 }]}
          >
            +91
          </Text>
          <TextInput
            style={[styles.input, { paddingLeft: 40 }]}
            placeholder="| Enter your mobile number"
            placeholderTextColor="#AFAFAF"
          />
        </View>
        <View style={styles.inputCotainer}>
          <Text style={styles.text}>Address Line 1</Text>
          <TextInput
            style={styles.input}
            placeholder="House No / Flat No , Street name"
            placeholderTextColor="#AFAFAF"
          />
        </View>
        <View style={styles.inputCotainer}>
          <Text style={styles.text}>Address Line 2</Text>
          <TextInput
            style={styles.input}
            placeholder="Locality name / Area name"
            placeholderTextColor="#AFAFAF"
          />
        </View>
        <View style={styles.inputCotainer}>
          <Text style={styles.text}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your city"
            placeholderTextColor="#AFAFAF"
          />
        </View>
        <View style={styles.inputCotainer}>
          <Text style={styles.text}>State</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your state"
            placeholderTextColor="#AFAFAF"
          />
        </View>
        <View style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Text style={styles.text}>Or</Text>
        </View>
        <View style={styles.locationContainer}>
          <Image
            source={require("../assets/images/greenlocation.png")}
            style={{ width: 22, height: 23, marginBottom: 5 }}
          />
          <Text style={[styles.text, { color: "#1A9E75" }]}>
            Point location through map
          </Text>
        </View>
      </ScrollView>
      <View style={styles.payment}>
        <Text style={[{ fontSize: 20, width: "50%" }]}>₹ 350</Text>
        <Pressable onPress={handlePress} style={styles.button}>
          <Text style={[styles.text, { color: "white" }]}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    gap: 15,
  },
  inputCotainer: {
    width: "90%",
    display: "flex",
    gap: 5,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  locationContainer: {
    width: "90%",
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: "#1A9E75",
    backgroundColor: "#F0FFFA",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginTop: -5,
    paddingTop: 5,
    marginBottom: 100,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: "#AFAFAF",
  },
  payment: {
    position: "absolute",
    height: 80,
    backgroundColor: "white",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    elevation: 3,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BuyFast2;
