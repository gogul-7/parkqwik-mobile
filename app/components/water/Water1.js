import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";

const Water1 = () => {
  const navigation = useNavigation();
  const { searchKey, setSearchKey, setHeadData } = useContext(AppContext);

  useEffect(() => {
    return () => {
      setSearchKey("");
    };
  }, []);

  const handlePress = (value) => {
    navigation.navigate("water2");
    setHeadData(value);
  };

  const waterBoard = [
    {
      id: 1,
      name: "Bangalore Water Supply and Sewarage Board",
      image: require("../assets/images/bws.png"),
    },
    {
      id: 2,
      name: "City Municipal Council - Ilkal",
      image: require("../assets/images/cmc.png"),
    },
    {
      id: 3,
      name: "Mysuruvani Vilas Water Works 24x7",
      image: require("../assets/images/mvw.png"),
    },
    {
      id: 4,
      name: "Shivamoga City Corporation  Water Tax",
      image: require("../assets/images/scw.png"),
    },
    {
      id: 5,
      name: "Vijayapura Water Board",
      image: require("../assets/images/vwb.png"),
    },
  ];

  return (
    <View style={{ alignItems: "center", gap: 15, flex: 1 }}>
      <View style={{ width: "90%" }}>
        <Text style={[styles.text, { fontSize: 16 }]}>
          Select Your Water Board
        </Text>
      </View>
      {searchKey.length !== 0
        ? waterBoard
            .filter((data) =>
              data.name.toLowerCase().includes(searchKey.toLowerCase())
            )
            .map((item) => (
              <Pressable
                onPress={() => handlePress(item)}
                key={item.id}
                style={styles.container}
              >
                <Image style={styles.image} source={item.image} />
                <Text style={[styles.text, { maxWidth: "70%", marginTop: 3 }]}>
                  {item.name}
                </Text>
                <FontAwesomeIcon
                  style={{ position: "absolute", right: 15 }}
                  icon={"angle-right"}
                  color="#1A9E75"
                  size={18}
                />
              </Pressable>
            ))
        : waterBoard.map((item) => (
            <Pressable
              onPress={() => handlePress(item)}
              key={item.id}
              style={styles.container}
            >
              <Image style={styles.image} source={item.image} />
              <Text style={[styles.text, { maxWidth: "70%", marginTop: 3 }]}>
                {item.name}
              </Text>
              <FontAwesomeIcon
                style={{ position: "absolute", right: 15 }}
                icon={"angle-right"}
                color="#1A9E75"
                size={18}
              />
            </Pressable>
          ))}
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          gap: 5,
          position: "absolute",
          bottom: 10,
          width: "100%",
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
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  image: {
    width: 35,
    height: 35,
  },
});

export default Water1;
