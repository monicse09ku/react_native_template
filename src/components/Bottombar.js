import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View,
} from 'react-native';

const GLOBAL = require('../utils/Variables');

export default class Bottombar extends Component<{}> {

    GoToProfile(){
        Actions.profile();
    }

    GoToWork(){
        Actions.work();
    }

    GoToBooking(){
        Actions.facility();
    }

    gotoCreateIssue(){
        if(GLOBAL.USER_ROLE.includes('officer')){
            Actions.category();
        }else{
            Actions.types();
        }
    }

    render() {
        return (

            <Footer style={pagestyles.footerStyle}>
                <FooterTab  style={{ backgroundColor: GLOBAL.PRIMARY_COLOR }}>
                    <Button vertical onPress={this.GoToWork}>
                        <Icon name="walk" style={ pagestyles.bottomText }/>
                        <Text style={pagestyles.bottomText}>{GLOBAL.START_WORK_BUTTON_TEXT} Work</Text>
                    </Button>
                    <Button vertical onPress={this.GoToBooking}>
                        <Icon name="calendar" style={ pagestyles.bottomText }/>
                        <Text style={pagestyles.bottomText}>Booking</Text>
                    </Button>
                    <Button vertical onPress={this.gotoCreateIssue}>
                        <Icon name="brush" style={ pagestyles.bottomText } />
                        <Text style={pagestyles.bottomText}>Report Issue</Text>
                    </Button>
                </FooterTab>
            </Footer>

        );
    }
}

const pagestyles = StyleSheet.create({
    bottomText: {
        fontFamily: "Quicksand",
        color: '#ffffff',
    },
    footerStyle: {
      backgroundColor: GLOBAL.PRIMARY_COLOR,
      position: 'absolute',
      bottom:0,
      maxHeight: 75
    }
});
