import React, { useState, useEffect } from 'react';
import { Text, Picker, ScrollView, KeyboardAvoidingView, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function ProjetCreate({ navigation }) {


    const [projet, setprojet] = useState({
        description: '',
        user_id: '',
    });


    const getMyObject = async () => {
        try {
            let login = await AsyncStorage.getItem('userId');
            setprojet({ ...projet, user_id: login });
        } catch (e) {
            // read error
        }
    }
    useEffect(() => {
        getMyObject();
    }, []);


    const onChangedescription = (value) => {
        setprojet({ ...projet, description: value });
    };





    const saveData = () => {


        console.log(ticket);
        fetch('http://192.168.100.222:8085/api/projet/', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ description: projet.description, user: { id: projet.user_id } }),
        })
            .then((response) => {
                response.text();

            })
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
        navigation.navigate('ListProjet');
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
                        >description</Text>
                    </View>
                    <TextInput
                        placeholder={'etat'}
                        onChangeText={(value) => onChangedescription(value)}
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
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('ListProjet')
                        }
                    >

                        <Text style={{
                            color: "black",
                            marginHorizontal: 55,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 10,
                            backgroundColor: "#b3fff0",
                            paddingVertical: 20,
                            borderRadius: 23,
                            marginBottom: 0,
                            textAlign: 'center',

                        }}

                        >List Projets</Text>

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