import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import theme from '../../assets/themes';

const Messages = () => {
    return (
        <View style = {styles.title}>
            <Text style = {styles.titleText}>MESSAGES PAGE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginVertical: 380,
        alignItems: 'center'
    },
    titleText: {
        ...theme.textVariants.h1,
        color: theme.colors.black,
    }
})

export default Messages;