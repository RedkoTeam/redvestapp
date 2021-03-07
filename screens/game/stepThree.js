import React, { useState, useEffect } from "react";
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import back from "../../assets/images/Invest/step3/back.png";
import cashRes from "../../assets/images/Invest/step3/cashRes.png";
import cont from "../../assets/images/Invest/step3/cont.png";
import next from "../../assets/images/Invest/step3/next.png";
import title from "../../assets/images/Invest/step3/title.png";
import totalInv from "../../assets/images/Invest/step3/totalInv.png";
import bg from "../../assets/images/HomeScreen/bg.png";
import { widthPercentageToDP, heightPercentageToDP } from "../../util/scaler";
import Navbar_game from "../Navbar/Navbar_game.js";
import { enableScreens } from "react-native-screens";
import aapl from "../../assets/images/stocks/Appl.png";
import goog from "../../assets/images/stocks/GOOG.png";
import tsla from "../../assets/images/stocks/TSLA.png";
import snap from "../../assets/images/stocks/SNAP.png";
import nflx from "../../assets/images/stocks/NFLX.png";
import msft from "../../assets/images/stocks/MSFT.png";
import amzn from "../../assets/images/stocks/AMZN.png";
import sne from "../../assets/images/stocks/SNE.png";
import pick from "../../assets/images/stocks/Pick.png";

enableScreens(false);

function stepThree({ navigation, route }) {
  const [stocks, setStocs] = useState([]);

  enableScreens(false);

  useEffect(() => {
    let mounted = true;
  });

  function selectedStock(stock) {
    const oldStocks = stocks;
    oldStocks.push(stock);
    setStocs(() => [...oldStocks]);
  }

  function choosingStocksCompleted() {
    navigation.navigate("stepThreea", {
      strategy: route.params.strategy,
      portfolio: route.params.portfolio,
      stocks: stocks,
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
            onPress={() => navigation.navigate("stepTwo")}
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
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={cont}
                  style={{
                    position: "absolute",
                    resizeMode: "contain",
                    width: widthPercentageToDP(85),
                    height: heightPercentageToDP(40),
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-evenly",
                  marginLeft: "-5%",
                }}
              >
                <TouchableOpacity onPress={() => selectedStock("aapl")}>
                  <Image
                    source={aapl}
                    style={{
                      width: widthPercentageToDP("13"),
                      height: heightPercentageToDP("13"),
                      resizeMode: "contain",
                      marginTop: heightPercentageToDP(0),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectedStock("snap")}>
                  <Image
                    source={snap}
                    style={{
                      width: widthPercentageToDP("13"),
                      height: heightPercentageToDP("13"),
                      resizeMode: "contain",
                      marginTop: heightPercentageToDP(0),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectedStock("amzn")}>
                  <Image
                    source={amzn}
                    style={{
                      width: widthPercentageToDP("13"),
                      height: heightPercentageToDP("13"),
                      resizeMode: "contain",
                      marginTop: heightPercentageToDP(0),
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                  justifyContent: "space-evenly",
                  marginLeft: "-5%",
                }}
              >
                <TouchableOpacity onPress={() => selectedStock("nflx")}>
                  <Image
                    source={nflx}
                    style={{
                      width: widthPercentageToDP("13"),
                      height: heightPercentageToDP("13"),
                      resizeMode: "contain",
                      marginTop: heightPercentageToDP(1),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectedStock("sne")}>
                  <Image
                    source={sne}
                    style={{
                      width: widthPercentageToDP("13"),
                      height: heightPercentageToDP("13"),
                      resizeMode: "contain",
                      marginTop: heightPercentageToDP(1),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectedStock("msft")}>
                  <Image
                    source={msft}
                    style={{
                      width: widthPercentageToDP("13"),
                      height: heightPercentageToDP("13"),
                      resizeMode: "contain",
                      marginTop: heightPercentageToDP(1),
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                  justifyContent: "space-evenly",
                  marginLeft: "-5%",
                }}
              >
                <TouchableOpacity onPress={() => selectedStock("goog")}>
                  <Image
                    source={goog}
                    style={{
                      width: widthPercentageToDP("13"),
                      height: heightPercentageToDP("13"),
                      resizeMode: "contain",
                      marginTop: heightPercentageToDP(1),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectedStock("tsla")}>
                  <Image
                    source={tsla}
                    style={{
                      width: widthPercentageToDP("13"),
                      height: heightPercentageToDP("13"),
                      resizeMode: "contain",
                      marginTop: heightPercentageToDP(1),
                    }}
                  />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => selectedStock("pick")}>
                  <Image
                    source={pick}
                    style={{
                      width: widthPercentageToDP("13"),
                      height: heightPercentageToDP("13"),
                      resizeMode: "contain",
                      marginTop: heightPercentageToDP(1),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View> 
            <View
              style={{
                paddingBottom: "5%",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={cashRes}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(26),
                    height: heightPercentageToDP(5),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingBottom: "5%",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Image
                  source={totalInv}
                  style={{
                    resizeMode: "contain",
                    width: widthPercentageToDP(26),
                    height: heightPercentageToDP(3),
                  }}
                />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={choosingStocksCompleted}>
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

export default stepThree;
