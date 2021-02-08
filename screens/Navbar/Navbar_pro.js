// Home button changed
import {useNavigation} from "@react-navigation/native";
import {Image, View} from "react-native";
import {TouchableOpacity} from 'react-native';
import React, {useEffect, useState}  from "react";
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler'
import home from "../../assets/images/Navbar/Tab1.png"
import game from "../../assets/images/Navbar/Tab2.png"
import investt from "../../assets/images/Navbar/Tab4.png"
import profileg from "../../assets/images/Navbar/Tab3g.png"
import navbarcont from "../../assets/images/Navbar/Home.png"



function NavBar_pro({}){
    const navigation = useNavigation();

    
    return(
        <View style={{ backgroundColor:'#070631',  alignItems:'center', alignContent:'center',width: widthPercentageToDP('100') }}>
        <Image source={navbarcont} style={{ position: 'absolute', bottom: heightPercentageToDP(4), width: widthPercentageToDP('100')}} />
      <View style={{flexDirection:'row', width:'100%', justifyContent: 'center', paddingBottom:10}}>
            <TouchableOpacity onPress={() => { 
                    navigation.navigate('HomeScreen')
                }}>
                    <Image source={home} style={{bottom: heightPercentageToDP('13'),resizeMode:'contain',width:widthPercentageToDP(27), height:heightPercentageToDP(15) }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { 
                    navigation.navigate('Invest')
                }}>
                    <Image source={game} style={{bottom: heightPercentageToDP('13'),resizeMode:'contain',width:widthPercentageToDP(27), height:heightPercentageToDP(15)}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>{
                    navigation.navigate('stepOne')
                }}>
                    <Image source={investt} style={{bottom: heightPercentageToDP('13'),resizeMode:'contain',width:widthPercentageToDP(27), height:heightPercentageToDP(15)}}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Profile')
                    }}>
                    <Image source={profileg} style={{ bottom: heightPercentageToDP('13'),resizeMode:'contain',width:widthPercentageToDP(27), height:heightPercentageToDP(15)}}/>
                </TouchableOpacity>
                    
            </View>
        </View>
    )
}

export default NavBar_pro