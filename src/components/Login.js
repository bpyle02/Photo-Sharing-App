import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import theme from '../../assets/themes';
import { Formik } from 'formik';
import { Octicons, Fontisto } from '@expo/vector-icons';
import Separator from './Separator';
import KeyBoardAvoidingWrapper from './KeyboardAvoidingWrapper';

const Login = () => {
    return (
        <KeyBoardAvoidingWrapper>
            <View>
                <View style = {styles.StyledContainer}>
                    <View style = {styles.InnerContainer}>
                        <Image style = {styles.PageLogo} resizeMode = "cover" source = {require('./../../assets/images/logo.png')} />
                        <Text style = {styles.PageTitle}>Shutter</Text>
                        <Text style = {styles.TagLine}>Social Media for Photographers</Text>
                    </View>
                </View>

                <Formik
                initialValues = {{email: '', password: ''}}
                onSubmit = {(values) => {
                    console.log(values);
                }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <View style = {styles.styledFormArea}>
                            <MyTextInput
                                label = " "
                                icon = "mail"
                                placeholder = "email@email.com"
                                placeholderTextColor = {theme.colors.black}
                                onChangeText = {handleChange('email')}
                                onBlur = {handleBlur('email')}
                                value = {values.email}
                                keyboardType = "email-address"
                            />

                            <MyTextInput
                                label = " "
                                icon = "lock"
                                placeholder = "password"
                                placeholderTextColor = {theme.colors.black}
                                onChangeText = {handleChange('password')}
                                onBlur = {handleBlur('password')}
                                value = {values.password}
                                secureTextEntry = {true}
                            />

                            <Text style = {styles.msgBox}>...</Text>

                            <TouchableOpacity onPress = {handleSubmit} style = {styles.loginButton}>
                                <Text style = {styles.loginButtonText}>Login</Text>
                            </TouchableOpacity>

                            <Separator />

                            <TouchableOpacity onPress = {handleSubmit} style = {styles.googleSigninButton}>
                                <Fontisto name = "google" color = {theme.colors.white} size = {25} ></Fontisto>
                                <Text style = {styles.googleSigninButtonText}>Sign in with Google</Text>
                            </TouchableOpacity>

                            <View style = {styles.signupLinkView}>
                                <Text style = {styles.signupText}>Don't have an account? </Text>
                                <TouchableOpacity style = {styles.signupLinkButton}>
                                    <Text style = {styles.signupLinkText}>Sign up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </KeyBoardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, ...props}) => {
    return (
        <View>
            <View style = {styles.leftIcon}>
                <Octicons name = {icon} size = {30} color = {theme.colors.primary} />
            </View>
            <Text style = {styles.styledTextInput}>{label}</Text>
            <TextInput style = {styles.textInput} {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    StyledContainer: {
        flex: 1,
        padding: theme.spacing.m,
        paddingTop: theme.spacing.l,
        backgroundColor: theme.colors.white,
        marginTop: 40,
    },
    InnerContainer: {
        justifyContent: 'center',
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
    styledFormArea: {
        justifyContent: 'center',
        marginHorizontal: theme.spacing.l,
        borderRadius: theme.borderRadius.m,
        marginTop: 40,
    },
    leftIcon: {
        position: 'absolute',
        zIndex: 1,
        marginTop: 28,
        marginLeft: 12,
    },
    styledTextInput: {
        ...theme.textVariants.body3,
    },
    textInput: {
        backgroundColor: theme.colors.gray,
        paddingVertical: 10,
        paddingLeft: 50,
        paddingRight: theme.spacing.l,
        borderRadius: theme.borderRadius.m,
    },
    loginButton: {
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 8,
        borderRadius: theme.borderRadius.m,
    },
    loginButtonText: {
        ...theme.textVariants.body2,
        color: theme.colors.white,
    },
    msgBox: {
        ...theme.textVariants.body3,
        alignSelf: 'center',
    },
    googleSigninButton: {
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        paddingVertical: 8,
        borderRadius: theme.borderRadius.m,
    },
    googleSigninButtonText: {
        ...theme.textVariants.body2,
        color: theme.colors.white,
        paddingLeft: 25,
    },
    signupLinkView: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing.sm,
    },
    signupText: {
        ...theme.textVariants.body3,
    },
    signupLinkButton: {

    },
    signupLinkText: {
        ...theme.textVariants.body3,
        opacity: 0.6,
    },
})

export default Login;