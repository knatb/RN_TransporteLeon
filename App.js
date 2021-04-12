import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';


export default function App() {

  

    return (
      <AppNavigator></AppNavigator>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
