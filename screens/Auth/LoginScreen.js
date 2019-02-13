import React , {Component} from 'react';
import {Button, StyleSheet, Text, View, KeyboardAvoidingView, TextInput} from "react-native";

export default class LoginScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render(){
        return(<View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <KeyboardAvoidingView>
                    <TextInput placeholder="Email" onChangeText={(email)=>this.setState({email})}/>
                    <TextInput placeholder="Contraseña" onChangeText={(password)=>this.setState({password})} secureTextEntry={true}/>
                    <Button title="Iniciar Sesión" onPress={()=>this.props.navigation.navigate('Main')}/>
                    <Button title="Registarse" onPress={()=>this.props.navigation.replace('Register')}/>
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