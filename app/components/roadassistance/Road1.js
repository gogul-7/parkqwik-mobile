import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { LinearGradient } from "expo-linear-gradient";

const details = [
  {
    id: 1,
    name: "Elite Roadside Assistance",
    photo: require("../assets/images/elite.png"),
    location: "Nanganallur",
    rating: 4,
  },
  {
    id: 2,
    name: "Fastz Roadside Assistance",
    photo: require("../assets/images/grand.png"),
    location: "Nanganallur",
    rating: 4,
  },
  {
    id: 3,
    name: "OMR Roadside Assistance",
    photo: require("../assets/images/omr.png"),
    location: "Shollinganallur",
    rating: 5,
  },
  {
    id: 4,
    name: "Grand Roadside Assistance",
    photo: require("../assets/images/grand.png"),
    location: "Nanganallur",
    rating: 4,
  },
  {
    id: 5,
    name: "JM Roadside Assistance",
    photo: require("../assets/images/omr.png"),
    location: "Shollinganallur",
    rating: 5,
  },
];

const questions = [
  {
    id: 1,
    question: "Is roadside assistance available 24/7?",
    answer:
      "Yes, our roadside assistance services are available 24 hours a day, 7 days a week, and 365 days a year, including holidays.",
    height: 62,
    maxHeight: 160,
  },
  {
    id: 2,
    question: "What services does roadside assistance cover?",
    answer:
      "Roadside assistance typically covers services such as towing, battery jump-starts, flat tire assistance, fuel delivery, and lockout services.",
    height: 80,
    maxHeight: 180,
  },

  {
    id: 3,
    question: "How quickly will help arrive in case of a breakdown?",
    answer: "Within 90 minutes, our team will reach your location",
    height: 80,
    maxHeight: 140,
  },

  ,
];

const Road1 = () => {
  const [border, setBorder] = useState("#A0A0A0");
  const [isOpen, setIsOpen] = useState([]);
  const [key, setKey] = useState("");
  const animatedHeight = useRef(
    details.map(() => new Animated.Value(0))
  ).current;

  const handleClick = (n) => {
    const index = details.findIndex((item) => item.id === n);
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
    Animated.timing(animatedHeight[index], {
      toValue: newIsOpen[index] ? 1 : 0,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };

  const handleChange = (text) => {
    setBorder("#1A9E75");
    if (text.length == 0) setBorder("#A0A0A0");
    setKey(text);
  };
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 15,
        alignItems: "center",
        gap: 10,
        paddingBottom: 20,
        backgroundColor: "#FFF",
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
        }}
      >
        <TextInput
          style={[styles.input, { borderColor: border }]}
          placeholder="Search area "
          onChangeText={handleChange}
        />
        <Image
          style={styles.search}
          source={
            key
              ? require("../assets/images/greensearch.png")
              : require("../assets/images/search.png")
          }
        />
      </View>
      <Text
        style={[
          styles.header,
          { color: "#393939", fontSize: 16, width: "88%" },
        ]}
      >
        How it works?
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "95%",
        }}
      >
        <View style={{ alignItems: "center", gap: 3, flex: 1 }}>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: 36, height: 50 }}
              source={require("../assets/images/person7.png")}
            />
          </View>
          <Text style={[styles.header, { color: "black" }]}>Step 1</Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 10,
                width: "90%",
                textAlign: "center",
                color: "#A0A0A0",
              },
            ]}
          >
            Contact Road assistance Near Your Location
          </Text>
        </View>
        <FontAwesomeIcon
          style={{ marginTop: 20 }}
          icon={"arrow-right-long"}
          color="#1A9E75"
          size={18}
        />
        <View style={{ alignItems: "center", gap: 3, flex: 1 }}>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: 47, height: 35 }}
              source={require("../assets/images/person8.png")}
            />
          </View>
          <Text style={[styles.header, { color: "black" }]}>Step 2</Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 10,
                width: "80%",
                textAlign: "center",
                color: "#A0A0A0",
              },
            ]}
          >
            Support Team Will Assist and Guide You
          </Text>
        </View>
        <FontAwesomeIcon
          style={{ marginTop: 20 }}
          icon={"arrow-right-long"}
          color="#1A9E75"
          size={18}
        />
        <View style={{ alignItems: "center", gap: 3, flex: 1 }}>
          <View style={[styles.imageContainer]}>
            <Image
              style={{ width: 55, height: 45 }}
              source={require("../assets/images/person9.png")}
            />
          </View>
          <Text style={[styles.header, { color: "black" }]}>Step 3</Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 10,
                textAlign: "center",
                color: "#A0A0A0",
                width: "70%",
              },
            ]}
          >
            Our Team Will Arrive Within 90 Minutes
          </Text>
        </View>
      </View>

      <View style={{ width: "90%", gap: 5 }}>
        {details.map((item) => (
          <TouchableOpacity
            onPress={handleClick}
            key={item.id}
            style={[styles.container2]}
          >
            <Image style={styles.banner2} source={item.photo} />
            <View>
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                  },
                ]}
              >
                {item.name}
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#A0A0A0",
                    fontSize: 12,
                    marginTop: -3,
                  },
                ]}
              >
                {item.location}
              </Text>
              <Rating rating={item.rating} />
            </View>
            <TouchableOpacity
              style={{ position: "absolute", right: 55, bottom: 25 }}
            >
              <FontAwesomeIcon
                icon={"phone"}
                size={18}
                color="rgba(26, 158, 117, 1)"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ position: "absolute", right: 20, bottom: 25 }}
            >
              <FontAwesomeIcon
                icon={"diamond-turn-right"}
                size={20}
                color="rgba(26, 158, 117, 1)"
              />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={[
          styles.container2,
          {
            width: "90%",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 10,
          },
        ]}
      >
        <Text
          style={[
            styles.header,
            { color: "#393939", fontSize: 16, width: "88%" },
          ]}
        >
          Get Instant Support
        </Text>
        <Text style={[styles.text, { color: "#A0A0A0", marginTop: -10 }]}>
          Enter Your Details, Our Support Team Will Contact You Soon
        </Text>
        <TextInput
          style={[
            styles.input,
            { paddingLeft: 15, width: "100%", borderColor: "#E5E5E5" },
          ]}
          placeholder="Enter Your Vehicle Number"
        />
        <TextInput
          style={[
            styles.input,
            { paddingLeft: 15, width: "100%", borderColor: "#E5E5E5" },
          ]}
          placeholder="Add Your Current Location"
        />
        <TextInput
          style={[
            styles.input,
            {
              paddingLeft: 15,
              width: "100%",
              borderColor: "#E5E5E5",
              height: 87,
              textAlignVertical: "top",
              paddingTop: 10,
            },
          ]}
          placeholder="Your Assistance Requirements"
          numberOfLines={5}
        />
        <TouchableOpacity style={styles.button2}>
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

      <Banner />
      <Text
        style={[
          styles.header,
          {
            color: "#393939",
            fontSize: 16,
            width: "88%",
            marginTop: 5,
            marginBottom: -10,
          },
        ]}
      >
        FAQs
      </Text>
      <View style={{ width: "100%", gap: 10, alignItems: "center" }}>
        {questions.map((item, index) => (
          <Animated.View
            key={item.id}
            style={[
              styles.container2,
              {
                paddingVertical: 13,
                gap: 20,
                paddingHorizontal: 15,
                alignItems: "flex-start",
                flexDirection: "column",
                overflow: "hidden",
                width: "90%",
                height: 70,
                height: animatedHeight[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [item.height, item.maxHeight],
                }),
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => handleClick(item.id)}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text
                style={[
                  styles.text,
                  { color: "#393939", width: "90%", marginTop: 8 },
                ]}
              >
                {item.question}
              </Text>
              <FontAwesomeIcon icon={"angle-down"} style={{ marginTop: 10 }} />
            </TouchableOpacity>
            <Text style={[styles.text, { color: "#A0A0A0" }]}>
              {item.answer}
            </Text>
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Road1;

const Banner = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.bannerContainer, { paddingTop: 15 }]}
      horizontal
    >
      <LinearGradient
        colors={["#00A657", "#0BB678"]}
        start={{ x: 0.5, y: 0.0 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0.1149, 0.923]}
        style={[styles.banner, { width: 230, marginRight: 10, paddingTop: 15 }]}
      >
        <Text
          style={[
            styles.header,
            { color: "white", fontSize: 18, lineHeight: 20 },
          ]}
        >
          Experiencing a car battery drain?
        </Text>
        <Text
          style={[
            styles.text,
            { color: "white", fontSize: 10, marginBottom: 10, width: "80%" },
          ]}
        >
          We're here to assist you
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
          <View style={styles.btn}>
            <Text
              style={[
                styles.bold,
                { fontSize: 10, color: "black", paddingTop: 2 },
              ]}
            >
              Contact Now
            </Text>
          </View>
        </View>
        <Image
          style={{
            maxWidth: 68,
            maxHeight: 65,
            position: "absolute",
            right: 20,
            bottom: 20,
          }}
          source={require("../assets/images/insurance2.png")}
        />
      </LinearGradient>
      <LinearGradient
        colors={["#1B53E4", "#268AFF"]}
        start={{ x: 0.5, y: 0.0 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0.1149, 0.923]}
        style={[styles.banner, { width: 230, marginRight: 10 }]}
      >
        <Text style={[styles.header, { color: "white", fontSize: 18 }]}>
          Flat Tyre Troubles?
        </Text>
        <Text
          style={[
            styles.text,
            { color: "white", fontSize: 10, width: "60%", marginBottom: 10 },
          ]}
        >
          We are here to roll to your rescue
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
          <View style={styles.btn}>
            <Text
              style={[
                styles.bold,
                { fontSize: 10, color: "black", paddingTop: 2 },
              ]}
            >
              Contact Now
            </Text>
          </View>
          <Image
            style={{
              maxWidth: 99,
              maxHeight: 46,
              marginTop: 5,
              position: "absolute",
              right: 0,
              bottom: 5,
            }}
            source={require("../assets/images/insurance3.png")}
          />
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const Rating = ({ rating }) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <View style={{ flexDirection: "row", gap: 5, marginTop: 3 }}>
      <View style={{ flexDirection: "row" }}>
        {arr.map((item) =>
          item <= rating ? (
            <Image
              key={item}
              style={{ width: 18, height: 18 }}
              source={require("../assets/images/star.png")}
            />
          ) : (
            <Image
              key={item}
              style={{ width: 18, height: 18 }}
              source={require("../assets/images/nostar.png")}
            />
          )
        )}
      </View>
      <Text
        style={[
          styles.text,
          {
            color: "#A0A0A0",
            fontSize: 12,
            paddingTop: 1,
          },
        ]}
      >
        {`${rating}.0`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#D6D6D6",
    borderRadius: 2,
    width: 29,
    height: 4,
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 9,
    height: 40,
    paddingLeft: 35,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
  },
  search: { width: 20, height: 20, position: "absolute", left: 28 },
  modalContainer: {
    width: "100%",
    height: 300,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  button: {
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    marginTop: 25,
    width: "90%",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  imageContainer: {
    height: 65,
    width: 65,
    borderRadius: 65,
    backgroundColor: "#F0FFFA",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  container: {
    backgroundColor: "#F0FFFA",
    borderRadius: 15,
    width: "90%",
    paddingVertical: 11,
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  container2: {
    backgroundColor: "#FFF",
    paddingVertical: 20,
    borderRadius: 15,
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    elevation: 3,
  },
  banner2: {
    width: 87,
    height: 58,
    borderRadius: 8,
  },
  bannerContainer: {
    paddingLeft: "5%",
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
    width: "100%",
    alignItems: "center",
    backgroundColor: "#1A9E75",
    justifyContent: "center",
    paddingVertical: 7,
    borderRadius: 14,
  },
});
