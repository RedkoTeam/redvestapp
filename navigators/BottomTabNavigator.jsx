import React from 'react';
import { Platform } from 'react-native';
import { colors, textStyles } from 'redvest/util/styles';
import { heightPercentageToDP } from 'redvest/util/scaler';

import HomeIcon from 'redvest/icons/bottom-tabs/HomeIcon';
import GameIcon from 'redvest/icons/bottom-tabs/GameIcon';
import InvestIcon from 'redvest/icons/bottom-tabs/InvestIcon';
import AccountIcon from 'redvest/icons/bottom-tabs/AccountIcon';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from 'redvest/navigators/HomeStackNavigator';
import AccountStackNavigator from 'redvest/navigators/AccountStackNavigator';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: colors.darkBackground,
          height: heightPercentageToDP(Platform.OS === 'ios' ? 12 : 10),
        },
        tabStyle: {
          paddingTop: heightPercentageToDP(Platform.OS === 'ios' ? 1.5 : 2.5),
          paddingBottom: heightPercentageToDP(Platform.OS === 'ios' ? 0.5 : 1),
        },
        labelStyle: textStyles.tinyRegular,
        //iconStyle: {},
        activeTintColor: colors.primary,
        keyboardHidesTabBar: true,
        safeAreaInsets: { top: 10 },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ tabBarIcon: HomeIcon }}
      />
      <BottomTab.Screen
        name="Game"
        component={HomeStackNavigator}
        options={{ tabBarIcon: GameIcon }}
      />
      <BottomTab.Screen
        name="Invest"
        component={HomeStackNavigator}
        options={{ tabBarIcon: InvestIcon }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountStackNavigator}
        options={{ tabBarIcon: AccountIcon }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
