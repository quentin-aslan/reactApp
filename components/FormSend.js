import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class FormSend extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder='Salut !'/>
                <Button title='Envoyer' onPress={sendMessage()}/>
            </View>
        )
    }
}

const sendMessage = () => {
    console.log("ss")

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

export default FormSend