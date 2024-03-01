import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchBar() {
  return (
    <View>
      <GooglePlacesAutocomplete
      placeholder='Search EV Charging Station'
      enablePoweredByContainer={false}
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAqHuPCA3J6s-f1r9h6-2JwjRQuojaVnWc',
        language: 'en',
      }}
    />
    </View>
  )
}