import React from 'react'
import { View, StyleSheet, Alert} from 'react-native'
import ListMessage from '../components/ListMessage';
import FormSend from '../components/FormSend';
import SocketIoClient from 'socket.io-client/dist/socket.io';

class Tchat extends React.Component {
    constructor(props) {
        super(props);
        this.socket = SocketIoClient('https://elamenor-rest.herokuapp.com/ws/tchat');

        // Intéraction avec les websockets
        this.socket.on('error', (message) => {
            Alert.alert("Error", message);
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <ListMessage socket={this.socket} />
                <FormSend socket={this.socket} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
   }
});

export default Tchat