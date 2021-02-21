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
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SIGNUP_SCHEMA } from 'redvest/schema/authSchema';

import Spacer from 'redvest/components/Spacer';
import HorizontalRule from 'redvest/components/HorizontalRule';
import { EmailInput, PasswordInput } from 'redvest/components/CustomTextInput';
import CustomButton from 'redvest/components/CustomButton';

function SignUpScreen({ navigation }) {
  const { signUpWithEmailAsync, signInWithFacebook, signInWithGoogleAsync } = useContext(
    AuthContext,
  );
  const { control, handleSubmit, errors, reset, formState } = useForm({
    resolver: yupResolver(SIGNUP_SCHEMA),
  });
  useFocusEffect(useCallback(reset));

  const onSignUpSuccess = () => {
    // navigation.navigate('HomeScreenEmpty');
  };
  const onSignUpFailure = (errorMessage) => {
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
      <StatusBar barStyle={'light-content'} backgroundColor={colors.darkBackground} />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'position'}
        keyboardVerticalOffset={-240}
        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <Spacer height={0} />

        <EmailInput control={control} errors={errors} />
        <PasswordInput control={control} errors={errors} />
        <PasswordInput
          control={control}
          errors={errors}
          input={{ name: 'confirm-password', label: 'Confirm Password' }}
        />
        <Spacer height={0} />

        <CustomButton
          primary
          text="Sign Up"
          onPress={handleSubmit(
            async (data) => await signUpWithEmailAsync(data, onSignUpSuccess, onSignUpFailure),
          )}
        />

        <Spacer height={1} />
        <View style={styles.orContainer}>
          <HorizontalRule />
          <Text style={[textStyles.bigRegular, styles.orText]}>or</Text>
          <HorizontalRule />
        </View>
        <Spacer height={0.5} />

        <CustomButton
          icon={facebookLogo}
          text="Continue with Facebook"
          onPress={() => console.log('Login with Facebook')}
        />
        <CustomButton
          icon={googleLogo}
          text="Continue with Google"
          onPress={async () => await signInWithGoogleAsync(onSignUpSuccess, onSignUpFailure)}
        />

        <View style={styles.bottomButtons}>
          <Text style={[textStyles.smallRegular, { color: colors.offWhite }]}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={[textStyles.bigRegular, { color: colors.primary }]}>SIGN IN</Text>
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
  bottomButtons: {
    position: 'absolute',
    bottom: heightPercentageToDP(Platform.OS === 'ios' ? -2 : 2),
    flexDirection: 'column',
    width: 195,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SignUpScreen;
