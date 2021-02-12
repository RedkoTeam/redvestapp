import {useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView} from "react-native";
import back from "../../assets/images/Invest/step4/back.png"
import hist from "../../assets/images/Info/rsi.png"
import bg from "../../assets/images/HomeScreen/bg.png"
import { Dimensions } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar_game from "../Navbar/Navbar_game.js";
import {enableScreens} from "react-native-screens";
import next from "../../assets/images/Invest/step4/next.png"


enableScreens(false)


function rsi() {
  const navigation = useNavigation();
  useEffect(()=>{
      let mounted = true;
  })
  return (
      <View style={{flex: 1}}>  
       <ImageBackground source={bg} style={{width:widthPercentageToDP(100), height:heightPercentageToDP(100)}}>      
      
      <View style={{ padding:18,marginTop:'15%', justifyContent:'center', right:'5%'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} style={{
                                    left:widthPercentageToDP(3),
                                    top:heightPercentageToDP(0),
                                }}>
                                        <Image source={back} style={{width :widthPercentageToDP('3'), height :heightPercentageToDP('3'), resizeMode:'contain'}} />
                        </TouchableOpacity>
               
                  <Image source={hist} style={{resizeMode:'contain',width:widthPercentageToDP(70), height:heightPercentageToDP(70),marginTop:'-35%',left:'20%'}}/>
               
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('stepTwo')}>
                  <Image source={next} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(11),left:'8%'}}/>
                </TouchableOpacity>
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

export default rsi