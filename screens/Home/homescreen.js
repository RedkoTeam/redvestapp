import {useNavigation} from "@react-navigation/native";
import React, { useEffect, useContext } from 'react';
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView,Text} from "react-native";
import AlpacaAccountInfoContext from 'redvest/contexts/AlpacaAccountInfoContext';
import investbtn from "../../assets/images/HomeScreen/investbtn.png"
import cont from "../../assets/images/HomeScreen/reddollarcon.png"
import bg from "../../assets/images/HomeScreen/bg.png"
import loginbtn from "../../assets/images/HomeScreen/login.png"
import hometxt from "../../assets/images/HomeScreen/hometxt.png"
import premium1 from "../../assets/images/HomeScreen/aio.png"
import premium2 from "../../assets/images/HomeScreen/ait.png"
import signupbtn from "../../assets/images/HomeScreen/signup.png"
import { Dimensions } from 'react-native';
import { textStyles, colors } from 'redvest/util/styles';
import { ProgressBar, Colors } from 'react-native-paper';
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar from "../Navbar/Navbar.js";



function HomeScreen() {
    
  const {
    portfolioValue,
  } = useContext(AlpacaAccountInfoContext)
  const accountTotal = portfolioValue/1000000
  console.log(accountTotal)
  const navigation = useNavigation();
    useEffect(()=>{
        let mounted = true;



        
    })
    return (
        <View style={{flex: 1}}>  
        <ImageBackground source={bg} style={{width:widthPercentageToDP(100), height:heightPercentageToDP(100)}}>
        <ScrollView  contentContainerStyle={{flexGrow: 2}}>
        <View style={{  flex: 0.03, flexDirection: 'column', width: '100%', justifyContent: 'space-between', padding: 15, marginTop: 18 }}>
       
                <View style={{  flex: 0.03, flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 15, marginTop: 18 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                    <Image source={signupbtn} style={{resizeMode:'contain',width:widthPercentageToDP(30), height:heightPercentageToDP(5)}} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                    <Image source={loginbtn} style={{resizeMode:'contain',width:widthPercentageToDP(30), height:heightPercentageToDP(5)}}/>
                  </TouchableOpacity>
                </View>
                
                <ProgressBar
                color={Colors.green500}
          fillStyle={{}}
          backgroundStyle={{backgroundColor: '#78AC43', borderRadius: 2}}
          style={{ width: widthPercentageToDP(67), height:15, position: 'absolute', marginTop:heightPercentageToDP(15), marginLeft:widthPercentageToDP(13), backgroundColor: '#FFFFFF',padding:widthPercentageToDP(1)}}
          progress={accountTotal}
          

        />
                <View style={{  flex: 0.03, flexDirection: 'row', width: '100%', justifyContent: 'center', padding: 15, marginBottom:  "1%", marginTop:'1%'  }}>
      
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Text style={[textStyles.bigSemiBold, { color: '#78AC43',position:'absolute',marginTop:'20%', marginLeft:'40%', fontSize: actuatedNormalize(18) }] }>$ {portfolioValue}</Text>
                    <Image source={cont} style={{resizeMode:'contain',width:widthPercentageToDP(90), height:heightPercentageToDP(20)}}/>
            
                  </TouchableOpacity>
               
                </View>
                <View style={{  flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
            
                  <TouchableOpacity onPress={() => navigation.navigate('main')}>
                    <Image source={investbtn} style={{resizeMode:'contain', width:widthPercentageToDP(80), height:heightPercentageToDP(20)}}/>
                  </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center'}} >
                <Image source={hometxt} style={{resizeMode:'contain', width:widthPercentageToDP(77), height:heightPercentageToDP(15), marginTop:'2%',left:'10%'}}/>
                <View style={{  flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('stepOne')}>
                <Image source={premium1} style={{resizeMode:'contain', width:widthPercentageToDP(41), height:heightPercentageToDP(20), marginTop:'1%',right:'3%'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('stepOne')}>
                <Image source={premium2} style={{resizeMode:'contain', width:widthPercentageToDP(41), height:heightPercentageToDP(20), marginTop:'1%',left:'3%'}}/>
                </TouchableOpacity>
                </View>
                </View>
               
                </View>
                </ScrollView>
            
                
        </ImageBackground>
        <NavBar />
       </View>
      
    )
}

export default HomeScreen