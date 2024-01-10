import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    label: string;
    onPress: () => void;
    disabled?: boolean;
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'red',
        height: 50,
        width: '50%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
    labelText: {
        fontSize: 16,
        color: 'white',
    },
    disabled: {
        backgroundColor: 'gray',
    },
});

export const Button = ({ label, onPress, disabled }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.root, disabled && styles.disabled]} disabled={disabled}>
            <Text style={styles.labelText}>{label}</Text>  
        </TouchableOpacity>
    );
}