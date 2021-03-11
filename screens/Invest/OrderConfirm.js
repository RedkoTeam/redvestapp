import React, { useEffect, useContext } from "react";
import {
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import back from "../../assets/images/Invest/step4/back.png";
import title from "../../assets/images/Invest/step5/title.png";
import next from "../../assets/images/Invest/step5/investbtn.png";
import line from "../../assets/images/Invest/step5/Line1.png";
import bg from "../../assets/images/HomeScreen/bg.png";
import { widthPercentageToDP, heightPercentageToDP } from "../../util/scaler";
import Navbar_game from "../Navbar/Navbar_game.js";
import { enableScreens } from "react-native-screens";
import DataContext from "redvest/contexts/DataContext";
import CustomInputLabel from "redvest/components/CustomInputLabel";
import { textStyles, colors } from "redvest/util/styles";
enableScreens(false);

function stepFive({ navigation, route }) {
  const { firebaseDB } = useContext(DataContext);
  const { order } = route.params;

  useEffect(() => {
    let mounted = true;
  });

  function invest() {
    firebaseDB.child("selections").push(route.params);
    // navigation.navigate("stepFiveA")
  }
  console.log(order);
  console.log(route.params.order);

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
            //  onPress={() => navigation.navigate.goBack()}
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

          <View
            style={{
              resizeMode: "contain",
              width: widthPercentageToDP(50),
              height: heightPercentageToDP(15),
              marginTop: "15%",
              position: "absolute",
              marginLeft: "25%",

              paddingBottom: 15,
            }}
          >
            <Text style={styles.orderTitle}>Order Confirmation </Text>
          </View>
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
              marginTop: "15%",
            }}
          >
            <View style={styles.labelAndTextContainer}>
              {/* ---label---- */}
              <CustomInputLabel text="Side" hugeFont big />

              <Text style={styles.orderText}> {order.side}</Text>
            </View>
            <Image
              source={line}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(85),
                height: heightPercentageToDP(1),
              }}
            />
            <View style={styles.labelAndTextContainer}>
              {/* ---label---- */}
              <CustomInputLabel text="Stock ticker" hugeFont big />
              <Text style={styles.orderText}>{order.symbol}</Text>
            </View>
            <Image
              source={line}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(85),
                height: heightPercentageToDP(1),
              }}
            />
            <View style={styles.labelAndTextContainer}>
              {/* ---label---- */}
              <CustomInputLabel text="Quantity" hugeFont big />
              <Text style={styles.orderText}>{order.qty}</Text>
            </View>
            <Image
              source={line}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(85),
                height: heightPercentageToDP(1),
              }}
            />
            <View style={styles.labelAndTextContainer}>
              {/* ---label---- */}
              <CustomInputLabel text="Time in Force" hugeFont big />
              <Text style={styles.orderText}>{order.time_in_force}</Text>
            </View>
            <Image
              source={line}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(85),
                height: heightPercentageToDP(1),
              }}
            />
            <View style={styles.labelAndTextContainer}>
              {/* ---label---- */}
              <CustomInputLabel text="Order Type" hugeFont big />
              <Text style={styles.orderText}>{order.type}</Text>
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

const styles = StyleSheet.create({
  labelAndTextContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  orderText: {
    position: "absolute",
    alignSelf: "center",

    //paddingLeft: 170,
    marginLeft: "70%",
    fontSize: 20,
    color: "white",
  },
  orderTitle: {
    color: "white",
    fontSize: 25,
  },
});

export default stepFive;
