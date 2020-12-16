import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
class MessageItem extends React.Component {
    constructor(props) {
        super(props);
        this._message = this.props.message;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.author}>{this._message.username}: </Text>
                <Text style={styles.message}>{this._message.message}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5
    },
    author: {fontSize: 15, fontWeight: 'bold'},
    message: {fontSize: 15}
});

export default MessageItem