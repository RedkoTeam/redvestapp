//import { colors } from 'redvest/styles/styles';
import { widthPercentageToDP, heightPercentageToDP } from 'redvest/util/scaler';
//import PingIcon from 'redvest/icons/PingIcon';
//import googleLogo from 'redvest/assets/Google_G_Logo.png';

import React, { useContext, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AuthContext from 'redvest/contexts/AuthContext';

import {
  StatusBar,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AUTH_SCHEMA from 'redvest/schema/authSchema';

//import Spacer from 'redvest/components/Spacer';
//import { EmailInput, PasswordInput } from 'redvest/components/CustomTextInput';
//import CustomButton from 'redvest/components/CustomButton';

function SignUpScreen() {
  const { signUpWithEmailAsync, signInWithGoogleAsync } = useContext(AuthContext);
  const { control, handleSubmit, errors, reset, formState } = useForm({
    resolver: yupResolver(AUTH_SCHEMA),
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
        backgroundColor: 'white',
        minHeight: Math.round(Dimensions.get('window').height),
      }}
    >
      {/*<StatusBar backgroundColor={colors.primary} />*/}
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'position'}
        keyboardVerticalOffset={-240}
        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
        style={{ flex: 1, alignItems: 'center' }}
      >
        {/*<Spacer height={6.5} />*/}

        {/*<EmailInput control={control} errors={errors} />*/}
        {/*<PasswordInput control={control} errors={errors} />*/}
        {/*<Spacer height={2} />*/}

        {/*{formState.isSubmitting && (
          <View>
            <ActivityIndicator size={'large'} />
          </View>
        )}*/}

        {/*<CustomButton
          text="Sign Up"
          onPress={handleSubmit(
            async (data) => await signUpWithEmailAsync(data, onSignUpSuccess, onSignUpFailure),
          )}
          isPrimary={true}
        />*/}
        {/*<CustomButton
          icon={googleLogo}
          text="Continue with Google"
          onPress={async () => await signInWithGoogleAsync(onSignUpSuccess, onSignUpFailure)}
        />*/}
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
    bottom: heightPercentageToDP(3),
    flexDirection: 'row',
    width: widthPercentageToDP(50),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SignUpScreen;
