import React, {Component} from 'react';
import {Image, Button, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

export default class PedidosScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}
