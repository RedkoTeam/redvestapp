import { textStyles, colors } from 'redvest/util/styles';
import { widthPercentageToDP, heightPercentageToDP } from 'redvest/util/scaler';

import facebookLogo from 'redvest/assets/Facebook_F_Logo.png';
import googleLogo from 'redvest/assets/Google_G_Logo.png';

import React, { useContext, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AuthContext from 'redvest/contexts/AuthContext';

import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SIGNUP_SCHEMA from 'redvest/schema/authSchema';

import Spacer from 'redvest/components/Spacer';
import HorizontalRule from 'redvest/components/HorizontalRule';
import { EmailInput, PasswordInput } from 'redvest/components/CustomTextInput';
import CustomButton from 'redvest/components/CustomButton';
import title from "../../assets/images/signup/SignIn.png";

function SignInScreen({ navigation }) {
  const { signInWithEmailAsync, signInWithFacebook, signInWithGoogleAsync } = useContext(
    AuthContext,
  );
  const { control, handleSubmit, errors, reset, formState } = useForm({
    resolver: yupResolver(SIGNUP_SCHEMA),
  });
  useFocusEffect(useCallback(reset));

  const onSignInSuccess = () => {
    // navigation.navigate('HomeScreenEmpty');
  };
  const onSignInFailure = (errorMessage) => {
    alert(errorMessage);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.darkBackground,
        minHeight: Math.round(Dimensions.get('window').height / 2),
      }}
    >
         <ScrollView
          style={{ height: '200%', flex: 1 }}
          contentContainerStyle={{ alignItems: 'center' }}
        >
              <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 5,
          }}
        >
        
          <Image
            source={title}
            style={{
              resizeMode: "contain",
              width: widthPercentageToDP(25),
              height: heightPercentageToDP(6),
              marginTop: "10%",
              left: "20%",
            }}
          />
        </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'position'}
        keyboardVerticalOffset={-240}
        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <Spacer height={1} />
        <EmailInput control={control} errors={errors} />
        <PasswordInput
          control={control}
          errors={errors}
          forgotPassword={() => navigation.navigate('ResetPassword')}
        />
        <Spacer height={3} />

        <CustomButton
          primary
          text="Sign In"
          onPress={handleSubmit(
            async (data) => await signInWithEmailAsync(data, onSignInSuccess, onSignInFailure),
          )}
        />

        <Spacer height={3} />
        <View style={styles.orContainer}>
          <HorizontalRule />
          <Text style={[textStyles.bigRegular, styles.orText]}>or</Text>
          <HorizontalRule />
        </View>
        <Spacer height={2} />

        <CustomButton
          icon={facebookLogo}
          text="Continue with Facebook"
          onPress={() => console.log('Login with Facebook')}
        />
        <CustomButton
          icon={googleLogo}
          text="Continue with Google"
          onPress={async () => await signInWithGoogleAsync(onSignInSuccess, onSignInFailure)}
        />

        <View style={styles.buttomButtons, {marginTop:'5%' }}>
          <Text style={[textStyles.smallRegular, { color: colors.offWhite }]}>
            Don't have an account yet?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={[textStyles.bigRegular, { color: colors.primary }]}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: 'relative',
    left: widthPercentageToDP(2),
    top: heightPercentageToDP(2),
  },
  orContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPercentageToDP(90),
  },
  orText: {
    color: colors.mediumGrey,
    paddingHorizontal: widthPercentageToDP(4),
  },
  buttomButtons: {
    position: 'absolute',
    bottom: heightPercentageToDP(Platform.OS === 'ios' ? -2 : 2),
    flexDirection: 'column',
    width: 195,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SignInScreen;
