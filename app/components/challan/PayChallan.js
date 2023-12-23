import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-virtualized-view";
import { useNavigation } from "@react-navigation/native";

const countries = ["India", "Egypt", "Canada", "Australia", "Ireland"];

const faqs = [
  { id: 1, question: "What is a traffic challan ?", answer: "" },
  {
    id: 2,
    question: "Can I contest or dispute a traffic challan?",
    answer: "",
  },
  { id: 3, question: "How can I avoid future traffic challans ?", answer: "" },
  {
    id: 4,
    question: "How can I download or print a copy of my challan receipt?",
    answer: "",
  },
];

const PayChallan = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("challan2");
  };

  const handleSelect = (item) => {
    if (item === "India") navigation.navigate("challan5");
  };

  return (
    <ScrollView>
      <View style={{ alignItems: "center", padding: 15, gap: 20 }}>
        <View style={styles.container}>
          <Text style={[styles.text, { fontSize: 16 }]}>Check Challan</Text>
          <Text
            style={[
              styles.text,
              { color: "#A0A0A0", fontSize: 13, width: "90%" },
            ]}
          >
            Enter your vehicle number and check your challans
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Vehicle Number"
              placeholderTextColor="#1A9E75"
            />
            <Pressable onPress={handlePress} style={styles.button}>
              <Text style={[styles.text, { color: "white", fontSize: 13 }]}>
                Check
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={{ width: "100%", gap: 10 }}>
          <Text style={[styles.text, { fontSize: 16 }]}>How it works?</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", width: "30%" }}>
              <View style={styles.circle}>
                <Image
                  style={{ width: 50, height: 20 }}
                  source={require("../assets/images/greenlicense.png")}
                />
              </View>
              <Text style={[styles.text, { fontSize: 14 }]}>Step 1</Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#A0A0A0",
                    fontSize: 10,
                    width: "90%",
                    textAlign: "center",
                  },
                ]}
              >
                Enter your vehicle number
              </Text>
            </View>
            <FontAwesomeIcon
              style={{ marginBottom: 50 }}
              icon="arrow-right-long"
              size={20}
              color="#1A9E75"
            />
            <View style={{ alignItems: "center", width: "30%" }}>
              <View style={styles.circle}>
                <Image
                  style={{ width: 32, height: 40 }}
                  source={require("../assets/images/greendocument.png")}
                />
              </View>
              <Text style={[styles.text, { fontSize: 14 }]}>Step 2</Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#A0A0A0",
                    fontSize: 10,
                    width: "90%",
                    textAlign: "center",
                  },
                ]}
              >
                Check Your Challans
              </Text>
            </View>
            <FontAwesomeIcon
              style={{ marginBottom: 50 }}
              icon="arrow-right-long"
              size={20}
              color="#1A9E75"
            />
            <View
              style={{
                alignItems: "center",
                width: "30%",
                justifyContent: "flex-start",
              }}
            >
              <View style={styles.circle}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../assets/images/greenpayment.png")}
                />
              </View>
              <Text style={[styles.text, { fontSize: 14 }]}>Step 3</Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#A0A0A0",
                    fontSize: 10,
                    width: "60%",
                    textAlign: "center",
                  },
                ]}
              >
                Make Payment
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={[styles.text, { fontSize: 16 }]}>Traffic Fines</Text>
          <Text
            style={[
              styles.text,
              { color: "#A0A0A0", fontSize: 13, width: "90%" },
            ]}
          >
            Select your state to see traffic fines
          </Text>
          <SelectDropdown
            onSelect={handleSelect}
            data={countries}
            defaultButtonText="Select your country"
            buttonStyle={styles.dropdown}
            buttonTextStyle={[
              styles.text,
              {
                fontSize: 14,
                color: "#AFAFAF",
                textAlign: "left",
                flex: 0.7,
                marginTop: 3,
              },
            ]}
            renderDropdownIcon={() => {
              return <FontAwesomeIcon icon="caret-down" color="#1A9E75" />;
            }}
          />
        </View>
        <LinearGradient
          colors={["#0BC189", "#27CD99"]}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.gradient}
        >
          <Text style={[styles.text, { color: "#FBFF29", fontSize: 14 }]}>
            Invite your friends to make hassle-free
          </Text>
          <Text style={[styles.text, { color: "white", fontSize: 17 }]}>
            Challan Payments
          </Text>
          <Text style={[styles.text, { color: "white", fontSize: 10 }]}>
            Pay using UPI, Debit & Credit Cards
          </Text>
          <View style={styles.buttonSmall}>
            <Text style={[styles.text, { fontSize: 10 }]}>Invite Now</Text>
          </View>
          <Image
            style={styles.image}
            source={require("../assets/images/michand.png")}
          />
        </LinearGradient>
        <View style={{ width: "95%", gap: 15 }}>
          <Text style={[styles.text, { fontSize: 16 }]}>FAQs</Text>
          <View style={{ width: "100%", gap: 10 }}>
            {faqs.map((item) => (
              <View
                key={item.id}
                style={[
                  styles.container,
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[styles.text, { fontSize: 12 }]}>
                  {item.question}
                </Text>
                <FontAwesomeIcon icon={"chevron-down"} size={13} />
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    gap: 5,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  input: {
    borderColor: "#1A9E75",
    height: 45,
    flex: 1,
    paddingLeft: 10,
    borderRadius: 8,
    backgroundColor: "#F0FFFA",
    borderWidth: 1,
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A9E75",
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: "#F0FFFA",
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#A0A0A0",
    height: 40,
  },
  gradient: {
    width: "100%",
    height: 140,
    borderRadius: 15,
    padding: 15,
    overflow: "hidden",
  },
  buttonSmall: {
    backgroundColor: "white",
    width: 80,
    height: 30,
    padding: 5,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export default PayChallan;
