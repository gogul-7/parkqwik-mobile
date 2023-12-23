import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Modal,
} from "react-native";
import { React, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import Pencil from "../assets/logos/greenedit.png";

import Sha4 from "../assets/logos/sha4.png";

// fontFamily : "Poppins_400Regular"
// fontFamily : "Poppins_500Medium"
// fontFamily : "Poppins_600SemiBold"

const Shop4 = () => {
  const navigation = useNavigation();
  useEffect(() => {}, [navigation]);
  return (
    <SafeAreaView
      style={{ backgroundColor: "white", width: "100%", height: "100%" }}
    >
      <ScrollView>
        <View style={styles.checkP}>
          <View style={styles.checkPPP}>
            <Image source={Sha4} style={styles.Sha4} />
          </View>

          <View style={styles.checkPPP}>
            <Text style={styles.checkConText1}>
              Car Air Freshener, Long - Lasting, Spill - {"\n"}Proof, Rich Irish
              Cocktail (45g)
            </Text>

            <Text style={styles.checkConText}>
              {" "}
              ₹399
              <Text style={styles.checkConText1}> ₹340 </Text>
              <Text style={styles.checkConText2}> </Text>
              <Text style={styles.checkConText3}> 15% off</Text>
            </Text>

            <View style={styles.checkConText3GR}>
              <View style={styles.checkConText3GR1}>
                <Text style={styles.checkConText3GR2}>+</Text>
              </View>

              <View style={styles.checkConText3GR1KK}>
                <Text style={styles.checkConText3GR2KK}> 1 </Text>
              </View>

              <View style={styles.checkConText3GR1}>
                <Text style={styles.checkConText3GR2}>-</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.tamil1Text1}>Payment Summary</Text>

        <View style={styles.check3}>
          <View style={styles.checkConcheck3}>
            <Text style={styles.checkConTextcheck3}>Renting Fee</Text>

            <Text style={styles.checkConTextcheck3}>₹40</Text>
          </View>

          <View style={styles.checkConcheck3}>
            <Text style={styles.checkConTextcheck3}>Transaction Fee</Text>

            <Text style={styles.checkConTextcheck3}>₹4</Text>
          </View>

          <View style={styles.checkConcheck3stick}></View>

          <View style={styles.checkConcheck3}>
            <Text style={styles.checkConTextcheck3T}>Total Amount</Text>

            <Text style={styles.checkConTextcheck3T}>₹44</Text>
          </View>
        </View>

        <Text style={styles.tamil1Text1}>Delivery Address</Text>

        <View style={styles.check}>
          <View style={styles.checkCon}>
            <Text style={styles.checkConText}>
              <Text style={styles.checkConTextM}>Merlin</Text>
              {"\n"}NO.20, Anna Street, {"\n"}
              Near Water Tank, Perungudi, {"\n"}
              Chennai - 600096
            </Text>

            <View style={styles.pencilContainer}>
              <Image source={Pencil} style={styles.pencilContainerImage} />
              <Text style={styles.pencilContainerText}>Edit</Text>
            </View>
          </View>
        </View>

        <Text style={styles.tamil1Text1}>Cancellation Policy</Text>

        <Text style={styles.tamil1Text1Pol}>
          Cancel more than{" "}
          <Text style={styles.tamil1Text1PolGreen}>24 hrs</Text> before the
          booking starts{"\n"}
          and get a full refund less the transaction fee. For{"\n"}
          more details click through to our cancellation policies
        </Text>

        <View style={styles.check4}>
          <View style={styles.checkConcheck4}>
            <Text style={styles.checkConTextcheck4}>₹44</Text>

            <TouchableOpacity style={styles.backButton}>
              <Text style={styles.title}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop4;

const styles = StyleSheet.create({
  checkConText3GR: {
    display: "flex",
    flexDirection: "row",
    // justifyContent : "space-evenly",
    alignItems: "center",
    top: 15,
    left: 170,
  },

  checkConText3GR1KK: {
    // fontFamily : "Poppins_500Medium",

    marginLeft: 5,
    marginRight: 5,
    // width :5
  },

  checkConText3GR2KK: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#1A9E75",
  },

  checkConcheck4: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  checkPPP: {
    marginTop: 25,
  },

  checkConTextM: {
    // fontFamily : "Poppins_400Regular",
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 14,
    color: "#393939",
  },

  modalFlexTT: {
    fontFamily: "Poppins_400Regular",
    //    fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 14,
    color: "#A0A0A0",

    borderBottomColor: "#1A9E75",
    borderBottomWidth: 1,
  },

  modalFlexTTTT: {
    fontFamily: "Poppins_400Regular",
    //    fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 14,
    color: "#A0A0A0",

    borderTopColor: "#1A9E75",
    borderTopWidth: 1,
  },

  checkConText3GR1: {
    width: 20,
    height: 20,
    backgroundColor: "#1A9E75",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },

  modalFlexT: {
    // fontFamily : "Poppins_400Regular",
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 16,
    color: "#393939",
  },

  modalFlexTTT: {
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 14,
    color: "#393939",
  },

  modalFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },

  modalFlexTOP: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },

  modalFlex22: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 50,
    // marginTop: 10
  },

  modalFlex11: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
  },

  modal: {
    padding: 20,
    height: "40%",
    backgroundColor: "white",
    width: "100%",
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    top: "60%",
  },

  checkConTextcheck4: {
    // fontFamily : "Poppins_400Regular",
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 20,
    color: "#393939",
  },

  backButton: {
    // color: "rgb(5,166,90)",
    fontSize: 10,
    borderWidth: 1,
    borderColor: "rgb(5,166,90)",
    borderRadius: 15,
    paddingHorizontal: 1,
    paddingVertical: 5,
    width: 178,
    textAlign: "center",
    backgroundColor: "#1A9E75",
    //  marginTop : 310,
    marginLeft: 15,
    height: 41,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    textAlign: "center",
    // fontWeight: "500",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  checkConTextcheck3: {
    // fontSize: 14

    fontFamily: "Poppins_400Regular",
    //   fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 14,
    color: "#393939",
  },

  tamil1Text1PolGreen: {
    fontFamily: "Poppins_400Regular",
    //   fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 12,
    color: "#1A9E75",
  },

  checkConTextcheck3T: {
    // fontSize: 14

    //   fontFamily : "Poppins_400Regular",
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 14,
    color: "#393939",
  },

  banner: {
    height: 162,
    width: 328,
    // backgroundColor:'#27CD99',
    // left:20,
    // borderRadius:15,
    padding: 15,
    // marginTop : 10,
    marginLeft: 15,
  },

  checkCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  checkConText: {
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 12,
    color: "#A0A0A0",
    // left: 20,
    // top: -3
  },

  check: {
    width: 328,
    height: 111,
    marginLeft: 15,
    marginTop: -10,
    marginBottom: 10,
    borderRadius: 8, // Adjust the border radius as needed
    padding: 10, // Adjust the padding as needed
    shadowColor: "rgba(0, 0, 0, 0.6)", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android elevation for shadow
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center"
  },

  checkP: {
    width: 328,
    height: 147,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8, // Adjust the border radius as needed
    padding: 10, // Adjust the padding as needed
    shadowColor: "rgba(0, 0, 0, 0.6)", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android elevation for shadow
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // alignItems : "center"
  },

  checkPP: {
    width: 328,
    height: 91,
    marginLeft: 15,
    marginTop: -10,
    marginBottom: 10,
    borderRadius: 8, // Adjust the border radius as needed
    padding: 10, // Adjust the padding as needed
    shadowColor: "rgba(0, 0, 0, 0.6)", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android elevation for shadow
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center"
  },

  checkVV: {
    width: 328,
    height: 70,
    marginLeft: 15,
    marginTop: -10,
    marginBottom: 10,
    borderRadius: 8, // Adjust the border radius as needed
    padding: 10, // Adjust the padding as needed
    shadowColor: "rgba(0, 0, 0, 0.6)", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android elevation for shadow
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center"
  },

  checkConText3GR2: {
    color: "white",
    fontSize: 10,
    // fontFamily : "Poppins_400Regular",
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",
  },

  check4: {
    width: 360,
    height: 63,
    // marginLeft:15,
    marginTop: 10,
    // marginBottom : 10,
    // borderRadius: 8, // Adjust the border radius as needed
    padding: 10, // Adjust the padding as needed
    shadowColor: "rgba(0, 0, 0, 0.6)", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android elevation for shadow
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center"
  },

  check3: {
    width: 328,
    height: 118,
    marginLeft: 15,
    marginTop: -10,
    marginBottom: 10,
    borderRadius: 8, // Adjust the border radius as needed
    padding: 10, // Adjust the padding as needed
    shadowColor: "rgba(0, 0, 0, 0.6)", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android elevation for shadow
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center"
  },

  check1: {
    width: 328,
    height: 65,
    marginLeft: 15,
    marginTop: -10,
    marginBottom: 10,
    borderRadius: 8, // Adjust the border radius as needed
    padding: 10, // Adjust the padding as needed
    shadowColor: "rgba(0, 0, 0, 0.6)", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android elevation for shadow
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center"
  },

  hel2Container: {
    display: "flex",
    flexDirection: "row",
  },

  hel2: {
    width: 22,
    height: 22,
    resizeMode: "stretch",
    left: 10,
  },

  hel2Text: {
    // fontFamily : "Poppins_400Regular",
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 14,
    color: "#FFFFFF",
    left: 20,
    top: -3,
  },

  hel2MainC: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // left: -20
  },

  hel2Rent: {
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 12,
    color: "#A0A0A0",
    // left: 20,
    // top: -3
  },

  hel2Rent0: {
    // fontFamily : "Poppins_400Regular",
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 12,
    color: "#393939",
    textAlign: "center",

    // left: 20,
    // top: -3
  },

  hel2Rentt: {
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 12,
    color: "#A0A0A0",
    textAlign: "center",
    // left: 20,
    // top: -3
  },

  hel2Arr: {
    width: 10,
    height: 10,
    resizeMode: "stretch",
  },

  hel2Expand: {
    width: 18,
    height: 18,
    resizeMode: "stretch",
    left: 85,
    top: -20,
  },

  tamil1Text1: {
    fontSize: 16,
    // fontWeight : "500",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
    fontFamily: "Poppins_500Medium",
  },

  tamil1Text1Pol: {
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 12,
    color: "#858585",

    marginLeft: 20,
    marginTop: -20,
    marginBottom: 20,
  },

  hel2CC: {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 10,
  },

  hel2Today: {
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 12,
    color: "#393939",
    borderBottomColor: "#1A9E75",
    borderBottomWidth: 1,
    // left: 20,
    // top: -3
  },

  hel2Today1: {
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 12,
    color: "#393939",
    borderBottomColor: "green",
    borderBottomWidth: 0,
    // left: 20,
    // top: -3
  },

  checkConImage: {
    width: 24,
    height: 24,
    resizeMode: "stretch",
  },

  checkConImageGpay: {
    width: 32,
    height: 32,
    resizeMode: "stretch",
    marginRight: 10,
  },

  checkConTextGpay: {
    fontSize: 14,

    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    // fontSize: 12,
    color: "#393939",
  },

  pencilContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "#1A9E75",
    width: 50,
    height: 24,
    borderRadius: 5,
  },

  pencilContainerImage: {
    width: 12,
    height: 12,
    resizeMode: "stretch",
  },

  pencilContainerText: {
    fontSize: 12,

    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    // fontSize: 12,
    color: "#1A9E75",
  },

  checkConcheck3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems : "center"
  },

  checkConcheck3stick: {
    width: 310,
    height: 1,
    backgroundColor: "#1A9E75",
    marginTop: 7,
    marginBottom: 7,
  },

  backButton1: {
    // color: "rgb(5,166,90)",
    fontSize: 10,
    borderWidth: 1,
    borderColor: "rgb(5,166,90)",
    borderRadius: 15,
    paddingHorizontal: 1,
    paddingVertical: 5,
    width: 300,
    textAlign: "center",
    backgroundColor: "#1A9E75",
    marginTop: 30,
    marginLeft: 10,
    height: 41,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title1: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,

    fontFamily: "Poppins_600SemiBold",
  },

  checkConText1: {
    // fontFamily : "Poppins_400Regular",
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 12,
    color: "black",
    marginLeft: 15,
    // top: -3
  },

  checkConText: {
    // fontFamily : "Poppins_400Regular",
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 12,
    color: "#A0A0A0",
    // left: 20,
    // top: -3
  },

  checkConText2: {
    width: 3,
    height: 15,
    backgroundColor: "#A0A0A0",
    left: 10,
  },

  checkConText3: {
    // fontFamily : "Poppins_400Regular",
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 12,
    color: "#00A638",
    marginLeft: 15,
    // top: -3
  },

  Sha4: {
    width: 68,
    height: 68,
    resizeMode: "stretch",
    top: -5,
  },
});
