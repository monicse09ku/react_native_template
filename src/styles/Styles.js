import React, { Component } from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginForm: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        width: Dimensions.get('window').width - 80,
        borderColor: 'transparent',
        marginTop: 5,
    },
    inputIcons: {
        left: 15,
        color: '#000000',
        fontSize: 16,
    },
    textinputfield: {
        height: 40,
        width: "100%",
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginVertical: 15,
        paddingHorizontal: 25,
        color: '#000000',
        fontSize: 16,
        fontFamily: "Quicksand",
    },
    button: {
        height: 45,
        width: 270,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 30,
        backgroundColor: '#002366',
        borderRadius: 30,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: '#000000',
        elevation: 4,
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
        fontFamily: "Quicksand",
    },
    register: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    registerText: {
        fontSize: 16,
        color: '#ffffff',
    },
    registerLink: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    errorText: {
        color: '#8c0032',
        fontFamily: "Quicksand",
        marginBottom: 5,
    },
    loginErrorText: {
        color: '#8a4545',
        fontFamily: "Quicksand",
        alignItems: 'center',
        justifyContent: 'center',

    },
    loginErrorTextContainer: {
        borderColor: 'red',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#f3c7b2',
        marginBottom: 15,
    },
    labelStyle: {
        color: '#000000',
        fontFamily: "Quicksand",
    },
    formBox: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        paddingTop : 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: '#000000',
        elevation: 10,
        marginTop: -80,
        borderRadius: 10,
        width: Dimensions.get('window').width - 40,
        minHeight: 300,
    },
    forgotPassWord: {
        fontSize: 16,
        color: '#858585',
        fontFamily: "Quicksand",
    },
    spinnerStyle: {
        position: 'absolute',
        elevation: 100,
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
        opacity: .4,
        top: 0,
    },
    pageTitle: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: "Quicksand",
    },
    headerText: {
        color: '#8c0032',
        fontSize: 20,
        marginVertical: 10,
        fontFamily: "Quicksand",
    },
    headerImage: {
        height: 35,
        width: 35,
    },
    welcomeText: {
        fontSize: 24,
        color: '#000000',
        fontFamily: "Quicksand",
    },
    dashboardImage: {
        width: Dimensions.get('window').width - 40,
        maxHeight: 200,
        marginBottom: 20,
    },
    startTextStyle: {
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Quicksand",
    },
    followUpLabel: {
        color: '#000000',
        fontFamily: "Quicksand",
        marginBottom: 3,
    },
    followUpDateLevel: {
        marginVertical: 15,
        width: 265,
        borderColor: '#000000',
    },
    backButtonCss: {
        position: 'absolute',
        left: 10,
        bottom: 0,
        marginVertical: 30,
        paddingHorizontal: Platform.OS === "android"? 10 : 13,
        paddingVertical: Platform.OS === "android"? 5 : 3,
    },
    buttonRight: {
      position: 'absolute',
      right: 15,
      bottom: 0,
      marginVertical: 30,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioButtons: {
        alignItems: 'flex-start',
        width: Dimensions.get('window').width - 80,
        marginVertical: 10,
    },
    modalCloseButton:{
        position: 'absolute',
        right: 10,
        top: -30,
        marginVertical: 30,
    },
    sidebarIconStyles: {
      fontSize: 20,
      color: '#ffffff'
    }
});

module.exports = styles;
