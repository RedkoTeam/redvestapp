import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Linking, TouchableOpacity, View, ScrollView } from 'react-native';
import back from '../../assets/images/Invest/step4/back.png';
import Amounttra from '../../assets/images/Invest/step4/Amounttra.png';
import AccountTotal from '../../assets/images/Invest/step4/AccountTotal.png';
import title from '../../assets/images/Invest/step4/title.png';
import Stoploss from '../../assets/images/Invest/step4/Stoploss.png';
import next from '../../assets/images/Invest/step4/next.png';
import bg from '../../assets/images/HomeScreen/bg.png';
import { widthPercentageToDP, heightPercentageToDP } from '../../util/scaler';
import Navbar_game from '../Navbar/Navbar_game.js';
import { enableScreens } from 'react-native-screens';
import Slider from '@react-native-community/slider';
import { useFormContext } from 'react-hook-form';

enableScreens(false);

function stepFour({ navigation }) {
  const { control, errors } = useFormContext();

  const [sliderValue1, setSliderValue1] = useState(15);
  const [sliderValue2, setSliderValue2] = useState(15);

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
            source={title}
            style={{
              resizeMode: 'contain',
              width: widthPercentageToDP(80),
              height: heightPercentageToDP(15),
              marginTop: '10%',
              left: '-20%',
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
                  source={AccountTotal}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(45),
                    height: heightPercentageToDP(10),
                    marginLeft: '20%',
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image
                  source={Amounttra}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(45),
                    height: heightPercentageToDP(5),
                  }}
                />
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
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image
                  source={Stoploss}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(20),
                    height: heightPercentageToDP(3),
                  }}
                />
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

            <View>
              <TouchableOpacity onPress={() => navigation.navigate('stepFive')}>
                <Image
                  source={next}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
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

export default stepFour;
