"use strict";
import React from "react";
import { colors } from "redvest/util/styles";
import { LogBox, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { AuthProvider } from "redvest/contexts/AuthContext";
import { DataProvider } from "redvest/contexts/DataContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationContainer from "redvest/navigators/NavigationContainer";
import {
  useFonts,
  FiraSans_400Regular,
  FiraSans_500Medium,
  FiraSans_600SemiBold,
  FiraSans_700Bold,
} from "@expo-google-fonts/fira-sans";

import firebase from "firebase";
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGE_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "@env";

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

!firebase.apps.length
  ? firebase.initializeApp(FIREBASE_CONFIG)
  : firebase.app();

SplashScreen.preventAutoHideAsync().catch(() =>
  LogBox.ignoreLogs([
    "Unhandled promise rejection: Error: Native splash screen is already hidden.",
  ])
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
          <StatusBar
            barStyle={"light-content"}
            backgroundColor={colors.darkBackground}
          />
          <NavigationContainer />
        </SafeAreaProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
