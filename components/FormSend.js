import React from 'react'
import { View, TextInput, Button } from 'react-native'

class FormSend extends React.Component {
    render() {
        return (
            <View>
                <TextInput placeholder='Salut !'/>
                <Button title='Envoyer' onPress={() => {}}/>
            </View>
        )
    }
}

export default FormSend