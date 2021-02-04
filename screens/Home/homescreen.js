import {useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView} from "react-native";
import investbtn from "../../assets/images/HomeScreen/investbtn.png"
import playbtn from "../../assets/images/HomeScreen/playbtn.png"
import cont from "../../assets/images/HomeScreen/reddollarcon.png"
import bg from "../../assets/images/HomeScreen/bg.png"
import loginbtn from "../../assets/images/HomeScreen/login.png"
import signupbtn from "../../assets/images/HomeScreen/signup.png"
import { Dimensions } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar from "../Navbar/Navbar.js";


function HomeScreen() {
    
    const navigation = useNavigation();
    useEffect(()=>{
        let mounted = true;
    })
    return (
        <View style={{flex: 1}}>  
        <ImageBackground source={bg} style={{width:widthPercentageToDP(100), height:heightPercentageToDP(100)}}>
                <View style={{  flex: 0.03, flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 15, marginTop: 18 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Image source={signupbtn} style={{resizeMode:'contain',width:widthPercentageToDP(30), height:heightPercentageToDP(5)}} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Image source={loginbtn} style={{resizeMode:'contain',width:widthPercentageToDP(30), height:heightPercentageToDP(5)}}/>
                  </TouchableOpacity>
                </View>
                <View style={{  flex: 0.03, flexDirection: 'row', width: '100%', justifyContent: 'center', padding: 15, marginBottom:  "5%"  }}>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Image source={cont} style={{resizeMode:'contain',width:widthPercentageToDP(90), height:heightPercentageToDP(20)}}/>
                  </TouchableOpacity>
                </View>
                <View style={{  flex: 0.03, flexDirection: 'row', width: '100%', justifyContent: 'space-between',padding: 15, marginTop: "10%" }}>
                <TouchableOpacity onPress={() => navigation.navigate('stepOne')}>
                    <Image source={playbtn} style={{resizeMode:'contain',width:widthPercentageToDP(45), height:heightPercentageToDP(40)}} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('stepOne')}>
                    <Image source={investbtn} style={{resizeMode:'contain', width:widthPercentageToDP(45), height:heightPercentageToDP(40)}}/>
                  </TouchableOpacity>
                </View>

                
        </ImageBackground>
        <NavBar />
       </View>
      
    )
}

export default HomeScreen