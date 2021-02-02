import {useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView} from "react-native";
import back from "../../assets/images/Invest/step3/back.png"
import cashRes from "../../assets/images/Invest/step3/cashRes.png"
import cont from "../../assets/images/Invest/step3/cont.png"
import next from "../../assets/images/Invest/step3/next.png"
import title from "../../assets/images/Invest/step3/title.png"
import totalInv from "../../assets/images/Invest/step3/totalInv.png" 
import bg from "../../assets/images/HomeScreen/bg.png"
import { Dimensions } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar_game from "../Navbar/Navbar_game.js";

function stepThree() {
  const navigation = useNavigation();
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
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={cont} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(40)}} />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={cashRes} style={{resizeMode:'contain',width:widthPercentageToDP(26), height:heightPercentageToDP(5)}}/>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={totalInv} style={{resizeMode:'contain',width:widthPercentageToDP(26), height:heightPercentageToDP(3)}} />
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity onPress={() => navigation.navigate('stepThreea')}>
                  <Image source={next} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(11)}}/>
                </TouchableOpacity>
                </View>
              </View>
              </ScrollView>


              
      </ImageBackground>
      <NavBar_game/>
     </View>
    
  )
}

export default stepThree