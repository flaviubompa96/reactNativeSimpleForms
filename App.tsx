import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  View,
  Text,
  Switch
} from 'react-native';

import { TextInputComponent } from './src/components/TextInput/TextInput';
import { Button } from './src/components/Button/Button';
import { DropdownPicker } from './src/components/DropdownPicker/DropdownPicker';
import { validateForm } from './src/utils/validateForm';

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row'
  },
  flex: {
    display: 'flex',
    flex: 1,
  }
});

export const App = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Manual', value: 'manual' },
    { label: 'Advanced', value: 'advanced' }
  ]);
  const [dropdownValue, setDropdownValue] = useState('manual');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [serverPath, setServerPath] = useState('');
  const [port, setPort] = useState('');
  const [useSSL, setUseSSL] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = () => {
    if (dropdownValue === 'advanced') {
      // Show alert with all values for Advanced
      Alert.alert('Form Data', `Email: ${email}\nPassword: ${password}\nURL: ${url}\nServer Path: ${serverPath}\nPort: ${port}\nUse SSL: ${useSSL ? 'Yes' : 'No'}`);
    } else {
      // Show alert with selected values for Manual
      Alert.alert('Form Data', `Email: ${email}\nPassword: ${password}\nURL: ${url}`);
    }
  };

  useEffect(() => {
    setIsFormValid(validateForm(email, password, url, dropdownValue, serverPath, port));
  }, [email, password, url, dropdownValue, serverPath, port]);

  return (
    <SafeAreaView style={styles.root}>
      <DropdownPicker
        open={open}
        value={dropdownValue}
        items={items}
        setOpen={setOpen}
        setValue={setDropdownValue}
        setItems={setItems}
      />
      <TextInputComponent label='User Name:' value={email} onChangeText={setEmail} type='emailAddress' placeholder='name@email.com' />
      <TextInputComponent label='Password:' value={password} onChangeText={setPassword} type='password' placeholder='Required' />
      <TextInputComponent label='Server Address:' value={url} onChangeText={setUrl} type='URL' placeholder='example.com' />

      {dropdownValue === 'advanced' ? (<>
        <TextInputComponent label='Server Path:' value={serverPath} onChangeText={setServerPath} type='path' placeholder='calendar/users/' />
          <TextInputComponent
            label='Port:'
            value={port}
            onChangeText={setPort}
            type='port'
            placeholder=''
            useSsl={useSSL}
            setUseSSL={setUseSSL}
          />
      </>) : null}
      
      <Button label='Submit' onPress={handleSubmit} disabled={!isFormValid} />
    </SafeAreaView>
  );
}


