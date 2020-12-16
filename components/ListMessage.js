import React from 'react'
import { StyleSheet, View, Text, FlatList} from 'react-native'
import MessageItem from './MessageItem';

class ListMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
        this.socket = this.props.socket;

        // Intéraction avec les websockets
        this.socket.on('refresh', (messages) => this.setState({messages}));
    }

    render() {
        return (
            <View style={styles.container}>
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
        flex: 1,
        marginLeft: 5,
        marginRight: 5
    },
    title: {
        fontSize: 50
    },
    message: {fontSize: 20, color: "blue"}
});

export default ListMessage