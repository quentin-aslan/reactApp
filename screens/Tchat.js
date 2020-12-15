import React from 'react'
import { View, StyleSheet} from 'react-native'
import ListMessage from '../components/ListMessage';
import FormSend from '../components/FormSend';

class Tchat extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ListMessage />
                <FormSend />
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       marginTop: 150
   }
});

export default Tchat