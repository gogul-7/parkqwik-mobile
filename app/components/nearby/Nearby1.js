import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const months = [
  "1 Month",
  "2 Month",
  "3 Month",
  "4 Month",
  "5 Month",
  "6 Month",
  "7 Month",
  "8 Month",
  "9 Month",
  "10 Month",
  "11 Month",
  "1 Year",
];

const Nearby1 = () => {
  const [checkout, setCheckout] = useState(false);
  const [scheme, setScheme] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [dateArray, setDateArray] = useState([]);
  const [hourArray, setHourArray] = useState([]);
  const [minArray, setMinArray] = useState([]);
  const [startDate, setStartDate] = useState({
    day: "Today",
    min: "30",
    hr: "18",
  });
  const [endtDate, setEndtDate] = useState({
    day: "Today",
    min: "30",
    hr: "19",
  });
  const [startMonthDate, setStartMonthDate] = useState("Today");
  const [duration, setDuration] = useState("");
  const navigation = useNavigation();

  const Tab = createMaterialTopTabNavigator();

  const formatDate = (date) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const newDate = new Date(date).toLocaleDateString("en-US", options);
    return newDate.slice(0, 3) + newDate.slice(4);
  };

  const generateArray = () => {
    const today = new Date();
    const dateArray = ["Today"];
    const newHours = [];
    const newMinutes = [];

    for (let i = 1; i <= 20; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const formattedDate = formatDate(nextDate);
      dateArray.push(formattedDate);
    }

    for (let i = 1; i <= 24; i++) {
      const formattedHours = i < 10 ? `0${i}` : `${i}`;
      newHours.push(formattedHours);
    }

    for (let i = 0; i <= 60; i++) {
      const formattedMinutes = i < 10 ? `0${i}` : `${i}`;
      newMinutes.push(formattedMinutes);
    }
    setDateArray(dateArray);
    setHourArray(newHours);
    setMinArray(newMinutes);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const handlePress = () => {
    navigation.navigate("nearby2");
    setCheckout(false);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <View style={{ width: "90%", justifyContent: "center" }}>
          <TextInput
            style={styles.input}
            placeholder="Enter destination or loca..."
            placeholderTextColor="white"
          />
          <Image
            style={styles.location}
            source={require("../assets/images/whitelocation.png")}
          />
          <TouchableOpacity
            onPress={() => setScheme(!scheme)}
            style={styles.slider}
          >
            <Text style={[styles.header, { color: "white", paddingTop: 2 }]}>
              {scheme ? "Monthly" : "Hourly"}
            </Text>
            <View>
              <FontAwesomeIcon icon={"angle-up"} size={10} color="white" />
              <FontAwesomeIcon icon={"angle-down"} size={10} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        {scheme ? (
          <TouchableOpacity
            onPress={() => {
              setModal3(true);
              setStartMonthDate(dateArray[1]);
            }}
            style={{
              height: 37,
              width: "90%",
              backgroundColor: "#FFF",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              marginTop: 5,
              borderRadius: 4,
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.header, { color: "#1A9E75", paddingTop: 2 }]}>
              Arrive from:{" "}
              <Text style={{ color: "#393939" }}>{startMonthDate}</Text>
            </Text>
            <FontAwesomeIcon icon={"angle-down"} color="#1A9E75" size={12} />
          </TouchableOpacity>
        ) : (
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              justifyContent: "space-between",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setModal(true);
                setStartDate({ ...startDate, day: dateArray[1] });
              }}
              style={styles.dropDown}
            >
              <Text
                style={[styles.text, { paddingTop: 2 }]}
              >{`${startDate.hr}:${startDate.min} ${startDate.day}`}</Text>
              <FontAwesomeIcon icon={"angle-down"} color="#1A9E75" size={12} />
            </TouchableOpacity>
            <FontAwesomeIcon icon={"arrow-right-long"} color="white" />
            <TouchableOpacity
              onPress={() => {
                setModal2(true);
                setEndtDate({ ...endtDate, day: dateArray[1] });
              }}
              style={styles.dropDown}
            >
              <Text
                style={[styles.text, { paddingTop: 2 }]}
              >{`${endtDate.hr}:${endtDate.min} ${endtDate.day}`}</Text>
              <FontAwesomeIcon icon={"angle-down"} color="#1A9E75" size={12} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <ImageBackground
        source={require("../assets/images/map.png")}
        style={{ flex: 1, zIndex: -3 }}
      >
        <Image
          style={{
            position: "absolute",
            height: 33,
            width: 25,
            bottom: 200,
            right: 100,
          }}
          source={require("../assets/images/redlocation.png")}
        />
        <ImageBackground
          source={require("../assets/images/base.png")}
          style={styles.base}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-evenly",
              paddingTop: 10,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/images/greyhome.png")}
              />
              <Text style={[styles.text, { color: "#989898", fontSize: 10 }]}>
                Home
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/images/greycharge.png")}
              />
              <Text style={[styles.text, { color: "#989898", fontSize: 10 }]}>
                Charge
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-evenly",
              paddingTop: 10,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/images/greyfastag.png")}
              />
              <Text style={[styles.text, { color: "#989898", fontSize: 10 }]}>
                Fastag
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/images/greybooking.png")}
              />
              <Text style={[styles.text, { color: "#989898", fontSize: 10 }]}>
                Bookings
              </Text>
            </View>
          </View>
        </ImageBackground>
        <TouchableOpacity
          onPress={() => setCheckout(true)}
          style={styles.logoContainer}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/images/logo2.png")}
          />
        </TouchableOpacity>
      </ImageBackground>
      <Modal
        isVisible={checkout}
        backdropOpacity={0.4}
        useNativeDriver
        style={styles.modal}
      >
        <View style={styles.checkout}>
          <TouchableOpacity
            onPress={() => setCheckout(false)}
            style={{
              height: 30,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <View style={styles.line1} />
          </TouchableOpacity>
          <ScrollView
            style={{ flex: 1, height: "100%" }}
            contentContainerStyle={{
              alignItems: "center",
              gap: 10,
              paddingBottom: 80,
            }}
          >
            <View style={[styles.row, { justifyContent: "space-between" }]}>
              <View style={{ gap: 2 }}>
                <Text style={[styles.header, { color: "#A0A0A0" }]}>
                  Elite Car Parking, Ramapuram
                </Text>
                <View style={styles.row}>
                  <Image
                    source={require("../assets/images/stars.png")}
                    style={{ width: 80, height: 20 }}
                  />
                  <Text
                    style={[styles.header, { color: "#A0A0A0", fontSize: 12 }]}
                  >
                    (1)
                  </Text>
                </View>
                <View style={styles.button}>
                  <Text
                    style={[
                      styles.header,
                      { color: "white", fontSize: 12, paddingTop: 3 },
                    ]}
                  >
                    RESERVABLE
                  </Text>
                </View>
              </View>
              <Image
                style={{ width: 76, height: 76, borderRadius: 10 }}
                source={require("../assets/images/ticketimage.png")}
              />
            </View>
            <View
              style={[
                styles.row,
                {
                  justifyContent: "space-evenly",
                  marginTop: 10,
                  width: "100%",
                },
              ]}
            >
              <Text style={[styles.header, { color: "#393939" }]}>
                23 Nov 23 at 15:30
              </Text>
              <FontAwesomeIcon
                icon={"arrow-right-long"}
                color="rgba(160, 160, 160, 1)"
                style={{ marginBottom: 3 }}
              />
              <Text style={[styles.header, { color: "#393939" }]}>
                23 Nov 23 at 15:30
              </Text>
            </View>
            <View
              style={[
                styles.row,
                { justifyContent: "space-evenly", marginTop: 10 },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={[styles.header, { color: "#393939" }]}>
                  2 Hours
                </Text>
                <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
                  Total Duration
                </Text>
              </View>
              <View style={styles.line2} />
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#393939" }}>
                  ₹ <Text style={[styles.header]}>250</Text>
                </Text>
                <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
                  Parking Fee
                </Text>
              </View>
              <View style={styles.line2} />
              <View style={{ alignItems: "center" }}>
                <Text style={[styles.header, { color: "#393939" }]}>
                  40 mins
                </Text>
                <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
                  To Destination
                </Text>
              </View>
            </View>
            {/* <View
              style={[
                styles.row,
                { justifyContent: "space-between", marginTop: 10 },
              ]}
            >
              <TouchableOpacity
                style={selected === "information" && styles.selectedDiv}
                onPress={() => setSelected("information")}
              >
                <Text
                  style={
                    selected === "information"
                      ? styles.selected
                      : [styles.text, { color: "#A0A0A0", fontSize: 16 }]
                  }
                >
                  Information
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={selected === "reviews" && styles.selectedDiv}
                onPress={() => setSelected("reviews")}
              >
                <Text
                  style={
                    selected === "reviews"
                      ? styles.selected
                      : [styles.text, { color: "#A0A0A0", fontSize: 16 }]
                  }
                >
                  Reviews
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={selected === "howitworks" && styles.selectedDiv}
                onPress={() => setSelected("howitworks")}
              >
                <Text
                  style={
                    selected === "howitworks"
                      ? styles.selected
                      : [styles.text, { color: "#A0A0A0", fontSize: 16 }]
                  }
                >
                  How it works
                </Text>
              </TouchableOpacity>
            </View> */}

            <View style={{ width: "100%", height: 460 }}>
              <Tab.Navigator
                initialRouteName="Item1"
                sceneContainerStyle={{
                  paddingTop: 10,
                  alignItems: "center",
                  flex: 1,
                  backgroundColor: "white",
                }}
                style={{ width: "100%" }}
                screenOptions={{
                  tabBarPressColor: "#FFF",
                  tabBarStyle: {
                    elevation: 0,
                  },
                  tabBarLabelStyle: {
                    fontSize: 15,
                    top: 10,
                    textTransform: "none",
                    fontFamily: "Poppins_400Regular",
                    width: "100%",
                    left: -5,
                  },

                  tabBarActiveTintColor: "#1A9E75",
                  tabBarInactiveTintColor: "black",
                  tabBarGap: 0,
                }}
              >
                <Tab.Screen
                  name="Item1"
                  options={{
                    tabBarLabel: "Information",

                    // tabBarIndicatorStyle: {
                    //   borderWidth: 2,
                    //   borderColor: "#1A9E75",
                    //   width: 96,
                    //   left: 15,
                    //   borderRadius: 2,
                    // },
                    tabBarIndicatorStyle: {
                      borderBottomColor: "#1A9E75",
                      borderBottomWidth: 2,
                      flex: 1,
                    },
                  }}
                  component={Information}
                />
                <Tab.Screen
                  name="Item2"
                  options={{
                    tabBarLabel: "Reviews",
                    tabBarIndicatorStyle: {
                      borderBottomColor: "#1A9E75",
                      borderBottomWidth: 2,
                      flex: 1,
                    },
                  }}
                  component={Reviews}
                />
                <Tab.Screen
                  name="Item3"
                  options={{
                    tabBarLabel: "How It Works",
                    tabBarIndicatorStyle: {
                      borderBottomColor: "#1A9E75",
                      borderBottomWidth: 2,
                      flex: 1,
                    },
                  }}
                  component={HowItWorks}
                />
              </Tab.Navigator>
            </View>
          </ScrollView>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              alignItems: "center",
              backgroundColor: "white",
              height: 70,
              paddingTop: 10,
            }}
          >
            <TouchableOpacity onPress={handlePress} style={styles.button3}>
              <Text
                style={[
                  styles.bold,
                  { fontSize: 16, color: "white", paddingTop: 3 },
                ]}
              >
                Proceed To Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={modal}
        backdropColor="#B7B7B7"
        style={{ margin: 0, justifyContent: "flex-end" }}
        useNativeDriver
        useNativeDriverForBackdrop
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => {
              setModal(false);
            }}
            style={{
              height: 30,
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFF",
            }}
          >
            <View style={styles.line} />
          </TouchableOpacity>
          <View
            style={{
              width: "82%",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#FFF",
            }}
          >
            <Text
              style={[
                styles.header,
                {
                  color: "#393939",
                  fontSize: 16,
                },
              ]}
            >
              Select start Date
            </Text>
            <Text
              style={[
                styles.header,
                {
                  color: "#393939",
                  fontSize: 16,

                  width: "25%",
                },
              ]}
            >
              Time
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "75%",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: -40,
              zIndex: -10,
            }}
          >
            <WheelPickerExpo
              height={230}
              width={100}
              selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
              initialSelectedIndex={1}
              haptics
              items={dateArray.map((name) => ({
                label: (
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Poppins_400Regular",
                      color: "#393939",
                      paddingTop: 2,
                    }}
                  >
                    {name}
                  </Text>
                ),
                value: { name },
              }))}
              onChange={({ item }) =>
                setStartDate({ ...startDate, day: item.value.name })
              }
            />

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <WheelPickerExpo
                height={230}
                width={36}
                selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
                initialSelectedIndex={5}
                haptics
                items={hourArray.map((name) => ({
                  label: (
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_400Regular",
                        color: "#393939",
                        paddingTop: 2,
                      }}
                    >
                      {name}
                    </Text>
                  ),
                  value: { name },
                }))}
                onChange={({ item }) =>
                  setStartDate({ ...startDate, hr: item.value.name })
                }
              />

              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: "#000",
                  paddingTop: 2,
                }}
              >
                :
              </Text>
              <WheelPickerExpo
                height={230}
                width={36}
                selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
                initialSelectedIndex={30}
                haptics
                items={minArray.map((name) => ({
                  label: (
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_400Regular",
                        color: "#393939",
                        paddingTop: 2,
                      }}
                    >
                      {name}
                    </Text>
                  ),
                  value: { name },
                }))}
                onChange={({ item }) =>
                  setStartDate({ ...startDate, min: item.value.name })
                }
              />
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 110,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setModal(false);
              }}
              style={styles.button4}
            >
              <Text style={[styles.bold, { fontSize: 16, color: "#FFF" }]}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={modal2}
        backdropColor="#B7B7B7"
        style={{ margin: 0, justifyContent: "flex-end" }}
        useNativeDriver
        useNativeDriverForBackdrop
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => {
              setModal2(false);
            }}
            style={{
              height: 30,
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFF",
            }}
          >
            <View style={styles.line} />
          </TouchableOpacity>
          <View
            style={{
              width: "82%",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#FFF",
            }}
          >
            <Text
              style={[
                styles.header,
                {
                  color: "#393939",
                  fontSize: 16,
                },
              ]}
            >
              Select End Date
            </Text>
            <Text
              style={[
                styles.header,
                {
                  color: "#393939",
                  fontSize: 16,
                  width: "25%",
                },
              ]}
            >
              Time
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "75%",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: -40,
              zIndex: -10,
            }}
          >
            <WheelPickerExpo
              height={230}
              width={100}
              selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
              initialSelectedIndex={1}
              haptics
              items={dateArray.map((name) => ({
                label: (
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Poppins_400Regular",
                      color: "#393939",
                      paddingTop: 2,
                    }}
                  >
                    {name}
                  </Text>
                ),
                value: { name },
              }))}
              onChange={({ item }) =>
                setEndtDate({ ...endtDate, day: item.value.name })
              }
            />

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <WheelPickerExpo
                height={230}
                width={36}
                selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
                initialSelectedIndex={6}
                haptics
                items={hourArray.map((name) => ({
                  label: (
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_400Regular",
                        color: "#393939",
                        paddingTop: 2,
                      }}
                    >
                      {name}
                    </Text>
                  ),
                  value: { name },
                }))}
                onChange={({ item }) =>
                  setEndtDate({ ...endtDate, hr: item.value.name })
                }
              />

              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: "#000",
                  paddingTop: 2,
                }}
              >
                :
              </Text>
              <WheelPickerExpo
                height={230}
                width={36}
                selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
                initialSelectedIndex={30}
                haptics
                items={minArray.map((name) => ({
                  label: (
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_400Regular",
                        color: "#393939",
                        paddingTop: 2,
                      }}
                    >
                      {name}
                    </Text>
                  ),
                  value: { name },
                }))}
                onChange={({ item }) =>
                  setEndtDate({ ...endtDate, min: item.value.name })
                }
              />
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 110,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => setModal2(false)}
              style={styles.button4}
            >
              <Text style={[styles.bold, { fontSize: 16, color: "#FFF" }]}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={modal3}
        backdropColor="#B7B7B7"
        style={{ margin: 0, justifyContent: "flex-end" }}
        useNativeDriver
        useNativeDriverForBackdrop
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => {
              setModal3(false);
            }}
            style={{
              height: 30,
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFF",
            }}
          >
            <View style={styles.line} />
          </TouchableOpacity>
          <View
            style={{
              width: "80%",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#FFF",
            }}
          >
            <Text
              style={[
                styles.header,
                {
                  color: "#393939",
                  fontSize: 16,
                },
              ]}
            >
              Select start Date
            </Text>
            <Text
              style={[
                styles.header,
                {
                  color: "#393939",
                  fontSize: 16,
                  width: "30%",
                },
              ]}
            >
              Duration
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "75%",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: -40,
              zIndex: -10,
            }}
          >
            <WheelPickerExpo
              height={230}
              width={100}
              selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
              initialSelectedIndex={1}
              haptics
              items={dateArray.map((name) => ({
                label: (
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Poppins_400Regular",
                      color: "#393939",
                      paddingTop: 2,
                    }}
                  >
                    {name}
                  </Text>
                ),
                value: { name },
              }))}
              onChange={({ item }) => setStartMonthDate(item.value.name)}
            />

            <WheelPickerExpo
              height={230}
              width={90}
              selectedStyle={{ borderColor: "#1A9E75", borderWidth: 2 }}
              initialSelectedIndex={1}
              haptics
              items={months.map((name) => ({
                label: (
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Poppins_400Regular",
                      color: "#393939",
                      paddingTop: 2,
                    }}
                  >
                    {name}
                  </Text>
                ),
                value: { name },
              }))}
              onChange={({ item }) => setDuration(item.value.name)}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 110,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => setModal3(false)}
              style={styles.button4}
            >
              <Text style={[styles.bold, { fontSize: 16, color: "#FFF" }]}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Nearby1;

const array = [
  { id: 1, name: "Kumar", desc: "Very nice day", date: "22 Nov 2023" },
  {
    id: 2,
    name: "Joy",
    desc: "2nd time parking here. Security guards were really nice and helpful.",
    date: "15 Oct 2023",
  },
  {
    id: 3,
    name: "Kavya",
    desc: "Great and easy to use. Great experience we had.",
    date: "20 Mar 2023",
  },
];

const Information = () => {
  return (
    <View style={{ width: "90%", marginTop: 10, gap: 15 }}>
      <Text style={[styles.bold, { color: "#393939" }]}>Space Features</Text>
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-between",
            width: "100%",
          },
        ]}
      >
        <View style={{ alignItems: "center", gap: 5, flex: 1 }}>
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/greencovered.png")}
          />
          <Text
            style={[
              styles.text,
              {
                color: "#393939",
                fontSize: 10,
                width: "80%",
                textAlign: "center",
              },
            ]}
          >
            Covered Parking
          </Text>
        </View>
        <View style={styles.line3} />
        <View style={{ alignItems: "center", gap: 5, flex: 1 }}>
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/greencctv.png")}
          />
          <Text style={[styles.text, { color: "#393939", fontSize: 10 }]}>
            CCTV
          </Text>
        </View>
        <View style={styles.line3} />
        <View style={{ alignItems: "center", gap: 5, flex: 1 }}>
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/greenwash2.png")}
          />
          <Text
            style={[
              styles.text,
              {
                color: "#393939",
                fontSize: 10,
                width: "80%",
                textAlign: "center",
              },
            ]}
          >
            Doorstep Car Wash
          </Text>
        </View>
        <View style={styles.line3} />
        <View style={{ alignItems: "center", gap: 5, flex: 1 }}>
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/greenevcharge.png")}
          />
          <Text style={[styles.text, { color: "#393939", fontSize: 10 }]}>
            EV Charge
          </Text>
        </View>
      </View>
      <Text style={[styles.text, { color: "#393939" }]}>
        Private 2 parking spaces in a very safe and quiet...{" "}
        <Text style={{ color: "#1A9E75" }}>See more</Text>
      </Text>
      <View style={styles.button2}>
        <Image
          style={{ width: 21, height: 26 }}
          source={require("../assets/images/360.png")}
        />
        <Text style={[styles.header, { color: "#1A9E75", paddingTop: 3 }]}>
          View Streetview
        </Text>
      </View>
      <Image
        style={{ width: "100%", height: 148, borderRadius: 10 }}
        source={require("../assets/images/ticketimage2.png")}
      />
    </View>
  );
};

const Reviews = () => {
  return (
    <View style={{ width: "90%", marginTop: 10, gap: 10 }}>
      {array.map((item) => (
        <View key={item.id} style={styles.container}>
          <View style={{ width: "75%" }}>
            <Text style={[styles.text, { color: "#393939" }]}>{item.name}</Text>
            <Text style={[styles.text, { color: "#393939", fontSize: 12 }]}>
              {item.desc}
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={require("../assets/images/stars.png")}
              style={{ width: 80, height: 20 }}
            />
            <Text style={[styles.text, { color: "#A0A0A0", fontSize: 10 }]}>
              {item.date}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const HowItWorks = () => {
  return (
    <View style={{ width: "90%", marginTop: 10, gap: 10 }}>
      <View style={[styles.row, { gap: 10 }]}>
        <View style={{ alignItems: "center", gap: 15 }}>
          <Image
            source={require("../assets/images/greenmap.png")}
            style={{ width: 38, height: 38 }}
          />
          <Image
            source={require("../assets/images/arrowdashed.png")}
            style={{ width: 10, height: 18 }}
          />
          <Image
            source={require("../assets/images/greenbell.png")}
            style={{ width: 38, height: 42 }}
          />
          <Image
            source={require("../assets/images/arrowdashed.png")}
            style={{ width: 10, height: 18 }}
          />
          <Image
            source={require("../assets/images/greenhousecar.png")}
            style={{ width: 38, height: 38 }}
          />
        </View>
        <View style={{ gap: 40 }}>
          <Text style={[styles.header, { color: "#393939" }]}>
            Once you’ve paid:
          </Text>
          <Text
            style={[
              styles.header,
              { color: "#393939", fontSize: 12, marginTop: -40 },
            ]}
          >
            You’ll receive directions to the space and information on how to
            access.
          </Text>
          <Text
            style={[
              styles.header,
              { color: "#393939", fontSize: 12, top: -10 },
            ]}
          >
            The space owner/car park is notified of your booking.
          </Text>
          <Text style={[styles.header, { color: "#393939", fontSize: 12 }]}>
            Just turn up, park your vehicle and get on with your day.
          </Text>
        </View>
      </View>
      <View>
        <Text style={[styles.header, { color: "#393939", marginTop: 10 }]}>
          Need help ?
        </Text>
        <Text style={[styles.text, { color: "#393939", fontSize: 12 }]}>
          You can read our{" "}
          <Text style={{ color: "#1A9E75" }}>Frequently Asked Questions.</Text>
        </Text>
        <Text style={[styles.text, { color: "#393939", fontSize: 12 }]}>
          If your questions remains unanswered , you can call or message our
          customer support team from the
          <Text style={{ color: "#1A9E75" }}>help screen.</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  line: {
    backgroundColor: "#D6D6D6",
    borderRadius: 2,
    width: 29,
    height: 4,
  },
  line1: { width: 30, height: 4, backgroundColor: "#D6D6D6", borderRadius: 2 },
  line2: {
    width: 1,
    height: 27,
    backgroundColor: "#E4E4E4",
  },
  line3: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderBottomColor: "#1A9E75",
    width: 22,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    justifyContent: "space-between",
    elevation: 2,
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00C62C",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: 100,
    marginTop: 10,
  },
  button2: {
    width: "100%",
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#F0FFFA",
    borderWidth: 1,
    borderColor: "#1A9E75",
    borderRadius: 8,
  },
  button3: {
    width: "90%",
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A9E75",
    borderRadius: 14,
  },
  button4: {
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    marginTop: 25,
    width: "90%",
  },
  checkout: {
    width: "100%",
    height: "92%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    gap: 10,
  },
  headerContainer: {
    height: 174,
    paddingTop: 50,
    backgroundColor: "#1A9E75",
    gap: 15,
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 43,
    backgroundColor: "rgba(255, 255, 255, .4)",
    borderRadius: 4,
    paddingLeft: 35,
    fontFamily: "Poppins_400Regular",
    paddingTop: 3,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  location: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 10,
  },
  slider: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    paddingHorizontal: 7,
    gap: 3,
    position: "absolute",
    right: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  selected: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#1A9E75",
  },
  selectedDiv: {
    borderBottomWidth: 3,
    borderBottomColor: "#1A9E75",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  dropDown: {
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
    minWidth: 120,
  },
  base: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 63,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  modalContainer: {
    width: "100%",
    height: 300,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
});
