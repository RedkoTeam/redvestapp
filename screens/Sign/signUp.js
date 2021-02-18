import React, { useState, useContext } from 'react';
import AuthContext from 'redvest/contexts/AuthContext';
import * as firebase from 'firebase';
import { actuatedNormalize } from '../../util/fontScaler';
import {
  Button,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Overlay } from 'react-native-elements';
import styles from '../styles/styles';
import signBackground from '../../assets/FortuneCoffeePNGassets/Sign/SignBackground.png';
import backButton from '../../assets/FortuneCoffeePNGassets/reading/backButton.png';
import signTitle from '../../assets/FortuneCoffeePNGassets/Sign/signTitle.png';
import signUpBelowTitle from '../../assets/FortuneCoffeePNGassets/Sign/signUpbelowTitle.png';
import signEmailText from '../../assets/FortuneCoffeePNGassets/Sign/signEmailText.png';
import { Formik } from 'formik';
import SignUpValidationSchema from '../../util/validators/SignUpValidationSchema';
import signUpButton from '../../assets/FortuneCoffeePNGassets/Sign/signUpButton.png';
import haveAcctText from '../../assets/FortuneCoffeePNGassets/Sign/haveAcctText.png';
import loginText from '../../assets/FortuneCoffeePNGassets/Sign/loginText.png';
import { widthPercentageToDP, heightPercentageToDP } from '../../util/scaler';

// Async Storage
import SaveItemInStorage from '../../util/SaveItemInStorage';
import GetItemInStorage from '../../util/GetItemInStorage';

function SignUpScreen({ navigation }) {
  const { signUpWithEmailAsync } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [currentError, setCurrentError] = useState('');

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  // FIRESTORE
  const SignUp = async (values) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((data) => {
          return db
            .collection('users')
            .doc(data.user.uid)
            .set({
              userName: values.email,
              subscriptionLevel: 0,
              totalGems: 3,
              totalFortunes: 5,
            })
            .then(async () => {
              await SaveItemInStorage('FORTUNE_READING_COUNT', '5');
              await SaveItemInStorage('REGULAR_READING_COUNT', '3');
              await SaveItemInStorage('AUTH_EMAIL', values.email);
              await SaveItemInStorage('AUTH_PASSWORD', values.password);
              console.log('User account created & signed in!');
              navigation.navigate('ProfileDetails');
            });
        })
        .catch(async (error) => {
          console.log(error);
          if (error.code === 'auth/email-already-in-use') {
            console.log(error.code);
            setCurrentError(error.code);
            toggleOverlay();
          }
          if (error.code === 'auth/invalid-email') {
            console.log(error.code);
            setCurrentError(error.code);
            toggleOverlay();
          }
          console.log(error.code);
          setCurrentError(error.code);
          toggleOverlay();
        });
    } catch (e) {
      console.log(e);
    }
  };

  const render_ShowError = () => {
    return visible ? (
      <View>
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          {/* PLEASE CHANGE ME TO WHATEVER YOU GUYS WANT */}
          <TouchableOpacity
            onPress={() => console.log('Understood')}
            style={{ alignItems: 'center' }}
          >
            <Text style={{ color: 'red', fontSize: actuatedNormalize(13) }}>ERROR</Text>
            <Text>{currentError}</Text>
            <Button title={'Understood'} onPress={toggleOverlay} style={styles.button} />
          </TouchableOpacity>
        </Overlay>
      </View>
    ) : (
      <></>
    );
  };

  return (
    <>
      {/* ERROR SHOWING */}
      {render_ShowError()}
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
          <Image
            source={signUpBelowTitle}
            style={{
              marginBottom: 12,
              marginTop: 12,
              width: widthPercentageToDP('80'),
              height: heightPercentageToDP('4'),
              resizeMode: 'contain',
            }}
          />
          <View style={{ marginTop: 8, marginBottom: 20 }}>
            {/*}  <TouchableOpacity onPress={() => console.log('google pressed')} style={{marginBottom:20}}>
            <Image source={googleTitle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('facebook pressed')}>
            <Image source={facebookTitle} />
          </TouchableOpacity>*/}
          </View>
          <Image
            source={signEmailText}
            style={{
              marginBottom: 8,
              width: widthPercentageToDP('35'),
              height: heightPercentageToDP('2'),
              resizeMode: 'contain',
            }}
          />
          <Formik
            validationSchema={SignUpValidationSchema}
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            onSubmit={signUpWithEmailAsync}
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
                {errors.email && (
                  <Text style={{ fontSize: actuatedNormalize(11), color: 'red' }}>
                    {errors.email}
                  </Text>
                )}
                <TextInput
                  style={styles.textBox}
                  secureTextEntry={true}
                  label="Password"
                  placeholder="    Password"
                  placeholderTextColor="#DCDCDC"
                  autoCapitalize="none"
                  passwordRules="required: lower; required: upper; required: digit; required: [-], minlength:5"
                  onChangeText={handleChange('password')}
                />
                {errors.password && (
                  <Text style={{ fontSize: actuatedNormalize(11), color: 'red' }}>
                    {errors.password}
                  </Text>
                )}
                <TextInput
                  style={styles.textBox}
                  secureTextEntry={true}
                  label="Re-enter Password"
                  placeholder="    Re-enter Password"
                  placeholderTextColor="#DCDCDC"
                  autoCapitalize="none"
                  onChangeText={handleChange('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <Text style={{ fontSize: actuatedNormalize(11), color: 'red', paddingTop: 5 }}>
                    {errors.confirmPassword}
                  </Text>
                )}
                <TouchableOpacity
                  style={{ paddingTop: 8 }}
                  disabled={!isValid}
                  onPress={handleSubmit}
                >
                  <Image
                    source={signUpButton}
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

          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Image
              source={haveAcctText}
              style={{
                marginRight: '2%',
                width: widthPercentageToDP('40'),
                height: heightPercentageToDP('2'),
                resizeMode: 'contain',
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Image
                source={loginText}
                style={{
                  width: widthPercentageToDP('10'),
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

export default SignUpScreen;
