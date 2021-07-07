import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, onPress } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from '../components/Welcome';
import Login from '../components/Login';
import Signup from '../components/Signup';
import SignupOptions from '../components/SignupOptions'
import Feed from '../components/Feed';
import Profile from '../components/Profile';
import Discover from '../components/Discover';
import Messages from '../components/Messages';
import Albums from '../components/Albums';
import SharedAlbums from '../components/SharedAlbums';
import theme from '../../assets/themes';
import { shadow } from 'react-native-paper';
import NewPost from '../components/NewPost';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


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
            <Stack.Screen name = "Feed" component = {TabNavigator} />
            <Stack.Screen name = "Profile" component = {TabNavigator} />
            <Stack.Screen name = "Discover" component = {TabNavigator} />
            <Stack.Screen name = "Messages" component = {TabNavigator} />
            <Stack.Screen name = "New Post" component = {TabNavigator} />
            <Stack.Screen name = "Albums" component = {Albums} />
            <Stack.Screen name = "Shared Albums" component = {SharedAlbums} />
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions = {{
                showIcon: true,
                showLabel: false,
                style: {...styles.tabBar, ...styles.shadow}
            }}
        >
            <Tab.Screen name="Feed" component={Feed} options = {{
                tabBarIcon: ({focused}) => (
                    <Ionicons name = {focused ? 'home' : 'home-outline'} size = {26} style = {styles.iconStyles} />
                )
            }} />
            <Tab.Screen name="Discover" component={Discover} options = {{
                tabBarIcon: ({focused}) => (
                    <Ionicons name = {focused ? 'search' : 'search-outline' } size = {26} style = {styles.iconStyles} />
                )
            }} />

            <Tab.Screen name="New Post" component={NewPost} options = {{
                tabBarIcon: ({focused}) => (
                    <Ionicons name = {focused ? 'add-circle' : 'add-circle-outline' } size = {50} style = {styles.postButton} />
                )
            }} />

            <Tab.Screen name="Messages" component = {Messages} options = {{
                tabBarIcon: ({focused}) => (
                    <Ionicons name ={focused ? 'mail' : 'mail-outline'} size = {26} style = {styles.iconStyles} />
                )
            }} />

            <Tab.Screen name="Profile" component = {Profile} options = {{
                tabBarIcon: ({focused}) => (
                    <Ionicons name ={focused ? 'person-circle' : 'person-circle-outline'} size = {26} style = {styles.iconStyles} />
                )
            }} />
        </Tab.Navigator>
    )
}

const NewPostButton = ({children, onPress}) => {
    <TouchableOpacity onPress = {onPress} style = {styles.postButton, styles.shadow}>
        <View style = {styles.postButtonContainer}>
            {children}
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        marginBottom: 25,
        marginHorizontal: 20,
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.m,
        height: 60,
    },
    shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    iconStyles: {
        color: theme.colors.white,
        alignItems: 'center',
        justifyContent: 'center',

    },
    postButton: {
        color: theme.colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Navigator;