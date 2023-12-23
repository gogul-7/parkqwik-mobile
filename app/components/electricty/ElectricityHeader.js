import React from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";

const ElectricityHeader = ({ name }) => {
  if (name === "electricity1")
    return (
      <View
        style={{ height: 80, alignItems: "center", justifyContent: "center" }}
      >
        <TextInput
          style={styles.input}
          placeholder="Search by state or electricity board "
        />
        <Image
          style={styles.search}
          source={require("../assets/images/search.png")}
        />
      </View>
    );
  else if (name === "electricity2")
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../assets/images/tneb.png")}
          />
          <View>
            <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
              Electric Board
            </Text>
            <Text style={styles.text}>Tamil Nadu Electricity Board</Text>
          </View>
          <View style={styles.change}>
            <Text style={[styles.text, { color: "#1A9E75", fontSize: 11 }]}>
              Change
            </Text>
          </View>
        </View>
      </View>
    );
  else if (name === "electricity3") {
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../assets/images/tneb.png")}
          />
          <View>
            <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
              09579127298
            </Text>
            <Text style={styles.text}>Krishna K</Text>
          </View>
          <View style={styles.change}>
            <Text style={[styles.text, { color: "#1A9E75", fontSize: 11 }]}>
              Change
            </Text>
          </View>
        </View>
      </View>
    );
  }
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
    height: 100,
    backgroundColor: "#1A9E75",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 15,
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

export default ElectricityHeader;
