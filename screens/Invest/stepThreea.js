import {useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView} from "react-native";
import back from "../../assets/images/Invest/step3a/back.png"
import Weekly from "../../assets/images/Invest/step3a/Weekly.png"
import Daily from "../../assets/images/Invest/step3a/Daily.png"
import next from "../../assets/images/Invest/step3a/next.png"
import title from "../../assets/images/Invest/step3a/title.png"
import Monthly from "../../assets/images/Invest/step3a/Monthly.png" 
import Custom from "../../assets/images/Invest/step3a/Custom.png" 
import bg from "../../assets/images/HomeScreen/bg.png"
import { Dimensions } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar_game from "../Navbar/Navbar_game.js";
import {enableScreens} from "react-native-screens";


enableScreens(false)

function stepThreea() {
  const navigation = useNavigation();
  useEffect(()=>{
      let mounted = true;
  })
  return (
      <View style={{flex: 1}}>  
      <ImageBackground source={bg} style={{width:widthPercentageToDP(100), height:heightPercentageToDP(100)}}>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 10, marginTop: 5 }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('stepThree')} style={{
                                    left:widthPercentageToDP(3),
                                    top:heightPercentageToDP(3),
                                }}>
                                        <Image source={back} style={{width :widthPercentageToDP('3'), height :heightPercentageToDP('3'), resizeMode:'contain'}} />
                        </TouchableOpacity>
                        <Image source={title} style={{resizeMode:'contain',width:widthPercentageToDP(80), height:heightPercentageToDP(15), marginTop: '10%', left:'-20%'}} />
                    </View>
        <ScrollView style={{height:'200%'}}>
              <View style={{  flex: 0.03, flexDirection: 'column', width: '100%', justifyContent: 'center', padding: 15, marginLeft:'3%' }}>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={Daily} style={{resizeMode:'contain',width:widthPercentageToDP(16), height:heightPercentageToDP(3)}}/>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={Weekly} style={{resizeMode:'contain',width:widthPercentageToDP(20), height:heightPercentageToDP(3)}}/>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={Monthly} style={{resizeMode:'contain',width:widthPercentageToDP(22), height:heightPercentageToDP(3)}} />
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity onPress={() => navigation.navigate('stepFour')}>
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

export default stepThreea