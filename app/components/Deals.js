import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const travel = [
  {
    id: 1,
    title: "Car Wash",
    image: require("../assets/images/greenwash.png"),
  },
  {
    id: 2,
    title: "Estimate Toll",
    image: require("../assets/images/greentoll.png"),
  },
  {
    id: 3,
    title: "Shop",
    image: require("../assets/images/greenshop.png"),
  },
  {
    id: 4,
    title: "Protocols",
    image: require("../assets/images/greentraffic.png"),
    route: "Protocols",
  },
];

const Deals = () => {
  const navigation = useNavigation();

  const handleNavigate = (route) => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.contianer}>
      <View style={{ width: "100%" }}>
        <Text style={[styles.header, { marginLeft: 22 }]}>Deals For You</Text>
      </View>
      <ScrollView
        style={{ marginTop: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 7, paddingStart: 15, paddingEnd: 10 }}
      >
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/frame4.png")}
        >
          <Text style={[styles.text, { fontSize: 18, color: "#FBFF35" }]}>
            Get 25% off
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 8, color: "white", marginTop: -5 },
            ]}
          >
            on your first car wash
          </Text>
          <View style={styles.button}>
            <Text style={{ fontWeight: "600", fontSize: 12 }}>Book Now</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/frame5.png")}
        >
          <Image
            style={styles.acko}
            source={require("../assets/images/acko.png")}
          />
          <Text
            style={[styles.text, { color: "white", fontSize: 9, marginTop: 8 }]}
          >
            Car Insurance
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Text
              style={[
                styles.text,
                { color: "#FBFF35", fontSize: 15, marginTop: -3 },
              ]}
            >
              Starting at
            </Text>
            <Image
              style={{ width: 40, height: 13, marginBottom: 5 }}
              source={require("../assets/images/moneytag.png")}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 3,
              marginTop: 5,
            }}
          >
            <Text style={[styles.text, { color: "white", fontSize: 10 }]}>
              View Details
            </Text>
            <FontAwesomeIcon
              style={{ color: "white", maxWidth: 13, marginBottom: 1 }}
              icon="arrow-right-long"
            />
          </View>
        </ImageBackground>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/frame9.png")}
        >
          <Text style={[styles.text, { fontSize: 18, color: "#FBFF35" }]}>
            Get 25% off
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 8, color: "white", marginTop: -5 },
            ]}
          >
            on your first car wash
          </Text>
          <View style={styles.button}>
            <Text style={{ fontWeight: "600", fontSize: 12 }}>Book Now</Text>
          </View>
        </ImageBackground>
      </ScrollView>
      <View style={styles.travelContainer}>
        <Text style={[styles.header]}>Gonna Travel ?</Text>
        <View style={styles.discContainer}>
          {travel.map((item) => (
            <View
              key={item.id}
              style={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              <TouchableOpacity
                onPress={() => handleNavigate(item.route)}
                style={styles.icon}
              >
                <Image
                  style={{ maxHeight: 28, maxWidth: 30 }}
                  source={item.image}
                />
              </TouchableOpacity>
              <Text style={styles.iconText}>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  header: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
  image: {
    height: 140,
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  button: {
    width: 70,
    height: 25,
    borderRadius: 15,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  acko: {
    height: 28,
    width: 80,
  },
  travelContainer: {
    width: "90%",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
    display: "flex",
    gap: 8,
    marginTop: 20,
  },
  discContainer: {
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
    width: 70,
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
});

export default Deals;
