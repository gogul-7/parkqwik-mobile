import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const LoanHeader = ({ name }) => {
  const { setSearchKey, headData } = useContext(AppContext);
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("loan1");
  };

  const handleChange = (text) => {
    setSearchKey(text);
  };
  if (name === "loan1")
    return (
      <View
        style={{ height: 80, alignItems: "center", justifyContent: "center" }}
      >
        <TextInput
          onChangeText={handleChange}
          style={styles.input}
          placeholder="Search Lender"
        />
        <Image
          style={styles.search}
          source={require("../assets/images/search.png")}
        />
      </View>
    );
  else if (name === "loan2" || name === "loan3")
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <Image style={styles.image} source={headData.image} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
              Lender
            </Text>
            <Text style={[styles.text, { width: "70%" }]}>{headData.name}</Text>
          </View>
          <TouchableOpacity onPress={handleNavigate} style={styles.change}>
            <Text style={[styles.text, { color: "#1A9E75", fontSize: 11 }]}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#A0A0A0",
    borderRadius: 9,
    height: 40,
    paddingLeft: 35,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
  },
  search: { width: 20, height: 20, position: "absolute", left: 25 },
  header: {
    height: 120,
    backgroundColor: "#1A9E75",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
  },
  image: {
    width: 35,
    height: 35,
  },
  change: {
    borderWidth: 1,
    borderColor: "#1A9E75",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0FFFA",
    paddingHorizontal: 8,
    paddingVertical: 3,
    position: "absolute",
    right: 10,
  },
});

export default LoanHeader;
