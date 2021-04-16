import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import RNPicker from 'react-native-picker-select';

const EditProfile = ({navigation}) => {
    const [Fname, onChangeFName] = React.useState("");
    const [Lname, onChangeLName] = React.useState("");
    const [Age, onChangeAge] = React.useState("");
    const [Gender, onChangeGender] = React.useState("Seleccione su sexo");
    const [curp, onChangeCurp] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    return(
        <View style = {styles.viewLogin}>
            
            <View style = {styles.viewForm}>
            <TextInput 
                    style={styles.inputs} 
                    placeholder='LOLK000708HGTPPNA1' 
                    keyboardType='default'
                    onChangeText={onChangeCurp}
                    value={curp}
                    editable={false} 
                    selectTextOnFocus={false}
                />
                <TextInput 
                    style={styles.inputs} 
                    placeholder='Nombre(s)' 
                    keyboardType='default'                    
                    onChangeText={onChangeFName}
                    value={Fname}
                />
                <TextInput 
                    style={styles.inputs} 
                    placeholder='Apellido(s)'
                    keyboardType='default'
                    onChangeText={onChangeLName}
                    value={Lname}
                />                      
                <TextInput 
                    style={styles.selectPicker} 
                    placeholder='Edad' 
                    keyboardType='numeric'
                    onChangeText={onChangeAge}
                    value={Age}
                />
                <RNPicker
                    style={{ height: 200, width: 100 }}
                    onValueChange = {(value) => onChangeGender(value)}
                    value={Gender}
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
                <TextInput 
                    style={styles.inputs} 
                    placeholder='Contraseña' 
                    keyboardType='default'
                    secureTextEntry
                    onChangeText={onChangePassword}
                    value={password}
                />
                <TextInput 
                    style={styles.inputs} 
                    placeholder='Confirmar contraseña' 
                    keyboardType='default'
                    secureTextEntry
                />
                <View style = {styles.containers}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Text style={styles.btnUpdate} >CANCELAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Text style={styles.btnUpdate} >ACTUALIZAR CUENTA</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        </View>
    )
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
    btnUpdate:{
        fontSize: '20px',
        backgroundColor: '#EB9142',
        color: '#FFF',
        alignSelf: 'center',
        width: '100%',
        padding: '15px',
        textAlign: 'center',        
        marginTop: 10
    },
    pickers: {
        flex: 1,
        flexDirection: 'row',
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

export default EditProfile;
