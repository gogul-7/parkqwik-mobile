import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  BackHandler,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useContext, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";

export default function Ev4() {
  const { setVehicleDetails, vehicleDetails } = useContext(AppContext);
  const [disable, setDisable] = useState(false);
  const [vnum, setVnum] = useState("");
  const [alert, setAlert] = useState(false);
  const input = useRef();
  const [selected, setSelected] = useState("");
  const navigation = useNavigation();

  const validation = (value) => {
    let pattern = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/;
    return pattern.test(value);
  };

  useEffect(() => {
    if (vnum.length !== 0) {
      if (!alert && selected) {
        setDisable(true);
      } else setDisable(false);
    }
  }, [alert, selected]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setVehicleDetails({});
      }
    );

    return () => {
      backHandler.remove();
    };
  }, [setVehicleDetails]);

  useEffect(() => {
    if (Object.keys(vehicleDetails).length !== 0) {
      setSelected(vehicleDetails.type);
      setVnum(vehicleDetails.vnumber);
    }
  }, [vehicleDetails]);

  const handleChange = (text) => {
    if (text.length === 0) {
      input.current.setNativeProps({
        style: { borderColor: "#E5E5E5" },
      });
      setAlert(false);
    } else {
      if (validation(text)) {
        input.current.setNativeProps({
          style: { borderColor: "#1A9E75" },
        });
        setAlert(false);
      } else {
        input.current.setNativeProps({
          style: { borderColor: "#FC6969" },
        });
        setAlert(true);
      }
    }
    setVnum(text);
  };

  const handleSubmit = () => {
    setVehicleDetails({ vnumber: vnum, type: selected });
    navigation.navigate("ev2");
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        paddingTop: 15,
        gap: 15,
      }}
    >
      <StatusBar backgroundColor="#1A9E75" barStyle="light-content" />
      <Text style={styles.vehicletype}>Vehicle Type</Text>
      <View style={{ height: 65, width: "100%" }}>
        <ScrollView
          contentContainerStyle={styles.vehiclef}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            style={selected === "Car" ? styles.red : styles.button}
            onPress={() => setSelected("Car")}
          >
            <Image
              style={{
                height: 22,
                width: 26.18,
              }}
              source={require("../assets/images/car1.png")}
            />

            <Text style={styles.types2}>Car</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selected === "Bike" ? styles.red : styles.button}
            onPress={() => setSelected("Bike")}
          >
            <Image
              style={{
                height: 18.49,
                width: 34,
              }}
              source={require("../assets/images/bike2.png")}
            />
            <Text style={styles.types2}>Bike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selected === "Auto" ? styles.red : styles.button}
            onPress={() => setSelected("Auto")}
          >
            <Image
              style={{ height: 20.17, width: 28.01 }}
              source={require("../assets/images/auto.png")}
            />
            <Text style={styles.types2}>Auto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selected === "Bus" ? styles.red : styles.button}
            onPress={() => setSelected("Bus")}
          >
            <Image
              style={{ height: 26, width: 26 }}
              source={require("../assets/images/bus.png")}
            />
            <Text style={styles.types2}>Bus</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selected === "Truck" ? styles.red : styles.button}
            onPress={() => setSelected("Truck")}
          >
            <Image
              style={{ height: 18, width: 30 }}
              source={require("../assets/images/truck1.png")}
            />
            <Text style={styles.types2}>Truck</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Text style={styles.vehicletype}>Vehicle Number</Text>

      <TextInput
        ref={input}
        style={styles.vnumber}
        placeholder="Enter vehicle number"
        maxLength={10}
        autoCapitalize="characters"
        placeholderTextColor={"#AFAFAF"}
        value={vnum}
        onChangeText={(text) => handleChange(text)}
      ></TextInput>
      {alert && (
        <Text
          style={[
            styles.types2,
            { color: "#FC6969", fontSize: 12, width: "88%", marginTop: -15 },
          ]}
        >
          Invalid format
        </Text>
      )}
      <TouchableOpacity
        onPress={handleSubmit}
        style={disable ? styles.btn : styles.disbaled}
      >
        <Text
          style={
            disable
              ? {
                  color: "#FFF",
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 16,
                }
              : {
                  color: "#9F9F9F",
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 16,
                }
          }
        >
          Save
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    resizeMode: "stretch",
    height: 5,
    width: 5,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    width: 360,
    height: 50,
    backgroundColor: "green",
  },
  header1: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
  vehicletype: {
    fontFamily: "Poppins_500Medium",
    width: "92%",
    color: "black",
    fontSize: 16,
    marginTop: 5,
    marginBottom: -5,
  },
  vehiclef: {
    gap: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
  red: {
    backgroundColor: "#f2fffb",
    shadowColor: "black",
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    width: 100,
    gap: 5,
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#FFF",
    shadowColor: "black",
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    width: 100,
    gap: 5,
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 15,
  },
  types2: {
    color: "#393939",
    fontFamily: "Poppins_400Regular",
    paddingTop: 3,
  },
  vnumber: {
    borderRadius: 8,
    borderColor: "#E5E5E5",
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "Poppins_400Regular",
    paddingLeft: 10,
    borderWidth: 1,
    width: "90%",
    paddingTop: 2,
    height: 40,
  },
  save: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A9E75",
    top: 10,
    left: 80,
    borderWidth: 1,
    height: 50,
    width: 200,
    borderRadius: 15,
    marginBottom: 30,
  },
  savet: {
    color: "#FFF",
  },
  task: {
    padding: 10,
    height: 80,
    left: 30,
    width: 300,
    borderColor: "lightgrey",
    borderWidth: 1,
    paddingLeft: 6,
    borderRadius: 15,
    top: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 12,
    shadowColor: "grey",
    elevation: 10,
  },
  itemList: {
    fontSize: 19,
    color: "black",
  },
  taskButtons: {
    flexDirection: "row",
    gap: 0,
  },
  editButton: {
    padding: 6,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    color: "green",
    borderColor: "green",
    fontWeight: "bold",
    fontSize: 10,
    width: 51,
    height: 30,
  },
  deleteButton: {
    padding: 6,
    width: 51,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    color: "red",
    fontWeight: "bold",
    fontSize: 10,
  },
  btn: {
    width: 317,
    height: 40,
    backgroundColor: "#1A9E75",
    alignSelf: "center",
    borderRadius: 14,
    position: "absolute",
    bottom: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  disbaled: {
    width: "90%",
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2,
    backgroundColor: "#DFDFDF",
    borderRadius: 14,
    position: "absolute",
    bottom: 25,
    pointerEvents: "none",
  },
});
