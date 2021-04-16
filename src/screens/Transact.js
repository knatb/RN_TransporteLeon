import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

export default function Transact (){
    return(
        <View style = {styles.view}>
            <View style={styles.datos}>
                <Text>Francisco Fernando Cruz Galvez</Text>
                <Text>90 años</Text>
                <Text>Sexo: Otro</Text>
                <Text>Pagobus: Preferencial</Text>
            </View>
            <View style={styles.fileView}>
            <TouchableOpacity style={styles.fileSelect}>
                <Text  >Seleccionar archivo...</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    
  });

  // gris claro #BFBFBF
  // gris #404040
  //naranja #EB9142
  //azul #31348F