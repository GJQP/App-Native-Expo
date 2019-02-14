import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View, TouchableOpacity} from "react-native";
import {withNavigation} from 'react-navigation'


class CartComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cant: 2
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Carrito')} style={{flex:0.33, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <Icon name="ios-cart" size={48} color="#242424"/>
                    <Text style={{color: 'red', margin: 12, fontSize:24}}>
                        2
                    </Text>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(CartComponent)