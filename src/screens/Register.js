import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import RNPicker from 'react-native-picker-select';

export default class Register extends Component{
    render(){
        const {navigate} = this.props.navigation;
        
        return(
            <View style = {styles.viewLogin}>
               <Image style = {styles.imageLogo} source = {require('../images/leon-logo-1.png')}/>
               
               <View style = {styles.viewForm}>
                    <TextInput 
                        style={styles.inputs} 
                        placeholder='Nombre(s)' 
                        keyboardType='default'
                    />
                    <TextInput 
                        style={styles.inputs} 
                        placeholder='Apellido(s)' 
                        keyboardType='default'
                    />
                    <View style = {styles.pickers}>                        
                        <TextInput 
                            style={styles.selectPicker} 
                            placeholder='Edad' 
                            keyboardType='numeric'
                        />
                        <RNPicker
                            style={pickerStyle.inputAndroid}                
                            placeholder={{
                                label: 'Seleccione su sexo',
                                value: null,
                            }}
                            items= {[
                                {label: 'Hombre', value: 'H'},
                                {label: 'Mujer', value: 'M'},
                                {label: 'Otro', value: 'O'},
                            ]}
                        />
                    </View>
                    <TextInput 
                        style={styles.inputs} 
                        placeholder='Curp' 
                        keyboardType='default'
                    />
                    <TextInput 
                        style={styles.inputs} 
                        placeholder='Contraseña' 
                        keyboardType='default'
                        secureTextEntry
                    />
                    <TextInput 
                        style={styles.inputs} 
                        placeholder='Confirmar contraseña' 
                        keyboardType='default'
                        secureTextEntry
                    />
                   <View style = {styles.containers}>
                        <TouchableOpacity onPress={() => navigate('Login')}>
                            <Text style={styles.btnLogin} >REGISTRAR CUENTA</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
        fontSize: '20px',
        marginTop: '10px',
        marginBottom: '10px',
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
    pickers: {
        flex: 1,
        flexDirection: 'row'
    },
    selectPicker: {
        backgroundColor: '#BFBFBF',
        color: '#FFF',
        borderColor: '#EB9142',
        overlayColor: '#EB9142',
        fontWeight: 'normal',
        fontSize: '20px',
        marginTop: '10px',
        marginBottom: '10px',
        height: '40px',
        padding: '10px'
    }
  });

  // gris claro #BFBFBF
  // gris #404040
  //naranja #EB9142
  //azul #31348F

const pickerStyle = StyleSheet.create({
    inputAndroid: {
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#9b9b9b',
        borderRadius: 8,
        color: '#000',
        paddingRight: 30,
        backgroundColor: '#fff'
    },
    inputiOS: {
        fontSize: 16,
        paddingVertical:12 ,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#9b9b9b',
        borderRadius: 4,
        color: '#000',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: 5
    }
});
