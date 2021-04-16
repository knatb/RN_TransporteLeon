import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

export default function Home (){
    return( 
        <View style = {styles.viewLogin}>
             <MapView
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
            customMapStyle={styles.map}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    viewLogin: {
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
  });

  // gris claro #BFBFBF
  // gris #404040
  //naranja #EB9142
  //azul #31348F