import {useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView} from "react-native";
import back from "../../assets/images/Invest/step4/back.png"
import hist from "../../assets/images/signup/SignUp.png"
import bg from "../../assets/images/HomeScreen/bg.png"
import { Dimensions } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar_game from "../Navbar/Navbar_game.js";
import {enableScreens} from "react-native-screens";
import next from "../../assets/images/signup/signupbtn.png"




function SignUp() {
  const navigation = useNavigation();

  return (
      <View style={{flex: 1}}>  
       <ImageBackground source={bg} style={{width:widthPercentageToDP(100), height:heightPercentageToDP(100)}}>      
      
      <View style={{ padding:15,marginTop:heightPercentageToDP(0), justifyContent:'center', marginLeft:widthPercentageToDP(1)}}>
      <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} style={{
                                    left:widthPercentageToDP(3),
                                    top:heightPercentageToDP(3),
                                }}>
                                        <Image source={back} style={{width :widthPercentageToDP('3'), height :heightPercentageToDP('3'), resizeMode:'contain'}} />
                        </TouchableOpacity>    

                </View>
     
       





              
      </ImageBackground>
     
     </View>
    
  )
}

export default SignUp