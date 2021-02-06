import {useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView} from "react-native";
import investbtn from "../../assets/images/HomeScreen/investbtn.png"
import playbtn from "../../assets/images/HomeScreen/playbtn.png"
import cont from "../../assets/images/HomeScreen/reddollarcon.png"
import AIone from "../../assets/images/Invest/step1/AIone.png"
import AItwo from "../../assets/images/Invest/step1/AItwo.png"
import MACD from "../../assets/images/Invest/step1/MACD.png"
import RSI from "../../assets/images/Invest/step1/RSI.png"
import DUAL from "../../assets/images/Invest/step1/DualMa.png"
import pickStra from "../../assets/images/profile/TotalBalance.png"
import settings from "../../assets/images/profile/settings.png"
import cash from "../../assets/images/profile/Cashbalance.png"
import as from "../../assets/images/profile/activestrat.png"
import orders from "../../assets/images/profile/orders.png"
import hist from "../../assets/images/profile/history.png"
import Threema from "../../assets/images/Invest/step1/Threema.png" 
import bg from "../../assets/images/HomeScreen/bg.png"
import loginbtn from "../../assets/images/HomeScreen/login.png"
import signupbtn from "../../assets/images/HomeScreen/signup.png"
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar_game from "../Navbar/Navbar_game.js";
import {enableScreens} from "react-native-screens";
import { Dimensions } from "react-native";
import {LineChart} from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(118, 159, 35,  ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const screenWidth = Dimensions.get("window").width;

enableScreens(false)


function Profile() {
  const navigation = useNavigation();
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 123],
        color: (opacity = 1) => `rgba(118, 159, 35, ${opacity})`, // optional
        strokeWidth: 4 // optional
      }
    ],
    //legend: [""] // optional
  };
  useEffect(()=>{
      let mounted = true;
  })
  return (
      <View style={{flex: 1}}>  
      <ImageBackground source={bg} style={{width:widthPercentageToDP(100), height:heightPercentageToDP(100)}}>      
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 25, marginTop: 5,marginBottom:'-15%' }}>
      <Image source={pickStra} style={{resizeMode:'contain',width:widthPercentageToDP(50), height:heightPercentageToDP(10), marginTop: 20, marginLeft:'10%'}} />
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 25, marginTop: '20%',marginBottom:'10%', right:'80%' }}>
      <LineChart
  data={data}
  width={screenWidth}
  height={256}
  verticalLabelRotation={30}
  chartConfig={chartConfig}
  bezier
/>
</View>
              <TouchableOpacity onPress={() => navigation.navigate('SubscriptionScreen')}>
              <Image source={settings} style={{resizeMode: 'contain',width: widthPercentageToDP(7),height: heightPercentageToDP(16)}} />
              </TouchableOpacity>
          </View>


        <ScrollView style={{height:'200%'}}>
              <View style={{  flex: 0.03, flexDirection: 'column', width: '100%', justifyContent: 'center', padding: 15, marginLeft:'3%' }}>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('stepTwo')}>
                  <Image source={cash} style={{resizeMode:'contain',width:widthPercentageToDP(40), height:heightPercentageToDP(8)}} />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('ActiveStrategies')}>
                  <Image source={as} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(7)}}/>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('orders')}>
                  <Image source={orders} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(7)}} />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('history')}>
                  <Image source={hist} style={{resizeMode:'contain',width:widthPercentageToDP(85), height:heightPercentageToDP(7)}}/>
                </TouchableOpacity>
                </View>
        
              </View>
              </ScrollView>


              
      </ImageBackground>
      <NavBar_game/>
     </View>
    
  )
}

export default Profile