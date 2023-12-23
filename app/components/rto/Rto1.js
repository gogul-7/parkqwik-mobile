import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const centers = [
  {
    id: 1,
    name: "Sholinganallur TN-14 RTO Office",
    address: "Sholinganallur TN-14 RTO Office, Sholinganallur, Tamil Nadu",
    rtoNum: "TN-14",
  },
  {
    id: 2,
    name: "Tambaram TN-11 RTO Office",
    address: "Tambaram TN-11 RTO Office, Tambaram, Tamil Nadu",
    rtoNum: "TN-11",
  },
  {
    id: 3,
    name: "Chennai South TN-07 RTO Office",
    address: "Chennai South TN-07 RTO Office, Chennai South, Tamil Nadu",
    rtoNum: "TN-07",
  },
  {
    id: 4,
    name: "Meenambakkam TN-22 RTO Office",
    address: "Meenambakkam TN-22 RTO Office, Meenambakkam, Tamil Nadu",
    rtoNum: "TN-22",
  },
  {
    id: 5,
    name: "Chennai East TN-04 RTO Office",
    address: "Chennai East TN-04 RTO Office, Chennai East, Tamil Nadu",
    rtoNum: "TN-04",
  },
];

const Rto1 = () => {
  const [border, setBorder] = useState("#A0A0A0");
  const [search, setSearch] = useState([]);
  const [key, setKey] = useState("");

  const handleChange = (text) => {
    setBorder("#1A9E75");
    if (text.length == 0) setBorder("#A0A0A0");
    setKey(text);
    setSearch(
      centers.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 15,
        alignItems: "center",
        gap: 10,
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          marginBottom: 10,
        }}
      >
        <TextInput
          style={[styles.input, { borderColor: border }]}
          placeholder="Search RTO Center or Location"
          onChangeText={handleChange}
        />
        <Image
          style={styles.search}
          source={
            key
              ? require("../assets/images/greensearch.png")
              : require("../assets/images/search.png")
          }
        />
      </View>
      {key && (
        <View style={{ width: "90%" }}>
          <Text style={styles.text}>
            {search.length} results for "{key}
          </Text>
        </View>
      )}
      {key
        ? search.map((item) => (
            <View key={item.id} style={styles.container}>
              <Text style={styles.header}>{item.name}</Text>
              <Text
                style={[
                  styles.text,
                  { fontSize: 12, color: "#A0A0A0", width: "90%" },
                ]}
              >
                {item.address}
              </Text>
              <View style={styles.downPart}>
                <View
                  style={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: 10,
                    padding: 5,
                    width: 42,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={[
                      styles.text,
                      {
                        color: "#393939",
                        fontSize: 10,
                      },
                    ]}
                  >
                    {item.rtoNum}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon icon={"phone"} color="#1A9E75" size={18} />
                  <FontAwesomeIcon
                    icon={"diamond-turn-right"}
                    color="#1A9E75"
                    size={22}
                  />
                </View>
              </View>
            </View>
          ))
        : centers.map((item) => (
            <View key={item.id} style={styles.container}>
              <Text style={styles.header}>{item.name}</Text>
              <Text
                style={[
                  styles.text,
                  { fontSize: 12, color: "#A0A0A0", width: "90%" },
                ]}
              >
                {item.address}
              </Text>
              <View style={styles.downPart}>
                <View
                  style={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: 10,
                    padding: 5,
                    width: 42,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={[
                      styles.text,
                      {
                        color: "#393939",
                        fontSize: 10,
                      },
                    ]}
                  >
                    {item.rtoNum}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon icon={"phone"} color="#1A9E75" size={18} />
                  <FontAwesomeIcon
                    icon={"diamond-turn-right"}
                    color="#1A9E75"
                    size={22}
                  />
                </View>
              </View>
            </View>
          ))}
    </ScrollView>
  );
};

export default Rto1;

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 9,
    height: 40,
    paddingLeft: 35,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
  },
  search: { width: 20, height: 20, position: "absolute", left: 25 },
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  downPart: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 40,
    borderTopColor: "#E6E6E6",
    borderTopWidth: 1,
    marginTop: 5,
    justifyContent: "space-between",
  },
});
