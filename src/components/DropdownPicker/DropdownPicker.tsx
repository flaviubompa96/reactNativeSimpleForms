import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

type Props = {
    open: boolean;
    value: string;
    items: {label: string, value: string}[],
    setOpen: any;
    setValue: any;
    setItems: any;
}
export const DropdownPicker = ({ open, value, items, setOpen, setValue, setItems }: Props) => {
const styles = StyleSheet.create({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      zIndex: 1,

    },
    dropdown: {
        width: '60%',
    }
    });
  return (
    <View style={styles.root}>
      <Text>Account Type:</Text>
      <View style={styles.dropdown}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
    </View>
    
  );
};

