import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const carCenter = [
  {
    id: 1,
    title: "Pay Challans",
    image: require("../assets/images/greenchallan.png"),
  },
  {
    id: 2,
    title: "Crime Reporter",
    image: require("../assets/images/greencrime.png"),
  },
  {
    id: 3,
    title: "RTO Center",
    image: require("../assets/images/greenrto.png"),
  },
  {
    id: 4,
    title: "PUCC Center",
    image: require("../assets/images/greenpucc.png"),
  },
];

const rewards = [
  {
    id: 1,
    title: "Rewards",
    image: require("../assets/images/greenreward.png"),
  },
  {
    id: 2,
    title: "Discounts",
    image: require("../assets/images/greendiscount.png"),
  },
  {
    id: 3,
    title: "Refer & Win",
    image: require("../assets/images/greenrefer.png"),
  },
];

const CarsCenter = () => {
  return (
    <View style={{ width: "90%", display: "flex", gap: 10 }}>
      <View style={styles.travelContainer}>
        <Text style={styles.header}>Recharge & Bill Payments</Text>
        <View style={styles.discContainer}>
          {carCenter.map((item) => (
            <View
              key={item.id}
              style={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              <View style={styles.icon}>
                <Image
                  style={{ maxHeight: 25, maxWidth: 30 }}
                  source={item.image}
                />
              </View>
              <Text style={styles.iconText}>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
      <FlatList />
      <View style={styles.travelContainer}>
        <Text style={styles.header}>Exclusive Offers</Text>
        <View
          style={[styles.discContainer, { justifyContent: "space-around" }]}
        >
          {rewards.map((item) => (
            <View
              key={item.id}
              style={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              <View style={styles.icon}>
                <Image
                  style={{ maxHeight: 25, maxWidth: 30 }}
                  source={item.image}
                />
              </View>
              <Text style={styles.iconText}>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
      <Text style={[styles.header, { marginTop: 10, marginLeft: 12 }]}>
        How parkqwik works ?
      </Text>
      <LinearGradient
        colors={["#9EFFE1", "#E9FFF8"]}
        start={{ x: 0.5, y: 0.0 }}
        end={{ x: 0.5, y: 1.0 }}
        style={styles.gradient}
      >
        <Image
          style={{ maxWidth: 75, maxHeight: 115, marginLeft: 15 }}
          source={require("../assets/images/iPhone.png")}
        />
        <Image
          style={{
            maxWidth: 25,
            maxHeight: 25,

            position: "absolute",
          }}
          source={require("../assets/images/play_circle.png")}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  travelContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    display: "flex",
    gap: 8,
    marginTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
  },
  discContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FFFA",
    width: 60,
    borderRadius: 9,
    height: 50,
    elevation: 3,
  },
  iconText: {
    width: 60,
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  gradient: {
    width: "100%",
    height: 150,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CarsCenter;
