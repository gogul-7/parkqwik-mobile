import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { React } from "react";
import { useNavigation } from "@react-navigation/native";

const brands = [
  "Maruti",
  "Hyundai",
  "Honda",
  "Chevrolet",
  "Fiat",
  "Ford",
  "Mahindra",
  "Renault",
  "Skoda",
  "Tata",
  "Toyota",
  "Volkswagen",
  "Kia",
  "Jeep",
];

const Insurance3 = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 15,
          paddingBottom: 30,
          gap: 15,
        }}
      >
        <View style={{ width: "90%", justifyContent: "center" }}>
          <TextInput style={styles.input} placeholder="Search Your Car Brand" />
          <Image
            style={styles.search}
            source={require("../assets/images/search.png")}
          />
        </View>
        <Text style={[styles.header]}>Select Your Car Brand</Text>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 10,
          }}
        >
          {brands.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("insurance2")}
              key={index}
              style={styles.container}
            >
              <Text style={[styles.text]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Insurance3;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#A0A0A0",
    borderRadius: 9,
    height: 40,
    paddingLeft: 35,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
  },
  search: { width: 20, height: 20, position: "absolute", left: 10 },
  container: {
    width: "45%",
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 59,
    elevation: 2,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#393939",
    width: "90%",
  },
});
