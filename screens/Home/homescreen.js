import {useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView} from "react-native";
import investbtn from "../../assets/images/HomeScreen/investbtn.png"
import playbtn from "../../assets/images/HomeScreen/playbtn.png"
import cont from "../../assets/images/HomeScreen/reddollarcon.png"
import bg from "../../assets/images/HomeScreen/bg.png"
import loginbtn from "../../assets/images/HomeScreen/login.png"
import hometxt from "../../assets/images/HomeScreen/hometxt.png"
import premium from "../../assets/images/HomeScreen/premium.png"
import signupbtn from "../../assets/images/HomeScreen/signup.png"
import { Dimensions } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
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
        <ScrollView >
        <View style={{  flex: 0.03, flexDirection: 'column', width: '100%', justifyContent: 'space-between', padding: 15, marginTop: 18 }}>
       
                <View style={{  flex: 0.03, flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 15, marginTop: 18 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Image source={signupbtn} style={{resizeMode:'contain',width:widthPercentageToDP(30), height:heightPercentageToDP(5)}} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Image source={loginbtn} style={{resizeMode:'contain',width:widthPercentageToDP(30), height:heightPercentageToDP(5)}}/>
                  </TouchableOpacity>
                </View>
                <ProgressBar
                color={Colors.green500}
          fillStyle={{}}
          backgroundStyle={{backgroundColor: '#78AC43', borderRadius: 2}}
          style={{ width: widthPercentageToDP(67), height:15, position: 'absolute', marginTop:heightPercentageToDP(15), marginLeft:widthPercentageToDP(13), backgroundColor: '#FFFFFF',padding:widthPercentageToDP(1)}}
          progress={0.5}
        />
                <View style={{  flex: 0.03, flexDirection: 'row', width: '100%', justifyContent: 'center', padding: 15, marginBottom:  "1%", marginTop:'1%'  }}>
      
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Image source={cont} style={{resizeMode:'contain',width:widthPercentageToDP(90), height:heightPercentageToDP(20)}}/>
            
                  </TouchableOpacity>
               
                </View>
                <View style={{  flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('main')}>
                    <Image source={playbtn} style={{resizeMode:'contain',width:widthPercentageToDP(41), marginRight:widthPercentageToDP(4),height:heightPercentageToDP(20)}} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('stepOne')}>
                    <Image source={investbtn} style={{resizeMode:'contain', width:widthPercentageToDP(41), height:heightPercentageToDP(20)}}/>
                  </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center'}} >
                <Image source={hometxt} style={{resizeMode:'contain', width:widthPercentageToDP(77), height:heightPercentageToDP(15), marginTop:'2%',left:'10%'}}/>
                <TouchableOpacity onPress={() => navigation.navigate('stepOne')}>
                <Image source={premium} style={{resizeMode:'contain', width:widthPercentageToDP(80), height:heightPercentageToDP(20), marginTop:'3%',left:'10%'}}/>
                </TouchableOpacity>
                </View>
               
                </View>
                </ScrollView>
            
                
        </ImageBackground>
        <NavBar />
       </View>
      
    )
}

export default HomeScreen