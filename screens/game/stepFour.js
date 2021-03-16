import React, { useEffect, useState, useContext } from "react";
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from "react-native";
import back from "../../assets/images/Invest/step4/back.png";
import Amounttra from "../../assets/images/Invest/step4/Amounttra.png";
import AccountTotal from "../../assets/images/Invest/step4/AccountTotal.png";
import title from "../../assets/images/Invest/step4/title.png";
import Stoploss from "../../assets/images/Invest/step4/Stoploss.png";
import next from "../../assets/images/Invest/step4/next.png";
import bg from "../../assets/images/HomeScreen/bg.png";
import { widthPercentageToDP, heightPercentageToDP } from "../../util/scaler";
import Navbar_game from "../Navbar/Navbar_game.js";
import { enableScreens } from "react-native-screens";
import Slider from "@react-native-community/slider";

enableScreens(false);

function stepFour({ navigation, route }) {
  const [sliderValue1, setSliderValue1] = useState(15);
  const [sliderValue2, setSliderValue2] = useState(15);

  useEffect(() => {
    let mounted = true;
  });

  function choosingAmountCompleted() {
    navigation.navigate("stepFive", {
      strategy: route.params.strategy,
      portfolio: route.params.portfolio,
      stocks: route.params.stocks,
      frequency: route.params.frequency,
      amount: sliderValue1,
      stopLoss: sliderValue2,
    });
  }

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
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
              source={title}
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
              paddingBottom: 200,
            }}
          >
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={AccountTotal}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(45),
                    height: heightPercentageToDP(10),
                    marginLeft: "20%",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  height: heightPercentageToDP(7),
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate("")}>
                  <Image
                    source={Amounttra}
                    style={{
                      resizeMode: "contain",
                      width: widthPercentageToDP(45),
                      height: heightPercentageToDP(5),
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    justifyContent: "center",
                    marginLeft: 250,
                    backgroundColor: "white",
                    width: 100,
                    height: 52,
                    borderRadius: 12,
                    position: "absolute",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#78AC43",
                      alignSelf: "center",
                    }}
                  >
                    ${sliderValue1}
                  </Text>
                </View>
              </View>
              <Slider
                maximumValue={50000}
                minimumValue={0}
                minimumTrackTintColor="#78AC43"
                maximumTrackTintColor="#000000"
                step={1}
                value={sliderValue1}
                onValueChange={(sliderValue1) => setSliderValue1(sliderValue1)}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  height: heightPercentageToDP(7),
                  marginTop: "5%",
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate("")}>
                  <Image
                    source={Stoploss}
                    style={{
                      resizeMode: "contain",
                      width: widthPercentageToDP(20),
                      height: heightPercentageToDP(3),
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    justifyContent: "center",
                    marginLeft: 250,
                    backgroundColor: "white",
                    width: 100,
                    height: 52,
                    borderRadius: 12,
                    position: "absolute",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#EB5757",
                      alignSelf: "center",
                    }}
                  >
                    %{sliderValue2}
                  </Text>
                </View>
              </View>
              <Slider
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor="#EB5757"
                maximumTrackTintColor="#000000"
                step={1}
                value={sliderValue2}
                onValueChange={(sliderValue2) => setSliderValue2(sliderValue2)}
              />
            </View>

            <View style={{ marginTop: "15%" }}>
              <TouchableOpacity onPress={choosingAmountCompleted}>
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
          </View>
        </ScrollView>
      </ImageBackground>
      <Navbar_game />
    </View>
  );
}

export default stepFour;
