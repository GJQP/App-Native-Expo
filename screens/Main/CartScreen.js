import React , {Component} from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity, Text, Button} from 'react-native';
import {Constants} from 'expo';
import Icon from "react-native-vector-icons/Ionicons";
import NavBar from "../../Components/NavBarComponent"
import MenuScreen from "./MenuScreen";

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

export default class CartScreen extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Carrito  ',
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-cart" size={24} color={tintColor}/>
        ),
    };
    render(){
        return(
            <View style={{flex:1}}>
                <NavBar navigation={this.props.navigation}/>
                <View style={styles.container}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Notifications')}
                        title="Go to notifications"/>
                </View>
            </View>
        )
    }
}