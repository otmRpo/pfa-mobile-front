import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import Login from './../screens/Login';
import Register from './../screens/Register';
import ProductCreate from './../screens/ProductCreate';
const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ProductCreate" component={ProductCreate} />

        </Stack.Navigator>
    );
}


