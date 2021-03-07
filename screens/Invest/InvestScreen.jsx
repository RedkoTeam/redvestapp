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

  const [sTicker, setsTicker] = useState('');
  const [sPrice, setsPrice] = useState('');
  const [sQty, setsQty] = useState('');
  const [oType, setoType] = useState('');
  const [tForce, settForce] = useState('');
  const [sLoss, setsLoss] = useState('');
  const [selectedItem, setSelectedItem] = useState([]);

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
            styleDropdownMenu={{ height: 50, padding: 0, borderColor: 'orange', borderWidth: 5, borderRadius: 10 }}
            styleDropdownMenuSubsection={{ height: '100%', borderRadius: 10 }}
            styleInputGroup={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            styleTextDropdownSelected={{ paddingHorizontal: 10 }}
            styleListContainer={{ borderColor: 'blue', borderWidth: 5, borderRadius: 50}}
            styleSelectorContainer={{borderColor: 'red', borderWidth: 5, borderRadius: 50}}
            styleMainWrapper={{borderColor: 'purple', borderWidth: 5, borderRadius: 50}}
            //styleRowList={{borderColor: 'brown', borderWidth: 5, borderRadius: 50}}
            //styleTextDropdown={{borderColor: 'yellow', borderWidth: 5, borderRadius: 50}}
            //styleItemsContainer={{width: 50, borderColor: 'green', borderWidth: 5, borderRadius: 50}}
            
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('PriceInfo')}>
            <CustomInputLabel text="Price" big info />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('QuantityInfo')}>
            <CustomInputLabel text="Quantity" big info />
          </TouchableOpacity>
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
              { label: 'Apple', value: 'APPL' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
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
              { label: 'Apple', value: 'APPL' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('StopLossInfo')}>
            <CustomInputLabel text="Stop loss" big info />
          </TouchableOpacity>
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
