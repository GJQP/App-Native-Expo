import React , {Component} from 'react';
import {MapView} from 'expo'
import Icon from "react-native-vector-icons/Ionicons";

export default class LocationsScreen extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Ubícanos',
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-map" size={24} color={tintColor}/>
        ),
    };

    render(){
        return(
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        )
    }
}