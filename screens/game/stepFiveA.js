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
import freq from "../../assets/images/Invest/step5/Frequency.png";
import con from "../../assets/images/Invest/step5/Conta.png";
import Amount from "../../assets/images/Invest/step5/Amount.png";

import Stoploss from "../../assets/images/Invest/step5/Stoploss.png";
import primary from "../../assets/images/Invest/step5/primary.png";
import stra from "../../assets/images/Invest/step5/strategy.png";
import port from "../../assets/images/Invest/step5/port.png";
import line from "../../assets/images/Invest/step5/Line1.png";
import bg from "../../assets/images/HomeScreen/bg.png";
import { widthPercentageToDP, heightPercentageToDP } from "../../util/scaler";
import Navbar_game from "../Navbar/Navbar_game.js";
import { enableScreens } from "react-native-screens";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "redvest/schema/gameSchema";

enableScreens(false);

function stepFiveA({ navigation, route }) {
  const { strategy, portfolio, frequency, stopLoss, amount } = route.params;
  useEffect(() => {
    let mounted = true;
  });

  return (
    <View style={{backgroundColor:'black', flex: 1 }}>
      <ImageBackground
        source={bg}
        style={{
          width: widthPercentageToDP(100),
          height: heightPercentageToDP(100),
        }}
      >
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              marginTop: widthPercentageToDP(7),
            }}
          >
            <Image
              source={con}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(80),
                height: heightPercentageToDP(10),

                marginBottom: "0%",
              }}
            />
          </View>

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
                width: widthPercentageToDP(80),
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

                  //paddingLeft: 170,
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
                width: widthPercentageToDP(80),
                height: heightPercentageToDP(1),
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={freq}
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
                {frequency}
              </Text>
            </View>

            <Image
              source={line}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(80),
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
                ${amount}
              </Text>
            </View>

            <Image
              source={line}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(80),
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
                {stopLoss}%
              </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <Image
                  source={primary}
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

export default stepFiveA;
