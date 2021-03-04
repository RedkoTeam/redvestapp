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
import pickStra from "../../assets/images/profile/TotalBalance.png"
import title from "../../assets/images/main/title.png"
import cash from "../../assets/images/main/btn1.png"
import as from "../../assets/images/main/btn2.png"
import Threema from "../../assets/images/Invest/step1/Threema.png" 
import bg from "../../assets/images/HomeScreen/bg.png"
import loginbtn from "../../assets/images/HomeScreen/login.png"
import signupbtn from "../../assets/images/HomeScreen/signup.png"
import { Dimensions } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar_game from "../Navbar/Navbar_game.js";
import {enableScreens} from "react-native-screens";


enableScreens(false)


function main({ navigation }) {
  useEffect(()=>{
      let mounted = true;
  })
  return (
      <View style={{flex: 1}}>  
      <ImageBackground source={bg} style={{width:widthPercentageToDP(100), height:heightPercentageToDP(100)}}>      
     
      <Image source={title} style={{resizeMode:'contain',width:widthPercentageToDP(80), height:heightPercentageToDP(15), marginTop: 20, marginLeft:'10%'}} />
    
        <ScrollView style={{height:'200%'}}>
              <View style={{  flex: 0.03, flexDirection: 'column', width: '100%', justifyContent: 'center', padding: 15, marginLeft:'3%' }}>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Game', {screen: 'stepOne'})}>
                  <Image source={cash} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(20)}} />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('Invest', {screen: 'Invest'})}>
                  <Image source={as} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(20)}}/>
                </TouchableOpacity>
                </View>

        
              </View>
              </ScrollView>


              
      </ImageBackground>
      <NavBar_game/>
     </View>
    
  )
}

export default main