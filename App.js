import React from 'react';
import { StyleSheet, Button, Image} from 'react-native';
import { createDrawerNavigator , createAppContainer} from 'react-navigation';
import * as firebase from 'firebase';
import 'firebase/firestore';

//Screens
import HomeScreen from './screens/HomeScreen';
import PedidosScreen from "./screens/PedidosScreen";

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

//Navigation


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

//Example


class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
        <Image
            source={require('./assets/icon.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
  };

  render() {
    return (
        <Button
            onPress={() => this.props.navigation.goBack()}
            title="Go back home"
        />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Pedidos:{
    screen: PedidosScreen,
  },
  Menu:{
    screen: HomeScreen,
  },
  Ofertas:{
    screen: HomeScreen
  },
  Ubicaciones:{
    screen: HomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component{
  render(){
    return(
        <AppContainer/>
    )
  }
}