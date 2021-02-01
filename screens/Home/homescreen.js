import {useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {Image, ImageBackground, Linking, TouchableOpacity, View,ScrollView} from "react-native";
import bg from "../../assets/"
import styles from "../styles/styles";
import backButton from "../../assets/FortuneCoffeePNGassets/reading/backButton.png";
import bottom from "../../assets/FortuneCoffeePNGassets/Subscription/bottom.png"
import top from "../../assets/FortuneCoffeePNGassets/Subscription/top.png"
import { Dimensions } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler';
import { actuatedNormalize } from '../../util/fontScaler';

function HomeScreen() {
    const navigation = useNavigation();
    useEffect(()=>{
        let mounted = true;
    })
    return (
       
        <ImageBackground source={bg} style={styles.bgfull}>
        <View style={{flexDirection: 'row', width: '95%'  }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('ProfileLoggedIn')} style={{
                                left:widthPercentageToDP(2),
                                top:heightPercentageToDP(3)

                            }}>
                                    <Image source={backButton} />
                    </TouchableOpacity>
                
                <ScrollView>

                <View style={{flexDirection: 'column', width: '100%', marginTop:'80%' }}>
            
                                    
                                    <Image source={top} style={{resizeMode: 'contain',marginBottom:'10%', height:'63%', width:'94%', marginTop:'-50%' }}/>
                                    <Image source={bottom} style={{resizeMode: 'contain',height:'57%', width:'96%'}}/>

                </View>

                         
            <View style={{marginBottom:"150%"}}>

            </View>

        
        </ScrollView>
        </View>
        </ImageBackground>
     
    )
}

export default HomeScreen