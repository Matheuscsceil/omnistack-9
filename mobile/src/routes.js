import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';

export default function Routes() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
            <Stack.Screen name="Book" component={Book} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}