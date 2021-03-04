import React, { useEffect, useContext } from "react";
import {
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from "react-native";
import back from "../../assets/images/Invest/step4/back.png";
import freq from "../../assets/images/Invest/step5/Frequency.png";
import title from "../../assets/images/Invest/step5/title.png";
import Stoploss from "../../assets/images/Invest/step5/Stoploss.png";
import Amount from "../../assets/images/Invest/step5/Amount.png";
import next from "../../assets/images/Invest/step5/investbtn.png";
import stra from "../../assets/images/Invest/step5/strategy.png";
import port from "../../assets/images/Invest/step5/port.png";
import line from "../../assets/images/Invest/step5/Line1.png";
import bg from "../../assets/images/HomeScreen/bg.png";
import { widthPercentageToDP, heightPercentageToDP } from "../../util/scaler";
import Navbar_game from "../Navbar/Navbar_game.js";
import { enableScreens } from "react-native-screens";
import { useFormContext } from "react-hook-form";
//import firebaseDb from '../../firebase/firebase'
import DataContext from "redvest/contexts/DataContext";
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
enableScreens(false);

function stepFive({ navigation, route }) {
  const { control, errors } = useFormContext();
  const { firebaseDB } = useContext(DataContext);
  const { strategy, portfolio, frequency, stopLoss, amount } = route.params;

  useEffect(() => {
    let mounted = true;
  });

  function invest() {
    firebaseDB.child("selections").push(route.params);
    // navigation.navigate("stepFiveA")
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={bg}
        style={{
          width: widthPercentageToDP(100),
          height: heightPercentageToDP(100),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("stepFour")}
            style={{
              left: widthPercentageToDP(3),
              top: heightPercentageToDP(3),
            }}
          >
            <Image
              source={back}
              style={{
                width: widthPercentageToDP("3"),
                height: heightPercentageToDP("3"),
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <Image
            source={title}
            style={{
              resizeMode: "contain",
              width: widthPercentageToDP(50),
              height: heightPercentageToDP(15),
              marginTop: "0%",
              left: "-70%",
            }}
          />
        </View>
        <ScrollView style={{ height: "200%" }}>
          <View
            style={{
              flex: 0.03,
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              padding: 15,
              marginLeft: "3%",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={stra}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(23),
                    height: heightPercentageToDP(5),
                  }}
                />
              </TouchableOpacity>

              <Text
                style={{
                  position: "absolute",
                  alignSelf: "center",

                  //paddingLeft: 170,
                  marginLeft: "50%",
                  fontSize: 20,
                  color: "white",
                }}
              >
                {strategy}
              </Text>
            </View>
            <Image
              source={line}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(85),
                height: heightPercentageToDP(1),
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={port}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(23),
                    height: heightPercentageToDP(5),
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  position: "absolute",
                  alignSelf: "center",

                  marginLeft: "50%",
                  fontSize: 20,
                  color: "white",
                }}
              >
                {portfolio}
              </Text>
            </View>
            <Image
              source={line}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(85),
                height: heightPercentageToDP(1),
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={freq}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(27),
                    height: heightPercentageToDP(5),
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  position: "absolute",
                  alignSelf: "center",

                  marginLeft: "50%",
                  fontSize: 20,
                  color: "white",
                }}
              >
                {frequency}
              </Text>
            </View>
            <Image
              source={line}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(85),
                height: heightPercentageToDP(1),
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={Amount}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(23),
                    height: heightPercentageToDP(3),
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  position: "absolute",
                  alignSelf: "center",

                  marginLeft: "50%",
                  fontSize: 20,
                  color: "white",
                }}
              >
                ${amount}
              </Text>
            </View>
            <Image
              source={line}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(85),
                height: heightPercentageToDP(1),
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={Stoploss}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(23),
                    height: heightPercentageToDP(3),
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  position: "absolute",
                  alignSelf: "center",

                  marginLeft: "50%",
                  fontSize: 20,
                  color: "white",
                }}
              >
                {stopLoss}%
              </Text>
            </View>

            <View>
              <TouchableOpacity onPress={invest}>
                <Image
                  source={next}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                    marginTop: "10%",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <Navbar_game />
    </View>
  );
}

export default stepFive;
