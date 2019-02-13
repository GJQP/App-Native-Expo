import React , {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class LandingScreen extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Button title="Iniciar Sesión" onPress={()=> this.props.navigation.navigate('Login')}/>
                <Button title="Registarse" onPress={()=>this.props.navigation.navigate('Register')}/>
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