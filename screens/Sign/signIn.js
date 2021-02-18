import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import AuthContext from 'redvest/contexts/DataContext';
import SaveItemInStorage from '../../util/SaveItemInStorage';
import RetrieveData from '../../util/GetItemInStorage';
import StoreData from '../../util/SaveItemInStorage';
import * as firebase from 'firebase';
import { actuatedNormalize } from '../../util/fontScaler';

import {
  Button,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import styles from '../styles/styles';
import signBackground from '../../assets/FortuneCoffeePNGassets/Sign/SignBackground.png';
import backButton from '../../assets/FortuneCoffeePNGassets/reading/backButton.png';
import signTitle from '../../assets/FortuneCoffeePNGassets/Sign/signTitle.png';
import signEmailText from '../../assets/FortuneCoffeePNGassets/Sign/signEmailText.png';
import { Formik } from 'formik';
import LoginValidationSchema from '../../util/validators/LoginValidationSchema';
import loginButton from '../../assets/FortuneCoffeePNGassets/Sign/LogInButton.png';
import forgotPasswordText from '../../assets/FortuneCoffeePNGassets/Sign/forgotPasswordText.png';
import createNewText from '../../assets/FortuneCoffeePNGassets/Sign/createaNewText.png';
import accoutText from '../../assets/FortuneCoffeePNGassets/Sign/accountText.png';
import { widthPercentageToDP, heightPercentageToDP } from '../../util/scaler';

function SignInScreen() {
  const navigation = useNavigation();
  const { signInWithEmailAsync } = useContext(AuthContext);

  return (
    <>
      <KeyboardAvoidingView style={styles.virtualContainer} behavior="padding">
        <ImageBackground source={signBackground} style={styles.virtualOne}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.backButtonStyle2}
          >
            <Image
              source={backButton}
              style={{
                width: widthPercentageToDP('13'),
                height: heightPercentageToDP('6'),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <Image
            source={signTitle}
            style={{
              marginTop: '20%',
              width: widthPercentageToDP('60'),
              height: heightPercentageToDP('6'),
              resizeMode: 'contain',
            }}
          />
          <View style={{ marginTop: 8, marginBottom: 20 }}>
            {/* <TouchableOpacity onPress={() => console.log('google pressed')} style={{marginBottom:20}}>
            <Image source={googleTitle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('facebook pressed')}>
            <Image source={facebookTitle} />
          </TouchableOpacity>*/}
          </View>

          <Formik
            validationSchema={LoginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={signInWithEmailAsync}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
              <>
                <TextInput
                  style={styles.textBox}
                  label="Email"
                  placeholder="    Email address"
                  placeholderTextColor="#DCDCDC"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                />
                {/* THIS SHOWS THE ERRORS NEEDED TO BE RESOLVED */}
                {errors.email && <Text style={{ fontSize: 13, color: 'red' }}>{errors.email}</Text>}
                <TextInput
                  style={styles.textBox}
                  label="Password"
                  placeholder="    Password"
                  placeholderTextColor="#DCDCDC"
                  autoCapitalize="none"
                  passwordRules="required: lower; required: upper; required: digit; required: [-], minlength:5"
                  onChangeText={handleChange('password')}
                  secureTextEntry
                />
                {errors.password && (
                  <Text style={{ fontSize: 13, color: 'red' }}>{errors.password}</Text>
                )}
                <TouchableOpacity
                  style={{ paddingTop: 8 }}
                  disabled={!isValid}
                  onPress={handleSubmit}
                >
                  <Image
                    source={loginButton}
                    style={{
                      resizeMode: 'contain',
                      width: widthPercentageToDP('70'),
                      height: heightPercentageToDP('7'),
                    }}
                  />
                </TouchableOpacity>
              </>
            )}
          </Formik>

          <View style={{ flexDirection: 'row', marginTop: 12 }}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Image
                source={accoutText}
                style={{
                  marginTop: '7%',
                  marginRight: '2%',
                  width: widthPercentageToDP('37'),
                  height: heightPercentageToDP('2'),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignInScreen;
