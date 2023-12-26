import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Toll1 = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(true);
  const navigation = useNavigation();

  const height = useRef(new Animated.Value(0)).current;
  const padding = useRef(new Animated.Value(0)).current;

  const handleNavigate = () => {
    navigation.navigate("toll2");
  };

  const handleAnimation = () => {
    setOpen(!open);
    Animated.timing(height, {
      useNativeDriver: false,
      toValue: open ? 1 : 0,
    }).start();
    Animated.timing(padding, {
      useNativeDriver: false,
      toValue: open ? 1 : 0,
    }).start();
  };

  const animatedHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 125],
  });

  const animatedPadding = padding.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 15],
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
        backgroundColor: "#FFF",
        gap: 15,
      }}
    >
      <View style={styles.container}>
        <Text style={[styles.header]}>From</Text>
        <View style={styles.inputContainer}>
          <Image
            style={{
              width: 16,
              height: 16,
            }}
            source={require("../assets/images/greenlocation.png")}
          />
          <TextInput
            placeholder="Enter starting point"
            placeholderTextColor={"#AFAFAF"}
            style={styles.input}
          />
        </View>
        <Text style={[styles.header]}>To</Text>
        <View style={styles.inputContainer}>
          <Image
            style={{
              width: 16,
              height: 16,
            }}
            source={require("../assets/images/greenlocation.png")}
          />
          <TextInput
            placeholder="Enter destination"
            placeholderTextColor={"#AFAFAF"}
            style={styles.input}
          />
        </View>
      </View>
      <Text style={[styles.header, { width: "90%" }]}>Vehicle Type</Text>
      <TouchableOpacity
        style={[styles.inputContainer, { width: "90%" }]}
        onPress={handleAnimation}
      >
        <Text style={[styles.text, { color: "#AFAFAF", paddingTop: 2 }]}>
          Select your vehicle type
        </Text>
        <FontAwesomeIcon
          icon={"angle-down"}
          style={{
            color: "#393939",
            position: "absolute",
            right: 15,
          }}
          size={14}
        />
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.card,
          { height: animatedHeight, padding: animatedPadding },
        ]}
      >
        <Text style={[styles.text, { fontSize: 12 }]}>Car/Jeep/Van</Text>
        <Text style={[styles.text, { fontSize: 12 }]}>LCV</Text>
        <Text style={[styles.text, { fontSize: 12 }]}>Bus/Truck</Text>
        <Text style={[styles.text, { fontSize: 12 }]}>HCM/EME</Text>
      </Animated.View>
      <Text style={[styles.header, { width: "90%" }]}>Trip Type</Text>
      <View style={{ width: "92%", marginTop: -10 }}>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ height: 15 }}>
              <RadioButton value={"one way"} color="#1A9E75" />
            </View>

            <Text style={[styles.text, { paddingTop: 7, marginLeft: 5 }]}>
              One Way
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ height: 15 }}>
              <RadioButton value={"return"} color="#1A9E75" />
            </View>

            <Text style={[styles.text, { paddingTop: 7, marginLeft: 5 }]}>
              Return
            </Text>
          </View>
        </RadioButton.Group>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNavigate}>
        <Text
          style={[styles.bold, { color: "#FFF", fontSize: 16, paddingTop: 2 }]}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Toll1;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#FFF",
    elevation: 3,
    borderRadius: 15,
    padding: 15,
    gap: 10,
    paddingBottom: 20,
  },
  inputContainer: {
    width: "100%",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    gap: 6,
  },
  card: {
    elevation: 1,
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginTop: -15,
    gap: 5,
    overflow: "hidden",
  },
  input: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 3,
    flex: 1,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
    fontSize: 16,
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  button: {
    width: "90%",
    height: 41,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
});
