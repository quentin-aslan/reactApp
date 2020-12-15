import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native'
import {login} from './../API/ElamenorApi';

class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    _requestLogin() {
        console.log("On press login");
        const res = login(this.state.username, this.state.password);
        console.log(res);
        if(res) {
            return Alert.alert("Connexion réussi", "Bien joué");
        } return Alert.alert("Connexion échouée", "Mauvais identifiants");
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangetext={(username) => this.setState({username})}
                    style={styles.textInput}
                    placeholder='Username' placeholderTextColor= "#b8b8b8" />
                <TextInput
                    onChangetext={(password) => this.setState({password})}
                    keyboardType= "numeric"
                    secureTextEntry={true}
                    style={styles.textInput}
                    placeholder='PIN CODE' placeholderTextColor= "#b8b8b8"/>
                <Button title='Connexion' onPress={this._requestLogin}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#121212"
    },
    textInput: {
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        height: 50,
        borderColor: '#b8b8b8',
        color: "#b8b8b8",
        borderWidth: 1,
        paddingLeft: 5
    },
    submitButton: {

    }
});

export default FormLogin;