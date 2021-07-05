import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import theme from '../../assets/themes';
import { Formik } from 'formik';
import { Octicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const SignupOptions = () => {

    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));

    const [dob, setdob] = useState();
    const onChange = (event, selectedDate) => {
        const surrentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setdob(currentDate);
    }
    const showDatePicker = () => {
        setShow(true);
    }

    return (
        <View>
            <View style = {styles.StyledContainer}>
                <View style = {styles.InnerContainer}>
                    <Image style = {styles.PageLogo} resizeMode = "cover" source = {require('./../../assets/images/logo.png')} />
                    <Text style = {styles.PageTitle}>Shutter</Text>
                    <Text style = {styles.TagLine}>Social Media for Photographers</Text>

                    {show && (
                        <DateTimePicker
                            testID = "dateTimePicker"
                            value = {date}
                            mode = 'date'
                            is24Hour = {true}
                            displays = "default"
                            onChange = {onChange}
                        />
                    )}
                </View>
            </View>

            <Formik
            initialValues = {{phone: '', DOB: ''}}
            onSubmit = {(values) => {
                console.log(values);
            }}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <View style = {styles.styledFormArea}>
                        <MyTextInput
                            label = "Optional: Phone Number"
                            icon = "calendar"
                            placeholder = "###-###-####"
                            placeholderTextColor = {theme.colors.black}
                            onChangeText = {handleChange('phone')}
                            onBlur = {handleBlur('phone')}
                            value = {values.phone}
                            keyboardType = "phone-pad"
                        />

                        <MyTextInput
                            label = "Optional: Date of Birth"
                            icon = "calendar"
                            placeholder = "YYYY-MM-DD"
                            placeholderTextColor = {theme.colors.black}
                            onChangeText = {handleChange('DOB')}
                            onBlur = {handleBlur('DOB')}
                            value = {dob ? dob.toDateString() : ''}
                            isDate = {true}
                            editable = {false}
                            showDatePicker = {showDatePicker}
                        />

                        <Text style = {styles.msgBox}>...</Text>

                        <TouchableOpacity onPress = {handleSubmit} style = {styles.loginButton}>
                            <Text style = {styles.loginButtonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
};

const MyTextInput = ({label, icon, isDate, showDatePicker, ...props}) => {
    return (
        <View style = {styles.inputFieldView}>
            <View style = {styles.leftIcon}>
                <Octicons name = {icon} size = {30} color = {theme.colors.primary} />
            </View>
            <Text style = {styles.styledTextInput}>{label}</Text>
            {!isDate && <TextInput style = {styles.textInput} {...props} />}
            {isDate && <TouchableOpacity onPress = {showDatePicker}>
                    <TextInput style = {styles.textInput} {...props} />
                </TouchableOpacity>}
        </View>
    )
};

const styles = StyleSheet.create({
    StyledContainer: {
        flex: 1,
        padding: theme.spacing.m,
        paddingTop: theme.spacing.l,
        backgroundColor: theme.colors.white,
        marginTop: 100,
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
        marginTop: 120,
    },
    inputFieldView: {
        marginTop: 12,
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
});

export default SignupOptions;