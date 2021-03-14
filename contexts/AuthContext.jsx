import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import 'firebase/firestore';
import firebase from 'firebase';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as Segment from 'expo-analytics-segment';

import { CustomTabs } from 'react-native-custom-tabs';
import { Platform, NativeModules } from 'react-native';
import {
  ALPACA_AUTH_CLIENT_ID,
  ALPACA_AUTH_CLIENT_SECRET,
  ALPACA_AUTH_ENDPOINT,
  ALPACA_TOKEN_ENDPOINT,
} from '@env';
import alpacaApi from 'redvest/services/alpacaApi';

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user != null) setUser(user);
      await SplashScreen.hideAsync();
    });
  }, []);

  const singOutAsync = async (handleSuccess, handleFailure) => {
    try {
      await firebase.auth().signOut();
      setUser(null);
      handleSuccess();
    } catch ({ message }) {
      handleFailure(message);
    }
  };

  const signUpWithEmailAsync = async (data, handleSuccess, handleFailure) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(handleSuccess())
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          handleFailure()('Weak Password!');
        } else {
          handleFailure()(errorMessage);
        }
      });
    Segment.identify(data.email);
    Segment.trackWithProperties('User SignIn', {
      accountType: 'CustomEmailAuth',
      email: data.email,
    });
  };

  const signInWithEmailAsync = async (data, handleSuccess, handleFailure) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(handleSuccess())
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          handleFailure('Weak Password!');
        } else {
          handleFailure(errorMessage);
        }
      });
  };

  const passwordResetEmailAsync = async (data, handleSuccess, handleFailure) => {
    await firebase
      .auth()
      .sendPasswordResetEmail(data.email)
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          handleFailure('Weak Password!');
        } else {
          handleFailure(errorMessage);
        }
      });
  };

  const signInWithFacebook = async (handleSuccess, handleFailure) => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync('684399708713036', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const facebookProfileData = await firebase.auth().signInWithCredential(credential);
        handleSuccess();
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  const signInWithGoogleAsync = async (handleSuccess, handleFailure) => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.GoogleAuthProvider.credential(
          user.auth.idToken,
          user.auth.accessToken,
        );
        const googleProfileData = await firebase.auth().signInWithCredential(credential);
        handleSuccess();
      }
    } catch ({ message }) {
      alert(`Google Login Error: ${message}`);
    }
  };

  const exchangeAlpacaToken = (url) => {
    console.log('url:', url);
    if (!url) return;
    const code = getAlpacaCode(url);
    const config = `grant_type=authorization_code&redirect_uri=alpacamobile://oauth&code=${code}`;

    //props.alpacaExchangeToken(config);
    alpacaApi().alpacaExchangeToken(config);
  };

  const getAlpacaCode = (url) => {
    let codeIndex = url.indexOf('code');
    let code = url.slice(codeIndex + 5);
    return code;
  };

  const alpacaAuthStart = async () => {
    clientId = ALPACA_AUTH_CLIENT_ID;
    clientSecret = ALPACA_AUTH_CLIENT_SECRET;
    authorizationEndpoint = ALPACA_AUTH_ENDPOINT;
    redirectUrl = 'alpacamobile://oauth';
    responseType = 'code';
    tokenEndpoint = ALPACA_TOKEN_ENDPOINT;
    // const authConfig = {
    //     issuer: authorizationEndpoint,
    //     clientId,
    //     clientSecret,
    //     redirectUrl,
    //     serviceConfiguration: {
    //         authorizationEndpoint,
    //         tokenEndpoint,
    //     },
    //     customHeaders: {
    //         token: {
    //             'Authorization': 'Basic ' + base64.encode(`${config.AUTH_CLIENT_ID}:${config.AUTH_CLIENT_SECRET}`),
    //         },
    //     },
    // };
    // console.log("authConfig:", authConfig);

    // try {
    //     const result = await authorize(authConfig);
    //     console.log('auth result', result);
    // } catch (error) {
    //     console.log('auth error', error);
    // }
    let webOAuthUrl = `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}`;
    if (Platform.OS === 'android') {
      CustomTabs.openURL(webOAuthUrl, {
        forceCloseOnRedirection: true,
      })
        .then((launched) => {
          console.log(`Launched custom tabs: ${launched}`);
        })
        .catch((err) => {
          console.error('custom tab error:' + err);
        });
    } else {
      NativeModules.AlpacaOAuth.AuthStart(webOAuthUrl)
        .then((url) => {
          console.log('auth result', url);
          if (url) {
            exchangeAlpacaToken(url);
          }
        })
        .catch((error) => {
          console.log('native auth error:', error);
        });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        singOutAsync,
        signUpWithEmailAsync,
        signInWithEmailAsync,
        passwordResetEmailAsync,
        signInWithFacebook,
        signInWithGoogleAsync,
        alpacaAuthStart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
