import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";
import { useContext } from "react";

const Header = ({ title }) => {
  const navigation = useNavigation();
  const { hideHeader } = useContext(AppContext);
  const handlePress = () => {
    navigation.goBack();
  };
  if (!hideHeader)
    return (
      <View style={styles.headerContainer}>
        <Pressable onPress={handlePress}>
          <FontAwesomeIcon color="white" size={20} icon="arrow-left-long" />
        </Pressable>
        <Text style={{ color: "white" }}>{title}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 90,
    paddingTop: 50,
    backgroundColor: "#1A9E75",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default Header;
