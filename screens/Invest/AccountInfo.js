import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useContext } from 'react';
import AuthContext from 'redvest/contexts/AuthContext';
import AlpacaAccountInfoContext from 'redvest/contexts/AlpacaAccountInfoContext';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View, ScrollView, Text } from 'react-native';
import pickStra from '../../assets/images/profile/AccountSummary.png';
import { textStyles, colors } from 'redvest/util/styles';
import settings from '../../assets/images/profile/settings.png';
import cashBalance from '../../assets/images/profile/Cash_Balance.png';
import bp from '../../assets/images/profile/bp.png';
import lmv from '../../assets/images/profile/lmv.png';
import pv from '../../assets/images/profile/pv.png';
import bg from '../../assets/images/HomeScreen/bg.png';
import { widthPercentageToDP, heightPercentageToDP } from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar_pro from '../Navbar/Navbar_pro.js';
import { enableScreens } from 'react-native-screens';
import { Dimensions } from 'react-native';
//import alpacaApi from '../services/alpaca'
import { LineChart } from 'react-native-chart-kit';
import CustomButton from 'redvest/components/CustomButton';
import back from "../../assets/images/Invest/step3a/back.png";



const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(118, 159, 35,  ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const screenWidth = Dimensions.get('window').width;

enableScreens(false);

function AccountInfo() {
  const { singOutAsync } = useContext(AuthContext);
  const {
    buyingPower,
    cash,
    longMarketValue,
    portfolioValue,
    portfolioTimestamp,
    portfolioEquity,
  } = useContext(AlpacaAccountInfoContext);


 

  const navigation = useNavigation();
  
  useEffect(() => {
    let mounted = true;
  });
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={bg}
        style={{ width: widthPercentageToDP(100), height: heightPercentageToDP(100) }}
      >
   
   <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{
              left: widthPercentageToDP(3),
              top: heightPercentageToDP(3),
            }}
          >
            <Image
              source={back}
              style={{
                width: widthPercentageToDP("3"),
                height: heightPercentageToDP("3"),
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <Image
            source={pickStra}
            style={{
              resizeMode: "contain",
              width: widthPercentageToDP(80),
              height: heightPercentageToDP(10),
              marginTop: "15%",
              left: "-20%",
            }}
          />
        </View>

        <ScrollView
          style={{ height: '200%', flex: 1 }}
          contentContainerStyle={{ alignItems: 'center' }}
        >
          
         
          <View
            style={{
              flex: 0.03,
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'center',
              padding: 15,
              marginLeft: '3%',
            }}
          >
            <View style={{
            flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Image
                  source={cashBalance}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(35),
                    height: heightPercentageToDP(7),
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.screenTitle, textStyles.bigRegular, {marginLeft:'30%', marginTop:'5%', fontSize:actuatedNormalize (15)}]}>$ {cashBalance}</Text>
            </View>
            <View style={{
            flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Image
                  source={bp}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(35),
                    height: heightPercentageToDP(7),
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.screenTitle, textStyles.bigRegular, {marginLeft:'30%', marginTop:'5%', fontSize:actuatedNormalize (15)}]}>$ {buyingPower}</Text>
            </View>
            <View style={{
            flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Image
                  source={lmv}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(45),
                    height: heightPercentageToDP(7),
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.screenTitle, textStyles.bigRegular, {marginLeft:'19%', marginTop:'5%', fontSize:actuatedNormalize (15)}]}>$ {longMarketValue}</Text>
            </View>

            <View style={{
            flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Image
                  source={pv}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(35),
                    height: heightPercentageToDP(7),
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.screenTitle, textStyles.bigRegular, {marginLeft:'30%', marginTop:'5%', fontSize:actuatedNormalize (15)}]}>$ {portfolioValue}</Text>
            </View>

            
           
          </View>
        </ScrollView>
      </ImageBackground>
      <NavBar_pro />
    </View>
  );
}
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.darkBackground,
    minHeight: Math.round(Dimensions.get('window').height / 2),
    paddingHorizontal: widthPercentageToDP(5),
  },
  screenTitle: {
    color: colors.offWhite,
    width: '100%',
  },
  scrollView: {
    marginVertical: heightPercentageToDP(3),
    paddingHorizontal: widthPercentageToDP(5),
    width: '100%',
  },
  inputContainer: {
    marginBottom: heightPercentageToDP(3),
  },
});

export default AccountInfo;
