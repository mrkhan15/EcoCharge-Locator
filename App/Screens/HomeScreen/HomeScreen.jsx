import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AppMapView from "./AppMapView";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { UserLocationContext } from "../../Context/UserLocationContext";
import GlobalApi from "../../Utils/GlobalApi";
import PlaceListView from "./PlaceListView";

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);

  const[placeList, setPlaceList]=useState([]);

  useEffect(() => {
    location && GetNearByPlace();
  }, [location]);

  const GetNearByPlace = () => {
    const data = {
      "includedTypes": ["electric_vehicle_charging_station"],
      "maxResultCount": 10,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": 37.7937,
            "longitude": -122.3965,
          },
          "radius": 500.0,
        },
      },
    };
    GlobalApi.NewNearByPlace(data).then((resp) => {
      console.log(JSON.stringify(resp.data));
      setPlaceList(resp.data?.places);
    });
  };
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar />
      </View>
      <AppMapView />

      <View style={styles.PlaceListContainer}>
        {placeList && <PlaceListView placeList={placeList}/>}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 10,
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  PlaceListContainer:{
    position:'absolute',
    bottom:0,
    zIndex:10,
    width:'100%'
  }
});
