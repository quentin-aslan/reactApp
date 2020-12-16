import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert, ActivityIndicator, Text } from 'react-native'
import {requestLogin, requestCheckJWT} from '../API/ElamenorApi';
import {connect} from 'react-redux';

class FormLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loading: false
        }

        // Si on à un JWT enregistrer dans redux-persist, on vérifie que le JWT est bon.
        if(this.props.user) {
            if(this.props.user.jwt) { this.state.loading = true; this._requestCheckJWT();}
        }

        this._requestLogin = this._requestLogin.bind(this);
        this._requestCheckJWT = this._requestCheckJWT.bind(this);
    }

    async _requestCheckJWT() {
        const jwt = this.props.user.jwt;
        const res = await requestCheckJWT(jwt);
        if(res) return this.props.displayTchat(this.props.user.username);
        else {
            Alert.alert("Oups ...", `Salut ${this.props.user.username}, tu à été déconnecté, merci de remplir le formulaire de connexion.`);
            this.setState({loading: false});
        }
    }

    async _requestLogin() {
        console.log(this.props);
        const res = await requestLogin(this.state.username, this.state.password);
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
                {this.state.loading && <View>
                    <Text style={{color: "#FFFFFF", fontSize: 20}}>{"Vérification de vos informations"}</Text>
                    <ActivityIndicator size="large" color="#FFFFFF"/>
                </View>}

                {!this.state.loading && <View style={styles.container}>
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
                </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#4a4a4a",
        alignSelf: 'stretch',
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