import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native'
import {requestLogin} from '../API/ElamenorApi';
import {connect} from 'react-redux';

class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            username: '',
            password: ''
        }

        this._requestLogin = this._requestLogin.bind(this);
    }

    async _requestLogin() {
        console.log(this.props);
        const res = await requestLogin(this.state.username, this.state.password);
        console.log(res);
        if(res) {
            // Stockage des informations de l'utilisateur dans le state (il faudra le locals storage aussi) + affichage du tchat
            const action = {type: "UPDATE_USER", value: {username: res.user.username, jwt: res.jwt}}
            this.props.dispatch(action);
            return this.props.displayTchat(res.user.username);
        } return Alert.alert("Connexion échouée", "Mauvais identifiants");
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={(text) => this.setState({username: text})}
                    style={styles.textInput}
                    placeholder='Username' placeholderTextColor= "#b8b8b8" />
                <TextInput
                    onChangeText={(text) => this.setState({password: text})}
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

// récupérations des variable global et ajout dans les props du composant
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(FormLogin);