import React, { Component } from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View,
} from 'react-native';

export default class Topbar extends Component<{}> {

    render() {
        return (

            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='list' />
                    </Button>
                </Left>
                <Body>
                <Title>Header</Title>
                </Body>
                <Right />
            </Header>

        );
    }
}

const styles = StyleSheet.create({

});