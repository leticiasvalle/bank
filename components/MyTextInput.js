import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';

const MyTextInput = ({texto, color, onChangeText, value}) => {

    return (
        <TextInput style={styles.textInput}
                   label={texto}
                   value={value}
                   onChangeText={onChangeText}
                   mode="outlined"
                   theme={{colors: {primary: colors.borderColor}}}>
        </TextInput>
    )
}

export default MyTextInput;

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.white,
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 5,
        padding: 8,
        margin: 12,
        width: 320,
        height: 40,
    },
})