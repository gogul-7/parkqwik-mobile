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

import Hel3 from "../assets/logos/star1.png";
import Hel4 from "../assets/logos/star2.png";

import Sha1 from "../assets/logos/sha1.png";
import Sha2 from "../assets/logos/sha2.png";
import Sha3 from "../assets/logos/sha3.png";
import Sha4 from "../assets/logos/sha4.png";
import Sha5 from "../assets/logos/sha5.png";
import Sha6 from "../assets/logos/sha6.png";
import Sha7 from "../assets/logos/sha7.png";
import Sha8 from "../assets/logos/sha8.png";

// fontFamily : "Poppins_400Regular"
// fontFamily : "Poppins_500Medium"
// fontFamily : "Poppins_600SemiBold"

const Shop3 = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  useEffect(() => {}, [navigation]);
  return (
    <View style={styles.main1}>
      <Image source={Sha1} style={styles.hel2} />

      <ScrollView>
        <View style={styles.hel2Container}>
          <Image source={Sha4} style={styles.Sha4} />
          <Image source={Sha2} style={styles.Sha2} />
          <Image source={Sha3} style={styles.Sha3} />
          <Image source={Sha8} style={styles.Sha8} />
        </View>

        <View style={styles.checkCon}>
          <Text style={styles.checkConText}>Godrej</Text>

          <View style={styles.checkCon1}>
            <Image source={Hel3} style={styles.checkConImage} />
            <Image source={Hel3} style={styles.checkConImage} />
            <Image source={Hel3} style={styles.checkConImage} />
            <Image source={Hel3} style={styles.checkConImage} />
            <Image source={Hel4} style={styles.checkConImage} />
          </View>
        </View>

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

        <View style={styles.line}></View>

        <Text style={styles.tamil1Text1}>Product Details</Text>

        <View style={styles.check3}>
          <View style={styles.checkConcheck3}>
            <Text style={styles.checkConTextcheck3}>Scent</Text>

            <Text style={styles.checkConTextcheck34}>Rich Irish Cocktail</Text>
          </View>

          <View style={styles.checkConcheck3}>
            <Text style={styles.checkConTextcheck3}>Color</Text>

            <Text style={styles.checkConTextcheck34}>Purple</Text>
          </View>

          <View style={styles.checkConcheck3}>
            <Text style={styles.checkConTextcheck3}>Item Form</Text>

            <Text style={styles.checkConTextcheck34}>Gel</Text>
          </View>

          <View style={styles.checkConcheck3}>
            <Text style={styles.checkConTextcheck3}>Power Source</Text>

            <Text style={styles.checkConTextcheck34}>Non - Powdered</Text>
          </View>
        </View>

        <Text style={styles.tamil1Text1sub}>
          EASY TO USE: Versatile twist mechanism to turn {"\n"}on/off and
          control fragrance intensity
        </Text>

        <Text style={styles.tamil1Text1sub}>
          LONG-LASTING: Clever gel technology that keeps {"\n"}the car fragrant
          for up to 60 days
        </Text>

        <Text style={styles.tamil1Text1sub}>
          ZERO SPILL: Spill-proof car fragrance that allows one {"\n"}to take on
          the bumpy roads
        </Text>

        <View style={styles.line}></View>

        <Text style={styles.tamil1Text1}>Product Details</Text>

        <View style={styles.check}>
          <Text style={styles.tamil1Text1Pol}>Enter Pincode</Text>
          <Text style={styles.tamil1Text1PolGreen}>Check</Text>
        </View>

        <View style={styles.line}></View>

        <View style={styles.check1}>
          <View style={styles.ShaC}>
            <Image source={Sha5} style={styles.Sha5} />

            <Text style={styles.tamil1Text1PolG}>Free Delivery</Text>
          </View>

          <View style={styles.ShaC}>
            <Image source={Sha6} style={styles.Sha6} />

            <Text style={styles.tamil1Text1PolG}>Cash On Delivery</Text>
          </View>

          <View style={styles.ShaC}>
            <Image source={Sha7} style={styles.Sha7} />

            <Text style={styles.tamil1Text1PolG}>Secure Transaction</Text>
          </View>
        </View>

        <View style={styles.check4}>
          <View style={styles.checkConcheck4}>
            <Text style={styles.checkConTextcheck4}>₹340</Text>

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate("shop4")}
            >
              <Text style={styles.title}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Shop3;

const styles = StyleSheet.create({
  checkConcheck4: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  line: {
    width: 360,
    height: 3,
    backgroundColor: "#F5F4F4",
    marginTop: 10,
    // marginBottom : 20
  },

  Sha4: {
    width: 169,
    height: 169,
    resizeMode: "stretch",
  },

  Sha2: {
    width: 24,
    height: 24,
    resizeMode: "stretch",
    left: 140,
    top: -170,
  },

  Sha5: {
    width: 35,
    height: 35,
    resizeMode: "stretch",
  },

  Sha6: {
    width: 35,
    height: 35,
    resizeMode: "stretch",
  },

  Sha7: {
    width: 35,
    height: 35,
    resizeMode: "stretch",
  },

  Sha8: {
    width: 33,
    height: 5,
    resizeMode: "stretch",
  },

  Sha3: {
    width: 24,
    height: 24,
    resizeMode: "stretch",
    left: 140,
    top: -150,
  },

  tamil1Text1PolG: {
    fontFamily: "Poppins_400Regular",
    //    fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 10,
    color: "#1A9E75",
  },

  ShaC: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  main1: {
    backgroundColor: "white",
    // height : 1400,
    zIndex: 1,
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

  tamil1Text1sub: {
    fontFamily: "Poppins_400Regular",
    //    fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 12,
    color: "#A0A0A0",
    marginLeft: 15,
    marginBottom: 5,
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
    width: 110,
  },

  checkConTextcheck34: {
    // fontSize: 14

    fontFamily: "Poppins_400Regular",
    //   fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 14,
    color: "#A0A0A0",
  },

  tamil1Text1PolGreen: {
    // fontFamily : "Poppins_400Regular",
    //   fontFamily : "Poppins_500Medium",
    fontFamily: "Poppins_600SemiBold",

    fontSize: 14,
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
    // justifyContent:"space-around",
    // alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
  },

  checkCon1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 190,

    // marginTop : 10,
    // marginBottom : 5
  },

  checkConText: {
    // fontFamily : "Poppins_400Regular",
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 14,
    color: "#A0A0A0",
    // left: 20,
    // top: -3
  },

  checkConText1: {
    // fontFamily : "Poppins_400Regular",
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 14,
    color: "black",
    marginLeft: 15,
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

    fontSize: 14,
    color: "#00A638",
    marginLeft: 15,
    // top: -3
  },

  check: {
    width: 311,
    height: 40,
    marginLeft: 20,
    marginTop: -10,
    marginBottom: 20,
    borderRadius: 8, // Adjust the border radius as needed
    padding: 10, // Adjust the padding as needed
    shadowColor: "rgba(0, 0, 0, 0.6)", // Shadow color
    shadowOffset: { width: 0, height: -1 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 10, // Shadow radius
    elevation: 5, // Android elevation for shadow
    // shadowColor: 'rgba(199, 199, 199, 0.10)',
    // shadowOffset: { width: 0, height: -1 },
    // shadowOpacity: 1,
    // shadowRadius: 10,
    // elevation: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  check4: {
    width: 360,
    height: 63,
    // marginLeft:15,
    marginTop: 10,
    marginBottom: 30,
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
    // width:328,
    // height:118,
    marginLeft: 15,
    marginTop: -10,
    // marginBottom : 10,
    // borderRadius: 8, // Adjust the border radius as needed
    // padding: 10, // Adjust the padding as needed
    // shadowColor: 'rgba(0, 0, 0, 0.6)', // Shadow color
    // shadowOffset: { width: 0, height: 2 }, // Shadow offset
    // shadowOpacity: 1, // Shadow opacity
    // shadowRadius: 4, // Shadow radius
    // elevation: 5, // Android elevation for shadow
    // backgroundColor : "white",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center"
  },

  check1: {
    // marginLeft:15,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  hel2Container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "row",
    // backgroundColor : "red"
  },

  hel2: {
    width: 24,
    height: 24,
    resizeMode: "stretch",
    top: -40,
    //  backgroundColor : "red",
    left: 310,
    //  zIndex : 1
    // left: 10,
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
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 20,
    fontFamily: "Poppins_500Medium",
  },

  tamil1Text1Pol: {
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",

    fontSize: 14,
    color: "#858585",

    // marginLeft : 20,
    // marginTop : -20,
    // marginBottom : 20,
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
    width: 16,
    height: 16,
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
    // justifyContent : "space-between",
    alignItems: "center",
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
});
