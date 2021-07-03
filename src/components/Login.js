import React from 'react';
import { StyleSheet, View, Text, Image, Pressable, TextInput } from 'react-native';
import theme from '../../assets/themes';
import { Formik } from 'formik';
import { Octicons } from '@expo/vector-icons';

const Login = ({navigation}) => {
    return (
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
                    </View>
                )}
            </Formik>
        </View>
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
    },
    InnerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    PageLogo: {
        width: 100,
        height: 100,
        marginTop: 100,
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
        marginTop: 26,
    },
    leftIcon: {
        position: 'absolute',
        left: '12px',
        top: '22px',
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
})

export default Login;