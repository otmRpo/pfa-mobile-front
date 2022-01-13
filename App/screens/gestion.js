import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Gestion({ navigation, route }) {




    return (

        <View style={{ width: "100%", height: "100%", marginTop: 20, }}>



            <TouchableOpacity
                onPress={() =>
                    navigation.replace('ListProjet', {})
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

                >Gestion Projet</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() =>
                    navigation.replace('ListTicket', {})
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

                >Gestion Ticket</Text>

            </TouchableOpacity>


        </View>
    )

}