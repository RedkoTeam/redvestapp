'use strict';
import React from 'react';
import { colors } from 'redvest/util/styles';
import { LogBox, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider } from 'redvest/contexts/AuthContext';
import { DataProvider } from 'redvest/contexts/DataContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationContainer from 'redvest/navigators/NavigationContainer';

import {
  useFonts,
  FiraSans_400Regular,
  FiraSans_500Medium,
  FiraSans_600SemiBold,
  FiraSans_700Bold,
} from '@expo-google-fonts/fira-sans';

import firebase from 'firebase';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGE_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBbELocxybHPNIvOvKhoHBUZxTlNtOTQuM",
  authDomain: "redvest-48588.firebaseapp.com",
  databaseURL: "https://redvest-48588-default-rtdb.firebaseio.com",
  projectId: "redvest-48588",
  storageBucket: "redvest-48588.appspot.com",
  messagingSenderId: "651982342789",
  appId: "1:651982342789:web:399220ff400e2e030c37ec",
  measurementId: "G-R3FF3VQ1JE",
};

!firebase.apps.length ? firebase.initializeApp(FIREBASE_CONFIG) : firebase.app();

SplashScreen.preventAutoHideAsync().catch(() =>
  LogBox.ignoreLogs([
    'Unhandled promise rejection: Error: Native splash screen is already hidden.',
  ]),
);

function App() {
  const [fontsLoaded] = useFonts({
    FiraSans_400Regular,
    FiraSans_500Medium,
    FiraSans_600SemiBold,
    FiraSans_700Bold,
  });
  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <DataProvider>
        <SafeAreaProvider>
          <StatusBar barStyle={'light-content'} backgroundColor={colors.darkBackground} />
          <NavigationContainer />
        </SafeAreaProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
