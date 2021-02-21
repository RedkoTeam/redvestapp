import { textStyles, colors } from 'redvest/util/styles';
import { widthPercentageToDP, heightPercentageToDP } from 'redvest/util/scaler';

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
import { EMAIL_SCHEMA } from 'redvest/schema/authSchema';

import Spacer from 'redvest/components/Spacer';
import { EmailInput } from 'redvest/components/CustomTextInput';
import CustomButton from 'redvest/components/CustomButton';

function ResetPasswordScreen({ navigation }) {
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
        <Spacer height={2} />

        <EmailInput control={control} errors={errors} />
        <Spacer height={1} />

        <CustomButton
          primary
          text="Send Email"
          onPress={handleSubmit(
            async (data) => await passwordResetEmailAsync(data, onResetSuccess, onResetFailure),
          )}
        />

        <View style={styles.buttomButtons}>
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
  buttomButtons: {
    position: 'absolute',
    bottom: heightPercentageToDP(Platform.OS === 'ios' ? -2 : 2),
    flexDirection: 'column',
    width: 195,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ResetPasswordScreen;
