import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AppContext from "../../context/AppContext";

const Rent4 = () => {
  const { setAmount } = useContext(AppContext);
  const [value, setValue] = useState("");
  const navigation = useNavigation();
  const handlePress = () => {
    setAmount(value);
    navigation.navigate("rent5");
  };
  return (
    <View style={{ flex: 1, gap: 25, alignItems: "center", paddingTop: 80 }}>
      <Text style={[styles.text, { fontSize: 16 }]}>Enter Amount</Text>
      <View style={styles.card}>
        <Text style={{ color: "#1B9D76", fontSize: 28 }}>₹</Text>
        <TextInput
          onChangeText={(text) => setValue(text)}
          keyboardType="numeric"
          style={styles.input}
        />
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
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={[styles.text, { color: "white" }]}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins_400Regular",
  },
  card: {
    height: 80,
    backgroundColor: "#e3e1e1",
    borderRadius: 28,
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  input: {
    justifyContent: "center",
    fontSize: 28,
    color: "#1B9D76",
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
    marginBottom: 15,
  },
});

export default Rent4;
