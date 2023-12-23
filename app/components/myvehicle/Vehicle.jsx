import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
  Modal,
  Image,
} from "react-native";
import { useState, React } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Vehicle() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [image, setImage] = useState();

  const [color, setColor] = useState({ colorid: 0 });
  const navigation = useNavigation();

  // const handleAddTask = () => {
  //     if (task) {
  //         if (editIndex !== -1) {

  //             const updatedTasks = [...tasks];
  //             updatedTasks[editIndex] = task;
  //             setTasks(updatedTasks);
  //             setEditIndex(-1);
  //         } else {
  //             // Add new vehicle
  //             setTasks([...tasks, task]);
  //         }
  //         setTask("");
  //     }
  // };

  // const handleEditTask = (index) => {
  //     const taskToEdit = tasks[index];
  //     setTask(taskToEdit);
  //     setEditIndex(index);
  // };

  // const handleDeleteTask = (index) => {
  //     const updatedTasks = [...tasks];
  //     updatedTasks.splice(index, 1);
  //     setTasks(updatedTasks);
  // };

  // const renderItem = ({ item, index })=>(
  //     <View style={styles.task}>

  //         <Text
  //             style={styles.itemList}> {item}</Text>
  //         <View
  //             style={styles.taskButtons}>
  //             <TouchableOpacity
  //                 onPress={() => handleEditTask(index)}>
  //                 <Text
  //                     style={styles.editButton}> {`\u270e`} Edit</Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //                 onPress={() => handleDeleteTask(index)}>
  //                 <Text
  //                     style={styles.deleteButton}> {`\u2421`}Delete</Text>
  //             </TouchableOpacity>
  //         </View>
  //     </View>

  // );
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
      <View style={styles.vehiclef}>
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

      {/* <TouchableOpacity style={styles.save} onPress={handleAddTask}>
    
    <Text style={styles.savet}>{editIndex !==-1 ? "Update Vehicle" :"Add Vehicle" }</Text></TouchableOpacity>

    <FlatList data={tasks} renderItem={renderItem} keyExtractor={(item,index)=> index.toString()}/> */}

      <TouchableOpacity
        onPress={() => navigation.navigate("vehicle2")}
        style={styles.btn}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins_600SemiBold",
            fontSize: 16,
          }}
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
    gap: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "94%",
  },
  red: {
    backgroundColor: "#f2fffb",
    shadowColor: "black",
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    width: 103,
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
    width: 103,
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
});
