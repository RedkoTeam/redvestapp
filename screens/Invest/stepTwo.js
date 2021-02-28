import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import investbtn from "../../assets/images/HomeScreen/investbtn.png";
import playbtn from "../../assets/images/HomeScreen/playbtn.png";
import cont from "../../assets/images/HomeScreen/reddollarcon.png";
import bio from "../../assets/images/Invest/step2/bio.png";
import custom from "../../assets/images/Invest/step2/custom.png";
import energy from "../../assets/images/Invest/step2/energy.png";
import next from "../../assets/images/Invest/step2/next.png";
import retail from "../../assets/images/Invest/step2/retail.png";
import title from "../../assets/images/Invest/step2/title.png";
import tech from "../../assets/images/Invest/step2/tech.png";
import bg from "../../assets/images/HomeScreen/bg.png";
import { Dimensions } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from "../../util/scaler";
import { actuatedNormalize } from "../../util/fontScaler";
import Navbar_game from "../Navbar/Navbar_game.js";
import back from "../../assets/images/Invest/step3a/back.png";
import { enableScreens } from "react-native-screens";

enableScreens(false);

function stepTwo() {
  const navigation = useNavigation();
  useEffect(() => {
    let mounted = true;
  });
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
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("stepThree")}
              >
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
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
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
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
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
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
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
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={custom}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(11),
                  }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("stepThree")}>
              <Image
                source={next}
                style={{
                  resizeMode: "contain",
                  width: widthPercentageToDP(85),
                  height: heightPercentageToDP(11),
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
      <Navbar_game />
    </View>
  );
}

export default stepTwo;
