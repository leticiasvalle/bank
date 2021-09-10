import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

const MyButton = ({texto, onPress, color}) => {
    return (
        <Button 
            style={[styles.button, {backgroundColor: color}]}
            mode="contained"
            onPress={onPress}>
            <Text>{texto}</Text>
        </Button>
    )
}

export default MyButton;

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 15,
        padding: 8,
        width: 170,
        height: 35,
    },
})