import React, { useContext, useState } from "react";
import AssetsContext from "redvest/contexts/AssetsContext";
import {
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
} from "react-native";
import { Dimensions } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from "../../util/scaler";
import { enableScreens } from "react-native-screens";
import { SafeAreaView } from "react-native-safe-area-context";
import { textStyles, colors } from "redvest/util/styles";
import CustomInputLabel from "redvest/components/CustomInputLabel";
import MultiSelect from "react-native-multiple-select";
import next from "../../assets/images/Invest/step4/next.png";
import alpacaMarketData from "redvest/services/alpacaMarketData";

enableScreens(false);

function StockTickerGame({ navigation, route }) {
  const { stockTickers } = useContext(AssetsContext);

  const [orderSide, setOrderSide] = useState("buy");
  const [stockTicker, setStockTicker] = useState("");
  const [lastStockPrice, setLastStockPrice] = useState(`$${(0).toFixed(2)}`);

  const onSelectedStockTickerChange = (selectedItem) => {
    setStockTicker(selectedItem[0]);
    alpacaMarketData()
      .getRecentQuote(stockTicker)
      .then((lastAskPrice) => setLastStockPrice(lastAskPrice));
  };
  const finishChoosingStock = () => {
    navigation.navigate("stepThreea", {
      strategy: route.params.strategy,
      portfolio: route.params.portfolio,
      stocks: stockTicker,
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={[styles.screenTitle, textStyles.hugeRegular]}>
        Choose a Stock
      </Text>
      <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("StockTickerInfo")}
          >
            <CustomInputLabel text="Stock ticker" big info />
          </TouchableOpacity>

          <MultiSelect
            hideTags
            single
            items={stockTickers}
            displayKey="name"
            uniqueKey="symbol"
            selectText="Choose a Stock..."
            searchInputPlaceholderText="Search Stock..."
            selectedItems={[stockTicker]}
            onSelectedItemsChange={onSelectedStockTickerChange}
            //ref={(component) => {
            //  multiSelect = component;
            //}}
            //fixedHeight
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            itemTextColor="#000"
            selectedItemTextColor={colors.primary}
            selectedItemIconColor={colors.primary}
            searchInputStyle={{ color: "#CCC", height: 50 }}
            styleDropdownMenuSubsection={{ borderRadius: 10 }}
            styleInputGroup={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            styleTextDropdown={{ paddingHorizontal: 10 }}
            styleTextDropdownSelected={{ paddingHorizontal: 10 }}
            flatListProps={{ nestedScrollEnabled: true }}
            styleListContainer={{ maxHeight: 240 }}
            nestedScrollEnabled={true}
            //styleSelectorContainer={{ marginBottom: 50 }}
            //styleRowList={{ borderColor: 'brown', borderWidth: 5, borderRadius: 50 }}
            //styleItemsContainer={{width: 50, borderColor: 'green', borderWidth: 5, borderRadius: 50}}
          />
        </View>
        <View>
          <TouchableOpacity onPress={finishChoosingStock}>
            <Image
              source={next}
              style={{
                resizeMode: "contain",
                width: widthPercentageToDP(85),
                height: heightPercentageToDP(11),
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default StockTickerGame;
