import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

const EditProfile = () => {
    return(
        <View style = {styles.view}>
            <Text>EDIT PROFILE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
  });

  export default EditProfile;
  // gris claro #BFBFBF
  // gris #404040
  //naranja #EB9142
  //azul #31348F