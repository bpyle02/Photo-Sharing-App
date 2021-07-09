import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import theme from '../../assets/themes';
import { Formik } from 'formik';
import { Octicons } from '@expo/vector-icons';
import Separator from './Separator';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';
import firebase from 'firebase';

const SignUp = ({navigation}) => {
    return (
        <KeyboardAvoidingWrapper>
            <View>
                
                <View style = {styles.StyledContainer}>
                    <View style = {styles.InnerContainer}>
                        <Image style = {styles.PageLogo} resizeMode = "cover" source = {require('./../../assets/images/logo.png')} />
                        <Text style = {styles.PageTitle}>Shutter</Text>
                        <Text style = {styles.TagLine}>Social Media for Photographers</Text>
                    </View>
                </View>

                <Formik
                initialValues = {{fullName: '', email: '', username: '', password: '', confirmPassword: ''}}
                onSubmit = {(values) => {
                    firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
                    .then((result) => {
                        firebase.firestore().collection("users")
                            .doc(firebase.auth().currentUser.uid)
                            .set({
                                fullName: values.fullName,
                                email: values.email,
                                username: values.username,
                                password: values.password,
                            })
                        navigation.navigate('Signup Options')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <View style = {styles.styledFormArea}>
                            <MyTextInput
                                label = "Name"
                                icon = "person"
                                placeholder = "John Doe"
                                placeholderTextColor = {theme.colors.black}
                                onChangeText = {handleChange('fullName')}
                                onBlur = {handleBlur('fullName')}
                                value = {values.fullName}
                            />

                            <MyTextInput
                                label = "Email"
                                icon = "mail"
                                placeholder = "email@email.com"
                                placeholderTextColor = {theme.colors.black}
                                onChangeText = {handleChange('email')}
                                onBlur = {handleBlur('email')}
                                value = {values.email}
                                keyboardType = "email-address"
                            />


                            <MyTextInput
                                label = "Username"
                                icon = "person"
                                placeholder = "username"
                                placeholderTextColor = {theme.colors.black}
                                onChangeText = {handleChange('username')}
                                onBlur = {handleBlur('username')}
                                value = {values.username}
                            />

                            <MyTextInput
                                label = "Password"
                                icon = "lock"
                                placeholder = "password"
                                placeholderTextColor = {theme.colors.black}
                                onChangeText = {handleChange('password')}
                                onBlur = {handleBlur('password')}
                                value = {values.password}
                                secureTextEntry = {true}
                            />

                            <MyTextInput
                                label = "Confirm Password"
                                icon = "lock"
                                placeholder = "retype password"
                                placeholderTextColor = {theme.colors.black}
                                onChangeText = {handleChange('confirmPassword')}
                                onBlur = {handleBlur('confirmPassword')}
                                value = {values.confirmPassword}
                                secureTextEntry = {true}
                            />

                            <Text style = {styles.msgBox}>...</Text>

                            <TouchableOpacity onPress = {handleSubmit} style = {styles.loginButton}>
                                <Text style = {styles.loginButtonText}>Sign Up</Text>
                            </TouchableOpacity>

                            <Separator />

                            <View style = {styles.signupLinkView}>
                                <Text style = {styles.signupText}>Already have an account? </Text>
                                <TouchableOpacity style = {styles.signupLinkButton}>
                                    <Text onPress = {() => navigation.navigate('Login')} style = {styles.signupLinkText}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </KeyboardAvoidingWrapper>
    );
};

const onSignUp = ({values}) => {
    console.log(values);
}

const MyTextInput = ({label, icon, ...props}) => {
    return (
        <View style = {styles.inputFieldView}>
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
        marginTop: 80,
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
    inputFieldView: {
        marginTop: 12,
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

export default SignUp;