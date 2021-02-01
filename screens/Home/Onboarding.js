import {useNavigation} from "@react-navigation/native";
import React, {useRef} from "react";
import ViewPager from "@react-native-community/viewpager";
import styles from "../styles/styles";
import {Image, ImageBackground, View} from "react-native";
import {TouchableOpacity} from 'react-native-gesture-handler';
import OnboardingBg5 from "../../assets/images/onboarding/onboarding.png";
import OnboardingBg1 from "../../assets/images/onboarding/onboarding1.png";
import OnboardingBg2 from "../../assets/images/onboarding/onboarding2.png";
import OnboardingBg3 from "../../assets/images/onboarding/onboarding3.png";
import OnboardingBg4 from "../../assets/images/onboarding/onboarding4.png";
import getStarted from "../../assets/images/onboarding/Get-Started.png";


import {widthPercentageToDP,heightPercentageToDP} from '../../util/scaler';

function Onboarding({}){
    const navigation = useNavigation();
    const pagerRef = useRef(null);
    const handlePageChange = pageNumber => {
        pagerRef.current.setPage(pageNumber);
    };
    return (
        <ViewPager style={styles.virtualContainer} initialPage={0} ref={pagerRef}>
            <View key="1">
                <ImageBackground source={OnboardingBg} style={styles.virtualOne2}>
                </ImageBackground>
            </View>
            <View key="2">
                <ImageBackground source={OnboardingBg1} style={styles.virtualOne2}>
                </ImageBackground>
            </View>
            <View key="3">
                <ImageBackground source={OnboardingBg2} style={styles.virtualOne2}>
                </ImageBackground>
            </View>
            <View key="4">
                <ImageBackground source={OnboardingBg3} style={styles.virtualOne2}>
                </ImageBackground>
            </View>
            <View key="5">
                <ImageBackground source={OnboardingBg4} style={styles.virtualOne2}>
                </ImageBackground>
            </View>
            <View key="6">
                <ImageBackground source={OnboardingBg4} style={styles.virtualOne2}>
                    <View style={{justifyContent:'flex-end',paddingTop:widthPercentageToDP("80%")  }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                            <Image source={getStarted} style={{width:widthPercentageToDP(60),height:widthPercentageToDP(8)}}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </ViewPager>
    )
}


export default Onboarding