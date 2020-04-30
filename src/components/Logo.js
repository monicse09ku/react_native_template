import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


export default class Logo extends Component<{}> {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/logo.jpg')} style={styles.overlay} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:-60,
        zIndex: 999,
        elevation: 10,
    },
    overlay: {
        height:80,
        width:220
    }
});