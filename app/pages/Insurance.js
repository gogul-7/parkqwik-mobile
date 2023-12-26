import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Insurance1 from "../components/insurance/Insurance1";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import Insurance2 from "../components/insurance/Insurance2";
import Insurance3 from "../components/insurance/Insurance3";
import Insurance4 from "../components/insurance/Insurance4";
import Insurance5 from "../components/insurance/Insurance5";
import Insurance7 from "../components/insurance/Insurance7";
import Insurance8 from "../components/insurance/Insurance8";
import Insurance9 from "../components/insurance/Insurance9";

const InsuranceStack = createStackNavigator();

const Insurance = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <InsuranceStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance1"
        component={Insurance1}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance3"
        component={Insurance3}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance2"
        component={Insurance2}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance4"
        component={Insurance4}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance5"
        component={Insurance5}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Checkout"} />;
          },
        }}
        name="insurance7"
        component={Insurance7}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Payment Options"} />;
          },
        }}
        name="insurance8"
        component={Insurance8}
      />
      <InsuranceStack.Screen name="insurance9" component={Insurance9} />
    </InsuranceStack.Navigator>
  );
};

export default Insurance;

const Header = ({ title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={handlePress}>
        <Image
          style={{ width: 23, height: 23 }}
          source={require("../assets/images/arrowleft.png")}
        />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    paddingTop: 20,
    backgroundColor: "#1A9E75",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    paddingTop: 3,
  },
});

{
  /* <ImageBackground source={require('./assets/logos/insurancelinear.png')} style={{width:328,height:130,borderRadius:15,left:18,top:20}}>
    <View style={{flexDirection:'row',height:65}}>
    <Image source={require('./assets/logos/insur.png')} style={styles.insur}></Image>
      <Text style={styles.text1}>Get Your Car Insurance{'\n'}Today!</Text>
     
      </View>
      <Text style={{fontFamily:'Poppins-Regular',fontSize:12,color:'#FFF',left:20}}>Starting @ ₹ 799/month*</Text>
      <TouchableOpacity style={styles.btn}><Text style={{fontFamily:'Poppins-SemiBold',fontSize:10,color:'black'}}>View Plan</Text></TouchableOpacity>
    </ImageBackground>
    <View style={{width:328,height:180,backgroundColor:'white',borderRadius:15,left:20,marginTop:50,shadowColor:'black',elevation:8}}>
    <View style={{width:328,height:41,backgroundColor:'#F9F9F9',borderRadius:15,flexDirection:'row'}}>
    <View style={{backgroundColor:'#F9F9F9',flexDirection:'row',width:170,height:41,justifyContent:'center',alignItems:'center',borderRadius:15,borderBottomRightRadius:0,borderTopRightRadius:0}}>
      <Image source={require('./assets/logos/directions_car.png')} style={{width:20,height:20}}></Image>
      <Text style={{fontFamily:'Poppins-SemiBold',color:'black'}}> Car</Text>
    </View>
    <Image source={require('./assets/logos/line6.png')} style={{width:4,height:30,top:5}}></Image>
    <View style={{backgroundColor:'#F9F9F9',flexDirection:'row',width:155,height:41,justifyContent:'center',alignItems:'center',borderRadius:15,borderBottomLeftRadius:0,borderTopLeftRadius:0}}>
      <Image source={require('./assets/logos/two_wheeler.png')} style={{width:20,height:20}}></Image>
      <Text style={{fontFamily:'Poppins-SemiBold',color:'black'}}> Bike</Text>
    </View>
    </View>
    <TextInput placeholder=' Enter Your Vehicle Number' placeholderTextColor={'#AFAFAF'} style={{width:292,height:39,borderColor:'#E5E5E5',borderWidth:1,borderRadius:8,left:18,top:25,fontFamily:'Poppins-Regular',justifyContent:'center'}}></TextInput>
    <TouchableOpacity onPress={()=>navigation.navigate('Insurance1')} style={{height:41,width:292,backgroundColor:'#1A9E75',borderRadius:14,left:20,top:40,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontFamily:'Poppins-SemiBold',color:'white'}}>View Quotes</Text>
    </TouchableOpacity>

    </View>
    <View  style={{width:328,height:59,backgroundColor:'#F0FFFA',left:20,marginTop:20,borderRadius:15,shadowColor:'black',elevation:5,justifyContent:'center'}}>
    <Image source={require('./assets/logos/renew.png')} style={{width:30,height:19,left:20,top:10}}></Image>
    <Text onPress={()=>navigation.navigate('Policy1')} style={{left:50,bottom:10,fontFamily:'Poppins-Regular',color:'black'}}>  Renew Your Car Insurance</Text>
    </View>
    <Text style={{left:20,top:20,fontFamily:'Poppins-Medium',color:'black',fontSize:16,marginBottom:30}}>FAQs</Text>
    <View style={{width:328,height:56,backgroundColor:'white',shadowColor:'black',elevation:5,borderRadius:15,left:15,flexDirection:'row',gap:80,alignItems:'center',marginBottom:15}}>
     <Text style={{fontFamily:'Poppins-Regular',left:15,color:'black'}}>Why do I need car insurance ?</Text>
     <Image source={require('./assets/logos/expand_more.png')} style={{width:24,height:24}}></Image>
    </View>
    <View style={{width:328,height:56,backgroundColor:'white',shadowColor:'black',elevation:5,borderRadius:15,left:15,flexDirection:'row',gap:50,alignItems:'center',marginBottom:15}}>
     <Text style={{fontFamily:'Poppins-Regular',left:15,color:'black'}}>What does car insurance typically {'\n'} cover ?</Text>
     <Image source={require('./assets/logos/expand_more.png')} style={{width:24,height:24}}></Image>
    </View>
    <View style={{width:328,height:56,backgroundColor:'white',shadowColor:'black',elevation:5,borderRadius:15,left:15,flexDirection:'row',gap:30,alignItems:'center'}}>
     <Text style={{fontFamily:'Poppins-Regular',left:15,color:'black'}}>Is it necessary to notify my insurnance{'\n'}company if I modify my car ?</Text>
     <Image source={require('./assets/logos/expand_more.png')} style={{width:24,height:24}}></Image>
    </View> */
}
