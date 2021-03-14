import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useContext } from 'react';
import OrdersContext from 'redvest/contexts/OrdersContext';
import {
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import back from '../../assets/images/Invest/step4/back.png';
import hist from '../../assets/images/profile/orderstab.png';
import bg from '../../assets/images/HomeScreen/bg.png';
import buy from 'redvest/assets/images/orders/buy.png';
import sell from 'redvest/assets/images/orders/sell.png';
import vertical3dots from 'redvest/assets/images/vertical-3dots.png';
import { widthPercentageToDP, heightPercentageToDP } from '../../util/scaler';
import { textStyles, colors } from 'redvest/util/styles';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar_pro from '../Navbar/Navbar_pro.js';
import { enableScreens } from 'react-native-screens';
import capitalize from 'redvest/util/capitalize';
import alpacaApi from 'redvest/services/alpacaApi';

enableScreens(false);

function history() {
  const { orders } = useContext(OrdersContext);
  const navigation = useNavigation();
  const [cardOptions, setCardOptions] = useState(false);
  useEffect(() => {
    let mounted = true;
  });
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={bg}
        style={{ width: widthPercentageToDP(100), height: heightPercentageToDP(100) }}
      >
        <View style={{ padding: 18, marginTop: '15%', justifyContent: 'center', right: '5%' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={{
              left: widthPercentageToDP(6),
              top: heightPercentageToDP(0),
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
          <TouchableOpacity onPress={() => navigation.navigate('history')}>
            <Image
              source={hist}
              style={{
                resizeMode: 'contain',
                width: widthPercentageToDP(100),
                height: heightPercentageToDP(7),
                marginTop: '5%',
              }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ height: '200%' }} contentContainerStyle={{ alignItems: 'center' }}>
          {orders.map((order) => (
            <>
              <View style={styles.orderCard}>
                <Image source={order.side === 'buy' ? buy : sell} style={styles.orderCardIcon} />
                <View>
                  <Text style={[textStyles.normalSemiBold, { color: colors.offWhite }]}>
                    {capitalize(order.side)}
                  </Text>
                  <Text style={[textStyles.normalRegular, { color: colors.offWhite }]}>
                    {`${order.qty} stocks of ${order.symbol} at $${order.filled_avg_price}`}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => setCardOptions(!cardOptions)}>
                  <Image source={vertical3dots} style={styles.orderCardDots} />
                </TouchableOpacity>
              </View>
              {cardOptions && (
                <View style={styles.orderCardOptions}>
                  <TouchableOpacity
                    style={[styles.orderOption, { backgroundColor: colors.redError }]}
                    onPress={() =>
                      alpacaApi()
                        .cancelOrder(order.id)
                        .then(() => setCardOptions(false))
                    }
                  >
                    <Text style={[textStyles.normalSemiBold, { color: colors.offWhite }]}>
                      Cancel Order
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.orderOption, { backgroundColor: colors.primary }]}
                    onPress={() => setCardOptions(false)}
                  >
                    <Text style={[textStyles.normalSemiBold, { color: colors.offWhite }]}>
                      Keep Order
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </>
          ))}
        </ScrollView>
      </ImageBackground>
      <NavBar_pro />
    </View>
  );
}

const styles = StyleSheet.create({
  orderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '7%',
    height: 100,
    width: '90%',
    borderRadius: 30,
    backgroundColor: '#1F1C1B',
    marginBottom: 18,
  },
  orderCardIcon: {
    resizeMode: 'contain',
    height: '55%',
    width: '20%',
  },
  orderCardDots: {
    resizeMode: 'contain',
    height: '20%',
  },
  orderCardOptions: {
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-between',
    //paddingLeft: '5%',
    //paddingRight: '7%',
    //height: 100,
    width: '90%',
    borderRadius: 30,
    //backgroundColor: '#1F1C1B',
    marginBottom: 25,
  },
  orderOption: {
    borderRadius: 30,
    width: '47%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default history;
