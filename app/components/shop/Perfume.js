import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Perfume = () => {
  const navigation = useNavigation();
  const Perfumes = [
    {
      id: "1",
      offer: 15,
      image: require("../assets/logos/godrej.png"),
      name: "Godrej       ",
      detail: "Car Air Freshener, Spill \n Proof (45g)",
      rate: 340,
      original: 399,
    },
    {
      id: "2",
      offer: 57,
      image: require("../assets/logos/UNO.png"),
      left: 20,
      name: "UNO Aroma",
      detail: "Car Air Freshener, Spill Proof (45g)",
      rate: 258,
      original: 599,
    },
    {
      id: "3",
      offer: 15,
      image: require("../assets/logos/evair.png"),
      left: 20,
      name: "Evair       ",
      detail: "Car Air Freshener with \n Essential Oils(15ml)",
      rate: 340,
      original: 399,
    },
    {
      id: "4",
      offer: 57,
      image: require("../assets/logos/UNO.png"),
      left: 20,
      name: "UNO Aroma",
      detail: "Car Air Freshener, Spill Proof (45g)",
      rate: 340,
      original: 399,
    },
    {
      id: "5",
      offer: 57,
      image: require("../assets/logos/UNO.png"),
      left: 20,
      name: "UNO Aroma",
      detail: "Car Air Freshener, Spill Proof (45g)",
      rate: 340,
      original: 399,
    },
    {
      id: "6",
      offer: 57,
      image: require("../assets/logos/UNO.png"),
      left: 20,
      name: "UNO Aroma",
      detail: "Car Air Freshener, Spill Proof (45g)",
      rate: 340,
      original: 399,
    },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {Perfumes.map((perfume) => (
            <View style={styles.deal}>
              <View style={styles.deal1}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins_500Medium",
                      fontSize: 12,
                      color: "#1A9E75",
                    }}
                  >
                    {perfume.offer}% off
                  </Text>
                  <Image
                    style={{ width: 16.67, height: 15.29 }}
                    source={require("../assets/logos/favorite.png")}
                  ></Image>
                </View>
                <Image
                  source={perfume.image}
                  style={{
                    width: 106,
                    height: 106,
                    alignSelf: "center",
                    top: 10,
                  }}
                ></Image>
              </View>
              <View style={{ flexDirection: "row", gap: 40 }}>
                <Text
                  style={{
                    left: 10,
                    top: 8,
                    fontFamily: "Poppins_500Medium",
                    color: "white",
                  }}
                >
                  {perfume.name}
                </Text>
                <Image
                  source={require("../assets/logos/stars.png")}
                  style={{ width: 58, height: 14, top: 10, right: 25 }}
                ></Image>
              </View>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Poppins_400Regular",
                  left: 10,
                  top: 10,
                  color: "white",
                }}
              >
                {perfume.detail}
              </Text>
              <View
                style={{
                  marginTop: 10,
                  left: 10,
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 16,
                    color: "#CDCDCD",
                    textDecorationLine: "line-through",
                  }}
                >
                  ₹ {perfume.original}
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  ₹ {perfume.rate}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("shop3")}
                style={{
                  width: 132,
                  height: 30,
                  backgroundColor: "white",
                  borderRadius: 14,
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 12,
                    color: "#1A9E75",
                    alignSelf: "center",
                  }}
                >
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Perfume;

const styles = StyleSheet.create({
  deal: {
    width: 155,
    height: 285,
    borderRadius: 15,
    backgroundColor: "#1A9E75",
    marginTop: 20,
  },
  deal1: {
    width: 154.97,
    height: 155,
    backgroundColor: "white",
    borderColor: "#1A9E75",
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
  },
});
