import React, {Component} from 'react';
import {Image, Button, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-home" size={24}/>
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
