import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import theme from '../../assets/themes';
import { LoginScreenNavigator } from '../navigation';

const Welcome = ({navigation}) => {
    return (
        <View style = {styles.StyledContainer}>
            <View style = {styles.InnerContainer}>
                <Image style = {styles.PageLogo} resizeMode = "cover" source = {require('./../../assets/images/logo.png')} />
                <Text style = {styles.PageTitle}>Shutter</Text>
                <Text style = {styles.TagLine}>Social Media for Photographers</Text>
            </View>

            <Pressable style = {styles.LoginButton} onPress = {() => navigation.navigate("Login")}>
                <Text style = {styles.LoginText}>Login</Text>
            </Pressable>

            <Pressable style = {styles.SignupButton} onPress = {() => navigation.navigate("Sign Up")}>
                <Text style = {styles.SignupText}>Sign Up</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    StyledContainer: {
        flex: 1,
        padding: theme.spacing.m,
        paddingTop: theme.spacing.l,
        backgroundColor: theme.colors.white,
        justifyContent: 'center', 
    },
    InnerContainer: {
        alignItems: 'center',
    },
    PageLogo: {
        width: 100,
        height: 100,
    },
    PageTitle: {
        ...theme.textVariants.h1,
        marginTop: theme.spacing.m,
    },
    TagLine: {
        ...theme.textVariants.body3,

    },
    LoginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        marginTop: 60,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.xs,
        borderRadius: theme.borderRadius.m,
    },
    LoginText: {
        ...theme.textVariants.h1,
        color: theme.colors.white,
    },
    SignupButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.xs,
        borderRadius: theme.borderRadius.m,
    },
    SignupText: {
        ...theme.textVariants.h1,
        color: theme.colors.white,
    }
})

export default Welcome;