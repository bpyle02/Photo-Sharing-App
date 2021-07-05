import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../components/Login';
import Signup from '../components/Signup';
import SignupOptions from '../components/SignupOptions'
import Welcome from '../components/Welcome';
import Albums from '../components/Albums';
import SharedAlbums from '../components/SharedAlbums';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Welcome" component = {Welcome} />
            <Stack.Screen name = "Login" component = {Login} />
            <Stack.Screen name = "Sign Up" component = {Signup} />
            <Stack.Screen name = "Signup Options" component = {SignupOptions} />
            <Stack.Screen name = "Albums" component = {Albums} />
            <Stack.Screen name = "Shared Albums" component = {SharedAlbums} />
        </Stack.Navigator>
    );
};

export default Navigator;