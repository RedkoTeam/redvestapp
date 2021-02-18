import { textStyles, colors } from 'redvest/util/styles';
import { widthPercentageToDP, heightPercentageToDP } from 'redvest/util/scaler';

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
  ActivityIndicator,
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
        backgroundColor: 'white',
        minHeight: Math.round(Dimensions.get('window').height),
      }}
    >
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
          text="Sign In"
          onPress={handleSubmit(
            async (data) => await signInWithEmailAsync(data, onSignInSuccess, onSignInFailure),
          )}
          isPrimary
        />
        <CustomButton
          icon={googleLogo}
          text="Continue with Google"
          onPress={async () => await signInWithGoogleAsync(onSignInSuccess, onSignInFailure)}
        />

        <View style={styles.registerButton}>
          <Text style={[textStyles.smallRegular, { color: colors.offBlack }]}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[textStyles.normalSemiBold, { color: colors.primary }]}>Register</Text>
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
    flexDirection: 'row',
    width: 195,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SignInScreen;
