import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  const { user } = useUser();
  return (
    <View style={styles.ViewContainer}>
      <Image
        source={{ uri: user?.imageUrl }}
        style={styles.ProfileImageContainer}
      />
      <Image
        source={require('./../../../assets/Images/logo.png')}
        style={styles.LogoImageContainer}
      />
      <FontAwesome name="heart" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
    ProfileImageContainer: {
        width: 45, 
        height: 45, 
        borderRadius: 99
    },
    LogoImageContainer:{
        width: 220, 
        height: 60, 
        objectFit:'contain'
    },
    ViewContainer:{
        display:'flex',
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
  });
  