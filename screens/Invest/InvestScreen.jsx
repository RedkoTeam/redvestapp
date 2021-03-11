import React, { useContext, useState } from 'react';
import AssetsContext from 'redvest/contexts/AssetsContext';
import { TouchableOpacity, View, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
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
import alpacaApi from 'redvest/services/alpacaApi';
import alpacaMarketData from 'redvest/services/alpacaMarketData';

enableScreens(false);

function InvestScreen({ navigation }) {
  const { control, handleSubmit, errors, reset, formState } = useForm({
    resolver: yupResolver(),
  });

  const { stockTickers } = useContext(AssetsContext);
  const orderSidesRadioProps = [
    { label: 'Buy', value: 'buy' },
    { label: 'Sell', value: 'sell' },
  ];

  const [orderSideRadioIndex, setOrderSideRadioIndex] = useState(0);
  const [orderSide, setOrderSide] = useState('buy');
  const [stockTicker, setStockTicker] = useState('');
  const [lastStockPrice, setLastStockPrice] = useState(`$${(0).toFixed(2)}`);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [orderType, setOrderType] = useState('');
  const [timeInForce, setTimeInForce] = useState('');
  const [stopLoss, setStopLoss] = useState(0);
  const [stopLossPercentage, setStopLossPercentage] = useState(0);
  const [limitPrice, setLimitPrice] = useState(0);

  const onOrderSideRadioPress = (obj, index) => {
    setOrderSideRadioIndex(index);
    setOrderSide(obj.value);
  };

  const onSelectedStockTickerChange = (selectedItem) => {
    setStockTicker(selectedItem[0]);
    alpacaMarketData()
      .getRecentQuote(stockTicker)
      .then((lastAskPrice) => setLastStockPrice(lastAskPrice));
  };

  const onOrderSubmit = () => {
    const requestBody = {
      side: orderSide,
      symbol: stockTicker,
      qty: orderQuantity,
      type: orderType,
      time_in_force: timeInForce,
    };
    const requestBodyType;
    if (requestBody.type === 'market') {
      requestBodyType = { ...requestBody };
    } else if (requestBody.type === 'limit') {
      requestBodyType = { ...requestBody, limit_price: limitPrice };
    } else if (requestBody.type === 'stop') {
      requestBodyType = { ...requestBody, stop_loss: stopLoss };
    } else if (requestBody.type === 'stop_limit') {
      requestBodyType = { ...requestBody, limit_price: limitPrice, stop_loss: stopLoss };
    }
    alpacaApi()
      .postOrder(JSON.stringify(requestBody))
      .then(
        navigation.navigate('OrderConfirmation', {
          order: requestBodyType,
        }),
      );
  };

  const invest = async () => {
    console.log(await alpacaApi().getAccount());
    //console.log("hello");
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={[styles.screenTitle, textStyles.hugeRegular]}>Place an order</Text>
      <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>
        <RadioForm style={{ height: '13%' }} formHorizontal={true} animation={true}>
          {/* To create radio buttons, loop through your array of options */}
          {orderSidesRadioProps.map((obj, i) => (
            <RadioButton labelHorizontal={true} key={i}>
              {/*  You can set RadioButtonLabel before RadioButtonInput */}
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={orderSideRadioIndex === i}
                onPress={() => onOrderSideRadioPress(obj, i)}
                borderWidth={1}
                buttonInnerColor={'#ffff'}
                buttonOuterColor={orderSideRadioIndex === i ? colors.primary : 'white'}
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
                onPress={onOrderSideRadioPress}
                labelStyle={{
                  fontSize: widthPercentageToDP(5),
                  color: 'white',
                  paddingTop: '5%',
                  marginTop: '5%',
                  marginLeft: '10%',
                  marginRight: '10%',
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
              { label: "Apple", value: "APPL" },
              { label: "Baseball", value: "baseball" },
              { label: "Hockey", value: "hockey" },
            ]}
          />*/}
          <MultiSelect
            hideTags
            single
            items={stockTickers}
            displayKey="name"
            uniqueKey="symbol"
            selectText="Choose a Stock..."
            searchInputPlaceholderText="Search Stock..."
            selectedItems={[stockTicker]}
            onSelectedItemsChange={onSelectedStockTickerChange}
            //ref={(component) => {
            //  multiSelect = component;
            //}}
            //fixedHeight
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            itemTextColor="#000"
            selectedItemTextColor={colors.primary}
            selectedItemIconColor={colors.primary}
            searchInputStyle={{ color: '#CCC', height: 50 }}
            styleDropdownMenuSubsection={{ borderRadius: 10 }}
            styleInputGroup={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            styleTextDropdown={{ paddingHorizontal: 10 }}
            styleTextDropdownSelected={{ paddingHorizontal: 10 }}
            flatListProps={{ nestedScrollEnabled: true }}
            styleListContainer={{ maxHeight: 240 }}
            nestedScrollEnabled={true}
            //styleSelectorContainer={{ marginBottom: 50 }}
            //styleRowList={{ borderColor: 'brown', borderWidth: 5, borderRadius: 50 }}
            //styleItemsContainer={{width: 50, borderColor: 'green', borderWidth: 5, borderRadius: 50}}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.navigate('PriceInfo')}>
              <CustomInputLabel text="Price per stock" big info />
            </TouchableOpacity>
            <Text style={[textStyles.bigRegular, { color: 'white' }]}>{lastStockPrice}</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.navigate('QuantityInfo')}>
              <CustomInputLabel text="Quantity" big info />
            </TouchableOpacity>
            <Text style={[textStyles.bigRegular, { color: colors.primary }]}>
              {orderQuantity} stocks
            </Text>
          </View>
          <Slider
            maximumValue={100}
            minimumValue={0}
            minimumTrackTintColor="#78AC43"
            maximumTrackTintColor="#000000"
            step={1}
            value={orderQuantity}
            onValueChange={(orderQuantity) => setOrderQuantity(orderQuantity)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('OrderTypeInfo')}>
            <CustomInputLabel text="Order type" big info />
          </TouchableOpacity>
          <RNPickerSelect
            onValueChange={(orderType) => setOrderType(orderType)}
            textInputProps={{ style: { color: colors.offWhite } }}
            items={[
              { label: 'Market', value: 'market' },
              { label: 'Limit', value: 'limit' },
              { label: 'Stop', value: 'stop' },
              { label: 'Stop Limit', value: 'stop_limit' },
            ]}
          />
        </View>

        {orderType === 'stop' && (
          <View style={styles.inputContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={() => navigation.navigate('StopLossInfo')}>
                <CustomInputLabel text="Stop loss" big info />
              </TouchableOpacity>
              <Text style={[textStyles.bigRegular, { color: colors.redError }]}>
                %{stopLossPercentage}
              </Text>
            </View>
            <Slider
              maximumValue={100}
              minimumValue={0}
              minimumTrackTintColor="#EB5757"
              maximumTrackTintColor="#000000"
              step={1}
              value={stopLossPercentage}
              onValueChange={(stopLossPercentage) => {
                const priceString = lastStockPrice.replace('$', '');
                const priceNumber = Number.parseFloat(priceString);
                const stopPrice = (priceNumber * stopLossPercentage) / 100;
                setStopLossPercentage(stopLossPercentage);
                setStopLoss(stopPrice);
              }}
            />
          </View>
        )}

        {orderType === 'limit' && (
          <View style={styles.inputContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <CustomInputLabel text="Limit Price" big info />
              </TouchableOpacity>
              <Text style={[textStyles.bigRegular, { color: '#78AC43' }]}>${limitPrice}</Text>
            </View>

            <TextInput
              label="Gender"
              placeholder="Enter limit price here"
              placeholderTextColor="#DCDCDC"
              color="#DCDCDC"
              fontSize="18"
              onChangeText={(limitPrice) => setLimitPrice(limitPrice)}
            />
          </View>
        )}
        {orderType === 'stop_limit' && (
          <View style={styles.inputContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <CustomInputLabel text="Limit Price" big info />
              </TouchableOpacity>
              <Text style={[textStyles.bigRegular, { color: '#78AC43' }]}>${limitPrice}</Text>
            </View>
            <TextInput
              style={{ marginBottom: '10%' }}
              label="Gender"
              placeholder="Enter limit price here"
              placeholderTextColor="#DCDCDC"
              color="#DCDCDC"
              fontSize="18"
              onChangeText={(limitPrice) => setLimitPrice(limitPrice)}
            />

            <TouchableOpacity onPress={() => navigation.navigate('StopLossInfo')}>
              <CustomInputLabel text="Stop loss" big info />
            </TouchableOpacity>
            <Text style={[textStyles.bigRegular, { color: colors.redError }]}>
              %{stopLossPercentage}
            </Text>

            <Slider
              maximumValue={100}
              minimumValue={0}
              minimumTrackTintColor="#EB5757"
              maximumTrackTintColor="#000000"
              step={1}
              value={stopLossPercentage}
              onValueChange={(stopLossPercentage) => {
                const priceString = lastStockPrice.replace('$', '');
                const priceNumber = Number.parseFloat(priceString);
                const stopPrice = (priceNumber * stopLossPercentage) / 100;
                setStopLossPercentage(stopLossPercentage);
                setStopLoss(stopPrice);
              }}
            />
          </View>
        )}

        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('TimeInForceInfo')}>
            <CustomInputLabel text="Time in force" big info />
          </TouchableOpacity>
          <RNPickerSelect
            onValueChange={(timeInForce) => setTimeInForce(timeInForce)}
            textInputProps={{ style: { color: colors.offWhite } }}
            items={[
              { label: 'Regular Trading | 9:30am - 4:00pm ET', value: 'day' },
              { label: 'Good Until Canceled', value: 'gtc' },
              { label: 'Immediate Or Cancel', value: 'ioc' },
              { label: 'Fill or Kill', value: 'fok' },
            ]}
          />
        </View>
      </ScrollView>
      <CustomButton primary text="Invest" onPress={onOrderSubmit} />
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
