import React from 'react';
import { ScrollView, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { widthPercentageToDP, heightPercentageToDP } from 'redvest/util/scaler';
import { colors } from 'redvest/util/styles';

enableScreens(false);

function StopLossInfoScreen() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollView}></ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.darkBackground,
    minHeight: Math.round(Dimensions.get('window').height / 2),
    paddingHorizontal: widthPercentageToDP(5),
  },
  scrollView: {
    marginVertical: heightPercentageToDP(3),
    paddingHorizontal: widthPercentageToDP(5),
    width: '100%',
  },
});

export default StopLossInfoScreen;
