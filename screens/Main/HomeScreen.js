import React, {Component} from 'react';
import {View,Image, Button, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import NavBar from "../../Components/NavBarComponent";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home ',
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-home" size={24} color={tintColor}/>
        ),
    };

    render() {
        return (
                <View style={{flex:1}}>
                    <NavBar navigation={this.props.navigation}/>
                    <View style={styles.container}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Notifications')}
                        title="Go to notifications"/>
                    </View>
                </View>
        );
    }
}
