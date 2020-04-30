import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Alert,
    ImageBackground,
    Dimensions,
} from 'react-native';

const GLOBAL = require('./Variables');

async function postRequest(url, params, user_token = '') {
    let api_url = GLOBAL.API_URL + url;
    let auth_token = 'Bearer ' + user_token;

    try {
        let response = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': auth_token,
            },
            body: params,
        });
        //console.log(api_url);console.log(api_url);console.log(response);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export {postRequest};