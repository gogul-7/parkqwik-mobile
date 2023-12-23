import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const dataPacks = [
  {
    id: 1,
    validity: "1 Day",
    amount: "29",
    details: "Data: 2GB | Validity: 1 Day",
    type: ["recommended"],
  },
  {
    id: 2,
    validity: "Existing Plan",
    amount: "65",
    details: "Data: 4GB | Validity: Till your existing pack",
    type: ["recommended"],
  },
  {
    id: 3,
    validity: "Existing Plan",
    amount: "118",
    details: "Data: 12GB | Validity: Till your existing pack",
    type: ["recommended"],
  },
  {
    id: 4,
    validity: "84 Days",
    amount: "666",
    details:
      "Calls: Unlimited | Data: 1.5GB/day | SMS: 100/day | Validity: 84 days",
    type: ["recommended"],
  },
  {
    id: 5,
    validity: "365 Days",
    amount: "2,999",
    details:
      "Calls: Unlimited | Data: 2GB/day | SMS: 100/day | Validity: 365 days",
    type: ["recommended", "unlimited"],
  },
  {
    id: 6,
    validity: "28 Days",
    amount: "239",
    details:
      "Calls: Unlimited | Data: 1.5GB/day | SMS: 100/day | Validity: 28 days",
    type: ["recommended"],
  },
  {
    id: 7,
    validity: "365 Days",
    amount: "3,359",
    details:
      "Calls: Unlimited | Data: 2.5GB/day | SMS: 100/day | Validity: 365 days",
    type: ["unlimited"],
  },
  {
    id: 8,
    validity: "365 Days",
    amount: "1,799",
    details:
      "Calls: Unlimited local, STD & Roaming calls | Data: 2GB/day | SMS: 100/day | Validity: 365 days",
    type: ["unlimited"],
  },
  {
    id: 9,
    validity: "84 Days",
    amount: "999",
    details:
      "Calls: Unlimited local, STD & Roaming calls | Data: 2.5GB/day | SMS: 100/day | Validity: 84 days",
    type: ["unlimited"],
  },
  {
    id: 10,
    validity: "84 Days",
    amount: "839",
    details:
      "Calls: Unlimited local & STD | Data: 2GB/day | SMS: 100/day | Validity: 84 days",
    type: ["unlimited", "cricket"],
  },
  {
    id: 11,
    validity: "90 Days",
    amount: "779",
    details:
      "Calls: Unlimited local, STD & Roaming | Data: 3GB/day | SMS: 100/day | Validity: 90 days",
    type: ["unlimited"],
  },
  {
    id: 12,
    validity: "1 Day",
    amount: "49",
    details: "Data: 6GB | Validity: 1 Day",
    type: ["cricket"],
  },
  {
    id: 13,
    validity: "2 Days",
    amount: "99",
    details: "Data: Unlimited | Validity: 1 Day",
    type: ["cricket"],
  },
  {
    id: 14,
    validity: "28 Days",
    amount: "399",
    details:
      "Calls: Unlimited local, STD & Roaming calls | Data: 3GB/day | SMS: 100/day | Validity: 28 days",
    type: ["cricket"],
  },
  {
    id: 15,
    validity: "56 Days",
    amount: "699",
    details:
      "Calls: Unlimited local, STD & Roaming | Data: 3GB/day | SMS: 100/day | Validity: 56 days",
    type: ["cricket"],
  },
  {
    id: 16,
    validity: "28 Days",
    amount: "499",
    details:
      "Calls: Unlimited local, STD & Roaming | Data: 3GB/day | SMS: 100/day | Validity: 28 days",
    type: ["cricket"],
  },
];

const Mobile3 = () => {
  const [searchKey, setSearchKey] = useState();
  const [type, setType] = useState("recommended");
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("");

  const handleChange = (text) => {
    setSearchKey(text);
  };

  const handleSelect = (value) => {
    setSelected(value);
    setActive(true);
  };

  const handlePress = (value) => {
    setType(value);
  };
  return (
    <View style={{ gap: 15, alignItems: "center" }}>
      <View
        style={{
          height: 80,
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <TextInput
          onChangeText={handleChange}
          style={styles.input}
          placeholder="Search a plan or enter amount"
        />
        <Image
          style={styles.search}
          source={require("../assets/images/search.png")}
        />
      </View>
      {!searchKey && (
        <View style={styles.header}>
          <Pressable
            onPress={() => handlePress("recommended")}
            style={type === "recommended" && styles.selected}
          >
            <Text style={styles.text}>Recommended</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress("unlimited")}
            style={type === "unlimited" && styles.selected}
          >
            <Text style={styles.text}>Unlimited</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress("cricket")}
            style={type === "cricket" && styles.selected}
          >
            <Text style={styles.text}>Cricket Packs</Text>
          </Pressable>
        </View>
      )}
      <ScrollView
        style={{ width: "100%", height: 400 }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {searchKey
          ? dataPacks
              .filter((item) => item.amount.includes(searchKey))
              .map((item) => (
                <Pressable
                  onPress={() => handleSelect(item.amount)}
                  key={item.id}
                  style={styles.container}
                >
                  <View style={styles.topPart}>
                    <View>
                      <Text
                        style={[
                          styles.text,
                          { color: "#8E8E8E", fontSize: 12 },
                        ]}
                      >
                        Validity
                      </Text>
                      <Text style={styles.text}>{item.validity}</Text>
                    </View>
                    <Text style={[styles.text, { fontSize: 20 }]}>
                      ₹ {item.amount}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Text style={[styles.text, { width: "90%" }]}>
                      {item.details.length > 60
                        ? `${item.details.slice(0, 60)}...`
                        : item.details}
                      {item.details.length > 60 && (
                        <Text style={styles.greentext}>See More</Text>
                      )}
                    </Text>
                    <FontAwesomeIcon icon={"angle-right"} color="#1A9E75" />
                  </View>
                </Pressable>
              ))
          : dataPacks
              .filter((item) => item.type.includes(type))
              .map((item) => (
                <Pressable
                  onPress={() => handleSelect(item.amount)}
                  key={item.id}
                  style={styles.container}
                >
                  <View style={styles.topPart}>
                    <View>
                      <Text
                        style={[
                          styles.text,
                          { color: "#8E8E8E", fontSize: 12 },
                        ]}
                      >
                        Validity
                      </Text>
                      <Text style={styles.text}>{item.validity}</Text>
                    </View>
                    <Text style={[styles.text, { fontSize: 20 }]}>
                      ₹ {item.amount}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Text style={[styles.text, { width: "90%" }]}>
                      {item.details.length > 60
                        ? `${item.details.slice(0, 60)}...`
                        : item.details}
                      {item.details.length > 60 && (
                        <Text style={styles.greentext}>See More</Text>
                      )}
                    </Text>
                    <FontAwesomeIcon icon={"angle-right"} color="#1A9E75" />
                  </View>
                </Pressable>
              ))}
      </ScrollView>
      {active && <Popup setActive={setActive} selected={selected} />}
    </View>
  );
};

const Popup = ({ setActive, selected }) => {
  const { width, height } = useWindowDimensions();
  const { setAmount } = useContext(AppContext);
  const navigation = useNavigation();

  const data = dataPacks.find((item) => item.amount === selected);

  const handlePack = () => {
    setAmount(data.amount);
    navigation.navigate("mobile4");
  };
  return (
    <View style={[styles.backdrop, { width }]}>
      <View style={styles.activeContainer}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text style={[styles.text, { fontSize: 18 }]}>Plan Details</Text>
          <Pressable onPress={() => setActive(false)}>
            <FontAwesomeIcon icon={"circle-xmark"} color="#1A9E75" size={22} />
          </Pressable>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            marginTop: 15,
          }}
        >
          <View>
            <Text style={[styles.text, { color: "#8E8E8E", fontSize: 12 }]}>
              Validity
            </Text>
            <Text style={[styles.text]}>{data.validity}</Text>
          </View>
          <Text style={[styles.text, { fontSize: 18 }]}>₹ {data.amount}</Text>
        </View>
        <View style={{ width: "100%", marginTop: 15 }}>
          <Text style={[styles.text]}>{data.details}</Text>
        </View>
        <Pressable onPress={handlePack} style={styles.button}>
          <Text style={[styles.text, { color: "white" }]}>Proceed To Pay</Text>
        </Pressable>
      </View>
    </View>
  );
};

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
  text: {
    fontFamily: "Poppins_400Regular",
  },
  greentext: {
    fontFamily: "Poppins_400Regular",
    color: "#1A9E75",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E6E6E6",
    width: "90%",
  },
  selected: {
    borderBottomWidth: 2,
    paddingBottom: 3,
    borderBottomColor: "#1A9E75",
  },
  container: {
    marginTop: 5,
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 15,
    gap: 8,
  },
  topPart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "#E6E6E6",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(72, 72, 72, 0.83)",
    position: "absolute",
    zIndex: 5,
    justifyContent: "flex-end",
    height: "100%",
  },
  activeContainer: {
    height: 310,
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    padding: 20,
    paddingTop: 30,
    gap: 5,
  },
  button: {
    width: "95%",
    height: 40,
    marginTop: 30,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
  },
});

export default Mobile3;
