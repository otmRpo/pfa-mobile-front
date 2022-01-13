import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home({ navigation, route }) {


    useState(() => {
        try {
            AsyncStorage.removeItem("userId");
            AsyncStorage.removeItem("adminId");
        }
        catch (exception) {
            return false;
        }
    }, []);

    return (

        <View style={{ width: "100%", height: "100%", marginTop: 20, }}>

            <Text
                style={{
                    marginTop: 50,
                    fontSize: 20,
                    alignSelf: "center",
                }}
            >You have an account then</Text>







            <TouchableOpacity
                onPress={() =>
                    navigation.replace('LoginAdmin', {})
                }
            >


                <Text style={{
                    color: "white",
                    color: "white",
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#00716F",
                    paddingVertical: 20,
                    borderRadius: 23,
                    marginBottom: 31,
                    textAlign: 'center',
                }}

                >Sign In as admin</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() =>
                    navigation.replace('Login', {})
                }
            >


                <Text style={{
                    color: "white",
                    color: "white",
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#00716F",
                    paddingVertical: 20,
                    borderRadius: 23,
                    marginBottom: 31,
                    textAlign: 'center',
                }}

                >Sign In as user</Text>

            </TouchableOpacity>


        </View>
    )

}