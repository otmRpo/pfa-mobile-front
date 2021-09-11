import React, { useState } from 'react';
import { Text, ScrollView, KeyboardAvoidingView, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register';

export default function ProductCreate({ navigation }) {
    const [product, setProduct] = useState({
        description: '',
        marque: '',
        caracteristiques_techniques: '',
        etat_esthetique: '',
        prix: 0,
        id_Client: 0,
        etat: '',
    });

    const [loading, setLoading] = useState(false);


    const onChangedescription = (value) => {
        setProduct({ ...product, description: value });
    };

    const onChangemarque = (value) => {
        setProduct({ ...product, marque: value });
    };

    const onChangecaracteristiques_techniques = (value) => {
        setProduct({ ...product, caracteristiques_techniques: value });
    };

    const onChangeetat_esthetique = (value) => {
        setProduct({ ...product, etat_esthetique: value });
    };






    const saveData = () => {
        console.log("press");
        console.log(product);
        fetch('http://192.168.100.200:5000/api/products', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((response) => {
                setLoading(false)
                response.text();
            })
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };



    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ backgroundColor: "#e6ffe6" }}
        >
            <ScrollView>
                <View style={styles.inner} style={{ width: "100%", height: "100%" }}>

                    <Text
                        style={{
                            marginTop: 80,
                            fontSize: 30,
                            alignSelf: "center",
                        }}
                    >Send product</Text>



                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 55,
                        borderWidth: 5,
                        marginTop: 50,
                        paddingHorizontal: 10,
                        borderColor: "#00716F",
                        borderRadius: 23,
                        paddingVertical: 2

                    }}>
                        <TextInput

                            placeholder={'description'}
                            onChangeText={(value) => onChangedescription(value)}
                            style={{
                                paddingHorizontal: 70,
                                marginHorizontal: 0,
                                marginTop: 5,
                            }}
                        />



                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 55,
                        borderWidth: 5,
                        marginTop: 20,
                        paddingHorizontal: 10,
                        borderColor: "#00716F",
                        borderRadius: 23,
                        paddingVertical: 2
                    }}>
                        <TextInput
                            placeholder={'marque'}
                            onChangeText={(value) => onChangemarque(value)}
                            style={{
                                paddingHorizontal: 70,
                                marginHorizontal: 0,
                                marginTop: 5,
                            }}
                        />



                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 55,
                        borderWidth: 5,
                        marginTop: 20,
                        paddingHorizontal: 10,
                        borderColor: "#00716F",
                        borderRadius: 23,
                        paddingVertical: 2
                    }}>
                        <TextInput
                            placeholder={'Etat Esthetique'}
                            onChangeText={(value) => onChangeetat_esthetique(value)}
                            style={{ height: 100, textAlignVertical: 'top', }}
                            multiline={true}
                        />



                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 55,
                        borderWidth: 5,
                        marginTop: 20,
                        paddingHorizontal: 10,
                        borderColor: "#00716F",
                        borderRadius: 23,
                        paddingVertical: 2
                    }}>
                        <TextInput
                            placeholder={'Caracteristiques Techniques'}
                            onChangeText={(value) => onChangecaracteristiques_techniques(value)}
                            style={{ height: 100, textAlignVertical: 'top', }}
                            multiline={true}
                        />



                    </View>

                    <View style={{
                        marginHorizontal: 55,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 30,
                        backgroundColor: "#00716F",
                        paddingVertical: 10,
                        borderRadius: 23,
                        marginBottom: 31
                    }}>
                        <Text style={{
                            color: "white",
                        }}
                            onPress={saveData}
                        >Ajouter</Text>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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