import React, { useContext, useState } from 'react';
import AssetsContext from 'redvest/contexts/AssetsContext';
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
import alpacaApi from 'redvest/services/alpaca';

enableScreens(false);

function InvestScreen({ navigation }) {
  const { control, handleSubmit, errors, reset, formState } = useForm({
    resolver: yupResolver(),
  });

  const { stockTickers } = useContext(AssetsContext);

  var radio_props = [
    { label: 'Buy', value: 'buy' },
    { label: 'Sell', value: 'sell' },
  ];

  function onPress(value, obj) {
    setValueIndex(value);
    setFrequency(obj['label']);
  }

  const [stockTicker, setStockTicker] = useState('');
  const [sPrice, setsPrice] = useState('');
  const [sQty, setsQty] = useState(0);
  const [oType, setoType] = useState('');
  const [tForce, settForce] = useState('');
  const [sLoss, setsLoss] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  const [valueIndex, setValueIndex] = useState(0);
  const [frequency, setFrequency] = useState('');

  const onSelectedItemChange = (selectedItem) => {
    setStockTicker(selectedItem);
  };

  const onSubmit = async (stockTicker, sQty, oType, tForce, sLoss) => {
    const api = await alpacaApi();
    api
      .postOrder({ stockTicker, sQty, oType, tForce, sLoss })
      .then((result) => console.log('order submitted', result));
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
      <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>
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
            items={stockTickers}
            uniqueKey="symbol"
            //ref={(component) => {
            //  multiSelect = component;
            //}}
            onSelectedItemsChange={onSelectedItemChange}
            //fixedHeight
            selectedItems={stockTicker}
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
            styleTextDropdown={{ paddingHorizontal: 10 }}
            styleTextDropdownSelected={{ paddingHorizontal: 10 }}
            flatListProps={{ nestedScrollEnabled: true }}
            styleListContainer={{ maxHeight: 250 }}
            //styleSelectorContainer={{ marginBottom: 50 }}
            //styleRowList={{ borderColor: 'brown', borderWidth: 5, borderRadius: 50 }}
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
      <CustomButton primary text="Invest" onPress={onSubmit} />
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
