import {useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView} from "react-native";
import back from "../../assets/images/Invest/step4/back.png"
import title from "../../assets/images/signup/SignUp.png"
import emailtxt from "../../assets/images/signup/Email.png"
import passwordtxt from "../../assets/images/signup/Password.png"
import forgottxt from "../../assets/images/signup/Forgot.png"
import bg from "../../assets/images/HomeScreen/bg.png"
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
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
                <Image source={title} style={{marginTop:'10%', width :widthPercentageToDP('30'), height :heightPercentageToDP('5'), resizeMode:'contain',  marginLeft:widthPercentageToDP(15)}}/>
                <Image source={emailtxt} style={{marginTop:'10%', width :widthPercentageToDP('12'), height :heightPercentageToDP('5'), resizeMode:'contain',  marginLeft:widthPercentageToDP(15)}}/>
                <Image source={passwordtxt} style={{marginTop:'10%', width :widthPercentageToDP('20'), height :heightPercentageToDP('5'), resizeMode:'contain',  marginLeft:widthPercentageToDP(15)}}/>
                <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} style={{
                                      left:widthPercentageToDP(3),
                                      top:heightPercentageToDP(3),
                                  }}>
                <Image source={forgottxt} style={{marginTop:'10%', width :widthPercentageToDP('40'), height :heightPercentageToDP('5'), resizeMode:'contain',  marginLeft:widthPercentageToDP(45)}}/>
                </TouchableOpacity>  
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                  <Image source={next} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(11),left:'8%', marginTop:heightPercentageToDP(11) }}/>
                </TouchableOpacity>
                </View>
         
     
       





              
      </ImageBackground>
     
     </View>
    
  )
}

export default SignUp