import React, {Component} from 'react';
import {Text,View,SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {Constants} from 'expo';
import Icon  from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation'
import CartComponent from "./CartComponent";
import OpenDrawer from "./OpenDrawerComponent";

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

class NavBar extends React.Component{

    constructor(props){
        super(props);
        //this.navigation = props.navigation;
        // this.state:{
        //
        // }
    }

    render(){
        return (
            <SafeAreaView style={{
                marginTop: Constants.statusBarHeight,
                flex: 0.1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
            }}>
                <OpenDrawer/>
                <Text style={{color: 'red',flex: 0.33, justifyContent: 'center', alignItems: 'center'}}>
                    Nav Bar Example
                </Text>
                <CartComponent/>
            </SafeAreaView>
        )
    }
}

export default withNavigation(NavBar);