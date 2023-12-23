import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const Close1 = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("close2");
  };
  return (
    <View style={{ alignItems: "center", paddingVertical: 15 }}>
      <TouchableOpacity onPress={handlePress} style={styles.container}>
        <FontAwesomeIcon icon={"car"} color="#1A9E75" size={25} />
        <Text style={[styles.text]}>TN05BM5656</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    gap: 15,
    elevation: 1,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
});

export default Close1;
