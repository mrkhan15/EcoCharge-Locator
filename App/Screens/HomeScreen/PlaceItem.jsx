import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function PlaceItem({place}) {
  return (
    <View style={{ backgroundColor:Colors.WHITE,
        margin:5,
        borderRadius:10,
        width:Dimensions.get('screen').width*0.9}}>

      {/* <Text>{place.displayName.text}</Text> */}
      <Image source={require('./../../../assets/Images/ev-car.jpg')}
      style={{width:'100%', borderRadius:10, height:130}}
      />
    </View>
  )
}