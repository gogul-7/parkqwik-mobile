import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FastRecharge from "../components/FastRecharge";
import Banner from "../components/Banner";
import Deals from "../components/Deals";
import PremiumPlans from "../components/PremiumPlans";
import CarsCenter from "../components/CarsCenter";
import { useNavigation } from "@react-navigation/native";

const services = [
  {
    id: 2,
    title: "Nearby Parking",
    image: require("../assets/images/location.png"),
    route: "",
  },
  {
    id: 3,
    title: "EV Parking",
    image: require("../assets/images/electric.png"),
    route: "",
  },
  {
    id: 8,
    title: "Car Wash",
    image: require("../assets/images/wash.png"),
    route: "",
  },
  {
    id: 4,
    title: "Car Insurance",
    image: require("../assets/images/insure.png"),
    route: "",
  },
  {
    id: 5,
    title: "Road Assistance",
    image: require("../assets/images/crane.png"),
    route: "",
  },
  {
    id: 6,
    title: "Pay Challan",
    image: require("../assets/images/challan.png"),
    route: "Pay Challan",
  },
  {
    id: 7,
    title: "Toll Estimator",
    image: require("../assets/images/toll.png"),
    route: "",
  },
  {
    id: 8,
    title: "Valet Parking",
    image: require("../assets/images/valet.png"),
    route: "",
  },

  {
    id: 9,
    title: "Shop Here",
    image: require("../assets/images/shop.png"),
    route: "",
  },
  {
    id: 10,
    title: "Rentout Helmet",
    image: require("../assets/images/helmet.png"),
  },
  {
    id: 11,
    title: "Fuel Price",
    image: require("../assets/images/fuel.png"),
    route: "",
  },

  {
    id: 13,
    title: "My Vehicles",
    image: require("../assets/images/car.png"),
    route: "",
  },
];

const mainService = services.filter((item) => item.id < 9);

const otherService = services.filter((item) => item.id >= 9);

const Home = () => {
  return (
    <View>
      <ImageBackground
        style={styles.backImage}
        source={require("../assets/images/headerback.png")}
      />
      <View style={styles.homeContent}>
        <View style={styles.serviceContainer}>
          <Text style={styles.header}>Services</Text>
          <FlatList
            data={mainService}
            numColumns="4"
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <List item={item} />}
            contentContainerStyle={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </View>
        <FastRecharge />
        <Banner />
        <View style={styles.serviceContainer}>
          <Text style={styles.header}>Others</Text>
          <FlatList
            data={otherService}
            numColumns="4"
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <List item={item} />}
          />
        </View>
        <Deals />
        <PremiumPlans />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannerContainer}
          horizontal
        >
          <LinearGradient
            colors={["#1A9E75", "#27CD99"]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 0.0 }}
            locations={[0.1149, 0.923]}
            style={styles.banner}
          >
            <Text
              style={[
                styles.text,
                { color: "#FBFF29", fontSize: 18, marginBottom: -8 },
              ]}
            >
              Get 15% off on
            </Text>
            <Text style={[styles.text, { color: "white", fontSize: 20 }]}>
              FASTag recharge
            </Text>
            <Text style={[styles.text, { color: "white", fontSize: 9 }]}>
              Pay using Axis Bank Credit & Debit Cards
            </Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={styles.button}>
                <Text style={[styles.text, { fontSize: 9, color: "black" }]}>
                  Recharge Now
                </Text>
              </View>
              <Image
                style={{ maxWidth: 90, maxHeight: 20, marginTop: 5 }}
                source={require("../assets/images/fastag.png")}
              />
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["#1B53E4", "#268AFF"]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 0.0 }}
            locations={[0.1149, 0.923]}
            style={styles.banner}
          >
            <Text style={[styles.text, { color: "white", fontSize: 18 }]}>
              Reserve a Parking Slot
            </Text>
            <Text
              style={[
                styles.text,
                { color: "white", fontSize: 9, marginBottom: 20 },
              ]}
            >
              Win 300ml petrol on your first parking!
            </Text>
            <View style={styles.button}>
              <Text style={[styles.text, { fontSize: 9, color: "black" }]}>
                Explore Now
              </Text>
            </View>
          </LinearGradient>
        </ScrollView>
        <CarsCenter />
      </View>
    </View>
  );
};

const List = ({ item }) => {
  const navigation = useNavigation();
  const handlePress = (route) => {
    navigation.navigate(`${route}`);
  };
  return (
    <Pressable onPress={() => handlePress(item.route)} style={styles.gridItem}>
      <View style={styles.imgCard}>
        <Image style={styles.image} source={item.image} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  backImage: {
    height: 128,
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  homeContent: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 25,
    top: -100,
  },
  serviceContainer: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
    marginLeft: 8,
  },
  gridItem: {
    width: "25%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
    gap: 8,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
  },
  title: {
    width: "90%",
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
  },
  imgCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 60,
    borderRadius: 9,
    height: 50,
    elevation: 3,
  },
  image: {
    maxHeight: 35,
    maxWidth: 45,
  },
  lineContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 20,
  },
  line: {
    width: 30,
    height: 3,
    backgroundColor: "#1A9E75",
    borderRadius: 2,
  },
  bannerContainer: {
    paddingLeft: "5%",
    display: "flex",
  },
  banner: {
    width: 230,
    height: 130,
    borderRadius: 15,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  button: {
    width: 90,
    height: 25,
    borderRadius: 15,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
});

export default Home;
