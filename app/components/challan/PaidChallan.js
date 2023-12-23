import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";

const PaidChallan = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ImageBackground
          style={styles.card}
          source={require("../assets/images/cardbg.png")}
        >
          <View
            style={{
              width: "88%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
                Vehicle Number
              </Text>
              <Text style={[styles.text, { color: "#1A9E75" }]}>TN01B5230</Text>
              <Text
                style={[
                  styles.text,
                  { color: "#A0A0A0", fontSize: 12, marginTop: 10 },
                ]}
              >
                Due Date
              </Text>
              <Text style={[styles.text, { color: "#1A9E75" }]}>
                20 Sep 2023
              </Text>
            </View>
            <View style={{ alignItems: "flex-end", marginTop: 15 }}>
              <Text style={[styles.text, { color: "#1A9E75", fontSize: 15 }]}>
                ₹ 200
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Text style={[styles.text, { fontSize: 13 }]}>Obstruction</Text>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 9,
                      backgroundColor: "#64D51F",
                      height: 15,
                      color: "white",
                      borderRadius: 5,
                      paddingHorizontal: 3,
                    },
                  ]}
                >
                  Paid
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  marginTop: 10,
                }}
              >
                <Pressable
                  onPress={() => setToggle(true)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Text
                    style={[styles.text, { color: "#1A9E75", fontSize: 12 }]}
                  >
                    More Info
                  </Text>
                  <FontAwesomeIcon
                    icon="chevron-down"
                    size={7}
                    color="#1A9E75"
                  />
                </Pressable>
              </View>
            </View>
          </View>

          <View style={styles.border}></View>
          <ImageBackground
            style={styles.tag}
            source={require("../assets/images/greentag.png")}
          >
            <Text
              style={[
                styles.text,
                { color: "white", fontSize: 10, marginTop: 2 },
              ]}
            >
              TN246972306251330123
            </Text>
          </ImageBackground>
        </ImageBackground>
      </View>
      {toggle && <MoreDetails setToggle={setToggle} />}
    </View>
  );
};

const MoreDetails = ({ setToggle }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.backdrop, { width, height }]}>
      <View style={styles.moreContainer}>
        <Pressable
          onPress={() => setToggle(false)}
          style={{ width: "100%", height: 30, alignItems: "center" }}
        >
          <View style={styles.line}></View>
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Vehicle Number</Text>
          <Text style={styles.text}>TN01B5230</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Challan Number</Text>
          <Text style={styles.text}>TN246972306251330123</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Violater Name</Text>
          <Text style={styles.text}>RAJKUMAR</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Received On</Text>
          <Text style={styles.text}>20-06-2023</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Due Date</Text>
          <Text style={styles.text}>20-09-2023</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Offences</Text>
          <Text style={styles.text}>Obstruction</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Challan Amount</Text>
          <Text style={[styles.text, { fontSize: 16, color: "#1A9E75" }]}>
            ₹ 600
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 15,
  },
  content: {
    width: "95%",
  },
  card: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  border: {
    borderLeftWidth: 1,
    borderColor: "#A0A0A0",
    borderStyle: "dashed",
    position: "absolute",
    height: "60%",
    width: 1,
  },
  tag: {
    position: "absolute",
    right: 0,
    top: 9,
    width: 134,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A9E75",
    height: 25,
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(72, 72, 72, 0.83)",
    position: "absolute",
    top: -100,
    zIndex: 5,
    justifyContent: "flex-end",
  },
  moreContainer: {
    height: 330,
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    padding: 8,
    gap: 8,
  },
  text1: { fontFamily: "Poppins_400Regular", color: "#A0A0A0", fontSize: 14 },
  line: {
    width: 30,
    height: 3,
    backgroundColor: "#D6D6D6",
    borderRadius: 2,
  },
  textContainer: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default PaidChallan;
