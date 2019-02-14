import React , {Component} from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import {Text,TouchableOpacity, View, FlatList, ImageBackground} from 'react-native';
import {withNavigation} from 'react-navigation'
import NavBar from "../../Components/NavBarComponent";
import OpenDrawer from "../../Components/OpenDrawerComponent"
import CartComponent from "../../Components/CartComponent";

const Items =
    [{ key: 'Entradas',
        subitems:
            [{
                key: 'Ensalada'
            },
            {
                key: 'Tequeno'
            }]
    },{ key: 'Principales',
        subitems:
            [{
                key: 'Pizza'
            }]
    },{ key: 'Acompañantes',
        subitems:
            [{
                key: 'Cheesy Bites'
            }]
    },{ key: 'Bebidas',
        subitems:
            [{
                key: 'Coca-Cola 2Lts'
            }]
    },];

export default class MenuScreen extends React.Component{

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({navigation})=>({
        title: 'Carta',
        headerTitle: 'Carta  ',
        headerLeft: <OpenDrawer/>,
        headerRight: <CartComponent/>,
        headerTitleStyle: {}
    });

    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <FlatList
                    data={Items}
                    renderItem={({item}) =>
                        <TouchableOpacity activeOpacity={0.6} onPress={()=>this.props.navigation.navigate('SubMenu', {item: item.subitems})}>
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
        )
    }
}