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

export default class Forgot extends Component<{}> {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            showEmailError: false,
            showForgotPasswordError: false,
            showSpinner: false,
            forgotPasswordErrorMessage: "",
            emailErrorMessage: "Email is required"
        };

    }

    backToLogin(){
        Actions.login()
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

    postForgotPassword = () => {

        let self = this
        self.setState({showForgotPasswordError : false})

        self.setState({showSpinner : true})
        
        self.validateEmail().then(function(result) {
            alert('email submitted')
            self.setState({showSpinner : false})
        }).catch(function (error) {
            self.setState({showSpinner : false})
            self.setState({showForgotPasswordError : true})
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

                        <TouchableOpacity style={styles.button} onPress={this.postForgotPassword}>
                            <Text style={styles.buttonText}>
                                SUBMIT
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.forgotPassWord} onPress={this.backToLogin}>
                            Back to Login
                        </Text>
                        
                    </View>

                </Content>
            </Container>
        );
    }
}
