import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import bio from "../../assets/images/Invest/step2/bio.png";
import custom from "../../assets/images/Invest/step2/custom.png";
import energy from "../../assets/images/Invest/step2/energy.png";
import retail from "../../assets/images/Invest/step2/retail.png";
import title from "../../assets/images/Invest/step2/title.png";
import tech from "../../assets/images/Invest/step2/tech.png";
import bg from "../../assets/images/HomeScreen/bg.png";
import { widthPercentageToDP, heightPercentageToDP } from "../../util/scaler";
import Navbar_game from "../Navbar/Navbar_game.js";
import back from "../../assets/images/Invest/step3a/back.png";
import { enableScreens } from "react-native-screens";
import { useFormContext } from "react-hook-form";

enableScreens(false);

function stepTwo({ navigation, route }) {
  useEffect(() => {
    let mounted = true;
  });

  function portfolioSelected(portfolio) {
    navigation.navigate("stepThree", {
      strategy: route.params.strategy,
      portfolio: portfolio,
    });
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
            onPress={() => navigation.navigate("stepOne")}
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
              width: widthPercentageToDP(80),
              height: heightPercentageToDP(15),
              marginTop: "10%",
              left: "-20%",
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
              paddingBottom: 200,
            }}
          >
            <View
              style={{
                paddingBottom: "5%",
              }}
            >
              <TouchableOpacity onPress={() => portfolioSelected("Tech")}>
                <Image
                  source={tech}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingBottom: "5%",
              }}
            >
              <TouchableOpacity onPress={() => portfolioSelected("Bio")}>
                <Image
                  source={bio}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingBottom: "5%",
              }}
            >
              <TouchableOpacity onPress={() => portfolioSelected("Energy")}>
                <Image
                  source={energy}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingBottom: "5%",
              }}
            >
              <TouchableOpacity onPress={() => portfolioSelected("Retail")}>
                <Image
                  source={retail}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              {/*
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={custom}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                  }}
                />
              </TouchableOpacity>*/}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <Navbar_game />
    </View>
  );
}

export default stepTwo;
