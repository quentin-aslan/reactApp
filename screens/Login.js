import React from 'react'
import { View, StyleSheet} from 'react-native'
import FormLogin from '../components/FormLogin';
import Toast from 'react-native-simple-toast';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this._displayTchat = this._displayTchat.bind(this);
    }
    _displayTchat(username) {
        Toast.show(`Salut, ${username}`);
        this.props.navigation.navigate("Tchat");
    }

    render() {
        return (
            <View style={styles.container}>
                <FormLogin displayTchat={this._displayTchat} />
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