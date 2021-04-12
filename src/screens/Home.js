import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

export default class Home extends Component{
    render(){
        const {navigate} = this.props.navigation;

        return(
            <View style = {styles.viewLogin}>
               <Text>HOME</Text>
            </View>
        )
    }
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