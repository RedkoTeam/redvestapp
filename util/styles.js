import { Platform, StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'redvest/util/scaler';

export const colors = {
  primary: '#78AC43',
  redError: '#EB5757',
  offWhite: '#E3E5E5',
  mediumGrey: '#C6CACC',
  darkGrey: '#5E6366',
  offBlack: '#1F1F1F',
  darkBackground: '#121212',
};

export const textStyles = StyleSheet.create({
  // BIG
  bigRegular: {
    fontFamily: 'FiraSans_400Regular',
    fontSize: 18,
  },
  bigMedium: {
    fontFamily: 'FiraSans_500Medium',
    fontSize: 18,
  },
  bigSemiBold: {
    fontFamily: 'FiraSans_600SemiBold',
    fontSize: 18,
  },
  bigBold: {
    fontFamily: 'FiraSans_700Bold',
    fontSize: 18,
  },
  // NORMAL
  normalRegular: {
    fontFamily: 'FiraSans_400Regular',
    fontSize: 16,
  },
  normalMedium: {
    fontFamily: 'FiraSans_500Medium',
    fontSize: 16,
  },
  normalSemiBold: {
    fontFamily: 'FiraSans_600SemiBold',
    fontSize: 16,
  },
  normalBold: {
    fontFamily: 'FiraSans_700Bold',
    fontSize: 16,
  },
  // SMALL
  smallRegular: {
    fontFamily: 'FiraSans_400Regular',
    fontSize: 12,
  },
  smallMedium: {
    fontFamily: 'FiraSans_500Medium',
    fontSize: 12,
  },
  smallSemiBold: {
    fontFamily: 'FiraSans_600SemiBold',
    fontSize: 12,
  },
  smallBold: {
    fontFamily: 'FiraSans_700Bold',
    fontSize: 12,
  },
  // TINY
  tinyRegular: {
    fontFamily: 'FiraSans_400Regular',
    fontSize: 10,
  },
  tinyMedium: {
    fontFamily: 'FiraSans_500Medium',
    fontSize: 10,
  },
  tinySemiBold: {
    fontFamily: 'FiraSans_600SemiBold',
    fontSize: 10,
  },
  tinyBold: {
    fontFamily: 'FiraSans_700Bold',
    fontSize: 10,
  },
});

export const headerPaddings = {
  horizontal: widthPercentageToDP(6) + 2,
  vertical: Platform.OS === 'ios' ? 5 : 1,
};

export const headerStyles = {
  backgroundColor: colors.darkBackground,
  shadowColor: 'transparent',
  elevation: 0,
  shadowOpacity: 0,
  borderBottomWidth: 0,
  
};

export const headerOptions = {
  //headerTitle: false,
  headerStyle: headerStyles,
  headerTitleAlign: 'center',
  headerTitleStyle: { color: colors.offWhite },
};
