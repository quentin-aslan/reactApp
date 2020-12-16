import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native'
import {connect} from "react-redux";

class FormSend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput onChangeText={(text) => this.setState({message: text})} style={styles.textInput} placeholder='Salut !'/>
                <Button title='Envoyer' onPress={_sendMessage}/>
            </View>
        )
    }
}

const _sendMessage = () => {
    const message = this.state.message;
    if(message) {
        console.log(message);
    } else Alert.alert("Oups :/", "Vous ne pouvez pas envoyer un message vide.");

}

const styles = StyleSheet.create({
   container: {
       flex: 1,
   },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
});

// récupérations des variable global et ajout dans les props du composant
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(FormSend);