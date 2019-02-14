import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";

class OpenDrawer extends React.Component {
    render() {
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{flex:0.33,paddingLeft: 15}}>
                <View>
                    <Icon name="ios-menu" size={52} color="#242424"/>
                </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(OpenDrawer);