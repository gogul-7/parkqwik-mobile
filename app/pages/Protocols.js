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
  { id: 1, title: "General", fine: "100" },
  { id: 2, title: "Rules of road regulation violation", fine: "100" },
  { id: 3, title: "Disobedience of authorities orders", fine: "500" },
  {
    id: 4,
    title: "Unauthorized use of vehicles without license",
    fine: "1000",
  },
  {
    id: 5,
    title: "Driving without license",
    fine: "5000",
  },
  { id: 6, title: "Oversize vehicles", fine: "New" },
  { id: 7, title: "Over Speeding", fine: "400" },
  { id: 8, title: "Rash driving", fine: "1000" },
  { id: 9, title: "Drunken driving", fine: "2000" },
  { id: 10, title: "Speeding / Racing", fine: "5000" },
  { id: 11, title: "Vehicle without permit", fine: "5000", upto: true },
  { id: 12, title: "Aggregators", fine: "New" },
  {
    id: 13,
    title: "Overloading of passengers",
    fine: "2000",
    more: "Rs. 2000 and Rs.1000 per extra tonne",
  },
  { id: 14, title: "Seat belt", fine: "100" },
  { id: 15, title: "Overloading two wheelers", fine: "100" },
  { id: 16, title: "Helmets", fine: "100" },
  { id: 17, title: "Not providing way for emergency vehicles", fine: "New" },
  {
    id: 18,
    title: "Driving without Insurance",
    fine: "1000",
  },
  {
    id: 19,
    title: "Offences by Juveniles",
    fine: "New",
  },
  {
    id: 20,
    title: "Power of offices to impound documents",
    fine: "New",
  },
  {
    id: 21,
    title: "Offences committed by enforcing authorities",
    fine: "New",
  },
  {
    id: 22,
    title: "PUC Violation",
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

const Protocols = () => {
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
              <Text style={[styles.text, { width: "63%", color: "#393939" }]}>
                {item.title}
              </Text>
              <Pressable
                onPress={() => item.more && handleClick(item.id)}
                style={styles.amount}
              >
                {item.upto ? (
                  <Text>
                    Up to{"  "}
                    <Text style={{ color: "#1A9E75", fontWeight: 500 }}>
                      ₹ <Text style={styles.bold}>{item.fine}</Text>
                    </Text>
                  </Text>
                ) : (
                  <Text style={{ color: "#1A9E75", fontWeight: 500 }}>
                    ₹ <Text style={styles.bold}>{item.fine}</Text>
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
                {item.fine === "New" ? (
                  <Text style={{ color: "#1A9E75", fontWeight: 500 }}>
                    <Text style={styles.bold}>New</Text>
                  </Text>
                ) : item.upto ? (
                  <Text>
                    Up to{"  "}
                    <Text style={{ color: "#1A9E75", fontWeight: 500 }}>
                      ₹ <Text style={styles.bold}>{item.fine}</Text>
                    </Text>
                  </Text>
                ) : (
                  <Text style={{ color: "#1A9E75", fontWeight: 500 }}>
                    ₹ <Text style={styles.bold}>{item.fine}</Text>
                  </Text>
                )}
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
  bold: {
    fontFamily: "Poppins_500Medium",
  },
});

export default Protocols;
