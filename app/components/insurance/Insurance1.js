import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  useWindowDimensions,
  Animated,
} from "react-native";
import { React, useEffect, useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const details = [
  {
    id: 1,
    question: "Why do I need car insurance?",
    answer:
      "Car insurance offers financial protection for accidents, theft, or vehicle damage and is often legally mandated, requiring at least basic liability coverage in many places.",
    height: 65,
    maxHeight: 180,
  },
  {
    id: 2,
    question: "What does car insurance typically cover?",
    answer:
      "Car insurance typically covers liability (bodily injury and property damage), collision, comprehensive (non-collision incidents like theft), and uninsured/underinsured motorist incidents.",
    height: 80,
    maxHeight: 200,
  },

  {
    id: 3,
    question:
      "Is it necessary to notify my insurance company if I modify my car?",
    answer:
      "Modifications can impact coverage; inform your insurer to ensure your policy reflects your vehicle's current state accurately.",
    height: 80,
    maxHeight: 180,
  },

  ,
];

const Insurance1 = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("car");
  const [isOpen, setIsOpen] = useState([]);
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

  const handleButton = (value) => {
    setSelected(value);
  };

  const handleNavigate = () => {
    navigation.navigate("insurance3");
  };

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "white",
        paddingTop: 20,
        gap: 15,
        alignItems: "center",
        paddingBottom: 30,
      }}
    >
      <Slider />
      <View style={[styles.container, { paddingTop: 55, paddingBottom: 20 }]}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleButton("car")}
            style={
              selected === "car"
                ? [
                    styles.button,
                    styles.selected,
                    { borderBottomRightRadius: 0, borderTopRightRadius: 0 },
                  ]
                : [
                    styles.button,
                    { borderBottomRightRadius: 0, borderTopRightRadius: 0 },
                  ]
            }
          >
            <Image
              style={{
                maxWidth: 20,
                maxHeight: 20,
              }}
              source={require("../assets/images/car8.png")}
            />
            <Text style={[styles.bold, { color: "#393939", paddingTop: 4 }]}>
              Car
            </Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            onPress={() => handleButton("bike")}
            style={
              selected === "bike"
                ? [styles.button, styles.selected, { borderRadius: 0 }]
                : [styles.button, { borderRadius: 0 }]
            }
          >
            <Image
              style={{
                maxWidth: 20,
                maxHeight: 20,
              }}
              source={require("../assets/images/bike3.png")}
            />
            <Text style={[styles.bold, { color: "#393939", paddingTop: 4 }]}>
              Bike
            </Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            onPress={() => handleButton("auto")}
            style={
              selected === "auto"
                ? [
                    styles.button,
                    styles.selected,
                    { borderBottomLeftRadius: 0, borderTopLeftRadius: 0 },
                  ]
                : [styles.button]
            }
          >
            <Image
              style={{
                maxWidth: 20,
                maxHeight: 20,
              }}
              source={require("../assets/images/auto2.png")}
            />
            <Text style={[styles.bold, { color: "#393939", paddingTop: 4 }]}>
              Auto
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Enter Your Vehicle Number"
          placeholderTextColor={"#AFAFAF"}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button2} onPress={handleNavigate}>
          <Text
            style={[
              styles.bold,
              { color: "white", paddingTop: 4, fontSize: 16 },
            ]}
          >
            View Quotes
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.container,
          { backgroundColor: "#F0FFFA", flexDirection: "row", padding: 15 },
        ]}
      >
        <Image
          style={{
            maxWidth: 30,
            maxHeight: 19,
          }}
          source={require("../assets/images/greeninsure2.png")}
        />
        <Text style={[styles.text, { color: "#393939", paddingTop: 4 }]}>
          Renew Your Vehicle Insurance
        </Text>
        <FontAwesomeIcon
          icon={"angle-right"}
          color="#1A9E75"
          style={{ position: "absolute", right: 15 }}
        />
      </View>
      <Text
        style={[
          styles.header,
          {
            color: "#393939",
            fontSize: 16,
            width: "90%",
            marginTop: 5,
            marginBottom: -5,
          },
        ]}
      >
        FAQs
      </Text>
      <View style={{ width: "100%", gap: 10, alignItems: "center" }}>
        {details.map((item, index) => (
          <Animated.View
            key={item.id}
            style={[
              styles.container,
              {
                paddingVertical: 15,
                paddingHorizontal: 15,
                alignItems: "flex-start",
                overflow: "hidden",
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
                  { color: "#393939", width: "88%", marginTop: 5 },
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

export default Insurance1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center",
    borderRadius: 15,
    elevation: 2,
    width: "90%",
    overflow: "hidden",
    gap: 15,
  },
  line: {
    height: 19,
    width: 1,
    backgroundColor: "#E4E4E4",
  },
  buttonContainer: {
    width: "100%",
    height: 41,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    position: "absolute",
    top: 0,
  },
  button: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    borderRadius: 15,
  },
  selected: {
    backgroundColor: "#F0FFFA",
  },
  input: {
    width: "90%",
    height: 39,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "Poppins_400Regular",
    paddingLeft: 15,
    paddingTop: 2,
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    width: "90%",
    paddingVertical: 5,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  bannerContainer: {
    paddingLeft: "5%",
  },
  banner: {
    width: "90%",
    height: 130,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
});

const Slider = () => {
  const { width } = useWindowDimensions();

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal pagingEnabled>
      <View style={{ width, alignItems: "center" }}>
        <LinearGradient
          colors={["#DD7BFF", "#C440F4"]}
          start={{ x: 0.85, y: 1.0 }}
          end={{ x: 0.15, y: 0.0 }}
          locations={[0.1761, 0.8652]}
          style={[styles.banner]}
        >
          <Text
            style={[
              styles.header,
              { color: "white", fontSize: 18, width: "90%", lineHeight: 22 },
            ]}
          >
            Get Your Car Insurance Today!
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: "white",
                fontSize: 12,
                marginBottom: 8,
                width: "80%",
              },
            ]}
          >
            Starting @ ₹ 799/month*
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
                  { paddingTop: 2, fontSize: 10, color: "black" },
                ]}
              >
                View Plan
              </Text>
            </View>
          </View>
          <Image
            style={{
              maxWidth: 194,
              maxHeight: 129,
              position: "absolute",
              right: -8,
              bottom: 0,
            }}
            source={require("../assets/images/photo1.png")}
          />
        </LinearGradient>
      </View>
      <View style={{ width, alignItems: "center" }}>
        <LinearGradient
          colors={["#FFC27B", "#F48B40"]}
          start={{ x: 0.85, y: 1.0 }}
          end={{ x: 0.15, y: 0.0 }}
          locations={[0.1761, 0.8652]}
          style={styles.banner}
        >
          <Text
            style={[
              styles.header,
              { color: "white", fontSize: 18, width: "80%", lineHeight: 22 },
            ]}
          >
            Get Your Bike Insured Today!
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: "white",
                fontSize: 12,
                marginBottom: 8,
                width: "80%",
              },
            ]}
          >
            Starting @ ₹ 299/month*
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
                  { paddingTop: 2, fontSize: 10, color: "black" },
                ]}
              >
                View Plan
              </Text>
            </View>
          </View>
          <Image
            style={{
              maxWidth: 100,
              maxHeight: 105,
              position: "absolute",
              right: 10,
              bottom: 10,
            }}
            source={require("../assets/images/photo2.png")}
          />
        </LinearGradient>
      </View>
      <View style={{ width, alignItems: "center" }}>
        <LinearGradient
          colors={["#7B90FF", "#4047F4"]}
          start={{ x: 0.85, y: 1.0 }}
          end={{ x: 0.15, y: 0.0 }}
          locations={[0.1761, 0.8652]}
          style={styles.banner}
        >
          <Text
            style={[
              styles.header,
              { color: "white", fontSize: 18, width: "80%", lineHeight: 22 },
            ]}
          >
            Drive Assured, Drive Insured!
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: "white",
                fontSize: 12,
                marginBottom: 8,
                width: "80%",
              },
            ]}
          >
            Starting @ ₹ 499/month*
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
                  { paddingTop: 2, fontSize: 10, color: "black" },
                ]}
              >
                View Plan
              </Text>
            </View>
          </View>
          <Image
            style={{
              maxWidth: 124,
              maxHeight: 81,
              position: "absolute",
              right: 10,
              bottom: 10,
            }}
            source={require("../assets/images/photo3.png")}
          />
        </LinearGradient>
      </View>
    </ScrollView>
  );
};
