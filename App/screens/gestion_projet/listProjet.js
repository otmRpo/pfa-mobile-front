//import liraries
import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const ListProjet = ({ navigation }) => {
    const [projects, setProject] = useState();

    const getprojecttData = async () => {
        fetch('http://192.168.100.222:8085/api/projet/', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setProject(json)
                console.log(json)
            })
            .catch((error) => console.error(error))
    };

    const deltetProject = (value) => {
        console.log(value);
        fetch('http://192.168.100.222:8085/api/projet/' + value, {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                response.text();
                getprojecttData();
            })
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
        getprojecttData();
    };


    useState(() => {
        getprojecttData();
    }, []);

    function Item({ item }) {
        return (

            <View style={styles.listItem}>

                <View style={styles.info}>
                    <Text style={{ fontWeight: "bold" }}>{item.description}</Text>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('ListTache', {
                            paramKey: item.id,
                        })
                    }
                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", marginLeft: 0, }}
                >
                    <Text style={{
                        color: "green",
                        color: "white",
                        justifyContent: "center",
                        backgroundColor: "green",
                        paddingVertical: 10,
                        width: 50,
                        textAlign: 'center',
                        borderRadius: 5
                    }}>taches</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={(value) => deltetProject(item.id)}
                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                >
                    <Text style={{
                        color: "red",
                        color: "white",
                        justifyContent: "center",
                        backgroundColor: "#ff0000",
                        paddingVertical: 10,
                        width: 50,
                        textAlign: 'center',
                        borderRadius: 5,
                        marginLeft: 1,
                    }}>delete</Text>
                </TouchableOpacity>
            </View>


        );
    };

    return (

        <View style={styles.container}>
            <TouchableOpacity
                onPress={() =>
                    navigation.replace('TicketCreate', {})
                }
            >

                <Text style={{
                    color: "white",
                    justifyContent: "center",
                    backgroundColor: "#00716F",
                    paddingVertical: 20,
                    textAlign: 'center',
                    borderRadius: 5
                }}

                >create Projet</Text>

            </TouchableOpacity>
            <View >
                <FlatList
                    data={projects}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={(item, index) => item + index.toString()}
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        marginTop: 20
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "100%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    },
    info: {
        marginTop: 20,
        height: 10,
        width: 150,
        justifyContent: "center",
        marginLeft: 10,
    },
    column: {
        marginTop: 20,
        height: 10,
        justifyContent: "center",
        marginLeft: 5,
    },
    tinyLogo: {
        width: 70,
        height: 60,
        borderRadius: 5
    }

});

//make this component available to the app
export default ListProjet;
