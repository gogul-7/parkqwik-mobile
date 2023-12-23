import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const amount = [
  { id: 1, amnt: "200" },
  { id: 2, amnt: "500" },
  { id: 3, amnt: "700" },
  { id: 4, amnt: "900" },
];

const Recharge2 = () => {
  const { fastNum, headData, setHeaderName, setAmount } =
    useContext(AppContext);
  const [num, setNum] = useState("");
  const [value, setValue] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    setHeaderName("");
  }, []);

  useEffect(() => {
    let arr = fastNum.split("");
    let newArr = [];
    arr.map((n, index) =>
      index == 2 || index == 4 || index == 5
        ? newArr.push(" " + n)
        : newArr.push(n)
    );
    setNum(newArr.join(""));
  }, []);

  const handlePress = (value) => {
    setValue(value);
  };

  handleChange = (value) => {
    setValue(value);
  };

  const handleContinue = () => {
    setAmount(value - (value * 1) / 10);
    navigation.navigate("recharge3");
  };

  return (
    <View style={{ flex: 1, paddingTop: 15 }}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", gap: 15 }}
        style={{ width: "100%", flex: 1 }}
      >
        <View style={styles.greenCard}>
          <FontAwesomeIcon icon={"car"} color="#1A9E75" size={25} />
          <View style={{ flex: 1, justifyContent: "center", height: "100%" }}>
            <Text style={[styles.text, { color: "#1A9E75" }]}>{num}</Text>
            <Text style={[styles.text, { fontSize: 10 }]}>Hyundai Exter</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Image style={{ width: 40, height: 40 }} source={headData.image} />
          <Text style={styles.text}>{headData.name}</Text>
          <FontAwesomeIcon
            icon={"chevron-down"}
            style={{ position: "absolute", right: 15 }}
            size={12}
          />
        </View>
        <View
          style={[
            styles.container,
            { flexDirection: "column", alignItems: "flex-start", gap: 10 },
          ]}
        >
          <Text style={[styles.text, { fontSize: 16 }]}>
            Enter Recharge Amount
          </Text>
          <TextInput
            onChangeText={handleChange}
            placeholder="Eg. 500"
            style={styles.input}
            value={value}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              height: 40,
            }}
          >
            {amount.map((item) => (
              <TouchableOpacity
                onPress={() => handlePress(item.amnt)}
                key={item.id}
                style={styles.button}
              >
                <Text style={{ color: "white" }}>
                  ₹ <Text style={styles.text}>{item.amnt}</Text>
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.border}></View>
          <View
            style={[
              styles.greenCard,
              { paddingHorizontal: 10, height: 43, gap: 10, width: "100%" },
            ]}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/images/promo.png")}
            />
            <Text style={[styles.text, { color: "#1A9E75", paddingTop: 3 }]}>
              Apply Promo Code
            </Text>
            <FontAwesomeIcon
              icon={"angle-right"}
              style={{ position: "absolute", right: 15 }}
              size={14}
              color="#1A9E75"
            />
          </View>
          <View style={styles.bannerContainer}>
            <Text style={[styles.text, { color: "#393939", fontSize: 12 }]}>
              Powered by
            </Text>
            <Image
              style={{ maxWidth: 50, maxHeight: 20 }}
              source={require("../assets/images/netc.png")}
            />
            <Image
              style={{ maxWidth: 40, maxHeight: 15, marginBottom: 4 }}
              source={require("../assets/images/bps.png")}
            />
          </View>
        </View>
        <View style={{ width: "90%" }}>
          <Text style={[styles.text, { fontSize: 16 }]}>Payment Summary</Text>
        </View>
        <View
          style={[
            styles.container,
            { backgroundColor: "#F0FFFA", flexDirection: "column" },
          ]}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.text}>Recharge Amount</Text>
            <Text>
              ₹ <Text style={styles.text}>{value}</Text>
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.text, { color: "#1A9E75" }]}>Promo Code</Text>
            <Text style={{ color: "#1A9E75" }}>
              - ₹ <Text style={styles.text}>{value * (1 / 10)}</Text>
            </Text>
          </View>
          <View style={styles.border}></View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 3,
            }}
          >
            <Text style={styles.text}>Total Amount</Text>
            <Text>
              ₹ <Text style={styles.text}>{value - (value * 1) / 10}</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.payment}>
        <Text style={[{ fontSize: 20, width: "50%" }]}>
          ₹ {value - (value * 1) / 10}
        </Text>
        <TouchableOpacity
          style={[styles.button, { width: 160, borderRadius: 14, height: 35 }]}
          onPress={handleContinue}
        >
          <Text style={[styles.text, { color: "white" }]}>Proceed To Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  greenCard: {
    height: 50,
    width: "90%",
    backgroundColor: "#F0FFFA",
    borderRadius: 8,
    borderColor: "#1A9E75",
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    gap: 15,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#A0A0A0",
    borderRadius: 9,
    height: 40,
    paddingLeft: 15,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
  },
  container: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  bannerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  payment: {
    position: "absolute",
    height: 65,
    backgroundColor: "white",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    elevation: 3,
  },
  button: {
    width: 65,
    height: 30,
    paddingTop: 3,
    backgroundColor: "#1A9E75",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    borderBottomWidth: 2,
    borderColor: "#e3e3e3",
    width: "100%",
    height: 2,
  },
});

export default Recharge2;
