import React from 'react'
import { StyleSheet, View, Text, FlatList} from 'react-native'
import MessageItem from './MessageItem';
import SocketIoClient from 'socket.io-client/dist/socket.io';

class ListMessage extends React.Component {

    constructor(props) {
        super(props);
        this.socket = SocketIoClient('https://elamenor-rest.herokuapp.com/ws/tchat');
        this.state = {messages: []}

        // Intéraction avec les websockets
        this.socket.on('refresh', (messages) => {
            // this.setState({messages})
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Liste des messages</Text>
                <FlatList
                    data={this.state.messages}
                    renderItem={({item}) => <MessageItem message={item} />}
                    keyExtractor={(item) => item._id.toString()}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 50
    },
    message: {fontSize: 20, color: "blue"}
});

export default ListMessage