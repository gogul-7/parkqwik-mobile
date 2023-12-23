import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import Tan1 from "../assets/images/whitelocation.png";

// fontFamily : "Poppins_400Regular"
// fontFamily : "Poppins_500Medium"
// fontFamily : "Poppins_600SemiBold"

import Map1 from "../assets/images/map1.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Toll2 = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    // The effect logic will be triggered when the button is pressed
  }, [navigation]); // Adding navigation to the dependency array

  return (
    <ScrollView>
      <ImageBackground source={Map1} resizeMode="cover" style={styles.main1}>
        <View>
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
              <Text>Modal has been closed</Text>;
            }}
          >
            <SafeAreaView style={styles.modal}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!isModalVisible);
                  }}
                >
                  <FontAwesomeIcon icon={"circle-xmark"} color="#1A9E75" />
                </TouchableOpacity>
              </View>
              <Text style={styles.content2Text2Model}>Tolls In Between</Text>

              <View style={styles.ModelMini}>
                <Text style={styles.ModelMiniText}>Srikakulam Toll Plaza</Text>

                <Text style={styles.ModelMiniText1}>₹75</Text>
              </View>

              <View style={styles.ModelMini}>
                <Text style={styles.ModelMiniText}>Renigunta Toll Plaza</Text>

                <Text style={styles.ModelMiniText1}>₹85</Text>
              </View>

              <View style={styles.ModelMini}>
                <Text style={styles.ModelMiniTextG}>Total Amount</Text>

                <Text style={styles.ModelMiniText1G}>₹160</Text>
              </View>

              <TouchableOpacity
                style={styles.backButton1}
                onPress={() => {
                  setModalVisible(!isModalVisible);
                }}
              >
                <Text style={styles.title}>Close</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </Modal>
        </View>

        <View style={styles.inputContainer}>
          <Image source={Tan1} style={styles.searchIcon} />
          <TextInput
            placeholder="Tirupati"
            placeholderTextColor="#FFFFFF"
            style={styles.searchIconTextInput}
          />
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            setModalVisible(!isModalVisible);
          }}
        >
          <Text style={styles.title}>Estimate</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ModelMini: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    // marginTop : 20
  },
  searchIconTextInput: {
    fontSize: 14,
    width: 200,
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium"
    // fontFamily : "Poppins_600SemiBold"
  },

  main1: {
    backgroundColor: "white",
    height: 800,
    // zIndex : 1
  },

  ModelMiniButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: 150,
    height: 40,
    borderRadius: 15,
    borderColor: "#1A9E75",
  },

  ModelMiniButton1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: 150,
    height: 40,
    borderRadius: 15,
    borderColor: "#1A9E75",
    backgroundColor: "#1A9E75",
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
    //   borderWidth: 1,
    //   borderColor: 'lightgrey',
    borderRadius: 4,
    paddingHorizontal: 15,
    // paddingVertical: 10,
    width: 328,
    marginLeft: 15,
    //   marginTop : 20,
    height: 43,
    fontFamily: "Poppins_400Regular",
    backgroundColor: "white",
    opacity: 0.5,
    top: 65,
    // fontFamily : "Poppins_500Medium"
    // fontFamily : "Poppins_600SemiBold"
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
  },

  tamil1Text1: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: -50,
    marginBottom: 20,
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
    height: 80,
    // marginTop : -70,
    backgroundColor: "white",
    position: "relative",
    top: -105,
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
    marginTop: 5,
  },

  searchIcon2: {
    width: 30,
    height: 20,
    resizeMode: "stretch",
  },
  inputContainer3Text: {
    fontSize: 10,
  },
  searchIconTan: {
    width: 30,
    height: 30,
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
    fontSize: 15,
    fontWeight: "500",
    color: "black",
  },

  main1Text1: {
    color: "#A0A0A0",
    fontSize: 10,
    fontWeight: "500",
  },

  main1Text2: {
    color: "rgb(5,166,90)",
    fontSize: 10,
    borderWidth: 1,
    borderColor: "rgb(5,166,90)",
    borderRadius: 20,
    paddingHorizontal: 1,
    paddingVertical: 5,
    width: 70,
    textAlign: "center",
    marginLeft: 15,
  },
  main1Text3: {
    fontSize: 9,
    marginLeft: 25,
    color: "#A0A0A0",
    marginTop: 5,
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
    //  marginTop : 310,
    marginLeft: 15,
    top: 670,
  },

  backButton1: {
    // color: "rgb(5,166,90)",
    fontSize: 10,
    borderWidth: 1,
    borderColor: "rgb(5,166,90)",
    borderRadius: 15,
    paddingHorizontal: 1,
    paddingVertical: 5,
    width: 317,
    textAlign: "center",
    backgroundColor: "#1A9E75",
    marginTop: 10,
    //  marginLeft :15,
    //  top: 670
  },

  title: {
    color: "white",
    textAlign: "center",
    // fontWeight: "500",
    fontSize: 16,
    // fontFamily : "Poppins_400Regular"
    // fontFamily : "Poppins_500Medium"
    fontFamily: "Poppins_600SemiBold",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: 120,
    paddingHorizontal: 15,
    marginTop: -40,
    // backgroundColor : "red",
    zIndex: -2,
  },
  tabBarItem: {
    // flex: 1,
    // alignItems: 'center',
  },
  tabBarItemText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "black",
  },
  content: {
    // marginLeft : 20,
    backgroundColor: "white",
    height: 100,
  },

  content1: {
    display: "flex",
    // alignItems: 'center',
    justifyContent: "center",

    width: 310,
    // height:220,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 8, // Adjust the border radius as needed
    padding: 10, // Adjust the padding as needed
    shadowColor: "rgba(0, 0, 0, 0.6)", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android elevation for shadow
    backgroundColor: "white",
    marginTop: 10,
  },
  content2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  content2Text1: {
    color: "#8E8E8E",
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium"
    // fontFamily : "Poppins_600SemiBold"
  },

  content2Text1Model: {
    color: "#8E8E8E",
    fontSize: 12,
    marginTop: 10,
    fontFamily: "Poppins_400Regular",
    // fontFamily : "Poppins_500Medium"
    // fontFamily : "Poppins_600SemiBold"
  },

  content2Text2: {
    fontSize: 12,
    color: "black",
    // fontWeight : "500",
    marginTop: 11,
    // fontFamily : "Poppins_400Regular"
    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold"

    // padding :10
  },

  content2Text2Model: {
    fontSize: 18,
    color: "black",
    // fontWeight : "500",
    // marginTop : -15,
    // fontFamily : "Poppins_400Regular"
    fontFamily: "Poppins_500Medium",
    top: -25,
    // fontFamily : "Poppins_600SemiBold"

    // padding :10
  },

  content2Text3: {
    // marginLeft : 200,
    fontSize: 20,
    color: "black",
    fontWeight: "500",
  },

  content2Text2Image: {
    resizeMode: "stretch",
    width: 30,
    height: 30,
  },

  content2Text2ImageTan2: {
    resizeMode: "stretch",
    width: 25,
    height: 25,
    marginLeft: 30,
  },

  content2Text2ImageTan2Model: {
    resizeMode: "stretch",
    width: 25,
    height: 25,
    // marginLeft : 30
    left: -10,
  },

  ModelMiniText: {
    // color : "#1A9E75",
    fontFamily: "Poppins_400Regular",
    fontSize: 14,

    // fontFamily : "Poppins_500Medium"
    // fontFamily : "Poppins_600SemiBold"

    // fontWeight : "500"
  },

  ModelMiniText1: {
    // color : "#1A9E75",
    // fontFamily : "Poppins_400Regular",
    fontSize: 16,

    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold"

    // fontWeight : "500"
  },

  ModelMiniTextG: {
    color: "#00A638",
    // fontFamily : "Poppins_400Regular",
    fontSize: 16,

    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold"

    // fontWeight : "500"
  },

  ModelMiniText1G: {
    color: "#00A638",
    // fontFamily : "Poppins_400Regular",
    fontSize: 20,

    fontFamily: "Poppins_500Medium",
    // fontFamily : "Poppins_600SemiBold"

    // fontWeight : "500"
  },

  content2Text2ImageTan3: {
    resizeMode: "stretch",
    width: 30,
    height: 30,
  },

  content2Text2ImageTan3Model: {
    resizeMode: "stretch",
    width: 30,
    height: 30,
    left: -5,
  },

  content3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    // marginTop : 10
  },

  content2Text4: {
    color: "#1A9E75",
  },

  modal: {
    padding: 20,
    height: "30%",
    backgroundColor: "white",
    width: "100%",
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    top: "70%",
  },
});

export default Toll2;
