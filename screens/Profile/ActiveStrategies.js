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

import hist from "../../assets/images/profile/ActiveStrategies.png";
import bg from "../../assets/images/HomeScreen/bg.png";
import back from "../../assets/images/Invest/step4/back.png";
import { Dimensions } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from "../../util/scaler";
import { actuatedNormalize } from "../../util/fontScaler";
import NavBar_pro from "../Navbar/Navbar_pro.js";
import { enableScreens } from "react-native-screens";

enableScreens(false);

function ActiveStrategies() {
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
            padding: 18,
            marginTop: "15%",
            justifyContent: "center",
            right: "5%",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("orders")}>
            <Image
              source={hist}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(70),
                height: heightPercentageToDP(7),
                marginTop: "5%",
                left: "15%",
              }}
            />
          </TouchableOpacity>
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
          ></View>
        </ScrollView>
      </ImageBackground>
      <NavBar_pro />
    </View>
  );
}

export default ActiveStrategies;
