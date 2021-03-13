'use strict';
import React from 'react';
import { AuthProvider } from 'redvest/contexts/AuthContext';
import { AssetsProvider } from 'redvest/contexts/AssetsContext';
import { OrdersProvider } from 'redvest/contexts/OrdersContext';
import { DataProvider } from 'redvest/contexts/DataContext';
import { AlpacaAccountInfoProvider } from 'redvest/contexts/AlpacaAccountInfoContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { colors } from 'redvest/util/styles';
import { LogBox, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import NavigationContainer from 'redvest/navigators/NavigationContainer';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import firebase from 'firebase';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';

const FIREBASE_CONFIG = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

!firebase.apps.length ? firebase.initializeApp(FIREBASE_CONFIG) : firebase.app();

SplashScreen.preventAutoHideAsync().catch(() =>
  LogBox.ignoreLogs([
    'Unhandled promise rejection: Error: Native splash screen is already hidden.',
  ]),
);

function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <AssetsProvider>
        <DataProvider>
          <AlpacaAccountInfoProvider>
            <OrdersProvider>
              <SafeAreaProvider>
                <StatusBar barStyle={'light-content'} backgroundColor={colors.darkBackground} />
                <NavigationContainer />
              </SafeAreaProvider>
            </OrdersProvider>
          </AlpacaAccountInfoProvider>
        </DataProvider>
      </AssetsProvider>
    </AuthProvider>
  );
}

export default App;
