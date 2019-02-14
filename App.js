import React from 'react';
import {StyleSheet, Button, Image} from 'react-native';
import {createSwitchNavigator,createStackNavigator,createDrawerNavigator , createAppContainer} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import * as firebase from 'firebase';
import 'firebase/firestore';

//Screens
  //Auth
import LandingScreen from '@screens/Auth/LandingScreen';
import LoginScreen from '@screens/Auth/LoginScreen';
import RegisterScreen from '@screens/Auth/RegisterScreen';
  //Main
import HomeScreen from '@screens/Main/HomeScreen';
import MenuScreen from '@screens/Main/MenuScreen';
import CartScreen from '@screens/Main/CartScreen';
import CheckoutScreen from '@screens/Main/CheckoutScreen';
import LocationsScreen from '@screens/Main/LocationsScreen';
import PedidosScreen from '@screens/Main/PedidosScreen';
import CustomDrawerComponent from "./Components/CustomDrawerComponent";
import SubMenu from "./screens/Main/SubMenuScreen";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBxEvnoIePmK-ml8Haww4yvwtCOOkFtnKY",
  authDomain: "proyecto-piloto-3be97.firebaseapp.com",
  databaseURL: "https://proyecto-piloto-3be97.firebaseio.com",
  projectId: "proyecto-piloto-3be97",
  storageBucket: "proyecto-piloto-3be97.appspot.com",
  messagingSenderId: "729612993221"
};
firebase.initializeApp(config);

//const db =firebase.firestore();

/*const docRef = db.collection('users').doc('alovelace');

const setAda = docRef.set({
first: 'Ada',
last: 'Lovelace',
born: 1815
});*/

//Auth Navigation
const AuthNavigator = createStackNavigator(
    {
      Landing: LandingScreen,
      Login: LoginScreen,
      Register: RegisterScreen,
    },
    {
      initialRouteName: 'Landing',
    }
);

const MenuNavigator = createStackNavigator(
    {
        Menu: MenuScreen,
        SubMenu: SubMenu
    }
);

// const CheckoutNavigator = createStackNavigator(
//     {
//         Resumen: CartScreen,
//         Direccion: CartScreen,
//         MetodoDePago: CartScreen
//     }
// );

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Cuenta:{
            screen: HomeScreen
        },
        Menu: {
            screen: MenuNavigator,
            navigationOptions: {
                drawerLabel: 'Carta ',
                drawerIcon: ({ tintColor }) => (
                    <Icon name="ios-restaurant" size={24} color={tintColor}/>
                ),
            }
        },
        Carrito: {
          screen: CartScreen,
        },
        Pedidos: {
            screen: PedidosScreen,
        },
        Ubicaciones: {
            screen: LocationsScreen,
        },
    },
    {
      initialRouteName: "Home",
        drawerBackgroundColor: '#424242',
        contentComponent: CustomDrawerComponent,
        contentOptions: {
            activeTintColor: '#ff2416',
            //activeBackgroundColor: '#424242',
            inactiveTintColor: '#fff',
            //inactiveBackgroundColor: '#424242',
            itemsContainerStyle: {
                marginVertical: 0,
            },
            iconContainerStyle: {
                opacity: 1
            }
        }
    }
);

//App Navigator
const AppNavigator = createSwitchNavigator(
    {
      Auth: AuthNavigator,
      Main: DrawerNavigator
    },
    {
      initialRouteName: "Main",
    }
);


/*export default class App extends React.Component {
render() {
return (
<View style={styles.container}>
<Text>Open up App.js to start working on your app!</Text>
</View>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});*/


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  render(){
    return(
        <AppContainer/>
    )
  }
}