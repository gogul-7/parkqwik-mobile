import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

const arr = [
  "Exterior Shines",
  "Wax Coating",
  "Interior Cleaning",
  "Alloy Cleans",
];

const Wash1 = () => {
  const [selected, setSelected] = useState("information");
  const [plan, setPlan] = useState(99);
  const [modal, setModal] = useState(false);

  const handlePress = (amount) => {
    setPlan(amount);
    setModal(true);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingTop: 15,
        gap: 20,
        paddingBottom: 30,
      }}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.bannerContainer}
        horizontal
      >
        <LinearGradient
          colors={["#1B5FE4", "#268AFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.banner}
        >
          <Text
            style={[
              styles.text,
              { color: "white", fontSize: 18, lineHeight: 20 },
            ]}
          >
            Get Your Car Wash Today
          </Text>
          <Text
            style={[
              styles.text,
              { color: "white", fontSize: 12, marginBottom: 10, width: "80%" },
            ]}
          >
            Starting @ ₹ 399/-
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
              <Text style={[styles.bold, { fontSize: 10, color: "black" }]}>
                Book Now
              </Text>
            </View>
            <Image
              style={{
                maxWidth: 80,
                maxHeight: 55,
                position: "absolute",
                right: 8,
                bottom: 15,
              }}
              source={require("../assets/images/carwash.png")}
            />
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["#EF663B", "#FFA360"]}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.banner}
        >
          <Text style={[styles.text, { color: "white", fontSize: 16 }]}>
            Get Expert Car Polishing
          </Text>
          <Text
            style={[
              styles.text,
              { color: "white", fontSize: 9, width: "70%", marginBottom: 10 },
            ]}
          >
            Get exciting rewards on your Car Wash!
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
            <View style={styles.button2}>
              <Text style={[styles.bold, { fontSize: 10, color: "black" }]}>
                Book Now
              </Text>
            </View>
            <Image
              style={{ maxWidth: 90, maxHeight: 20, marginTop: 5 }}
              source={require("../assets/images/fastag.png")}
            />
          </View>
        </LinearGradient>
      </ScrollView>
      <TouchableOpacity
        onPress={() => handlePress(99)}
        style={styles.container}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            style={{ maxWidth: 25, maxHeight: 25, marginTop: 5 }}
            source={require("../assets/images/greenwash.png")}
          />
          <Text style={[styles.text, { color: "#393939", paddingTop: 3 }]}>
            Book Your Car Wash
          </Text>
        </View>
        <FontAwesomeIcon icon={"angle-right"} color="#1A9E75" />
      </TouchableOpacity>
      <Text
        style={[
          styles.header,
          { color: "#393939", fontSize: 16, width: "90%" },
        ]}
      >
        Premium Plans
      </Text>
      <View style={{ width: "100%", alignItems: "center", gap: 13 }}>
        <View style={[styles.planContainer, { backgroundColor: "#FFF5DE" }]}>
          <LinearGradient
            colors={["#FFB70A", "#DC9C03"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1.0, y: 0.5 }}
            style={styles.gradient}
          >
            <Text
              style={[
                styles.header,
                { color: "#FFF", fontSize: 12, paddingBottom: 3 },
              ]}
            >
              Daily Wash
            </Text>
          </LinearGradient>
          <View
            style={{
              flexDirection: "row",

              width: "100%",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
                source={require("../assets/images/priority.png")}
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#00A638",
                    fontSize: 10,
                  },
                ]}
              >
                Exterior Shines
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: -10,
              }}
            >
              <Image
                style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
                source={require("../assets/images/priority.png")}
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#00A638",
                    fontSize: 10,
                  },
                ]}
              >
                Wax Coating
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: -10,
              }}
            >
              <Image
                style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
                source={require("../assets/images/priority.png")}
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#00A638",
                    fontSize: 10,
                  },
                ]}
              >
                Interior Cleaning
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
              source={require("../assets/images/priority.png")}
            />
            <Text
              style={[
                styles.header,
                {
                  color: "#00A638",
                  fontSize: 10,
                },
              ]}
            >
              Alloy Cleans
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              {
                color: "#393939",
                fontSize: 12,
                marginTop: 5,
              },
            ]}
          >
            Everything Standard + Everyday Exteri..{" "}
            <Text style={{ color: "#1A9E75" }}>See More</Text>
          </Text>
          <Text style={{ fontSize: 18, color: "#393939" }}>
            ₹{" "}
            <Text style={styles.header}>
              999
              <Text style={{ color: "#A0A0A0", fontSize: 10 }}>/per Month</Text>
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => handlePress(999)}
            style={styles.button3}
          >
            <Text
              style={[
                styles.bold,
                {
                  color: "#FFF",
                  paddingBottom: 2,
                  fontSize: 12,
                },
              ]}
            >
              Subscribe Now
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.planContainer, { backgroundColor: "#EAFFF1" }]}>
          <LinearGradient
            colors={["#0AEC80", "#00A555"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1.0, y: 0.5 }}
            style={styles.gradient}
          >
            <Text
              style={[
                styles.header,
                { color: "#FFF", fontSize: 12, paddingBottom: 3 },
              ]}
            >
              Weekly Wash
            </Text>
          </LinearGradient>
          <View
            style={{
              flexDirection: "row",

              width: "100%",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
                source={require("../assets/images/priority.png")}
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#00A638",
                    fontSize: 10,
                  },
                ]}
              >
                Exterior Shines
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: -10,
              }}
            >
              <Image
                style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
                source={require("../assets/images/priority.png")}
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#00A638",
                    fontSize: 10,
                  },
                ]}
              >
                Wax Coating
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: -10,
              }}
            >
              <Image
                style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
                source={require("../assets/images/priority.png")}
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#00A638",
                    fontSize: 10,
                  },
                ]}
              >
                Interior Cleaning
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
              source={require("../assets/images/priority.png")}
            />
            <Text
              style={[
                styles.header,
                {
                  color: "#00A638",
                  fontSize: 10,
                },
              ]}
            >
              Alloy Cleans
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              {
                color: "#393939",
                fontSize: 12,
                marginTop: 5,
              },
            ]}
          >
            Everything Standard + Once a week Ex..{" "}
            <Text style={{ color: "#1A9E75" }}>See More</Text>
          </Text>
          <Text style={{ fontSize: 18, color: "#393939" }}>
            ₹{" "}
            <Text style={styles.header}>
              699
              <Text style={{ color: "#A0A0A0", fontSize: 10 }}>/per Month</Text>
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => handlePress(699)}
            style={styles.button3}
          >
            <Text
              style={[
                styles.bold,
                {
                  color: "#FFF",
                  paddingBottom: 2,
                  fontSize: 12,
                },
              ]}
            >
              Subscribe Now
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.planContainer, { backgroundColor: "#DEFBFF" }]}>
          <LinearGradient
            colors={["#2A89EF", "#155FAF"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1.0, y: 0.5 }}
            style={styles.gradient}
          >
            <Text
              style={[
                styles.header,
                { color: "#FFF", fontSize: 12, paddingBottom: 3 },
              ]}
            >
              Monthly Wash
            </Text>
          </LinearGradient>
          <View
            style={{
              flexDirection: "row",

              width: "100%",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
                source={require("../assets/images/priority.png")}
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#00A638",
                    fontSize: 10,
                  },
                ]}
              >
                Exterior Shines
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: -10,
              }}
            >
              <Image
                style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
                source={require("../assets/images/priority.png")}
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#00A638",
                    fontSize: 10,
                  },
                ]}
              >
                Wax Coating
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: -10,
              }}
            >
              <Image
                style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
                source={require("../assets/images/priority.png")}
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#00A638",
                    fontSize: 10,
                  },
                ]}
              >
                Interior Cleaning
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
              source={require("../assets/images/priority.png")}
            />
            <Text
              style={[
                styles.header,
                {
                  color: "#00A638",
                  fontSize: 10,
                },
              ]}
            >
              Alloy Cleans
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              {
                color: "#393939",
                fontSize: 12,
                marginTop: 5,
              },
            ]}
          >
            Everything Standard + Once a week Ex..{" "}
            <Text style={{ color: "#1A9E75" }}>See More</Text>
          </Text>
          <Text style={{ fontSize: 18, color: "#393939" }}>
            ₹{" "}
            <Text style={styles.header}>
              399
              <Text style={{ color: "#A0A0A0", fontSize: 10 }}>/per Month</Text>
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => handlePress(399)}
            style={styles.button3}
          >
            <Text
              style={[
                styles.bold,
                {
                  color: "#FFF",
                  paddingBottom: 2,
                  fontSize: 12,
                },
              ]}
            >
              Subscribe Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 15, width: "90%" }}>
        <TouchableOpacity onPress={() => setSelected("information")}>
          <Text
            style={
              selected === "information"
                ? [
                    styles.text,
                    {
                      color: "#1A9E75",
                      fontSize: 16,
                      borderBottomColor: "#1A9E75",
                      borderBottomWidth: 3,
                    },
                  ]
                : [
                    styles.text,
                    {
                      color: "#A0A0A0",
                      fontSize: 16,
                    },
                  ]
            }
          >
            Information
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("reviews")}>
          <Text
            style={
              selected === "reviews"
                ? [
                    styles.text,
                    {
                      color: "#1A9E75",
                      fontSize: 16,
                      borderBottomColor: "#1A9E75",
                      borderBottomWidth: 3,
                    },
                  ]
                : [
                    styles.text,
                    {
                      color: "#A0A0A0",
                      fontSize: 16,
                    },
                  ]
            }
          >
            Reviews
          </Text>
        </TouchableOpacity>
      </View>
      <Content selected={selected} />
      <Popup plan={plan} modal={modal} setModal={setModal} />
    </ScrollView>
  );
};

export default Wash1;

const Content = ({ selected }) => {
  if (selected === "information") {
    return (
      <View style={{ width: "90%", gap: 10 }}>
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
            },
          ]}
        >
          Best - In - Class Service
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", gap: 5, marginLeft: -10 }}
          >
            <Image
              style={{ width: 35, height: 35, marginTop: 5 }}
              source={require("../assets/images/tire.png")}
            />
            <Text
              style={[
                styles.text,
                {
                  color: "#393939",
                  fontSize: 10,
                  textAlign: "center",
                  width: "80%",
                },
              ]}
            >
              Glossy Tyre Polish
            </Text>
          </View>
          <View style={styles.line} />
          <View style={{ flex: 1, alignItems: "center", gap: 5 }}>
            <Image
              style={{ width: 35, height: 35, marginTop: 5 }}
              source={require("../assets/images/drop.png")}
            />
            <Text
              style={[
                styles.text,
                {
                  color: "#393939",
                  fontSize: 10,
                  textAlign: "center",
                },
              ]}
            >
              Daily Foam Shampoo
            </Text>
          </View>
          <View style={styles.line} />
          <View style={{ flex: 1, alignItems: "center", gap: 5 }}>
            <Image
              style={{ width: 35, height: 35, marginTop: 5 }}
              source={require("../assets/images/cloth.png")}
            />
            <Text
              style={[
                styles.text,
                {
                  color: "#393939",
                  fontSize: 10,
                  textAlign: "center",
                },
              ]}
            >
              Scratch - Free Microfiber Cloth
            </Text>
          </View>
        </View>
        <View style={styles.border} />
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
            },
          ]}
        >
          Top - Notch Safety Measures
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", gap: 5, marginLeft: -10 }}
          >
            <Image
              style={{ width: 35, height: 35, marginTop: 5 }}
              source={require("../assets/images/temperature.png")}
            />
            <Text
              style={[
                styles.text,
                {
                  color: "#393939",
                  fontSize: 10,
                  textAlign: "center",
                  width: "80%",
                },
              ]}
            >
              Temperature Checks
            </Text>
          </View>
          <View style={styles.line} />
          <View style={{ flex: 1, alignItems: "center", gap: 5 }}>
            <Image
              style={{ width: 35, height: 35, marginTop: 5 }}
              source={require("../assets/images/gas.png")}
            />
            <Text
              style={[
                styles.text,
                {
                  color: "#393939",
                  fontSize: 10,
                  textAlign: "center",
                },
              ]}
            >
              Sanitisation of Tools
            </Text>
          </View>
          <View style={styles.line} />
          <View style={{ flex: 1, alignItems: "center", gap: 5 }}>
            <Image
              style={{ width: 35, height: 35, marginTop: 5 }}
              source={require("../assets/images/injection.png")}
            />
            <Text
              style={[
                styles.text,
                {
                  color: "#393939",
                  fontSize: 10,
                  textAlign: "center",
                },
              ]}
            >
              Vaccinated Cleaners
            </Text>
          </View>
        </View>
        <View style={styles.border} />
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
            },
          ]}
        >
          Hassle Free Doorstep Car Wash
        </Text>
        <Text
          style={[
            styles.text,
            {
              color: "#858585",
              fontSize: 12,
            },
          ]}
        >
          We believe that we are different from your local car cleaner. Look Why
        </Text>
        <ImageBackground
          style={{
            width: "100%",
            height: 150,
            alignItems: "center",
            justifyContent: "center",
          }}
          borderRadius={15}
          source={require("../assets/images/porsche.png")}
        >
          <FontAwesomeIcon
            icon={"circle-play"}
            color="#FFF"
            style={{ position: "absolute" }}
            size={24}
          />
        </ImageBackground>
      </View>
    );
  }
  if (selected === "reviews") {
    return (
      <View style={{ width: "90%", gap: 15 }}>
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
            },
          ]}
        >
          10k+ Happy Customers
        </Text>
        <ScrollView horizontal contentContainerStyle={{ gap: 10 }}>
          <ImageBackground
            style={{
              width: 225,
              height: 315,
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: 15,
            }}
            borderRadius={15}
            source={require("../assets/images/person3.png")}
          >
            <View style={styles.container2}>
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                    fontSize: 12,
                  },
                ]}
              >
                My car looks absolutely shiny every morning.
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#393939",
                    fontSize: 10,
                  },
                ]}
              >
                I tried ParkQwik car wash service on the recommendation of a
                friend, and there has been no looking back since then.
              </Text>
              <View style={{ alignItems: "flex-end" }}>
                <Image
                  style={{ width: 70, height: 17 }}
                  source={require("../assets/images/stars.png")}
                />
                <Text
                  style={[
                    styles.header,
                    {
                      color: "#393939",
                      fontSize: 10,
                      marginRight: 5,
                    },
                  ]}
                >
                  Charlie
                </Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            style={{
              width: 225,
              height: 315,
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: 15,
            }}
            borderRadius={15}
            source={require("../assets/images/person4.png")}
          >
            <View style={styles.container2}>
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                    fontSize: 12,
                  },
                ]}
              >
                I truly trust parkqwik
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#393939",
                    fontSize: 10,
                  },
                ]}
              >
                My car is my absolutely priority and there is no one else I’d
                trust with cleaning it. Everything is cleaned with utmost
                dedication.
              </Text>
              <View style={{ alignItems: "flex-end" }}>
                <Image
                  style={{ width: 70, height: 17 }}
                  source={require("../assets/images/stars.png")}
                />
                <Text
                  style={[
                    styles.header,
                    {
                      color: "#393939",
                      fontSize: 10,
                      marginRight: 5,
                    },
                  ]}
                >
                  Kumar
                </Text>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
};

const Popup = ({ plan, modal, setModal }) => {
  const navigation = useNavigation();

  const hanldeNavigate = () => {
    navigation.navigate("wash2");
  };

  return (
    <Modal
      isVisible={modal}
      backdropColor="#B7B7B7"
      useNativeDriver
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <View style={styles.details}>
        <TouchableOpacity
          onPress={() => setModal(false)}
          style={{ position: "absolute", right: 15, top: 15 }}
        >
          <FontAwesomeIcon
            icon={"circle-xmark"}
            color="rgba(26, 158, 117, 1)"
            size={24}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
              fontSize: 18,
            },
          ]}
        >
          Details
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {arr.map((item, index) => (
            <View
              key={index}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Image
                style={{ maxWidth: 13, maxHeight: 13, marginTop: 3 }}
                source={require("../assets/images/priority.png")}
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#00A638",
                    fontSize: 10,
                  },
                ]}
              >
                {item}
              </Text>
            </View>
          ))}
        </View>
        <Text
          style={[
            styles.text,
            {
              color: "#393939",
            },
          ]}
        >
          Everything standard + Exterior cleaning + Interior cleaning.
        </Text>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <FontAwesomeIcon icon={"circle-check"} size={14} />
          <Text
            style={[
              styles.text,
              {
                color: "#393939",
                fontSize: 12,
              },
            ]}
          >
            30% add-on services discount.
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <FontAwesomeIcon icon={"circle-check"} size={14} />
          <Text
            style={[
              styles.text,
              {
                color: "#393939",
                fontSize: 12,
              },
            ]}
          >
            Multi-car discount.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={[
              styles.text,
              {
                color: "#393939",
              },
            ]}
          >
            Amount
          </Text>
          <Text
            style={{
              color: "#393939",
              fontSize: 20,
            }}
          >
            ₹ <Text style={styles.header}>{plan}</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.button4} onPress={hanldeNavigate}>
          <Text
            style={[
              styles.bold,
              {
                color: "white",

                fontSize: 16,
              },
            ]}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  details: {
    width: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 320,
    paddingTop: 20,
    paddingHorizontal: 15,
    gap: 10,
  },
  container: {
    backgroundColor: "#F0FFFA",
    borderRadius: 15,
    width: "90%",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  container2: {
    backgroundColor: "#FFF",
    width: "90%",
    borderRadius: 15,
    padding: 10,
    gap: 5,
    minHeight: 160,
  },
  planContainer: {
    width: "90%",
    height: 150,
    paddingHorizontal: 15,
    paddingTop: 30,
    borderRadius: 15,
    overflow: "hidden",
    gap: 5,
  },
  border: {
    height: 3,
    width: "100%",
    backgroundColor: "rgba(133, 133, 133, .3)",
    marginTop: 10,
  },
  line: {
    borderBottomColor: "#1A9E75",
    borderBottomWidth: 1,
    width: 21,
    borderStyle: "dashed",
    marginTop: 25,
  },
  gradient: {
    height: 26,
    borderBottomRightRadius: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  button3: {
    backgroundColor: "#262626",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 15,
    position: "absolute",
    bottom: 15,
    right: 10,
  },
  button4: {
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    width: "100%",
    paddingVertical: 8,
    alignItems: "center",
    gap: 10,
    alignSelf: "center",
    marginTop: 5,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    marginTop: 3,
  },
  bannerContainer: {
    paddingLeft: "5%",
  },
  header: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    marginBottom: -5,
  },
  image: {
    height: 140,
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    width: 230,
    height: 130,
    borderRadius: 15,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  button2: {
    paddingHorizontal: 12,
    height: 25,
    borderRadius: 15,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  button: {
    height: 25,
    borderRadius: 15,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    paddingHorizontal: 13,
    paddingBottom: 2,
  },
});
