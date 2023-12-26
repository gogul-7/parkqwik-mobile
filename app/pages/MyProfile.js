import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { RadioButton } from "react-native-paper";
import DatePicker from "react-native-modern-datepicker";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const MyProfile = () => {
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const [alert, setAlert] = useState(false);
  const [border, setBorder] = useState({
    input1: "#E5E5E5",
    input2: "#E5E5E5",
    input3: "#E5E5E5",
  });
  const navigation = useNavigation();

  const [toggle, setToggle] = useState(false);
  const today = new Date();
  const maxDOB = new Date(today);
  maxDOB.setFullYear(maxDOB.getFullYear() - 100);

  const defaultDOB = new Date(today);
  defaultDOB.setFullYear(defaultDOB.getFullYear() - 6);
  const [selectedDOB, setSelectedDOB] = useState(
    defaultDOB.toLocaleDateString("en-IN")
  );

  const handleChangeDOB = (dob) => {
    setSelectedDOB(dob.toLocaleDateString("en-IN"));
  };

  const handleOnPressDOB = () => {
    setSelectedDOB(defaultDOB.toLocaleDateString("en-IN"));
    setToggle(true);
  };

  console.log(selectedDOB);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleChangeText = (text, n) => {
    if (text.length == 0) {
      setBorder({ ...border, [n]: "#E5E5E5" });
      setAlert(false);
    } else if (n == "input3") {
      if (isValidEmail(text)) {
        setAlert(false);
        setBorder({ ...border, [n]: "#1A9E75" });
      } else {
        setAlert(true);
        setBorder({ ...border, [n]: "#FF4A4A" });
      }
    } else setBorder({ ...border, [n]: "#1A9E75" });
  };
  const { setHam } = useContext(AppContext);

  const handleSave = () => {
    navigation.navigate("Home");
    setHam(true);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingTop: 25,
        gap: 15,
        paddingBottom: 20,
        backgroundColor: "#FFF",
      }}
      style={{ flex: 1 }}
    >
      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        {image ? (
          <Image
            style={{ width: 71, height: 71, borderRadius: 71 }}
            source={{ uri: image }}
          />
        ) : (
          <Image
            style={{ width: 45, height: 45 }}
            source={require("../assets/images/greenprofile.png")}
          />
        )}
        <FontAwesomeIcon
          color="rgba(26, 158, 117, 1)"
          icon={"circle-plus"}
          size={20}
          style={{ position: "absolute", right: 2, bottom: 2 }}
        />
      </TouchableOpacity>
      <Text style={styles.header}>Full Name*</Text>
      <TextInput
        onChangeText={(text) => handleChangeText(text, "input1")}
        style={[styles.input, { borderColor: border.input1 }]}
        placeholder="Enter your full name"
      />
      <Text style={styles.header}>Mobile Number*</Text>
      <View style={{ flexDirection: "row", width: "90%" }}>
        <View
          style={[
            styles.input,
            {
              borderRightWidth: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              width: "13%",
              justifyContent: "center",
              paddingLeft: 10,
              borderColor: border.input2,
            },
          ]}
        >
          <Text style={[styles.text]}>+91</Text>
        </View>
        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => handleChangeText(text, "input2")}
          style={[
            styles.input,
            {
              borderLeftWidth: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              width: "87%",
              paddingLeft: 0,
              borderColor: border.input2,
            },
          ]}
          placeholder="| Enter your full name"
        />
      </View>
      <Text style={styles.header}>Email ID</Text>
      <TextInput
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => handleChangeText(text, "input3")}
        style={[styles.input, { borderColor: border.input3 }]}
        placeholder="Enter Your Email ID"
      />
      {alert && (
        <Text
          style={[
            styles.text,
            { color: "#FF4A4A", width: "90%", marginTop: -10 },
          ]}
        >
          Invalid Mail format.
        </Text>
      )}
      <Text style={styles.header}>Gender</Text>
      <View style={{ width: "94%", marginTop: -10 }}>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton color="#1A9E75" value="first" />
              <Text style={[styles.text, { paddingTop: 2 }]}>Male</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton color="#1A9E75" value="second" />
              <Text style={[styles.text, { paddingTop: 2 }]}>Female</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>
      <Text style={styles.header}>Date of Birth</Text>
      <View style={{ width: "90%", justifyContent: "center" }}>
        <TextInput
          style={[styles.input, { width: "100%" }]}
          placeholder="Select Your Date of Birth"
        />
        <TouchableOpacity style={styles.calendar} onPress={handleOnPressDOB}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../assets/images/calendar.png")}
          />
        </TouchableOpacity>
      </View>

      {toggle && (
        <Modal animationType="slide" transparent={true}>
          <View style={styles.modal}>
            <View
              style={{
                width: "90%",
                alignItems: "center",
                backgroundColor: "white",
                gap: 15,
                paddingBottom: 20,
              }}
            >
              <DatePicker
                mode="calendar"
                minimumDate={maxDOB.toLocaleDateString("en-IN")}
                selected={selectedDOB}
                onDateChanged={handleChangeDOB}
                style={styles.datePicker}
              />
              <TouchableOpacity onPress={() => setToggle(false)}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={[styles.bold, { fontSize: 16, color: "white" }]}>
          Save
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  imageContainer: {
    width: 71,
    height: 71,
    borderRadius: 71,
    backgroundColor: "#F0FFFA",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    width: "90%",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    marginTop: 3,
  },
  input: {
    width: "90%",
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 15,
    fontFamily: "Poppins_400Regular",
    paddingTop: 5,
    marginTop: -5,
    borderColor: "#E5E5E5",
  },
  calendar: {
    position: "absolute",
    right: 10,
    top: 3,
  },
  button: {
    width: "90%",
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    marginTop: 30,
  },
  modal: {
    backgroundColor: "rgba(57, 57, 57, .5)",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  datePicker: {
    width: "90%",
    height: 338,
  },
});
