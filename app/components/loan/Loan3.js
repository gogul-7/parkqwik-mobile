import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Loan3 = () => {
  const navigation = useNavigation();

  const [toggle, setToggle] = useState(false);

  const handlePress = () => {
    navigation.navigate("loan4");
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={[styles.text, { color: "#1B9D76", fontSize: 20 }]}>
          ₹ 9000
        </Text>
        <Text style={[styles.text, { color: "#8E8E8E", fontSize: 14 }]}>
          Due Date:
          <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
            {" "}
            12 Sep 23
          </Text>
        </Text>
        <Pressable
          onPress={() => setToggle(true)}
          style={{
            gap: 5,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text
            style={[
              styles.text,
              {
                color: "#1B9D76",
                fontSize: 12,
              },
            ]}
          >
            More Info
          </Text>
          <FontAwesomeIcon size={13} color="#1B9D76" icon={"angle-down"} />
        </Pressable>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Pressable onPress={handlePress} style={styles.button}>
          <Text style={[styles.text, { color: "white" }]}>Continue</Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={[styles.text, { fontSize: 12, marginTop: 4 }]}>
            Secured by Bharat BillPay
          </Text>
          <Image
            style={{ width: 48, height: 24 }}
            source={require("../assets/images/bps.png")}
          />
        </View>
      </View>
      {toggle && <MoreDetails setToggle={setToggle} />}
    </View>
  );
};

const MoreDetails = ({ setToggle }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.backdrop, { width, height: height }]}>
      <View style={styles.moreContainer}>
        <View style={[styles.textContainer, { marginBottom: 15 }]}>
          <Text style={[styles.text, { fontSize: 18 }]}>Loan Details</Text>
          <Pressable
            onPress={() => setToggle(false)}
            //   style={{ width: "100%", height: 30, alignItems: "center" }}
          >
            <FontAwesomeIcon icon={"circle-xmark"} color="#1A9E75" size={22} />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Name</Text>
          <Text style={styles.text}>Krishna K</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Loan Number</Text>
          <Text style={styles.text}>L9876MNO5432</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Loan Amount</Text>
          <Text style={styles.text}>₹ 30,000</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Interest Rate</Text>
          <Text style={styles.text}>20%</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Tenure</Text>
          <Text style={styles.text}>6 Months</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Total Installments</Text>
          <Text style={[styles.text, { width: "50%", textAlign: "right" }]}>
            6
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20,
    flex: 1,
  },
  card: {
    backgroundColor: "#e3e1e1",
    height: 170,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: 28,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  button: {
    width: "90%",
    height: 40,
    marginTop: 30,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  moreContainer: {
    height: 420,
    paddingTop: 20,
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    padding: 8,
    gap: 8,
  },
  textContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: { fontFamily: "Poppins_400Regular", color: "#A0A0A0", fontSize: 14 },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(72, 72, 72, 0.83)",
    position: "absolute",
    top: -100,
    zIndex: 5,
    justifyContent: "flex-end",
  },
  line: {
    width: 30,
    height: 3,
    backgroundColor: "#D6D6D6",
    borderRadius: 2,
  },
});

export default Loan3;
