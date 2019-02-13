import React , {Component} from 'react';
import {View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class CartScreen extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Carrito',
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-cart" size={24} color={tintColor}/>
        ),
    };
    render(){
        return(
            <View>

            </View>
        )
    }
}