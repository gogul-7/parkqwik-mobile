import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ActivateFast2 = () => {
  const { height } = useWindowDimensions();

  const [toggle, setToggle] = useState(false);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("subscreen3");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputCotainer}>
        <Text style={styles.text}>Tag ID</Text>
        <TextInput style={styles.input} value="123135454654" />
      </View>
      <View style={styles.inputCotainer}>
        <Text style={styles.text}>Vehicle Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Vehicle Number"
          placeholderTextColor="#AFAFAF"
        />
      </View>
      <View style={styles.inputCotainer}>
        <Text style={styles.text}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Full Name"
          placeholderTextColor="#AFAFAF"
        />
      </View>
      <View style={styles.inputCotainer}>
        <Text style={styles.text}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Date of Birth"
          placeholderTextColor="#AFAFAF"
        />
      </View>
      <View style={styles.inputCotainer}>
        <Text style={styles.text}>Upload RC</Text>
        <Pressable onPress={() => setToggle(true)}>
          <View style={styles.rcContainer}>
            <FontAwesomeIcon
              style={{ color: "#1A9E75" }}
              icon="fa-arrow-up-from-bracket"
            />
            <Text style={[styles.text, { color: "#1A9E75", fontSize: 12 }]}>
              Upload RC
            </Text>
          </View>
        </Pressable>
      </View>

      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={[styles.text, { color: "white" }]}>Next</Text>
      </Pressable>
      {toggle && (
        <View style={[styles.uploadRc, { height }]}>
          <View style={styles.uploadRcContainer}>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                marginBottom: 15,
              }}
            >
              <Text style={[styles.text, { fontSize: 18 }]}>Upload RC</Text>
              <Pressable onPress={() => setToggle(false)}>
                <FontAwesomeIcon
                  style={{ color: "#1A9E75", marginRight: 5 }}
                  size={23}
                  icon="circle-xmark"
                />
              </Pressable>
            </View>
            <Text style={[styles.text, { fontSize: 12 }]}>
              Please ensure the following when you upload your RC
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
                gap: 8,
              }}
            >
              <FontAwesomeIcon size={4} icon="circle" />
              <Text style={[styles.text, { fontSize: 12 }]}>
                Ensure that the text is readable
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
                gap: 8,
              }}
            >
              <FontAwesomeIcon
                style={{ marginBottom: 16 }}
                size={4}
                icon="circle"
              />
              <Text style={[styles.text, { fontSize: 12, width: "80%" }]}>
                Make sure images is in either JPEG or PNG format
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                height: 150,
                justifyContent: "space-evenly",
                marginTop: 15,
              }}
            >
              <View style={styles.card}>
                <FontAwesomeIcon
                  style={{ color: "#1A9E75" }}
                  icon="fa-arrow-up-from-bracket"
                  size={18}
                />
                <Text style={[styles.text, { color: "#1A9E75", fontSize: 12 }]}>
                  Front Side of RC
                </Text>
              </View>
              <View style={styles.card}>
                <FontAwesomeIcon
                  style={{ color: "#1A9E75" }}
                  icon="fa-arrow-up-from-bracket"
                  size={18}
                />
                <Text style={[styles.text, { color: "#1A9E75", fontSize: 12 }]}>
                  Back Side of RC
                </Text>
              </View>
            </View>
            <Pressable
              style={[styles.button, { width: "100%", marginTop: 10 }]}
            >
              <Text style={[styles.text, { color: "white" }]}>Done</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    gap: 15,
  },
  inputCotainer: {
    width: "90%",
    display: "flex",
    gap: 5,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: "#1A9E75",
  },
  button: {
    width: "85%",
    height: 40,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: 60,
  },
  rcContainer: {
    width: 120,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1A9E75",
    backgroundColor: "#F0FFFA",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  uploadRc: {
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(183, 183, 183, 0.7)",
    zIndex: 5,
    display: "flex",
    justifyContent: "flex-end",
  },
  uploadRcContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "70%",
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    gap: 8,
  },
  card: {
    flex: 0.45,
    borderWidth: 1,
    borderStyle: "dashed",
    backgroundColor: "#F0FFFA",
    borderRadius: 13,
    borderColor: "#1A9E75",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});

export default ActivateFast2;
