import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Shop1 = () => {
  const navigation = useNavigation();
  const Categories = [
    {
      id: "1",
      name: "Car Perfume",
      image: require("../assets/logos/perfume.png"),
      width: 45,
      height: 45,
    },
    {
      id: "2",
      name: "Mobile Holder",
      image: require("../assets/logos/holder.png"),
      width: 33,
      height: 39.88,
    },
    {
      id: "3",
      name: "Car Covers",
      image: require("../assets/logos/cover.png"),
      width: 52,
      height: 25.86,
    },
    {
      id: "4",
      name: "Car Cleaners",
      image: require("../assets/logos/cleaner.png"),
      width: 43,
      height: 43,
    },
    {
      id: "5",
      name: "Utilities",
      image: require("../assets/logos/utilities.png"),
      width: 50,
      height: 50,
    },
    {
      id: "6",
      name: "Chargers",
      image: require("../assets/logos/charger.png"),
      width: 50,
      height: 33.33,
    },
    {
      id: "7",
      name: "Snacks",
      image: require("../assets/logos/snacks.png"),
      width: 50,
      height: 50,
    },
    {
      id: "8",
      name: "Speakers",
      image: require("../assets/logos/speakers.png"),
      width: 50,
      height: 50,
    },
    {
      id: "9",
      name: "Cushions",
      image: require("../assets/logos/cushions.png"),
      width: 50,
      height: 39.3,
    },
  ];
  const Deals = [
    {
      offer: "20",
      image: require("../assets/logos/Autofit.png"),
      name: "AUTOFIT",
      detail: "Double Quilted Car \n Cushion Combo Set",
      rate: "220",
    },
    {
      offer: "37",
      image: require("../assets/logos/aroma.png"),
      name: "Aromahpure",
      detail: "Premium car perfume \n fragrance flakes",
      rate: "199",
    },
    {
      offer: "20",
      image: require("../assets/logos/Autofit.png"),
      name: "AUTOFIT",
      detail: "Double Quilted Car \n Cushion Combo Set",
      rate: "220",
    },
  ];
  const Arrivals = [
    {
      offer: "24",
      image: require("../assets/logos/ERH.png"),
      height: 75,
      width: 125,
      name: "ERH India",
      detail: "Car Tweeter (Pack of 1 \n Pair)",
      rate: "320",
    },
    {
      offer: "15",
      image: require("../assets/logos/brocade.png"),
      name: "ERH India",
      detail: "Car Tweeter (Pack of 1 \n Pair)",
      width: 99,
      height: 99,
      rate: "320",
    },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <ScrollView>
        <Text style={styles.title}>Categories</Text>
        <View
          style={{ flexDirection: "row", gap: 8, flexWrap: "wrap", left: 20 }}
        >
          {Categories.map((category) => (
            <View style={styles.container}>
              <Image
                source={category.image}
                style={{ width: category.width, height: category.height }}
              ></Image>
              <Text
                onPress={() => navigation.navigate("shop2")}
                style={styles.name}
              >
                {category.name}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.viewmore}>
          <Text style={{ fontFamily: "Poppins_500Medium", color: "#1A9E75" }}>
            View More{" "}
          </Text>
          <FontAwesomeIcon icon={"angle-down"} color="#1A9E75" />
        </View>
        <Text style={styles.title}>Deals Of the Day</Text>
        <View style={{ flexDirection: "row", gap: 8, left: 20 }}>
          {Deals.map((deal) => (
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
                    {deal.offer}% off
                  </Text>
                  <Image
                    style={{ width: 16.67, height: 15.29 }}
                    source={require("../assets/logos/favorite.png")}
                  ></Image>
                </View>
                <Image
                  source={deal.image}
                  style={{
                    width: 109,
                    height: 109,
                    alignSelf: "center",
                    top: 10,
                  }}
                ></Image>
              </View>
              <Text
                style={{
                  left: 15,
                  top: 8,
                  fontFamily: "Poppins_500Medium",
                  color: "white",
                }}
              >
                {deal.name}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Poppins_400Regular",
                  left: 15,
                  top: 10,
                  color: "white",
                }}
              >
                {deal.detail}
              </Text>
              <View
                style={{
                  marginTop: 25,
                  left: 15,
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  ₹ {deal.rate}
                </Text>
                <TouchableOpacity
                  style={{
                    width: 70,
                    height: 24,
                    backgroundColor: "white",
                    borderRadius: 13,
                    justifyContent: "center",
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
            </View>
          ))}
        </View>
        <LinearGradient
          colors={["#6568F1", "#8C8EFF"]}
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 1.0, y: 0.5 }}
          locations={[0.211, 0.7187]}
          style={{
            width: 328,
            height: 136,
            marginTop: 25,
            borderRadius: 10,
            padding: 20,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              color: "white",
              fontSize: 16,
            }}
          >
            Lemon Car Freshner {"\n"}Get at 50% Off
          </Text>
          <View
            style={{ width: 150, height: 30, flexDirection: "row", gap: 10 }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>
              ₹{" "}
              <Text
                style={{
                  textDecorationLine: "line-through",
                  fontSize: 20,
                  color: "white",
                }}
              >
                897
              </Text>
            </Text>
            <Text style={{ fontSize: 20, color: "#1BFF68" }}>₹448</Text>
          </View>
          <Image
            source={require("../assets/logos/ambipure.png")}
            style={{ width: 117, height: 59, left: 180, bottom: 70 }}
          ></Image>

          <TouchableOpacity
            style={{
              width: 77,
              height: 28,
              backgroundColor: "white",
              bottom: 60,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 12,
                color: "#6568F1",
              }}
            >
              Buy Now
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              bottom: 90,
              left: 160,
              fontFamily: "Poppins_500Medium",
              fontSize: 12,
              color: "white",
            }}
          >
            Offer valid till 10:28:30
          </Text>
        </LinearGradient>
        <Text style={styles.title}>New Arrivals</Text>
        <View style={{ flexDirection: "row", gap: 8, left: 20 }}>
          {Arrivals.map((arrival) => (
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
                    {arrival.offer}% off
                  </Text>
                  <Image
                    style={{ width: 16.67, height: 15.29 }}
                    source={require("../assets/logos/favorite.png")}
                  ></Image>
                </View>
                <Image
                  source={arrival.image}
                  style={{
                    width: arrival.width,
                    height: arrival.height,
                    alignSelf: "center",
                    top: 10,
                  }}
                ></Image>
              </View>
              <Text
                style={{
                  left: 15,
                  top: 8,
                  fontFamily: "Poppins_500Medium",
                  color: "white",
                }}
              >
                {arrival.name}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Poppins_400Regular",
                  left: 15,
                  top: 10,
                  color: "white",
                }}
              >
                {arrival.detail}
              </Text>
              <View
                style={{
                  marginTop: 25,
                  left: 15,
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  ₹ {arrival.rate}
                </Text>
                <TouchableOpacity
                  style={{
                    width: 70,
                    height: 24,
                    backgroundColor: "white",
                    borderRadius: 13,
                    justifyContent: "center",
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
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop1;

const styles = StyleSheet.create({
  title: {
    paddingTop: 23,
    marginBottom: 8,
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "black",
    left: 20,
  },
  name: {
    fontFamily: "Poppins_400Regular",
    color: "black",
    marginTop: 9,
  },
  container: {
    width: 104,
    height: 104,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    elevation: 5,
    borderRadius: 14,
    marginTop: 15,
  },
  image: {
    width: 109,
    height: 109,
    resizeMode: "stretch",
  },
  viewmore: {
    width: 312,
    height: 40,
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 8,
    borderColor: "#1A9E75",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#F0FFFA",
    flexDirection: "row",
  },
  deal: {
    width: 146,
    height: 265,
    borderRadius: 15,
    backgroundColor: "#1A9E75",
  },
  deal1: {
    width: 146,
    height: 155,
    backgroundColor: "white",
    borderColor: "#1A9E75",
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
  },
});
