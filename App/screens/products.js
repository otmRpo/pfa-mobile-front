//import liraries
import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';

// create a component
const Products = ({ navigation }) => {
    const [products, setProducts] = useState([]);

    const getProductData = async () => {
        fetch('http://192.168.100.200:5000/api/products')
            .then((response) => response.json())
            .then((json) => setProducts(json))
            .catch((error) => console.error(error))
    };

    useState(() => {
        getProductData();
    }, []);

    function Item({ item }) {
        return (
            <View style={styles.listItem}>
                <View style={{ width: 200, alignItems: "center", flex: 0 }}>
                    <Text style={{ fontWeight: "bold" }}>{item.marque}</Text>
                    <Text>{item.description}</Text>
                </View>
                <TouchableOpacity style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "green" }}>Call</Text>
                </TouchableOpacity>
            </View>


        );
    };

    return (

        <View style={styles.container}>
            <FlatList
                style={{ flex: 1 }}
                data={products}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item, index) => item + index.toString()}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#F7F7F7',
        marginTop: 60
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
    }

});

//make this component available to the app
export default Products;
