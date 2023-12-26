import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import WheelPickerExpo from "react-native-wheel-picker-expo";

const Helmet1 = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [dateArray, setDateArray] = useState([]);
  const [hourArray, setHourArray] = useState([]);
  const [minArray, setMinArray] = useState([]);
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("helmet2");
  };
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
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{
          alignItems: "center",
          gap: 10,
          paddingTop: 15,
          paddingBottom: 80,
        }}
      >
        <View style={[styles.container, { borderRadius: 8, gap: 10 }]}>
          <View
            style={{
              height: 32,
              backgroundColor: "#1A9E75",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 18,
              flexDirection: "row",
              width: "100%",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image
                source={require("../assets/images/helmet2.png")}
                style={{ width: 22, height: 22 }}
              />
              <Text style={[styles.header, { color: "white", paddingTop: 2 }]}>
                Rent out Helmet
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
                Rent out From
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Text
                  onPress={() => setModal(true)}
                  style={[
                    styles.text,
                    {
                      color: "#393939",
                      fontSize: 12,
                      borderBottomColor: "#1A9E75",
                      borderBottomWidth: 1,
                    },
                  ]}
                >
                  Today at 00:01
                </Text>
                <FontAwesomeIcon
                  icon={"angle-down"}
                  color="#1A9E75"
                  size={13}
                />
              </View>
            </View>
            <View>
              <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
                Rent out Till
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Text
                  onPress={() => setModal2(true)}
                  style={[
                    styles.text,
                    {
                      color: "#393939",
                      fontSize: 12,
                      borderBottomColor: "#1A9E75",
                      borderBottomWidth: 1,
                    },
                  ]}
                >
                  Today at 00:01
                </Text>
                <FontAwesomeIcon
                  icon={"angle-down"}
                  color="#1A9E75"
                  size={13}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              marginBottom: 15,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                  },
                ]}
              >
                0
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#A0A0A0",
                    fontSize: 12,
                  },
                ]}
              >
                Total Duration
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
              fontSize: 16,
              width: "90%",
            },
          ]}
        >
          Delivery Address
        </Text>
        <View
          style={[
            styles.container,
            { alignItems: "flex-start", padding: 15, justifyContent: "center" },
          ]}
        >
          <Text
            style={[
              styles.header,
              {
                color: "#393939",
              },
            ]}
          >
            Krishna
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: "#A0A0A0",
                fontSize: 12,
                width: "60%",
              },
            ]}
          >
            NO.20, Anna Street, Near Water Tank, Perungudi, Chennai - 600096
          </Text>

          <View style={styles.button}>
            <Image
              source={require("../assets/images/greenedit.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text
              style={[
                styles.text,
                {
                  color: "#1A9E75",
                  fontSize: 12,
                },
              ]}
            >
              Edit
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
              fontSize: 16,
              width: "90%",
            },
          ]}
        >
          Payment Summary
        </Text>
        <View
          style={[
            styles.container,
            { backgroundColor: "#F0FFFA", paddingVertical: 15, gap: 5 },
          ]}
        >
          <View
            style={{
              width: "90%",
              justifyContent: "space-between",
              flexDirection: "row",
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
              Recharge Amount
            </Text>
            <Text
              style={{
                color: "#393939",
              }}
            >
              ₹ <Text style={[styles.text]}>250</Text>
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              justifyContent: "space-between",
              flexDirection: "row",
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
              Transaction Fee
            </Text>
            <Text
              style={{
                color: "#393939",
              }}
            >
              ₹ <Text style={[styles.text]}>20</Text>
            </Text>
          </View>
          <View style={styles.line1} />
          <View
            style={{
              width: "90%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={[
                styles.header,
                {
                  color: "#393939",
                },
              ]}
            >
              Total Amount
            </Text>
            <Text
              style={{
                color: "#393939",
              }}
            >
              ₹ <Text style={[styles.header]}>270</Text>
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
              fontSize: 16,
              width: "90%",
            },
          ]}
        >
          Personal Details
        </Text>
        <View
          style={[
            styles.container,
            { alignItems: "flex-start", padding: 15, justifyContent: "center" },
          ]}
        >
          <Text
            style={[
              styles.header,
              {
                color: "#393939",
              },
            ]}
          >
            Krishna
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: "#A0A0A0",
                fontSize: 12,
              },
            ]}
          >
            krishna501@gmail.com
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: "#A0A0A0",
                fontSize: 12,
              },
            ]}
          >
            +91 8200089270
          </Text>
          <View style={styles.button}>
            <Image
              source={require("../assets/images/greenedit.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text
              style={[
                styles.text,
                {
                  color: "#1A9E75",
                  fontSize: 12,
                },
              ]}
            >
              Edit
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
              fontSize: 16,
              width: "90%",
            },
          ]}
        >
          Vehicle Details
        </Text>
        <View
          style={[
            styles.container,
            { alignItems: "flex-start", padding: 15, justifyContent: "center" },
          ]}
        >
          <Text
            style={[
              styles.header,
              {
                color: "#393939",
              },
            ]}
          >
            TN04FD8902
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: "#A0A0A0",
                fontSize: 12,
              },
            ]}
          >
            Toyata
          </Text>

          <View style={styles.button}>
            <Image
              source={require("../assets/images/greenedit.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text
              style={[
                styles.text,
                {
                  color: "#1A9E75",
                  fontSize: 12,
                },
              ]}
            >
              Edit
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.header,
            {
              color: "#393939",
              fontSize: 16,
              width: "90%",
            },
          ]}
        >
          Cancellation Policy
        </Text>
        <Text
          style={[
            styles.text,
            {
              color: "#858585",
              fontSize: 12,
              width: "90%",
              marginTop: -10,
            },
          ]}
        >
          Cancel more than <Text style={{ color: "#1A9E75" }}>24 hrs</Text>{" "}
          before the booking starts and get a full refund less the transaction
          fee. For more details click through to our cancellation policies
        </Text>
      </ScrollView>
      <View
        style={{
          height: 63,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 25,
          backgroundColor: "white",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <Text style={{ color: "#393939", fontSize: 20 }}>
          ₹
          <Text
            style={[
              styles.header,
              {
                width: "90%",
              },
            ]}
          >
            270
          </Text>
        </Text>
        <TouchableOpacity onPress={handleNavigate} style={styles.button2}>
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
              onChange={() => {}}
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
                onChange={() => {}}
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
                onChange={() => {}}
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
              onChange={() => {}}
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
                onChange={() => {}}
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
                onChange={() => {}}
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
    </View>
  );
};

export default Helmet1;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "white",
    width: "90%",
    overflow: "hidden",
    alignItems: "center",
    elevation: 3,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  line2: {
    width: 1,
    height: 27,
    backgroundColor: "#E4E4E4",
  },
  line1: {
    width: "90%",
    height: 1,
    backgroundColor: "rgba(26, 158, 117, 0.23)",
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#1A9E75",
    paddingHorizontal: 5,
    paddingVertical: 3,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    position: "absolute",
    right: 15,
  },
  button2: {
    width: 178,
    alignItems: "center",
    backgroundColor: "#1A9E75",
    justifyContent: "center",
    paddingVertical: 7,
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
  modalContainer: {
    width: "100%",
    height: 300,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
});
