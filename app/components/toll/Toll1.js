import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Data from "../assets/images/data.png";
import Locat from "../assets/images/greenlocation.png";
import Cir from "../assets/images/cir.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// fontFamily : "Poppins_400Regular",
// fontFamily : "Poppins_500Medium",
// fontFamily : "Poppins_600SemiBold",

const styles = StyleSheet.create({
  main1: {
    backgroundColor: "white",
    height: 1000,
  },
  tamil1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -45,
    zIndex: 1,
    left: 100,
  },
  location1: {
    width: 15,
    height: 20,
    resizeMode: "stretch",
    marginRight: 5,
    // backgroundColor : "red"
  },
  tamil1Text: {
    fontSize: 12,
    fontWeight: "500",
    color: "white",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 8,
    paddingHorizontal: 15,
    // paddingVertical: 10,
    width: 297,
    //   marginLeft : 20,
    height: 40,
  },

  inputContainerS: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 8,
    paddingHorizontal: 15,
    // paddingVertical: 10,
    width: 318,
    marginLeft: 15,
    height: 40,
  },

  inputContainerSCir: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: 'lightgrey',
    // borderRadius: 8,
    paddingHorizontal: 15,
    // paddingVertical: 10,
    width: 318,
    marginLeft: 15,
    height: 40,
  },

  inputContainerUpload: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1A9E75",
    borderRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 130,
    marginLeft: 20,
    backgroundColor: "#F0FFFA",
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: "black",
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium"
    // fontFamily : "Poppins_600SemiBold"
  },

  tamil1Text1: {
    fontSize: 16,
    fontWeight: "500",
    // marginLeft : 20,
    // marginTop : 20,
    marginBottom: 10,
    // fontFamily : "Poppins_400Regular"
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold"
  },

  tamil1Text1S: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 15,
    // marginTop : 20,
    marginBottom: 10,
    // fontFamily : "Poppins_400Regular"
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold"
  },

  tamil1Text1ST: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10,
    // fontFamily : "Poppins_400Regular"
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold"
  },

  tamil1Text1STsub: {
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 30,
    marginTop: 10,
    // marginBottom : 10,
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium"
    // fontFamily : "Poppins_600SemiBold"
  },

  inputContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 5,
    borderColor: "rgb(250 250 250)",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 320,
    marginLeft: 20,
    height: 70,
    backgroundColor: "white",
  },

  searchIcon1: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },

  inputContainer3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginTop :
  },

  searchIcon2: {
    width: 35,
    height: 25,
    resizeMode: "stretch",
  },
  inputContainer3Text: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium"
    // fontFamily : "Poppins_600SemiBold"
  },
  searchIconTan: {
    width: 40,
    height: 40,
    resizeMode: "stretch",
    marginRight: 10,
  },
  searchIconTan1: {
    width: 40,
    height: 40,
    resizeMode: "stretch",
    marginLeft: 10,
  },
  tamil1Text2: {
    fontSize: 12,
    fontWeight: "500",
  },

  searchIconUpload: {
    color: "#1A9E75",
    // fontFamily : "Poppins_400Regular"
    // fontFamily : "Poppins_500Medium"
    fontFamily: "Poppins_600SemiBold",
  },

  backButton: {
    // color: "rgb(5,166,90)",
    fontSize: 10,
    borderWidth: 1,
    borderColor: "rgb(5,166,90)",
    borderRadius: 15,
    paddingHorizontal: 1,
    paddingVertical: 5,
    width: 330,
    textAlign: "center",
    backgroundColor: "#1A9E75",
    marginTop: 40,
    marginLeft: 15,
    height: 41,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 41,
  },

  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    // fontFamily : "Poppins_400Regular"
    // fontFamily : "Poppins_500Medium"
    fontFamily: "Poppins_600SemiBold",
  },

  nextScreen5: {
    width: 328,
    height: 200,
    marginLeft: 15,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 8, // Adjust the border radius as needed
    padding: 10, // Adjust the padding as needed
    shadowColor: "rgba(0, 0, 0, 0.6)", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android elevation for shadow
    backgroundColor: "white",
  },
  searchIcon2Locat: {
    width: 14,
    height: 14,
    resizeMode: "stretch",
    left: -5,
  },

  searchIcon2LocatData: {
    width: 20,
    height: 20,
    resizeMode: "stretch",
    left: 140,
    top: 10,
  },

  searchIcon2LocatLocat1: {
    width: 20,
    height: 20,
    resizeMode: "stretch",
  },
  searchIcon2LocatLocat1Cir: {
    width: 20,
    height: 20,
    resizeMode: "stretch",
    marginRight: 15,
  },

  searchIcon2LocatLocat1CirText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    // fontFamily : "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold",
  },
});

const Toll1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // The effect logic will be triggered when the button is pressed
  }, [navigation]); // Adding navigation to the dependency array

  return (
    <ScrollView contentContainerStyle={styles.main1}>
      <View style={styles.nextScreen5}>
        <Text style={styles.tamil1Text1}>From</Text>

        <View style={styles.inputContainer}>
          <Image
            source={Locat} // Replace with your search icon image
            style={styles.searchIcon2Locat}
          />

          <TextInput
            placeholder="Enter starting point"
            style={styles.input}
            placeholderTextColor="gray"
          />
        </View>

        <Image
          source={Data} // Replace with your search icon image
          style={styles.searchIcon2LocatData}
        />

        <Text style={styles.tamil1Text1}>To</Text>

        <View style={styles.inputContainer}>
          <Image
            source={Locat} // Replace with your search icon image
            style={styles.searchIcon2Locat}
          />
          <TextInput
            placeholder="Enter destination"
            style={styles.input}
            placeholderTextColor="gray"
          />
        </View>
      </View>

      <Text style={styles.tamil1Text1S}>Vehicle Type</Text>

      <View style={styles.inputContainerS}>
        <TextInput
          placeholder="Select your vehicle type"
          style={styles.input}
          placeholderTextColor="gray"
        />

        <FontAwesomeIcon icon={"angle-down"} />
      </View>

      <Text style={styles.tamil1Text1STsub}>Car/Jeep/Van</Text>
      <Text style={styles.tamil1Text1STsub}>LCV</Text>
      <Text style={styles.tamil1Text1STsub}>Bus/Truck</Text>
      <Text style={styles.tamil1Text1STsub}>HCM/EME</Text>

      <Text style={styles.tamil1Text1ST}>Trip Type</Text>

      <View style={styles.inputContainerSCir}>
        <Image
          source={Cir} // Replace with your search icon image
          style={styles.searchIcon2LocatLocat1Cir}
        />

        <Text style={styles.searchIcon2LocatLocat1CirText}>One Way</Text>
      </View>

      <View style={styles.inputContainerSCir}>
        <Image
          source={Cir} // Replace with your search icon image
          style={styles.searchIcon2LocatLocat1Cir}
        />

        <Text style={styles.searchIcon2LocatLocat1CirText}>Return</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("toll2")}
      >
        <Text style={styles.title}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Toll1;
