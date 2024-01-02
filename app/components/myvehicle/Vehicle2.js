import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Vehicle2 = () => {
  const [isModalvisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.fullscreen}>
      <Pressable onPress={() => setModalVisible(false)} style={styles.card}>
        {isModalvisible && (
          <View
            style={{
              height: 75,
              width: 122,
              backgroundColor: "white",
              borderRadius: 15,
              paddingVertical: 10,
              paddingHorizontal: 15,
              shadowColor: "black",
              elevation: 10,
              position: "absolute",
              justifyContent: "space-evenly",
              gap: 5,
              zIndex: 200,
              right: 10,
              top: 5,
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image
                style={{ width: 18, height: 18 }}
                source={require("../assets/images/edit.png")}
              ></Image>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 12,
                  color: "black",
                }}
                onPress={() => setModalVisible(!isModalvisible)}
              >
                Edit
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image
                style={{ width: 18, height: 18 }}
                source={require("../assets/images/delete.png")}
              ></Image>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 12,
                  color: "black",
                }}
                onPress={() => setModalVisible(!isModalvisible)}
              >
                Delete
              </Text>
            </View>
          </View>
        )}

        <View
          style={{
            width: 150,
            height: 23,
            backgroundColor: "white",
            flexDirection: "row",
            gap: 25,
          }}
        >
          <Image
            source={require("../assets/images/car1.png")}
            style={styles.img}
          ></Image>
          <Text style={{ fontFamily: "Poppins_400Regular", color: "black" }}>
            {" "}
            TN01BH5656
          </Text>
        </View>
        <TouchableOpacity
          style={{ position: "absolute", right: 10 }}
          onPress={() => setModalVisible(true)}
        >
          <FontAwesomeIcon icon={"ellipsis-vertical"} />
        </TouchableOpacity>
      </Pressable>
      <View style={styles.card2}>
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            color: "#A0A0A0",
            paddingTop: 2,
          }}
        >
          {" "}
          Tap to add new vehicle
        </Text>
        <FontAwesomeIcon
          icon={"circle-plus"}
          color="rgba(26, 158, 117, 1)"
          size={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default Vehicle2;

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    paddingTop: 20,
    gap: 20,
    backgroundColor: "#FFF",
  },
  card: {
    width: "90%",
    height: 63,
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 5,
    alignSelf: "center",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 26.18,
    height: 22,
    resizeMode: "stretch",
    left: 20,
  },
  card2: {
    width: "90%",
    height: 55,
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    zIndex: 10,
  },
});
