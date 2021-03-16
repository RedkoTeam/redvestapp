import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from "redvest/util/scaler";

export const colors = {
  primary: "#78AC43",
  redError: "#EB5757",
  offWhite: "#E3E5E5",
  mediumGrey: "#C6CACC",
  darkGrey: "#5E6366",
  offBlack: "#1F1F1F",
  darkBackground: "#121212",
};

export const textStyles = StyleSheet.create({
  // HUGE
  hugeRegular: {
    fontFamily: "Poppins_400Regular",
    fontSize: 30,
  },
  hugeMedium: {
    fontFamily: "Poppins_500Medium",
    fontSize: 30,
  },
  hugeSemiBold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 30,
  },
  hugeBold: {
    fontFamily: "Poppins_700Bold",
    fontSize: 30,
  },
  // BIG
  bigRegular: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
  },
  bigMedium: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
  },
  bigSemiBold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
  },
  bigBold: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
  },
  // NORMAL
  normalRegular: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
  normalMedium: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  normalSemiBold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
  },
  normalBold: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
  },
  // SMALL
  smallRegular: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  smallMedium: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
  },
  smallSemiBold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
  },
  smallBold: {
    fontFamily: "Poppins_700Bold",
    fontSize: 12,
  },
  // TINY
  tinyRegular: {
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
  },
  tinyMedium: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
  },
  tinySemiBold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 10,
  },
  tinyBold: {
    fontFamily: "Poppins_700Bold",
    fontSize: 10,
  },
});

export const headerPaddings = {
  horizontal: widthPercentageToDP(6) + 2,
  vertical: Platform.OS === "ios" ? 5 : 1,
};

export const headerStyles = {
  backgroundColor: colors.darkBackground,
  shadowColor: "transparent",
  elevation: 0,
  shadowOpacity: 0,
  borderBottomWidth: 0,
};

export const headerOptions = {
  headerTitle: false,
  headerShown: true,
  headerStyle: headerStyles,
  headerTitleAlign: "center",
  headerTitleStyle: [textStyles.bigSemiBold, { color: colors.offWhite }],
};
