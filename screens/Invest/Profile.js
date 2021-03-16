import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useContext } from "react";
import AuthContext from "redvest/contexts/AuthContext";
import AlpacaAccountInfoContext from "redvest/contexts/AlpacaAccountInfoContext";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from "react-native";
import pickStra from "../../assets/images/profile/TotalBalance.png";
import { textStyles, colors } from "redvest/util/styles";
import settings from "../../assets/images/profile/settings.png";
import cashBalance from "../../assets/images/profile/Cashbalance.png";
import as from "../../assets/images/profile/activestrat.png";
import orders from "../../assets/images/profile/orders.png";
import hist from "../../assets/images/profile/history.png";
import bg from "../../assets/images/HomeScreen/bg.png";
import { widthPercentageToDP, heightPercentageToDP } from "../../util/scaler";
import { actuatedNormalize } from "../../util/fontScaler";
import NavBar_pro from "../Navbar/Navbar_pro.js";
import { enableScreens } from "react-native-screens";
import { Dimensions } from "react-native";
//import alpacaApi from '../services/alpaca'
import { LineChart } from "react-native-chart-kit";
import CustomButton from "redvest/components/CustomButton";

const chartConfig = {
  backgroundGradientFrom: "#FFFFF",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(118, 159, 35,  ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const screenWidth = Dimensions.get("window").width;

enableScreens(false);

function Profile() {
  const { singOutAsync } = useContext(AuthContext);
  const {
    buyingPower,
    cash,
    longMarketValue,
    portfolioValue,
    portfolioTimestamp,
    portfolioEquity,
  } = useContext(AlpacaAccountInfoContext);

  const portfolioValueString = portfolioValue
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // const rPortfolioEquity = {
  // return rPortfolioEquity = portfolioEquity.toFixed(2)}

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const navigation = useNavigation();
  const data = {
    labels: portfolioTimestamp.map((timestamp) => {
      const monthIndex = new Date(timestamp).getMonth();
      return months[monthIndex];
    }),
    datasets: [
      {
        data: portfolioEquity,
        color: (opacity = 1) => `rgba(118, 159, 35, ${opacity})`, // optional
        strokeWidth: 4, // optional
      },
    ],
    //legend: [""] // optional
  };
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
        <ScrollView
          style={{ height: "200%", flex: 1 }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 25,
              marginTop: 5,
              marginBottom: "-15%",
            }}
          >
            <Image
              source={pickStra}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(40),
                height: heightPercentageToDP(10),
                marginTop: 30,
                marginLeft: "0%",
              }}
            />
            <Text
              style={[
                styles.screenTitle,
                textStyles.hugeRegular,
                {
                  marginLeft: "20%",
                  marginTop: "16%",
                  fontSize: actuatedNormalize(20),
                },
              ]}
            >
              $ {portfolioValueString}
            </Text>

            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                padding: 25,
                marginTop: "20%",
                marginBottom: "10%",
                marginLeft: "-170%",
              }}
            >
              <LineChart
                data={data}
                width={screenWidth * 0.85}
                height={256}
                verticalLabelRotation={90}
                chartConfig={chartConfig}
                bezier
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("SubscriptionScreen")}
            >
              <Image
                source={settings}
                style={{
                  resizeMode: "contain",
                  width: widthPercentageToDP(7),
                  height: heightPercentageToDP(9),
                }}
              />
            </TouchableOpacity>
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
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("AccountInfo")}
              >
                <Image
                  source={cashBalance}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(7),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ActiveStrategies")}
              >
                <Image
                  source={as}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(7),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("orders")}>
                <Image
                  source={orders}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(7),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("history")}>
                <Image
                  source={hist}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(7),
                  }}
                />
              </TouchableOpacity>
              <CustomButton primary onPress={singOutAsync} text="Sign Out" />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <NavBar_pro />
    </View>
  );
}
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.darkBackground,
    minHeight: Math.round(Dimensions.get("window").height / 2),
    paddingHorizontal: widthPercentageToDP(5),
  },
  screenTitle: {
    color: colors.offWhite,
    width: "100%",
  },
  scrollView: {
    marginVertical: heightPercentageToDP(3),
    paddingHorizontal: widthPercentageToDP(5),
    width: "100%",
  },
  inputContainer: {
    marginBottom: heightPercentageToDP(3),
  },
});

export default Profile;
