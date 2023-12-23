import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Nearby2 = () => {
  return (
    <View
      style={{
        alignItems: "center",
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
            <Text style={[styles.header, { color: "white", paddingTop: 2 }]}>
              Elite Car Parking
            </Text>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image
                source={require("../assets/images/whitelocation.png")}
                style={{ width: 15, height: 18 }}
              />
              <Text style={[styles.header, { color: "white", paddingTop: 2 }]}>
                Ramapuram
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
                Parking from
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Text
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
                  Today at 15:30
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
                Parking Until
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Text
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
                  Today at 18:30
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
                2 Hours
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
            <View style={styles.line2} />
            <View style={{ alignItems: "center" }}>
              <View
                style={{ flexDirection: "row", gap: 2, alignItems: "center" }}
              >
                <Image
                  style={{ width: 14, height: 14 }}
                  source={require("../assets/images/blackdirection.png")}
                />
                <Text
                  style={[
                    styles.header,
                    {
                      color: "#393939",
                      paddingTop: 2,
                    },
                  ]}
                >
                  40 mins
                </Text>
              </View>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#A0A0A0",
                    fontSize: 12,
                  },
                ]}
              >
                To Destination
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
        <View style={styles.button2}>
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
        </View>
      </View>
    </View>
  );
};

export default Nearby2;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "white",
    width: "90%",
    overflow: "hidden",
    alignItems: "center",
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
});
