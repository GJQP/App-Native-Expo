import React , {Component} from 'react';
import Icon from "react-native-vector-icons/Ionicons";

export default class MenuScreen extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Carta',
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-restaurant" size={24} color={tintColor}/>
        ),
    };
    render(){
        return(null)
    }
}