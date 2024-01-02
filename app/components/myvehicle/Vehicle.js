import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { useState, React } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";
import { RadioButton } from "react-native-paper";

const types = [
  "Diesel",
  "Petrol",
  "Company Fitted CNG",
  "External CNG",
  "Electric Vehicle",
];

export default function Vehicle() {
  const [task, setTask] = useState("");
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("");

  const [color, setColor] = useState({ colorid: 0 });
  const navigation = useNavigation();

  const changeColor = (id) => {
    setColor({ colorid: id });
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
            style={color.colorid === 1 ? styles.red : styles.button}
            onPress={() => changeColor(1)}
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
            style={color.colorid === 2 ? styles.red : styles.button}
            onPress={() => changeColor(2)}
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
            style={color.colorid === 3 ? styles.red : styles.button}
            onPress={() => changeColor(3)}
          >
            <Image
              style={{ height: 20.17, width: 28.01 }}
              source={require("../assets/images/auto.png")}
            />
            <Text style={styles.types2}>Auto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={color.colorid === 4 ? styles.red : styles.button}
            onPress={() => changeColor(4)}
          >
            <Image
              style={{ height: 26, width: 26 }}
              source={require("../assets/images/bus.png")}
            />
            <Text style={styles.types2}>Bus</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={color.colorid === 5 ? styles.red : styles.button}
            onPress={() => changeColor(5)}
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
        style={styles.vnumber}
        placeholder="Enter vehicle number"
        maxLength={10}
        autoCapitalize="characters"
        value={task}
        onChangeText={(text) => setTask(text)}
      ></TextInput>
      <Text style={[styles.vehicletype]}>Vehicle Number</Text>
      <TouchableOpacity
        onPress={() => setModal(true)}
        style={[
          styles.vnumber,
          {
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <Text
          style={{
            color: "#AFAFAF",
            fontFamily: "Poppins_400Regular",
          }}
        >
          Select Fuel Type
        </Text>
        <FontAwesomeIcon
          icon={"angle-down"}
          color="rgba(57, 57, 57, 1)"
          size={12}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("vehicle2")}
        style={styles.btn}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins_600SemiBold",
            fontSize: 16,
            paddingTop: 2,
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
      <Modal
        useNativeDriver
        style={{ margin: 0, justifyContent: "flex-end" }}
        isVisible={modal}
        backdropOpacity={0.3}
        useNativeDriverForBackdrop
      >
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => setModal(false)}
            style={{ position: "absolute", right: 20, top: 20, zIndex: 5 }}
          >
            <FontAwesomeIcon icon={"circle-xmark"} size={22} color="#1A9E75" />
          </TouchableOpacity>
          <Text style={[styles.headerT, { fontSize: 16 }]}>
            Select Fuel Type
          </Text>
          <RadioButton.Group
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <View style={{ gap: 5 }}>
              {types.map((item, index) => (
                <View key={index} style={{ flexDirection: "row" }}>
                  <View style={{ height: 15 }}>
                    <RadioButton
                      value={item}
                      color="#1A9E75"
                      uncheckedColor="#1A9E75"
                    />
                  </View>
                  <View>
                    <Text
                      style={[styles.text, { paddingTop: 7, marginLeft: 5 }]}
                    >
                      {item}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </RadioButton.Group>
        </View>
      </Modal>
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
    backgroundColor: "white",
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
    color: "#AFAFAF",
    paddingHorizontal: 10,
    borderWidth: 1,
    width: "90%",
    paddingTop: 2,
    height: 40,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  headerT: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
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
  modal: {
    backgroundColor: "#FFF",
    height: 243,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
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
});
