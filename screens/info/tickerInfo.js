import {useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView} from "react-native";
import ticker from "../../assets/images/Info/Ticker.png"
import bg from "../../assets/images/HomeScreen/bg.png"
import { Dimensions } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar_game from "../Navbar/Navbar_game.js";
import {enableScreens} from "react-native-screens";
import back from "../../assets/images/Invest/step4/back.png"


enableScreens(false)


function tickerInfo() {
  const navigation = useNavigation();
  useEffect(()=>{
      let mounted = true;
  })
  return (
      <View style={{flex: 1}}>  
      <ImageBackground source={bg} style={{width:widthPercentageToDP(100), height:heightPercentageToDP(100)}}>      
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 10, marginTop: 5 }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Invest')} style={{
                                    left:widthPercentageToDP(3),
                                    top:heightPercentageToDP(3),
                                }}>
                                        <Image source={back} style={{width :widthPercentageToDP('3'), height :heightPercentageToDP('3'), resizeMode:'contain'}} />
                        </TouchableOpacity>
                        <Image source={ticker} style={{resizeMode:'contain',width:widthPercentageToDP(75), height:heightPercentageToDP(25), marginBottom: '-20%', left:'-20%'}} />
                    </View>

        <ScrollView style={{height:'200%'}}>
              <View style={{  flex: 0.03, flexDirection: 'column', width: '100%', justifyContent: 'center', padding: 15, marginLeft:'3%' }}>
  
        
              </View>
              </ScrollView>


              
      </ImageBackground>
      <NavBar_game/>
     </View>
    
  )
}

export default tickerInfo