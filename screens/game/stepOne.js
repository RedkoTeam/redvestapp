import React, { useEffect, useContext } from 'react';
import GameContext from 'redvest/contexts/GameContext';
import { Image, ImageBackground, Linking, TouchableOpacity, View, ScrollView } from 'react-native';
import AIone from '../../assets/images/Invest/step1/AIone.png';
import AItwo from '../../assets/images/Invest/step1/AItwo.png';
import MACD from '../../assets/images/Invest/step1/MACD.png';
import RSI from '../../assets/images/Invest/step1/RSI.png';
import DUAL from '../../assets/images/Invest/step1/DualMa.png';
import pickStra from '../../assets/images/Invest/step1/pickStra.png';
import Threema from '../../assets/images/Invest/step1/Threema.png';
import bg from '../../assets/images/HomeScreen/bg.png';
import { widthPercentageToDP, heightPercentageToDP } from '../../util/scaler';
import { enableScreens } from 'react-native-screens';
import back from '../../assets/images/Invest/step3a/back.png';
import NavBar_game from '../Navbar/Navbar_game';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA } from 'redvest/schema/gameSchema';

enableScreens(false);

function stepOne({ navigation }) {
  const { updateFormData } = useContext(GameContext);

  const { control, errors, handleSubmit } = useForm({
    //resolver: yupResolver(SCHEMA),
  });
  const onSubmit = (data) => {
    updateFormData(data);
    navigation.navigate('');
  };

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
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            marginTop: widthPercentageToDP(7),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('main')}
            style={{
              left: widthPercentageToDP(0),
              top: heightPercentageToDP(3),
            }}
          >
            <Image
              source={back}
              style={{
                width: widthPercentageToDP('3'),
                height: heightPercentageToDP('3'),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <Image
            source={pickStra}
            style={{
              resizeMode: 'contain',
              width: widthPercentageToDP(75),
              height: heightPercentageToDP(10),
              marginTop: '10%',
              marginBottom: '0%',
            }}
          />
        </View>
        <ScrollView style={{ height: '100%' }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'space-between',
              padding: 15,
              marginLeft: '3%',
            }}
          >
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('macd')}>
                <Image
                  source={MACD}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                    marginBottom: '1%',
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('dualma')}>
                <Image
                  source={DUAL}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                    marginBottom: heightPercentageToDP(1),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('rsi')}>
                <Image
                  source={RSI}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                    marginBottom: heightPercentageToDP(1),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('threema')}>
                <Image
                  source={Threema}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                    marginBottom: heightPercentageToDP(1),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image
                  source={AIone}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                    marginBottom: heightPercentageToDP(1),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image
                  source={AItwo}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                    marginBottom: heightPercentageToDP(1),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <NavBar_game />
    </View>
  );
}

export default stepOne;
