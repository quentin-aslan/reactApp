import React from 'react'
import { View, StyleSheet} from 'react-native'
import FormLogin from '../components/FormLogin';

class Login extends React.Component {
    _displayTchat() {
        console.log("Display Tchat");
    }

    render() {
        return (
            <View style={styles.container}>
                <FormLogin />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Login