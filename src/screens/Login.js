import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import logo from '../images/leon-logo.png'; 

export const Login = ({navigation}) => {
    const [curp, onChangeCurp] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    return(
        <View style = {styles.viewLogin}>
            
            <Image source={logo} style={{ width: 280, height: 230 }} /> 
            
            <View style = {styles.viewForm}>
                <TextInput 
                    style={styles.inputs} 
                    placeholder='CURP' 
                    keyboardType='default'
                    onChangeText={(text) => {onChangeCurp(text)}}
                    value={curp}
                />
                <TextInput 
                    style={styles.inputs} 
                    placeholder='CONTRASEÑA'
                    keyboardType='default'
                    secureTextEntry
                    onChangeText={onChangePassword}
                    value={password}
                />
                <View style = {styles.containers}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.btnLogin} >INICIAR SESIÓN</Text>
                    </TouchableOpacity>
                </View>                    

                <Text style={styles.bText1} >¿No tienes cuenta?</Text>

                <View >
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>                        
                        <Text style={styles.bText2} >Registrate aquí</Text>
                    </TouchableOpacity>
                </View>                    
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containers: {
        paddingTop: '20px',
        paddingBottom: '20px'
    },
    imageLogo: {
      width: '100%',
    },
    viewLogin: {
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'column',        
        alignItems: 'center',
        justifyContent: 'center',

    },
    viewForm:{
        width: '70%'
    },
    inputs: {
        backgroundColor: '#BFBFBF',
        color: '#FFF',
        borderColor: '#EB9142',
        overlayColor: '#EB9142',
        fontWeight: 'normal',
        fontSize: '16px',
        marginTop: '10px',
        marginBottom: '20px',
        height: '40px',
        padding: '10px'
    },
    btnLogin:{
        fontSize: '20px',
        backgroundColor: '#404040',
        color: '#FFF',
        alignSelf: 'center',
        width: '100%',
        padding: '15px',
        textAlign: 'center'
    },
    bText1: {
        fontSize: '15px',
        color: '#000',
        alignSelf: 'center'
    },
    bText2: {
        fontSize: '15px',
        color: '#EB9142',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
  });

  // gris claro #BFBFBF
  // gris #404040
  //naranja #EB9142
  //azul #31348F