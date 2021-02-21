import { textStyles, colors } from 'redvest/util/styles';
import { widthPercentageToDP, heightPercentageToDP } from 'redvest/util/scaler';

import facebookLogo from 'redvest/assets/Facebook_F_Logo.png';
import googleLogo from 'redvest/assets/Google_G_Logo.png';

import React, { useContext, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AuthContext from 'redvest/contexts/AuthContext';

import {
  StatusBar,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AUTH_SCHEMA from 'redvest/schema/authSchema';

import Spacer from 'redvest/components/Spacer';
import { EmailInput, PasswordInput } from 'redvest/components/CustomTextInput';
import CustomButton from 'redvest/components/CustomButton';

function SignInScreen({ navigation }) {
  const { signInWithEmailAsync, signInWithGoogleAsync } = useContext(AuthContext);
  const { control, handleSubmit, errors, reset, formState } = useForm({
    resolver: yupResolver(AUTH_SCHEMA),
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
        minHeight: Math.round(Dimensions.get('window').height),
      }}
    >
      <StatusBar barStyle={'light-content'} backgroundColor={colors.darkBackground} />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'position'}
        keyboardVerticalOffset={-240}
        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <Spacer height={6.5} />
        <EmailInput control={control} errors={errors} />
        <PasswordInput
          control={control}
          errors={errors}
          forgotPassword={() => navigation.navigate('PasswordReset')}
        />
        <Spacer height={2} />

        <CustomButton
          primary
          text="Sign In"
          onPress={handleSubmit(
            async (data) => await signInWithEmailAsync(data, onSignInSuccess, onSignInFailure),
          )}
        />
        <CustomButton
          icon={facebookLogo}
          text="Continue with Facebook"
          onPress={() => console.log("Login with Facebook")}
        />
        <CustomButton
          icon={googleLogo}
          text="Continue with Google"
          onPress={async () => await signInWithGoogleAsync(onSignInSuccess, onSignInFailure)}
        />

        <View style={styles.registerButton}>
          <Text style={[textStyles.smallRegular, { color: colors.offWhite }]}>
            Don't have an account yet?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[textStyles.bigRegular, { color: colors.primary }]}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: 'relative',
    left: widthPercentageToDP(2),
    top: heightPercentageToDP(2),
  },
  registerButton: {
    position: 'absolute',
    bottom: widthPercentageToDP(2) + 85,
    flexDirection: 'column',
    width: 195,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SignInScreen;
