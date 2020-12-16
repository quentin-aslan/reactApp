import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native'
import {connect} from "react-redux";
import SocketIoClient from 'socket.io-client/dist/socket.io';

class FormSend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        this.socket = this.props.socket;
        this._sendMessage = this._sendMessage.bind(this);
    }

    _sendMessage() {
        const message = this.state.message;
        if(message) {
            console.log(message);
            console.log(this.props.user.username);
            this.socket.emit("new", JSON.stringify({username: this.props.user.username, message: message}));
        } else Alert.alert("Oups :/", "Vous ne pouvez pas envoyer un message vide.");
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput onChangeText={(text) => this.setState({message: text})} style={styles.textInput} placeholder="Écrivez ici votre message ;-)"/>
                <Button color="#841584" title="Envoyer" onPress={this._sendMessage}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
   container: {
       flex: 1,
   },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 20,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
});

// récupérations des variable global et ajout dans les props du composant
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(FormSend);