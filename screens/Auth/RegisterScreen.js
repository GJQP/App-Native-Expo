import React , {Component} from 'react';
import {Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from "react-native";

export default class RegisterScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            lastName:'',
            email: '',
            password: '',
            repeatPassword: ''
        };
    }

    render(){
        return(<View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <KeyboardAvoidingView>
                    <TextInput placeholder="Nombre" onChangeText={(name)=>this.setState({name})}/>
                    <TextInput placeholder="Apellido" onChangeText={(lastName)=>this.setState({lastName})}/>
                    <TextInput placeholder="Email" onChangeText={(email)=>this.setState({email})}/>
                    <TextInput placeholder="Contraseña" onChangeText={(password)=>this.setState({password})} secureTextEntry={true}/>
                    <TextInput placeholder="Repetir Contraseña" onChangeText={(repeatPassword)=>this.setState({repeatPassword})} secureTextEntry={true}/>
                    <Button title="Registarse" onPress={()=>this.props.navigation.navigate('Main')}/>
                    <Button title="Iniciar Sesión" onPress={()=>this.props.navigation.replace('Login')}/>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});