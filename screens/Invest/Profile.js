import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useContext } from 'react';
import AuthContext from 'redvest/contexts/AuthContext';
import AlpacaAccountInfoContext from 'redvest/contexts/AlpacaAccountInfoContext';
import { Image, ImageBackground, Linking, TouchableOpacity, View, ScrollView } from 'react-native';
import pickStra from '../../assets/images/profile/TotalBalance.png';
import settings from '../../assets/images/profile/settings.png';
import cash from '../../assets/images/profile/Cashbalance.png';
import as from '../../assets/images/profile/activestrat.png';
import orders from '../../assets/images/profile/orders.png';
import hist from '../../assets/images/profile/history.png';
import bg from '../../assets/images/HomeScreen/bg.png';
import { widthPercentageToDP, heightPercentageToDP } from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';
import NavBar_pro from '../Navbar/Navbar_pro.js';
import { enableScreens } from 'react-native-screens';
import { Dimensions } from 'react-native';
//import alpacaApi from '../services/alpaca'
import { LineChart } from 'react-native-chart-kit';
import CustomButton from 'redvest/components/CustomButton';

{
  /*class DashboardScreen extends React.Component {

  static navigationOptions = {
      title: 'Dashboard'
  }

  constructor(props) {
      super(props)

      this.state = {
          buying_power: 0,
          cash: 0,
          long_market_value: 0,
          portfolio_value: 0,
      }
  }

  componentDidMount() {
      console.log('fetch data from alpaca')

      const api = alpacaApi()

      api.getAccount().then((response) => {
          console.log(response)

          if (response.ok) {
              this.setState({
                  buying_power: response.data.buying_power,
                  long_market_value: response.data.long_market_value,
                  portfolio_value: response.data.portfolio_value,
                  cash: response.data.cash
              })
          }
      })
  }            <View>
                <Text>Buying Power</Text>
                <Text>{this.state.buying_power}</Text>
                <Text>Long Market Value</Text>
                <Text>{this.state.long_market_value}</Text>
                <Text>Portfolio Value</Text>
                <Text>{this.state.portfolio_value}</Text>
                <Text>Cash</Text>
                <Text>{this.state.cash}</Text>
            </View>



*/
}

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

function Profile() {
  const { singOutAsync } = useContext(AuthContext);
  const {} = useContext(AlpacaAccountInfoContext);
  const navigation = useNavigation();
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 123],
        color: (opacity = 1) => `rgba(118, 159, 35, ${opacity})`, // optional
        strokeWidth: 4, // optional
      },
    ],
    //legend: [""] // optional
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
            padding: 25,
            marginTop: 5,
            marginBottom: '-15%',
          }}
        >
          <Image
            source={pickStra}
            style={{
              resizeMode: 'contain',
              width: widthPercentageToDP(50),
              height: heightPercentageToDP(10),
              marginTop: 20,
              marginLeft: '10%',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              padding: 25,
              marginTop: '20%',
              marginBottom: '10%',
              right: '80%',
            }}
          >
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
            <Image
              source={settings}
              style={{
                resizeMode: 'contain',
                width: widthPercentageToDP(7),
                height: heightPercentageToDP(16),
              }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{ height: '200%', flex: 1 }}
          contentContainerStyle={{ alignItems: 'center' }}
        >
          <CustomButton primary onPress={singOutAsync} text="Sign Out" />
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
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Image
                  source={cash}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(40),
                    height: heightPercentageToDP(8),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('ActiveStrategies')}>
                <Image
                  source={as}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(7),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('orders')}>
                <Image
                  source={orders}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(7),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('history')}>
                <Image
                  source={hist}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(7),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <NavBar_pro />
    </View>
  );
}

export default Profile;
