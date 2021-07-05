import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../components/Welcome';
import Login from '../components/Login';
import Signup from '../components/Signup';
import SignupOptions from '../components/SignupOptions'
import Feed from '../components/Feed';
import Profile from '../components/Profile';
import Albums from '../components/Albums';
import SharedAlbums from '../components/SharedAlbums';
import theme from '../../assets/themes';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                headerStyled: {
                    backgroundColor: 'transparent'
                },
                headerTintColor: theme.colors.primary,
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
            }}
            initialRouteName = "Welcome"
        >
            <Stack.Screen name = "Welcome" component = {Welcome} />
            <Stack.Screen name = "Login" component = {Login} />
            <Stack.Screen name = "Sign Up" component = {Signup} />
            <Stack.Screen name = "Signup Options" component = {SignupOptions} />
            <Stack.Screen name = "Feed" component = {Feed} />
            <Stack.Screen name = "Profile" component = {Profile} />
            <Stack.Screen name = "Albums" component = {Albums} />
            <Stack.Screen name = "Shared Albums" component = {SharedAlbums} />
        </Stack.Navigator>
    );
};

export default Navigator;