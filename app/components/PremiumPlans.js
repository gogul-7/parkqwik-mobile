import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  FlatList,
  Pressable,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const services = [
  {
    id: 1,
    title: "Fastag Recharge",
    image: require("../assets/images/greenfast.png"),
    route: "",
  },
  {
    id: 2,
    title: "Mobile Recharge",
    image: require("../assets/images/greenmobile.png"),
    route: "",
  },
  {
    id: 3,
    title: "Electricity",
    image: require("../assets/images/greenelectricity.png"),
    route: "",
  },
  {
    id: 4,
    title: "Water",
    image: require("../assets/images/greenwater.png"),
    route: "",
  },
  {
    id: 5,
    title: "Gas Cylinder",
    image: require("../assets/images/greengas.png"),
    route: "",
  },
  {
    id: 6,
    title: "Loan Payment",
    image: require("../assets/images/greenhand.png"),
    route: "",
  },
  {
    id: 7,
    title: "DTH",
    image: require("../assets/images/greendish.png"),
    route: "",
  },
  {
    id: 8,
    title: "House Rent",
    image: require("../assets/images/greenhouse.png"),
    route: "",
  },
];

const PremiumPlans = () => {
  return (
    <View style={styles.contianer}>
      <Text style={[styles.header, { marginLeft: 15 }]}>Premium Plans</Text>
      <View style={styles.planContainer}>
        <ImageBackground
          style={styles.backImage}
          source={require("../assets/images/frame7.png")}
        >
          <Text style={[styles.text, { fontSize: 16, color: "#FBFF35" }]}>
            Monthly Parking
          </Text>
          <Text style={[styles.text, { fontSize: 9, color: "white" }]}>
            Dedicated parking available near you.
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 3,
              marginTop: 5,
            }}
          >
            <View style={styles.button}>
              <Text style={[styles.text, { fontSize: 8 }]}>Explore Now</Text>
              <FontAwesomeIcon
                style={{ maxWidth: 10, marginBottom: 1 }}
                icon="arrow-right-long"
              />
            </View>
            <Image
              style={{
                maxWidth: 50,
                maxHeight: 48,
                marginTop: -15,
                marginLeft: 10,
              }}
              source={require("../assets/images/group1.png")}
            />
          </View>
        </ImageBackground>
        <ImageBackground
          style={styles.backImage}
          source={require("../assets/images/frame6.png")}
        >
          <Text style={[styles.text, { fontSize: 16, color: "#FBFF35" }]}>
            Elite Car Wash
          </Text>
          <Text style={[styles.text, { fontSize: 9, color: "white" }]}>
            Elite car grooming at your doorstep.
          </Text>

          <View style={[styles.button, { marginTop: 8 }]}>
            <Text style={[styles.text, { fontSize: 8 }]}>Explore Now</Text>
            <FontAwesomeIcon
              style={{ maxWidth: 10, marginBottom: 1 }}
              icon="arrow-right-long"
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.serviceContainer}>
        <Text style={[styles.header, { marginLeft: 10 }]}>
          Recharge & Bill Payments
        </Text>
        <FlatList
          data={services}
          numColumns="4"
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handlePress(item.route)}
              style={styles.gridItem}
            >
              <View style={styles.imgCard}>
                <Image style={styles.image} source={item.image} />
              </View>
              <Text style={styles.title}>{item.title}</Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    width: "90%",
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
  },
  planContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  backImage: {
    width: 160,
    height: 103,
    display: "flex",
    alignItems: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  button: {
    width: 80,
    height: 25,
    borderRadius: 15,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  serviceContainer: {
    flex: 0.9,
    backgroundColor: "#FFF",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  gridItem: {
    width: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    gap: 8,
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
    backgroundColor: "#F0FFFA",
    width: 60,
    borderRadius: 9,
    height: 50,
    elevation: 3,
  },
  image: {
    maxHeight: 30,
    maxWidth: 30,
  },
});

export default PremiumPlans;
