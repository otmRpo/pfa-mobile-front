import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';

export default function Register({ navigation }) {
    const [user, setUser] = useState({
        login: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);


    const onChangeLogin = (value) => {
        setUser({ ...user, login: value });
    };

    const onChangePassword = (value) => {
        setUser({ ...user, password: value });
    };



    const saveData = () => {
        console.log("press");
        console.log(user);
        fetch('http://192.168.100.200:5000/api/users', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ login: user.login, password: user.password }),
        })
            .then((response) => {
                setLoading(false)
                response.text();
            })
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };



    return (

        <View style={{ width: "100%", backgroundColor: "#e6ffe6", height: "100%", marginTop: 80, }}>

            <Text
                style={{
                    marginTop: 50,
                    fontSize: 20,
                    alignSelf: "center",
                }}
            >You have an account then</Text>
            <Text
                style={{
                    marginTop: 50,
                    fontSize: 30,
                    alignSelf: "center",
                }}
            >SignIn</Text>



            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 50,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                <TextInput
                    placeholder={'Login'}
                    onChangeText={(value) => onChangeLogin(value)}
                    style={{ paddingHorizontal: 10 }}
                />



            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                <TextInput
                    placeholder={'Password'}
                    onChangeText={(value) => onChangePassword(value)}
                    style={{ paddingHorizontal: 10 }}
                />



            </View>
            <TouchableOpacity>
                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#00716F",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                    <Text style={{
                        color: "white",
                    }}
                        onPress={saveData}
                    >SignIn</Text>
                </View>
            </TouchableOpacity>

            <Text

                style={{
                    alignSelf: "center",
                    color: "#00716F",
                    paddingVertical: 30
                }}>SignUp</Text>
        </View>
    )

}