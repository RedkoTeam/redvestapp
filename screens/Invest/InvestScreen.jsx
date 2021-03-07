import React, { useState } from 'react';
import { TouchableOpacity, View, ScrollView, StyleSheet, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../util/scaler';
import { enableScreens } from 'react-native-screens';
import RNPickerSelect from 'react-native-picker-select';
import Slider from '@react-native-community/slider';
import firebase from 'firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { textStyles, colors } from 'redvest/util/styles';
import CustomButton from 'redvest/components/CustomButton';
import CustomInputLabel from 'redvest/components/CustomInputLabel';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MultiSelect from 'react-native-multiple-select';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { Searchbar } from 'react-native-paper';
//import alpacaApi from '../services/alpaca';

enableScreens(false);

const items = [
  {
    id: '92iijs7yta',
    name: 'Ondo',
  },
  {
    id: 'a0s0a8ssbsd',
    name: 'Ogun',
  },
  {
    id: '16hbajsabsd',
    name: 'Calabar',
  },
  {
    id: 'nahs75a5sg',
    name: 'Lagos',
  },
  {
    id: '667atsas',
    name: 'Maiduguri',
  },
  {
    id: 'hsyasajs',
    name: 'Anambra',
  },
  {
    id: 'djsjudksjd',
    name: 'Benue',
  },
  {
    id: 'sdhyaysdj',
    name: 'Kaduna',
  },
  {
    id: 'suudydjsjd',
    name: 'Abuja',
  },
];

function InvestScreen({ navigation }) {
  const { control, handleSubmit, errors, reset, formState } = useForm({
    resolver: yupResolver(),
  });

  var radio_props = [
    { label: 'Buy', value: 'buy' },
    { label: 'Sell', value: 'sell' },
  ];

  function onPress(value, obj) {
    setValueIndex(value);
    setFrequency(obj['label']);
  }

  state = {
    query: '',
    totalItems: [],
    filteredItems: [],
  };

  {
    /*
onSearchBarTextChange = _.debounce(() => {
  this.filterItems()
}, 800)


{/*filterItems = () => {
  const { assets, getBars } = this.props
  const { query } = this.state

  let filteredItems = _.map(assets, function (el) {
      if (query && el.symbol.toLowerCase().startsWith(query.toLowerCase())) return el
  })
  filteredItems = _.without(filteredItems, undefined)
  if (filteredItems.length > 199) {
      filteredItems = filteredItems.slice(0, 199)
  }

  this.setState({
      query,
      filteredItems
  })

  let symbols = ''
  _.map(filteredItems, function (item) {
      let div = symbols.length > 0 ? ',' : ''
      symbols = symbols + div + item.symbol
  })
  getBars('1Min', symbols, getTodayStart(), getTodayEnd(), 'today')
  getBars('1D', symbols, getYesterdayStart(), getYesterdayEnd(), 'yesterday')
} */
  }

  //const { query, filteredItems } = this.state

  const [sTicker, setsTicker] = useState('');
  const [sPrice, setsPrice] = useState('');
  const [sQty, setsQty] = useState('');
  const [oType, setoType] = useState('');
  const [tForce, settForce] = useState('');
  const [sLoss, setsLoss] = useState('');
  const [selectedItem, setSelectedItem] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  const [valueIndex, setValueIndex] = useState(0);
  const [frequency, setFrequency] = useState('');

{/* ALPACA STOCK PICKER
    const Alpaca = require('@alpacahq/alpaca-trade-api')
  const alpaca = new Alpaca({
    keyId: 'PKTN2F7X7160C6WX00NG',
    secretKey: 'MfUP1Sa8WM6SwdRhWIG8KAIaX7SBufLbRfa5lPLf',
    paper: true
  })

  //SHOW THESE ASSETS ON THE PICKER
  const activeAssets = alpaca.getAssets({
    status: 'active'
}).then((activeAssets) => {
    // Filter the assets down to just those on NASDAQ.
    const nasdaqAssets = activeAssets.filter(asset => asset.exchange == 'NASDAQ')
    console.log(nasdaqAssets)
}) */}


  onSelectedItemChange = (selectedItem) => {
    setSelectedItem(selectedItem);
    console.log(selectedItem);
  };

  const profileUpload = () => {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .set(
        {
          stockTicker: sTicker,
          stockPrice: sPrice,
          stockQty: sQty,
          orderType: oType,
          timeForce: tForce,
          stopLoss: sLoss,
        },
        { merge: true },
      )
      .then(() => {
        navigation.navigate('');
      });
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={[styles.screenTitle, textStyles.hugeRegular]}>Place an order</Text>
      <ScrollView style={styles.scrollView}>
        <RadioForm style={{ height: '13%' }} formHorizontal={true} animation={true}>
          {/* To create radio buttons, loop through your array of options */}
          {radio_props.map((obj, i) => (
            <RadioButton
              labelHorizontal={true}
              key={i}
              // onPress={(value) => {
              //   setValue3Index(value);
              // }}
            >
              {/*  You can set RadioButtonLabel before RadioButtonInput */}
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={valueIndex === i}
                onPress={() => onPress(i, obj)}
                borderWidth={1}
                buttonInnerColor={'#ffff'}
                buttonOuterColor={valueIndex === i ? '#78AC43' : 'white'}
                buttonSize={15}
                buttonOuterSize={25}
                buttonStyle={{ marginTop: 18 }}
                buttonWrapStyle={{
                  marginTop: '0%',
                }}
                //buttonStyle={{ marginTop: 15 }}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={true}
                onPress={onPress}
                labelStyle={{
                  fontSize: widthPercentageToDP(5),
                  color: 'white',
                  paddingTop: '5%',
                  marginTop: '5%',
                  marginLeft: '20%',
                  paddingBottom: '1%',
                }}
                labelWrapStyle={{ marginTop: '1%', left: 0 }}
              />
            </RadioButton>
          ))}
        </RadioForm>

        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('StockTickerInfo')}>
            <CustomInputLabel text="Stock ticker" big info />
          </TouchableOpacity>
          {/*stock ticker should show after being selected , values should be taken from an equation */}
          {/*<RNPickerSelect
            onValueChange={(sTicker) => setsTicker(sTicker)}
            items={[
              { label: 'Apple', value: 'APPL' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
          />*/}
          <MultiSelect
            hideTags
            single
            items={items}
            uniqueKey="id"
            ref={(component) => {
              multiSelect = component;
            }}
            onSelectedItemsChange={onSelectedItemChange}
            selectedItems={selectedItem}
            selectText="Choose a Stock Ticker..."
            searchInputPlaceholderText="Search Stock Tickers..."
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor={colors.primary}
            selectedItemIconColor={colors.primary}
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: '#CCC', height: 50 }}
            styleDropdownMenuSubsection={{ height: '100%', borderRadius: 10 }}
            styleInputGroup={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            styleTextDropdownSelected={{ paddingHorizontal: 10 }}
            
            //styleRowList={{borderColor: 'brown', borderWidth: 5, borderRadius: 50}}
            styleTextDropdown={{ paddingHorizontal: 10 }}
            //styleItemsContainer={{width: 50, borderColor: 'green', borderWidth: 5, borderRadius: 50}}
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('PriceInfo')}>
            <CustomInputLabel text="Price" big info />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.navigate('QuantityInfo')}>
              <CustomInputLabel text="Quantity" big info />
            </TouchableOpacity>
            <Text style={[textStyles.bigRegular, { color: colors.primary }]}>{sQty} stocks</Text>
          </View>
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
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('OrderTypeInfo')}>
            <CustomInputLabel text="Order type" big info />
          </TouchableOpacity>
          <RNPickerSelect
            onValueChange={(oType) => setoType(oType)}
            items={[
              { label: 'Limit', value: 'limit' },
              { label: 'Day', value: 'day' },
            ]}
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('TimeInForceInfo')}>
            <CustomInputLabel text="Time in force" big info />
          </TouchableOpacity>
          <RNPickerSelect
            onValueChange={(tForce) => settForce(tForce)}
            items={[
              { label: 'Regular Trading | 9:30am - 4:00pm ET', value: 'day' },
              { label: 'Good Until Canceled', value: 'gtc' },
              { label: 'Immediate Or Cancel', value: 'ioc' },
              { label: 'Fill or Kill', value: 'fok' },
            ]}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.navigate('StopLossInfo')}>
              <CustomInputLabel text="Stop loss" big info />
            </TouchableOpacity>
            <Text style={[textStyles.bigRegular, { color: colors.redError }]}>%{sLoss}</Text>
          </View>
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
      </ScrollView>
      <CustomButton primary text="Invest" onPress={() => console.log('Invest button pressed')} />
    </SafeAreaView>
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

export default InvestScreen;
