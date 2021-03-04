import React, { useState, useEffect } from 'react';

import 'firebase/firestore';
import firebase from 'firebase';

const DataContext = React.createContext();

export function DataProvider({ children }) {
  const [db, setDb] = useState(null);
  const [firebaseDB, setFirebaseDB]=useState(null)

  useEffect(() => {
    setDb(firebase.firestore());
    setFirebaseDB(firebase.database().ref())
  }, []);

  const profileUploadAsync = async () => {
    db.collection('users')
      .doc(firebase.auth().currentUser.uid)
      .set(
        {
          stockTicker: sTicker,
          stockPrice: sPrice,
          stockQty: sQty,
          orderType: oType,
          timeForce: tForce,
          stopLoss: sLoss,
        },
        { merge: true },
      )
      .then(() => {
        navigation.navigate('');
      });
  };

  const signUpAsync = async (values) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((data) => {
          return db
            .collection('users')
            .doc(data.user.uid)
            .set({
              userName: values.email,
              subscriptionLevel: 0,
              totalGems: 3,
              totalFortunes: 5,
            })
            .then(async () => {
              await SaveItemInStorage('FORTUNE_READING_COUNT', '5');
              await SaveItemInStorage('REGULAR_READING_COUNT', '3');
              await SaveItemInStorage('AUTH_EMAIL', values.email);
              await SaveItemInStorage('AUTH_PASSWORD', values.password);
              console.log('User account created & signed in!');
              navigation.navigate('ProfileDetails');
            });
        })
        .catch(async (error) => {
          console.log(error);
          if (error.code === 'auth/email-already-in-use') {
            console.log(error.code);
            setCurrentError(error.code);
            toggleOverlay();
          }
          if (error.code === 'auth/invalid-email') {
            console.log(error.code);
            setCurrentError(error.code);
            toggleOverlay();
          }
          console.log(error.code);
          setCurrentError(error.code);
          toggleOverlay();
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DataContext.Provider
      value={{
        db,
        firebaseDB,
        profileUploadAsync,
        signUpAsync,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
