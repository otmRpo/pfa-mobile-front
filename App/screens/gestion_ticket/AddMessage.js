import React, { useState, useEffect } from 'react';
import { Text, Picker, ScrollView, KeyboardAvoidingView, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AddMessage({ navigation, route }) {


    const [message, setMessage] = useState({
        body: '',
        ticket_id: route.params.paramKey,

    });

    const onChangebody = (value) => {
        setMessage({ ...message, body: value });
    };


    const saveData = async () => {


        fetch('http://192.168.100.222:8085/api/message/', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ body: message.body, ticket: { id: message.ticket_id } }),
        })
            .then((response) => {
                response.text();
            })
            .then((result) => {
                console.log(result)
            })
            .catch((error) => console.log(error));

        let login = await AsyncStorage.getItem('adminId');
        if (login) {
            fetch('http://192.168.100.222:8085/api/ticket/' + login + '/' + message.ticket_id, {
                method: 'PUT',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                    response.text();
                })
                .then((result) => {
                    console.log(result)
                })
                .catch((error) => console.log(error));
        }
        navigation.navigate('ListMessage', {
            paramKey: route.params.paramKey,
        });
    };



    return (
        <KeyboardAvoidingView

        >
            <ScrollView>
                <View style={styles.inner} style={{ width: "100%", height: "100%" }}>

                    <View>
                        <Text
                            style={{
                                marginTop: 10,
                                fontSize: 20,
                                alignSelf: "center",
                            }}
                        >body</Text>
                    </View>
                    <TextInput
                        placeholder={'body'}
                        onChangeText={(value) => onChangebody(value)}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginHorizontal: 55,
                            borderWidth: 2,
                            marginTop: 15,
                            paddingHorizontal: 10,
                            borderColor: "#00716F",
                            borderRadius: 23,
                            paddingVertical: 10,
                            paddingHorizontal: 10
                        }}
                    />



                    <TouchableOpacity
                        onPress={saveData}
                    >

                        <Text style={{
                            color: "white",
                            marginHorizontal: 55,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 30,
                            backgroundColor: "#00716F",
                            paddingVertical: 20,
                            borderRadius: 23,
                            marginBottom: 0,
                            textAlign: 'center',

                        }}

                        >Ajouter</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12
    }
});