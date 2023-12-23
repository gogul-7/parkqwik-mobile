import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
  useWindowDimensions,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Electricity2 = () => {
  const [borderColor, setBorder] = useState("#A0A0A0");
  const [disable, setDisable] = useState(true);
  const [alert, setAlert] = useState(false);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const navigation = useNavigation();

  const handleChange = (value) => {
    setBorder("#1A9E75");
    setDisable(false);
    setValue(value);
    setAlert(false);
  };

  const handlePress = () => {
    Keyboard.dismiss();
    if (value === "123456") {
      navigation.navigate("electricity3");
    } else if (value === "1111") {
      setActive(true);
    } else {
      setBorder("#FC6969");
      setAlert(true);
    }
  };

  return (
    <View
      style={{ alignItems: "center", flex: 1, gap: 10, paddingVertical: 15 }}
    >
      <View style={{ width: "90%", gap: 10 }}>
        <Text style={[styles.text, { fontSize: 16 }]}>Consumer Number</Text>
        <TextInput
          onChangeText={(value) => handleChange(value)}
          placeholder="Enter a valid consumer number"
          style={[styles.input, { borderColor }]}
        />
        {alert && (
          <Text
            style={[
              styles.text,
              { fontSize: 10, color: "#FC6969", marginLeft: 5 },
            ]}
          >
            Invalid Consumer Number
          </Text>
        )}
        <Text
          style={[
            styles.text,
            { fontSize: 10, color: "#A0A0A0", marginLeft: 5 },
          ]}
        >
          Please enter your Consumer Number starting with regional code followed
          by section, distribution and service number.
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Pressable
          onPress={handlePress}
          style={disable ? styles.disabledBtn : styles.button}
        >
          <Text
            style={
              disable
                ? [styles.text, { color: "#9F9F9F" }]
                : [styles.text, { color: "white" }]
            }
          >
            Continue
          </Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={[styles.text, { fontSize: 12, marginTop: 4 }]}>
            Secured by Bharat BillPay
          </Text>
          <Image
            style={{ width: 48, height: 24 }}
            source={require("../assets/images/bps.png")}
          />
        </View>
      </View>
      {active && <Popup setActive={setActive} />}
    </View>
  );
};

const Popup = ({ setActive }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.backdrop, { width, height }]}>
      <View style={styles.activeContainer}>
        <Pressable
          style={{ position: "absolute", top: 20, right: 20 }}
          onPress={() => setActive(false)}
        >
          <FontAwesomeIcon icon={"circle-xmark"} color="#1A9E75" size={22} />
        </Pressable>
        <View
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={[styles.circle1]}></View>
          <View style={[styles.circle2]}></View>
          <View style={[styles.circle3]}>
            <Image
              style={{
                width: 30,
                height: 18,
              }}
              source={require("../assets/images/check.png")}
            />
          </View>
        </View>
        <Text style={[styles.text, { color: "#1A9E75", fontSize: 18 }]}>
          Your Bill Is Already Paid
        </Text>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../assets/images/tneb.png")}
          />
          <View>
            <Text style={[styles.text, { color: "#A0A0A0", fontSize: 12 }]}>
              Consumer Number: 09579127298
            </Text>
            <Text style={[styles.text, { fontSize: 13 }]}>
              Tamil Nadu Electricity Board (TNEB)
            </Text>
          </View>
        </View>
        <Pressable onPress={() => setActive(false)} style={styles.button}>
          <Text style={[styles.text, { color: "white" }]}>Done</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    elevation: 2,
  },
  image: {
    width: 35,
    height: 35,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 9,
    height: 40,
    paddingLeft: 10,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
  },
  button: {
    width: "90%",
    height: 40,
    marginTop: 30,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  disabledBtn: {
    width: "90%",
    height: 40,
    marginTop: 30,
    backgroundColor: "#DFDFDF",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(72, 72, 72, 0.83)",
    position: "absolute",
    top: -200,
    zIndex: 5,
    justifyContent: "flex-end",
  },
  activeContainer: {
    height: 330,
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    padding: 8,
    paddingTop: 30,
    gap: 5,
  },
  circle1: {
    width: 80,
    height: 80,
    backgroundColor: "#6ADEB9",
    borderRadius: 150,
    position: "absolute",
  },
  circle2: {
    width: 66,
    height: 66,
    backgroundColor: "#DAFFF3",
    borderRadius: 150,
    position: "absolute",
  },
  circle3: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 150,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Electricity2;
