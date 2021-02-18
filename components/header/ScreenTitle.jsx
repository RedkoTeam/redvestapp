import { textStyles, headerPaddings } from 'redvest/util/styles';

import React from 'react';
import { Text, StyleSheet } from 'react-native';

function ScreenTitle({ title }) {
  return <Text style={[textStyles.bigBold, styles.title]}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: headerPaddings.horizontal,
    paddingVertical: headerPaddings.vertical,
  },
});

export default ScreenTitle;
