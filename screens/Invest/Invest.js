import {useNavigation} from "@react-navigation/native";
import React, {useEffect,useState} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView,} from "react-native";
import price from "../../assets/images/manual/price.png"
import qty from "../../assets/images/manual/qty.png"
import stoploss from "../../assets/images/manual/stoploss.png"
import ticker from "../../assets/images/manual/ticker.png"
import title from "../../assets/images/manual/title.png"
import time from "../../assets/images/manual/time.png"
import type from "../../assets/images/manual/type.png"
import bg from "../../assets/images/HomeScreen/bg.png"
import loginbtn from "../../assets/images/HomeScreen/login.png"
import signupbtn from "../../assets/images/HomeScreen/signup.png"
import { Dimensions } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar_game from "../Navbar/Navbar_game.js";
import {enableScreens} from "react-native-screens";
import RNPickerSelect from 'react-native-picker-select';
import Slider from '@react-native-community/slider';
import primary from "../../assets/images/Invest/step5/investbtn.png"




enableScreens(false)


function Invest() {
  const navigation = useNavigation();
  const [sliderValue1, setSliderValue1] = useState(15);
  const [sliderValue2, setSliderValue2] = useState(15);
  useEffect(()=>{
      let mounted = true;
  })
  return (
      <View style={{flex: 1}}>  
      <ImageBackground source={bg} style={{width:widthPercentageToDP(100), height:heightPercentageToDP(100)}}>      
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 25, marginTop: 5,marginBottom:'-15%' }}>
      <Image source={title} style={{resizeMode:'contain',width:widthPercentageToDP(80), height:heightPercentageToDP(10), marginTop: 20, marginLeft:'0%'}} />
      
          </View>
        <ScrollView style={{height:'200%'}}>
              <View style={{  flex: 0.03, flexDirection: 'column', width: '100%', justifyContent: 'center', padding: 15, marginLeft:'3%' }}>
                
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('tickerInfo')}>
                  <Image source={ticker} style={{resizeMode:'contain',width:widthPercentageToDP(45), height:heightPercentageToDP(8)}} />
                </TouchableOpacity>
                <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Apple', value: 'APPL' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={price} style={{resizeMode:'contain',width:widthPercentageToDP(30), height:heightPercentageToDP(5)}}/>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Image source={qty} style={{resizeMode:'contain',width:widthPercentageToDP(9), height:heightPercentageToDP(5)}} />
                </TouchableOpacity>
                <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#78AC43"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue1}
          onValueChange={(sliderValue1) => setSliderValue1(sliderValue1)}
        />
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('typeInfo')}>
                  <Image source={type} style={{resizeMode:'contain',width:widthPercentageToDP(40), height:heightPercentageToDP(7)}}/>
                </TouchableOpacity>
                <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Apple', value: 'APPL' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('tfInfo')}>
                  <Image source={time} style={{resizeMode:'contain',width:widthPercentageToDP(45), height:heightPercentageToDP(7)}}/>
                </TouchableOpacity>
                <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Apple', value: 'APPL' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('slInfo')}>
                  <Image source={stoploss} style={{resizeMode:'contain',width:widthPercentageToDP(40), height:heightPercentageToDP(7)}}/>
                </TouchableOpacity>
                <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#EB5757"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue2}
          onValueChange={(sliderValue2) => setSliderValue2(sliderValue2)}
        />
                </View>
        
              </View>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                  <Image source={primary} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(11),marginTop:'10%',left:'7%'}}/>
                </TouchableOpacity>
                </View>
       
              </ScrollView>

              
      </ImageBackground>
      <NavBar_game/>
     </View>
    
  )
}

export default Invest