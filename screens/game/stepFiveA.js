import React, { useEffect, useContext } from 'react';
import { Image, ImageBackground, Linking, TouchableOpacity, View, ScrollView } from 'react-native';
import back from '../../assets/images/Invest/step4/back.png';
import freq from '../../assets/images/Invest/step5/Frequency.png';
import con from '../../assets/images/Invest/step5/Conta.png';
import Stoploss from '../../assets/images/Invest/step5/Stoploss.png';
import primary from '../../assets/images/Invest/step5/primary.png';
import stra from '../../assets/images/Invest/step5/strategy.png';
import port from '../../assets/images/Invest/step5/port.png';
import line from '../../assets/images/Invest/step5/Line1.png';
import bg from '../../assets/images/HomeScreen/bg.png';
import { widthPercentageToDP, heightPercentageToDP } from '../../util/scaler';
import Navbar_game from '../Navbar/Navbar_game.js';
import { enableScreens } from 'react-native-screens';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA } from 'redvest/schema/gameSchema';

enableScreens(false);

function stepFiveA({ navigation }) {
  const { gameData, updateGameData } = useContext(GameContext);

  const { control, errors, handleSubmit } = useForm({
    //resolver: yupResolver(SCHEMA),
  });
  const onSubmit = (data) => {
    updateGameData(data);
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
            justifyContent: 'space-between',
            padding: 10,
            marginTop: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('stepThreea')}
            style={{
              left: widthPercentageToDP(3),
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
            source={con}
            style={{
              resizeMode: 'contain',
              width: widthPercentageToDP(50),
              height: heightPercentageToDP(15),
              marginTop: '0%',
              left: '-70%',
            }}
          />
        </View>
        <ScrollView style={{ height: '200%' }}>
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
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image
                  source={stra}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(23),
                    height: heightPercentageToDP(5),
                  }}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={line}
              style={{
                resizeMode: 'contain',
                width: widthPercentageToDP(80),
                height: heightPercentageToDP(1),
              }}
            />
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image
                  source={port}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(23),
                    height: heightPercentageToDP(5),
                  }}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={line}
              style={{
                resizeMode: 'contain',
                width: widthPercentageToDP(80),
                height: heightPercentageToDP(1),
              }}
            />
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image
                  source={freq}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(27),
                    height: heightPercentageToDP(5),
                  }}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={line}
              style={{
                resizeMode: 'contain',
                width: widthPercentageToDP(80),
                height: heightPercentageToDP(1),
              }}
            />
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image
                  source={Stoploss}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(23),
                    height: heightPercentageToDP(3),
                  }}
                />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Image
                  source={primary}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                    marginTop: '10%',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <Navbar_game />
    </View>
  );
}

export default stepFiveA;
