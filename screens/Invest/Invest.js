import {useNavigation} from "@react-navigation/native";
import React, {useEffect,useState} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView,} from "react-native";
import price from "../../assets/images/manual/price.png"
import db from "../../util/firestore/firestore";
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
import * as firebase from "firebase";
//import alpacaApi from '../services/alpaca';




enableScreens(false)


function Invest({route}) {
  const navigation = useNavigation();
  const [sTicker, setsTicker] = useState('')
  const [sPrice, setsPrice] = useState('')
  const [sQty, setsQty] = useState('')
  const [oType, setoType] = useState('')
  const [tForce, settForce] = useState('')
  const [sLoss, setsLoss] = useState('')
  useEffect(()=>{
      let mounted = true;
  })


  const profileUpload = () => {
    db.collection('users').doc(firebase.auth().currentUser.uid).set({
        stockTicker: sTicker,
        stockPrice: sPrice,
        stockQty: sQty,
        orderType: oType,
        timeForce: tForce,
        stopLoss: sLoss,
    }, {merge: true})
        .then(() => {
            navigation.navigate('')
        })
}


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
                {/*stock ticker should show after being selected , values should be taken from an equation */}
                <RNPickerSelect
            onValueChange={sTicker => setsTicker(sTicker)}
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
          value={sQty}
          onValueChange={(sQty) => setsQty(sQty)}
        />
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('typeInfo')}>
                  <Image source={type} style={{resizeMode:'contain',width:widthPercentageToDP(40), height:heightPercentageToDP(7)}}/>
                </TouchableOpacity>
                <RNPickerSelect
            onValueChange={(oType) => setoType(oType)}
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
            onValueChange={(tForce) => settForce(tForce)}
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
          value={sLoss}
          onValueChange={(sLoss) => setsLoss(sLoss)}
        />
                </View>
        
              </View>
              <View>
                <TouchableOpacity onPress={() => profileUpload()}>
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