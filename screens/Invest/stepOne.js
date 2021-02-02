import {useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView} from "react-native";
import investbtn from "../../assets/images/HomeScreen/investbtn.png"
import playbtn from "../../assets/images/HomeScreen/playbtn.png"
import cont from "../../assets/images/HomeScreen/reddollarcon.png"
import AIone from "../../assets/images/Invest/step1/AIone.png"
import AItwo from "../../assets/images/Invest/step1/AItwo.png"
import MACD from "../../assets/images/Invest/step1/MACD.png"
import RSI from "../../assets/images/Invest/step1/RSI.png"
import DUAL from "../../assets/images/Invest/step1/DualMa.png"
import pickStra from "../../assets/images/Invest/step1/pickStra.png"
import Threema from "../../assets/images/Invest/step1/Threema.png" 
import bg from "../../assets/images/HomeScreen/bg.png"
import loginbtn from "../../assets/images/HomeScreen/login.png"
import signupbtn from "../../assets/images/HomeScreen/signup.png"
import { Dimensions } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar_game from "../Navbar/Navbar_game.js";

function stepOne() {
  const navigation = useNavigation();
  useEffect(()=>{
      let mounted = true;
  })
  return (
      <View style={{flex: 1}}>  
      <ImageBackground source={bg} style={{width:widthPercentageToDP(100), height:heightPercentageToDP(100)}}>
      <Image source={pickStra} style={{resizeMode:'contain',width:widthPercentageToDP(80), height:heightPercentageToDP(15)}} />
        <ScrollView style={{height:'200%'}}>
              <View style={{  flex: 0.03, flexDirection: 'column', width: '100%', justifyContent: 'center', padding: 15, marginTop: 18 }}>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={MACD} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(13)}} />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={DUAL} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(13)}}/>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={RSI} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(13)}} />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={Threema} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(13)}}/>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={AIone} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(13)}} />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={AItwo} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(13)}}/>
                </TouchableOpacity>
                </View>
              </View>
              </ScrollView>


              
      </ImageBackground>
      <NavBar_game/>
     </View>
    
  )
}

export default stepOne