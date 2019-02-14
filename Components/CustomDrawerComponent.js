import React, {Component} from 'react';
import {Button,ScrollView,TouchableOpacity,Text, Alert} from 'react-native';
import {SafeAreaView,DrawerItems} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const CustomDrawerComponent = (props) => {
    const inactiveTintColor=props.inactiveTintColor;
    return (
        <ScrollView>
            <SafeAreaView style={{flex: 1}} forceInset={{top: 'always', horizontal: 'never'}}>
                <DrawerItems {...props}/>
                <TouchableOpacity onPress={() => props.navigation.navigate('Landing')}
                                  style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="ios-log-out" size={24} style={{color: props.inactiveTintColor, marginTop: 16, marginBottom: 16, marginLeft: 20, marginRight: 16}}/>
                    <Text style={{color: inactiveTintColor, margin: 16, fontWeight: 'bold', flex: 1}}>
                        Cerrar Sesión
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>

    )
};

export default CustomDrawerComponent;
