import { textStyles, headerPaddings, colors } from 'redvest/util/styles';
import { Ionicons } from '@expo/vector-icons'; 

import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function BackChevron({ text = '' }) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.container}>
        <Ionicons name="ios-chevron-back" size={24} color={colors.offWhite} />
        <Text style={textStyles.normalMedium}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: headerPaddings.vertical,
    paddingHorizontal: headerPaddings.horizontal,
  },
  icon: {
    resizeMode: 'contain',
    width: 10,
    marginRight: 10,
  },
});

export default withNavigation(BackChevron);
