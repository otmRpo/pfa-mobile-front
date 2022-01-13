//import liraries
import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
} from 'react-native';

// create a component
const Details = ({ navigation, route }) => {
    const [ticket, setticket] = useState([]);



    const getticketData = async () => {
        fetch('http://192.168.100.222:8085/api/ticket/' + route.params.paramKey)
            .then((response) => response.json())
            .then((json) => {
                setticket(json);
            }
            )
            .catch((error) => console.error(error))
    };











    useState(() => {
        getticketData();
    }, []);



    return (

        <View >
            <View style={styles.listItem}>
                <View style={styles.listItem1}>
                    <View style={{ height: 10, width: 110, justifyContent: "center", }}>
                        <Text style={{ color: "green" }}>etat</Text>
                    </View>
                    <View style={{ height: 10, width: 110, justifyContent: "center", marginLeft: 20 }}>
                        <Text style={{ fontWeight: "bold" }}>{ticket.etat}</Text>
                    </View>
                </View>
                <View style={styles.listItem1}>
                    <View style={{ height: 10, width: 110, justifyContent: "center", }}>
                        <Text style={{ color: "green" }}>objet</Text>
                    </View>
                    <View style={{ height: 10, width: 110, justifyContent: "center", marginLeft: 20 }}>
                        <Text style={{ fontWeight: "bold" }}>{ticket.objet}</Text>
                    </View>
                </View>





            </View >
            <View style={{
                marginTop: 120,
                padding: 10,
                width: "100%",
                flex: 1,
                flexDirection: "column",
                borderRadius: 5
            }}>
                <View style={{
                    margin: 10,
                    padding: 10,
                    flex: 1,
                    alignSelf: "center",
                    flexDirection: "row",
                    borderRadius: 5
                }}>

                    <View style={{ height: 10, width: 210, justifyContent: "center", marginLeft: 5 }}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('ListMessage', {
                                    paramKey: ticket.id,
                                })
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

                            >show Messages</Text>

                        </TouchableOpacity>

                    </View>

                </View>
            </View >

        </View >
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
        width: "100%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "column",
        borderRadius: 5
    },
    listItem1: {
        margin: 10,
        padding: 10,
        width: "100%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    }

});

//make this component available to the app
export default Details;
