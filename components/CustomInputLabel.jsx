import { textStyles, colors } from 'redvest/util/styles';
import { heightPercentageToDP, widthPercentageToDP } from 'redvest/util/scaler';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function CustomInputLabel({ text, optional = false, info = false, big = false }) {
  return (
    <View style={[styles.labelContainer, !big && styles.marginOffset]}>
      <Text
        style={
          big
            ? [styles.bigLabel, textStyles.bigMedium]
            : [styles.smallLabel, textStyles.smallRegular]
        }
      >
        {text}
      </Text>
      {optional && <Text style={[textStyles.smallRegular, styles.optional]}>optional</Text>}
      {info && (
        <Ionicons
          name="ios-information-circle"
          size={24}
          color={colors.offWhite}
          style={styles.marginOffset}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallLabel: {
    color: colors.primary,
  },
  bigLabel: {
    color: colors.offWhite,
  },
  optional: {
    color: colors.darkGrey,
    paddingLeft: widthPercentageToDP(5),
  },
  marginOffset: {
    marginHorizontal: widthPercentageToDP(1),
  },
});

export default CustomInputLabel;
