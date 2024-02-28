import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import * as WebBrowser from "expo-web-browser";

import React from 'react'
import Colors from '../Utils/Colors'
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress=async()=>{
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/Images/cloud.png')}
        style={styles.logoImage}
      />
      <Image source={require('./../../assets/Images/ev-car.jpg')}
        style={styles.bgImage}
      />
      <View style={{padding:20}}> 
        <Text style={styles.heading}>Your EV Charging Station Finder App</Text>
        <Text style={styles.description}>Find EV Charging Station near you in just one Click</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext} onPress={onPress}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },

  logoImage:{
    width:200,
    height:40,
    objectFit:'contain'
  },
  bgImage:{
    width:'100%',
    height:400,
    objectFit:'contain',
    marginTop:20
  },
  heading:{
    fontFamily:'Outfit-Bold',
    fontSize:20,
    textAlign:'center',
    marginTop:20

  },
  description:{
    fontFamily:'Outfit',
    fontSize:15,
    textAlign:'center',
    marginTop:10,
    color:Colors.GRAY
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    padding:15,
    display:'flex',
    borderRadius:99,
    marginTop:20

  },
  buttontext:{
    color:Colors.WHITE,
    textAlign:'center',
    fontFamily:'Outfit',
    fontSize:17
  }
  

})