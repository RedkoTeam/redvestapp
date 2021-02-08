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
import Navbar_game from "../Navbar/Navbar_game.js";
import {enableScreens} from "react-native-screens";


enableScreens(false)

function stepThree() {
  const navigation = useNavigation();
  useEffect(()=>{
      let mounted = true;
  })
  return (
      <View style={{flex: 1}}>  
      <ImageBackground source={bg} style={{width:widthPercentageToDP(100), height:heightPercentageToDP(100)}}>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 10, marginTop: 5 }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('stepTwo')} style={{
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
      <Navbar_game/>
     </View>
    
  )
}

export default stepThree