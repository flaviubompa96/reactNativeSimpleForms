import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Switch } from 'react-native';
import { validateInput } from '../../utils/validateInput';

type Props = {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (value: string) => void;
    type: 'emailAddress' | 'password' | 'URL' | 'path' | 'port' | 'none';
    useSsl?: boolean;
    setUseSSL?: (value: boolean) => void;
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        width: '100%',
    },
    error: {
        display: 'flex',
        alignSelf: 'flex-end',
        paddingRight: 16
    },
    port: {
        width: '40%',
        marginRight: 10
    }
}); 

export const TextInputComponent = ({ label, placeholder, value, onChangeText, type, useSsl, setUseSSL }: Props) => {
  const [error, setError] = useState('');

  const handleTextChange = (text: string) => {
    onChangeText(text); // Update the text
    validateInput(text, type, setError); // Validate the input
  };


  return (
    <>
        <View style={styles.root}>
            <Text>{label}</Text>
            <View style={{flexDirection: 'row', width: '60%'}}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={handleTextChange}
                    secureTextEntry={type === 'password'} 
                    style={[styles.input, type === 'port' && styles.port]}
                />
                {type === 'port' ? (
                    <View style={[{flexDirection: 'row' ,justifyContent: 'center', alignContent: 'center', alignItems: 'center'}]}>    
                        <Switch
                        value={useSsl}
                        onValueChange={(newValue) => setUseSSL && setUseSSL(newValue)}
                        />
                        <Text>Use SSL</Text>
                    </View>
                    ) : null}
            </View>
        </View>
        <View style={styles.error}>
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        </View>
    </>
  );
};

export default TextInputComponent;
