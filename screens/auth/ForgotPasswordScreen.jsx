import { colors } from 'redvest/utils/styles';
import { widthPercentageToDP, heightPercentageToDP } from 'redvest/util/scaler';

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
import { EMAIL_SCHEMA } from 'redvest/schema/authSchema';

import Spacer from 'redvest/components/Spacer';
import { EmailInput } from 'redvest/components/CustomTextInput';
import CustomButton from 'redvest/components/CustomButton';

function PasswordResetScreen() {
  const { passwordResetEmailAsync } = useContext(AuthContext);
  const { control, handleSubmit, errors, reset, formState } = useForm({
    resolver: yupResolver(EMAIL_SCHEMA),
  });
  useFocusEffect(useCallback(reset));

  const onResetSuccess = () => {
    // navigation.navigate('SignIn');
  };
  const onResetFailure = (errorMessage) => {
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
        <Spacer height={8} />

        <EmailInput control={control} errors={errors} />
        <Spacer height={1} />

        <CustomButton
          text="Send Email"
          onPress={handleSubmit(
            async (data) => await passwordResetEmailAsync(data, onResetSuccess, onResetFailure),
          )}
          isPrimary={true}
        />
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
});

export default PasswordResetScreen;
