import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

export default function Home (){
    return( 
        <View style = {styles.viewLogin}>
            <Text>BIENVENIDO A TRANSPORTE LEÓN</Text>
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
  });

  // gris claro #BFBFBF
  // gris #404040
  //naranja #EB9142
  //azul #31348F