import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faArrowRightLong,
  faArrowLeftLong,
  faWallet,
  faBars,
  faArrowUpFromBracket,
  faCircleXmark,
  faCircle,
  faMoneyBills,
  faMinus,
  faPlus,
  faCaretDown,
  faChevronDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./app/pages/Home";
import Navbar from "./app/components/Navbar";
import React from "react";
import Fastag from "./app/pages/AcitvateFastag";
import Header from "./app/components/Header";
import BuyFastag from "./app/pages/BuyFastag";
import { ScrollView } from "react-native-virtualized-view";
import { AppContextProvider } from "./app/context/AppContext";
import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";
import Challan from "./app/pages/Challan";

library.add(
  faBars,
  faChevronDown,
  faCaretDown,
  faBell,
  faWallet,
  faLocationDot,
  faArrowRightLong,
  faArrowLeftLong,
  faArrowUpFromBracket,
  faCircleXmark,
  faCircle,
  faMoneyBills,
  faMinus,
  faPlus,
  faAngleRight
);

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
  });

  if (fontsLoaded) {
    return (
      <AppContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: ({ route }) => {
                if (route.name === "subscreen3") {
                  return null;
                } else if (route.name === "Home") {
                  return <Navbar />;
                } else {
                  return <Header title={route.name.toString()} />;
                }
              },
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Activate FASTag" component={Fastag} />
            <Stack.Screen name="Buy FASTag" component={BuyFastag} />
            <Stack.Screen name="Pay Challan" component={Challan} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContextProvider>
    );
  }
}
function HomeScreen() {
  return (
    <ScrollView>
      <Home />
    </ScrollView>
  );
}
