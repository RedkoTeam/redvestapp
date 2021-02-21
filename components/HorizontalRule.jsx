import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'redvest/util/styles';

function HorizontalRule() {
  return <View style={styles.horizontalRule} />;
}

const styles = StyleSheet.create({
  horizontalRule: {
    flex: 1,
    height: 1,
    backgroundColor: colors.darkGrey,
  },
});

export default HorizontalRule;
