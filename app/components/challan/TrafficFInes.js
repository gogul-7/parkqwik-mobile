import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Animated,
  Pressable,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const details = [
  { id: 1, title: "Violation of general traffic rules", fine: "500" },
  { id: 2, title: "Violation of road regulations", fine: "500" },
  { id: 3, title: "Traveling without ticket", fine: "200 to 500" },
  { id: 4, title: "Disobeying orders of traffic police", fine: "2000" },
  {
    id: 5,
    title: "Driving without valid Registration Certificate",
    fine: "5000",
  },
  { id: 6, title: "Driving without valid Driving License", fine: "5000" },
  { id: 7, title: "Driving without valid car insurance policy", fine: "2000" },
  { id: 8, title: "Driving with expired /suspended license", fine: "10,000" },
  { id: 9, title: "Driving oversized vehicles", fine: "5000" },
  { id: 10, title: "Rash driving", fine: "5000", upto: true },
  { id: 11, title: "Drunken driving", fine: "10,000", upto: true },
  { id: 12, title: "Using a mobile phone while driving", fine: "1000 to 2000" },
  { id: 13, title: "Drag racing", fine: "10,000" },
  { id: 14, title: "Overloading of passengers", fine: "1000" },
  { id: 15, title: "Not wearing seat belt", fine: "1000" },
  { id: 16, title: "Blocking emergency vehicles", fine: "10,000" },
  { id: 17, title: "Overloading of passengers", fine: "1000" },
  {
    id: 18,
    title: "Overspeeding",
    fine: "1000",
    more: "Rs. 1000 for Light Motor Vehicles (LMV) , Rs. 2000 for Medium Sized Vehicles ",
  },
  {
    id: 19,
    title: "Riding a two-wheeler with more than two persons",
    fine: "2000",
    more: "Rs. 2000 with license suspension for 3 months",
  },
  {
    id: 20,
    title: "Riding without helmet",
    fine: "2000",
    more: "Rs. 2000 with license suspension for 3 months",
  },
  {
    id: 21,
    title: "Violations by juveniles",
    fine: "25,000",
    more: "Rs. 25,000 with 3 year imprisonment & cancellation of vehicle registration",
  },
  {
    id: 22,
    title: "Violation of license conditions",
    fine: "25,000",
    more: "Rs. 25,000 to Rs. 1,00,000",
  },
  {
    id: 23,
    title: "Excessive pollution by car",
    fine: "1000",
    more: "For first offence Rs. 1000, For repeat offence Rs.2000",
  },
];

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Arunachal Pradesh",
  "Assam",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Sikkim",
  "Tripura",
  "Jammu and Kashmir",
  "Ladakh",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

const TrafficFInes = () => {
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
    }).start();
  };

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        paddingBottom: 30,
        paddingTop: 15,
      }}
    >
      <SelectDropdown
        data={states}
        defaultButtonText="Select your state"
        buttonStyle={styles.dropdown}
        buttonTextStyle={[
          styles.text,
          {
            fontSize: 14,
            color: "#A0A0A0",
            textAlign: "left",
            flex: 0.7,
            marginTop: 3,
          },
        ]}
        renderDropdownIcon={() => {
          return <FontAwesomeIcon icon="caret-down" color="#1A9E75" />;
        }}
      />
      <View style={[styles.container, { backgroundColor: "#F0FFFA", gap: 15 }]}>
        <Image
          style={{ width: 25, height: 35 }}
          source={require("../assets/images/greentraffic.png")}
        />
        <View>
          <Text style={[styles.text, { fontSize: 16 }]}>
            Traffic fines in Tamil Nadu
          </Text>
          <Text style={[styles.text, { fontSize: 8, marginTop: -5 }]}>
            List of traffic fines as per Motor Vehicle (Amendment) Act
          </Text>
        </View>
      </View>
      {details.map((item, index) =>
        item.more ? (
          <Animated.View
            key={item.id}
            style={[
              styles.container,
              {
                flexDirection: "column",
                overflow: "hidden",
                height: animatedHeight[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [70, 130],
                }),
              },
            ]}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
              }}
            >
              <Text style={[styles.text, { width: "63%" }]}>{item.title}</Text>
              <Pressable
                onPress={() => item.more && handleClick(item.id)}
                style={styles.amount}
              >
                {item.upto ? (
                  <Text>
                    Up to{"  "}
                    <Text style={{ color: "#1A9E75" }}>
                      ₹ <Text style={styles.text}>{item.fine}</Text>
                    </Text>
                  </Text>
                ) : (
                  <Text style={{ color: "#1A9E75" }}>
                    ₹ <Text style={styles.text}>{item.fine}</Text>
                  </Text>
                )}
                {item.more && <FontAwesomeIcon icon={"angle-down"} size={12} />}
              </Pressable>
            </View>
            {item.more && (
              <Text
                style={[
                  styles.text,
                  {
                    color: "#A0A0A0",
                    textAlign: "center",
                    width: "95%",
                    marginTop: 10,
                  },
                ]}
              >
                {item.more}
              </Text>
            )}
          </Animated.View>
        ) : (
          <View
            key={item.id}
            style={[
              styles.container,
              {
                flexDirection: "column",
                overflow: "hidden",
              },
            ]}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
              }}
            >
              <Text style={[styles.text, { width: "63%" }]}>{item.title}</Text>
              <Pressable
                onPress={() => item.more && handleClick(item.id)}
                style={styles.amount}
              >
                {item.upto ? (
                  <Text>
                    Up to{"  "}
                    <Text style={{ color: "#1A9E75" }}>
                      ₹ <Text style={styles.text}>{item.fine}</Text>
                    </Text>
                  </Text>
                ) : (
                  <Text style={{ color: "#1A9E75" }}>
                    ₹ <Text style={styles.text}>{item.fine}</Text>
                  </Text>
                )}
                {item.more && <FontAwesomeIcon icon={"angle-down"} size={12} />}
              </Pressable>
            </View>
          </View>
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    minHeight: 60,
    alignItems: "center",
  },
  amount: {
    height: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    borderLeftColor: "#E4E4E4",
    borderLeftWidth: 1,
    gap: 5,
  },
  dropdown: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#A0A0A0",
    height: 40,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    marginTop: 2,
  },
});

export default TrafficFInes;
