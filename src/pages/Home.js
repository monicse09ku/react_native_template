import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Alert,
    ImageBackground,
    Dimensions,
    Image,
    BackHandler,
    AsyncStorage
} from 'react-native';

//import SplashScreen from 'react-native-splash-screen';
import { Container, Content, Text, Drawer, Header, Left, Icon, Button, Body, Title, Right, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Bottombar from '../components/Bottombar';
import Sidebar from '../components/Siderbar';
import styles from '../styles/Styles';

const GLOBAL = require('../utils/Variables');

export default class Home extends Component<{}> {

    constructor(props) {
        super(props);

        GLOBAL.PAGE_TITLE = '';

        this.state = {
            organisations: [],
            showOrganisations: false,
        };
    }

    closeDrawer(){
        this._drawer._root.close()
    };
    openDrawer(){
        this._drawer._root.open()
    };

    render() {

        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                content={<Sidebar navigator={this._navigator} />}
                onClose={() => this.closeDrawer()} >
                <Container>
                    <Header style={{ backgroundColor: GLOBAL.PRIMARY_COLOR }}>
                        <Left style={{ flex: 1}}>
                            <Button transparent onPress={()=> this.openDrawer()} style={{ backgroundColor: '#fbc02d', width: 30, height: 30, marginLeft: 5}}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body style={{ flex: 1,alignItems: 'center', justifyContent: 'center'}}>

                        <Text style={styles.pageTitle}>{ GLOBAL.PAGE_TITLE }</Text>

                        </Body>
                        <Right>
                            <Button hasText transparent onPress={() => Actions.profile()}>
                                <Icon name="person" style={styles.sidebarIconStyles}/>
                            </Button>
                        </Right>
                    </Header>

                    <View style={pagestyles.overlay}>

                        <Content>

                            <StatusBar backgroundColor="#000000" barStyle="light-content" />

                            <View style={styles.loginForm}>
                                <Text style={styles.welcomeText}>Welcome </Text>
                            </View>
                        </Content>
                    </View>

                    <Bottombar/>

                </Container>
            </Drawer>

        )
    }
}

const pagestyles = StyleSheet.create({
    overlay: {
        width: Dimensions.get('window').width,
        minHeight: Platform.OS === "android"? (Dimensions.get('window').height - 80) : (Dimensions.get('window').height - 119),
        alignItems: 'center',
        justifyContent: 'center',
    },
});
