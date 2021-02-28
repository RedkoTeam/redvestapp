import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from "react-native";
import back from "../../assets/images/Invest/step3a/back.png";
import Weekly from "../../assets/images/Invest/step3a/Weekly.png";
import Daily from "../../assets/images/Invest/step3a/Daily.png";
import next from "../../assets/images/Invest/step3a/next.png";
import title from "../../assets/images/Invest/step3a/title.png";
import Monthly from "../../assets/images/Invest/step3a/Monthly.png";
import Custom from "../../assets/images/Invest/step3a/Custom.png";
import bg from "../../assets/images/HomeScreen/bg.png";
import { Dimensions } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from "../../util/scaler";
import { actuatedNormalize } from "../../util/fontScaler";
import Navbar_game from "../Navbar/Navbar_game.js";
import { enableScreens } from "react-native-screens";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

enableScreens(false);

function stepThreea() {
  const navigation = useNavigation();
  const [value3Index, setValue3Index] = useState(0);
  useEffect(() => {
    let mounted = true;
  });
  var radio_props = [
    { label: "Daily", value: 0 },
    { label: "Weekly", value: 1 },
    { label: "Monthly", value: 2 },
    { label: "Custom", value: 2 },
  ];
  const onPress = (value) => {
    setValue3Index(value);
  };

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
            onPress={() => navigation.navigate("stepThree")}
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
            {/* <View>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={Daily}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(16),
                    height: heightPercentageToDP(3),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={Weekly}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(20),
                    height: heightPercentageToDP(3),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={Monthly}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(22),
                    height: heightPercentageToDP(3),
                  }}
                />
              </TouchableOpacity>
            </View> */}

            <View style={{ bottom: 45, paddingBottom: 50 }}>
              <RadioForm
                style={{ height: 200 }}
                formHorizontal={false}
                animation={true}
              >
                {/* To create radio buttons, loop through your array of options */}
                {radio_props.map((obj, i) => (
                  <RadioButton
                    labelHorizontal={true}
                    key={i}
                    // onPress={(value) => {
                    //   setValue3Index(value);
                    // }}
                  >
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={value3Index === i}
                      onPress={() => onPress(i)}
                      borderWidth={1}
                      buttonInnerColor={"#78AC43"}
                      buttonOuterColor={value3Index === i ? "#78AC43" : "white"}
                      buttonSize={15}
                      buttonOuterSize={25}
                      buttonStyle={{ marginTop: 18 }}
                      buttonWrapStyle={{
                        marginTop: 15,
                      }}
                      //buttonStyle={{ marginTop: 15 }}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={onPress}
                      labelStyle={{
                        fontSize: widthPercentageToDP(5),
                        color: "white",
                        paddingTop: 3,
                        marginTop: 30,
                        paddingBottom: 5,
                      }}
                      labelWrapStyle={{ marginTop: 5, left: 20 }}
                    />
                  </RadioButton>
                ))}
              </RadioForm>
            </View>

            <TouchableOpacity>
              <Image
                source={next}
                style={{
                  resizeMode: "contain",
                  width: widthPercentageToDP(85),
                  height: heightPercentageToDP(11),
                  top: 200,
                  //paddingTop: 200,
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

export default stepThreea;
