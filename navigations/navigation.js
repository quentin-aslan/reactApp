import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Tchat from "../screens/Tchat";
import Login from "../screens/Login";

const AppStackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {title: "Connexion"}
    },
    Tchat: {
        screen: Tchat,
        navigationOptions: {title: 'Messagerie instantanée'}
    }
}, {
    navigationOptions: {
        headerStyle:{backgroundColor:'#FFFF00'},
        headerTintColor:'red',
        gesturesEnabled:false
    },
    cardStyle: { backgroundColor: '#474747' }
});

export default createAppContainer(AppStackNavigator);