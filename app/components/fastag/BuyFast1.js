import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Counter from "../Counter";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";

const BuyFast1 = () => {
  const { height } = useWindowDimensions();
  const { setHeaderNum } = useContext(AppContext);
  const [toggle, setToggle] = useState(false);
  const [payment, setPayment] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setHeaderNum(1);
  }, []);

  const navigation = useNavigation();

  const handlePress = () => {
    setToggle(false);
    setPayment(true);
  };
  const handleContinue = () => {
    navigation.navigate("buyscreen2");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputCotainer}>
        <Text style={styles.text}>Vehicle Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Vehicle Number"
          placeholderTextColor="#AFAFAF"
        />
      </View>
      <View style={styles.inputCotainer}>
        <Text style={styles.text}>Upload RC</Text>
        <Pressable onPress={() => setToggle(true)}>
          <View style={styles.rcContainer}>
            <FontAwesomeIcon
              style={{ color: "#1A9E75" }}
              icon="fa-arrow-up-from-bracket"
            />
            <Text style={[styles.text, { color: "#1A9E75", fontSize: 12 }]}>
              Upload RC
            </Text>
          </View>
        </Pressable>
      </View>

      {toggle && (
        <View style={[styles.uploadRc]}>
          <View style={styles.uploadRcContainer}>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                marginBottom: 15,
              }}
            >
              <Text style={[styles.text, { fontSize: 18 }]}>Upload RC</Text>
              <Pressable onPress={() => setToggle(false)}>
                <FontAwesomeIcon
                  style={{ color: "#1A9E75", marginRight: 5 }}
                  size={23}
                  icon="circle-xmark"
                />
              </Pressable>
            </View>
            <Text style={[styles.text, { fontSize: 12 }]}>
              Please ensure the following when you upload your RC
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
                gap: 8,
              }}
            >
              <FontAwesomeIcon size={4} icon="circle" />
              <Text style={[styles.text, { fontSize: 12 }]}>
                Ensure that the text is readable
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
                gap: 8,
              }}
            >
              <FontAwesomeIcon
                style={{ marginBottom: 16 }}
                size={4}
                icon="circle"
              />
              <Text style={[styles.text, { fontSize: 12, width: "80%" }]}>
                Make sure images is in either JPEG or PNG format
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                height: 150,
                justifyContent: "space-evenly",
                marginTop: 15,
              }}
            >
              <View style={styles.card}>
                <FontAwesomeIcon
                  style={{ color: "#1A9E75" }}
                  icon="fa-arrow-up-from-bracket"
                  size={18}
                />
                <Text style={[styles.text, { color: "#1A9E75", fontSize: 12 }]}>
                  Front Side of RC
                </Text>
              </View>
              <View style={styles.card}>
                <FontAwesomeIcon
                  style={{ color: "#1A9E75" }}
                  icon="fa-arrow-up-from-bracket"
                  size={18}
                />
                <Text style={[styles.text, { color: "#1A9E75", fontSize: 12 }]}>
                  Back Side of RC
                </Text>
              </View>
            </View>
            <Pressable
              style={[styles.button, { width: "100%", marginTop: 10 }]}
              onPress={handlePress}
            >
              <Text style={[styles.text, { color: "white" }]}>Done</Text>
            </Pressable>
          </View>
        </View>
      )}
      {payment && (
        <View style={styles.paymentContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.text, { fontSize: 12, width: "50%" }]}>
              How many FASTag would you like to buy?
            </Text>
            <Counter count={count} setCount={setCount} />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[{ fontSize: 20, width: "50%" }]}>
              ₹ {count * 350}
            </Text>
            <Pressable onPress={handleContinue} style={styles.button}>
              <Text style={[styles.text, { color: "white" }]}>Continue</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    gap: 15,
    flex: 1,
  },
  inputCotainer: {
    width: "90%",
    display: "flex",
    gap: 5,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: "#1A9E75",
  },
  button: {
    width: 150,
    height: 35,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rcContainer: {
    width: 120,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1A9E75",
    backgroundColor: "#F0FFFA",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  uploadRc: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(183, 183, 183, 0.7)",
    zIndex: 5,
    display: "flex",
    justifyContent: "flex-end",
  },
  uploadRcContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 400,
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    gap: 8,
  },
  card: {
    flex: 0.45,
    borderWidth: 1,
    borderStyle: "dashed",
    backgroundColor: "#F0FFFA",
    borderRadius: 13,
    borderColor: "#1A9E75",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  paymentContainer: {
    position: "absolute",
    bottom: 0,
    height: 140,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 5,
    paddingHorizontal: 20,

    display: "flex",
    justifyContent: "space-evenly",
  },
});

export default BuyFast1;
