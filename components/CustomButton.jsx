import { textStyles, colors } from 'redvest/util/styles';
import { heightPercentageToDP, widthPercentageToDP } from 'redvest/util/scaler';

import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

function CustomButton({ icon, text, onPress, primary = false, small = false, disabled = false }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          small ? styles.buttonSmall : styles.buttonLarge,
          styles.button,
          primary ? styles.buttonPrimary : styles.buttonSecondary,
          disabled && primary && styles.primaryDisabled,
          disabled && !primary && styles.secondaryDisabled,
        ]}
        onPress={onPress}
        disabled={disabled}
      >
        {icon && <Image source={icon} style={styles.icon} />}
        <Text
          style={[
            primary
              ? small
                ? textStyles.normalMedium
                : textStyles.bigMedium
              : small
                ? textStyles.normalRegular
                : textStyles.bigRegular,
            primary ? styles.textPrimary : styles.textSecondary,
            disabled && primary && styles.textPrimaryDisabled,
            disabled && !primary && styles.textSecondaryDisabled,
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(1),
    marginBottom: heightPercentageToDP(1),
    //borderColor: 'red',
    //borderWidth: 1,
  },
  button: {
    paddingHorizontal: 30,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    shadowColor: colors.offBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLarge: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(Platform.OS === 'ios' ? 5.8 : 6.3),
  },
  buttonSmall: {
    minWidth: widthPercentageToDP(28),
    height: heightPercentageToDP(Platform.OS === 'ios' ? 4.2 : 4.8),
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: 'white',
  },
  primaryDisabled: {
    backgroundColor: '#ccc',
  },
  secondaryDisabled: {
    backgroundColor: '#f5f5f5',
  },
  icon: {
    resizeMode: 'contain',
    width: 35,
    height: heightPercentageToDP(2.5),
    marginRight: 8,
  },
  textPrimary: {
    color: 'white',
  },
  textSecondary: {
    color: colors.offBlack,
  },
  textPrimaryDisabled: {
    color: 'white',
  },
  textSecondaryDisabled: {
    color: '#aaa',
  },
});

export default CustomButton;
