import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, List, ListItem, Left, Body } from 'native-base';

import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    Platform,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';

const GLOBAL = require('../utils/Variables');

const drawerImage = require("../images/logo.jpg");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default class Sidebar extends Component<{}> {
    logout(){
        GLOBAL.IS_LOGGED_IN = false;
        Actions.home();
    }

    render() {

        return (

            <Container>
                <Content
                    //bounces={false}
                    style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
                >
                    <Image style={styles.drawerImage} source={drawerImage} />
                    <Text style={styles.versionText}>Version : 1.0.0</Text>
                    <List style={{top:60, marginBottom: 70}}>
                        <ListItem icon onPress={() => Actions.home()}>
                            <Left>
                                <Icon name="home" style={styles.sidebarIconStyles}/>
                            </Left>
                            <Body>
                            <Text style={styles.listText}>Home</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={this.gotoOrglist}>
                            <Left>
                                <Icon name="list" style={styles.sidebarIconStyles}/>
                            </Left>
                            <Body>
                            <Text style={styles.listText}>Organisations</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={() => Actions.privacy()}>
                            <Left>
                                <Icon name="key" style={styles.sidebarIconStyles}/>
                            </Left>
                            <Body>
                            <Text style={styles.listText}>Privacy Policy</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={this.logout}>
                            <Left>
                                <Icon name="log-out" style={styles.sidebarIconStyles}/>
                            </Left>
                            <Body>
                            <Text style={styles.listText}>Logddout</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={this.logout}>
                            <Left>
                                <Icon name="log-out" style={styles.sidebarIconStyles}/>
                            </Left>
                            <Body>
                            <Text style={styles.listText}>Logssddout</Text>
                            </Body>
                        </ListItem>
                        {GLOBAL.IS_LOGGED_IN && 
                            <ListItem icon onPress={this.logout}>
                                <Left>
                                    <Icon name="log-out" style={styles.sidebarIconStyles}/>
                                </Left>
                                <Body>
                                <Text style={styles.listText}>Logout</Text>
                                </Body>
                            </ListItem>
                        }
                        {!GLOBAL.IS_LOGGED_IN && 
                            <ListItem icon onPress={() => Actions.login()}>
                                <Left>
                                    <Icon name="log-out" style={styles.sidebarIconStyles}/>
                                </Left>
                                <Body>
                                <Text style={styles.listText}>Login</Text>
                                </Body>
                            </ListItem>
                        }
                    </List>

                </Content>

            </Container>


        );
    }
}

const styles = StyleSheet.create({
    drawerCover: {
        alignSelf: "stretch",
        height: deviceHeight / 3.5,
        width: null,
        position: "relative",
        marginBottom: 2
    },
    drawerImage: {
        left: Platform.OS === "android" ? deviceWidth / 8 : deviceWidth / 8,
        top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
        width: 220,
        height: 80,
        resizeMode: "cover"
    },
    versionText: {
        position: "absolute",
        right: 10,
        top: 10,
        fontFamily: "Quicksand",
        fontSize: 12,
        color: '#4a4a4a'
    },
    listText: {
        fontFamily: "Quicksand",
    },
    sidebarIconStyles: {
      fontSize: 20,
    }
});
