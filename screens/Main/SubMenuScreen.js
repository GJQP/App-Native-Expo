import React from 'react';
import {View, FlatList, TouchableOpacity, Text, ImageBackground} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import CartComponent from "../../Components/CartComponent";

export default class SubMenu extends React.Component {

    static navigationOptions = ({navigation})=>({
        headerRight: <CartComponent/>,
    });

    render() {

        const { navigation } = this.props;
        const item = navigation.getParam('item', null);
        const otherParam = navigation.getParam('detalle', false);
        console.log(item);
        if(item !== undefined)
            return (
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <FlatList
                        data={item}
                        renderItem={({item}) =>
                            <TouchableOpacity activeOpacity={0.6} onPress={()=>this.props.navigation.push('SubMenu', {item: item.subitems})}>
                                <ImageBackground style={{flex: 1, height: 200, alignItems: 'center', justifyContent: 'center'}} source={require('@assets/backgrounds/444634-PEMTQB-849.jpg')}>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                                        <Text style={{color: 'white', fontSize: 48, textAlign: 'center'}}>{item.key}</Text>
                                        <Icon name="ios-arrow-forward" size={60} color="white" style={{textAlign: 'center'}}/>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        }
                    />
                </View>
            );
        else{
            return(
                <View>
                    <Text>Este seria el detalle</Text>
                </View>
            )
        }

    }
}