'use strict';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider } from 'redvest/contexts/AuthContext';
import { DataProvider } from 'redvest/contexts/DataContext';
import NavigationContainer from 'redvest/navigators/NavigationContainer';

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
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
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
  const forFade = ({ current }) => ({ cardStyle: { opacity: current.progress } });

  // Put Error fallback here

  return (
    <AuthProvider>
      <DataProvider>
        <NavigationContainer />
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
