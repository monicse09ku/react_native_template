import React, { Component } from 'react';
import { Container, Content, Item, Input, Label, Spinner, Text, Icon } from 'native-base';

import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View,
    ImageBackground,
    AsyncStorage,
    NetInfo,
    BackHandler
} from 'react-native';

import Logo from '../components/Logo';
import { Actions } from 'react-native-router-flux';
import {postRequest} from "../utils/Post";
//import SplashScreen from 'react-native-splash-screen';
import styles from '../styles/Styles';

const GLOBAL = require('../utils/Variables');

export default class Login extends Component<{}> {

    componentDidMount() {
        //this._retrieveData();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        Alert.alert(
            'Exit App',
            'Are you sure to exit the app',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => BackHandler.exitApp()},
            ],
            { cancelable: false }
        )

        return true;
    }

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            showEmailError: false,
            showPasswordError: false,
            showLoginError: false,
            showSpinner: false,
            loginErrorMessage: "",
            emailErrorMessage: "Email is required",
            passwordErrorMessage: "Password is required",
            isSecuredPassword: true
        };

    }

    getEyeStyle(){
        return {
            position: 'absolute',
            top: 20,
            right: 0,
            color: this.state.isSecuredPassword ? 'black' : 'green'
        }
    }

    toggleIsSecuredPassword = () => {
        this.setState({isSecuredPassword: !this.state.isSecuredPassword})
    }

    forgotPassword(){
        Actions.forgot()
    }

    validateEmail(){
        let self = this;
        let {email, showEmailError} = this.state;
        return new Promise(function(resolve, reject) {
            if(email !== "") {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(email) === false) {
                    self.setState({emailErrorMessage: "Email is invalid"});
                    self.setState({showEmailError: true});
                    reject(false);
                }else{
                    self.setState({showEmailError: false});
                    resolve(true);
                }
            }else{
                self.setState({showEmailError: true});
                reject(false);
            }
        });
    }

    validatePassword(){
        let self = this;
        let {password, showPasswordError} = this.state;
        return new Promise(function(resolve, reject) {
            if(password !== ""){
                self.setState({ showPasswordError : false });
                resolve(true);
            }else{
                self.setState({ showPasswordError : true });
                reject(false);
            }
        });
    }


    postLogin = () => {

        let self = this;
        self.setState({showLoginError : false});

        self.setState({showSpinner : true});
        
        self.validateEmail().then(function(result) {
            self.validatePassword().then(function(result) {
                self.setState({showSpinner : false})
                Actions.home()

            }).catch(function (error) {
                self.setState({showSpinner : false});
            });
        }).catch(function (error) {
            self.setState({showSpinner : false});
            self.setState({showLoginError : true});
        });

    }

    render() {
        return (
            <Container>
                <Content>
                    
                    <View style={styles.overlay}>
                        {this.state.showSpinner &&
                        <Spinner color='green' style={styles.spinnerStyle} />
                        }

                        <Logo/>

                        <Item floatingLabel style={styles.textInputContainer}>
                            <Label style={styles.labelStyle }>
                            	<Icon name='mail' style={ styles.inputIcons } /> Email
                            </Label>
                            <Input
                                style={styles.textinputfield}
                                value={this.state.email}
                                onChangeText={(email) => this.setState({email})}
                            />
                        </Item>

                        <View style={ styles.textInputContainer }>
                            {this.state.showEmailError &&
                            <Text style={styles.errorText}>{this.state.emailErrorMessage}</Text>
                            }
                        </View>

                        <Item floatingLabel style={styles.textInputContainer}>
                            <Label style={styles.labelStyle }><Icon name='lock' style={ styles.inputIcons } /> Password</Label>
                            <Input
                                style={styles.textinputfield}
                                secureTextEntry={this.state.isSecuredPassword}
                                value={this.state.password}
                                onChangeText={(password) => this.setState({password})}
                            />
                            <Icon name='eye' style={ this.getEyeStyle() } onPress={this.toggleIsSecuredPassword}/>
                        </Item>

                        <View style={ styles.searchSection }>
                            {this.state.showPasswordError &&
                            <Text style={styles.errorText}>{this.state.passwordErrorMessage}</Text>
                            }
                        </View>

                        <TouchableOpacity style={styles.button} onPress={this.postLogin}>
                            <Text style={styles.buttonText}>
                                SIGN IN
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.forgotPassWord} onPress={this.forgotPassword}>
                            Forgot Password?
                        </Text>
                        
                    </View>

                </Content>
            </Container>
        );
    }
}
