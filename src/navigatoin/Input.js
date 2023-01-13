import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
const Input = ({
  title,
  title2,
  onchange = () => {},
  value,
  secureTextEntry,
  error,
}) => {
  return (
    <View>
      <View style={styles.input}>
        <TextInput
          value={value}
          secureTextEntry={secureTextEntry}
          placeholder={title}
          placeholderTextColor={title2}
          onChangeText={e => onchange(e)}
        />
        <Text
          style={{
            textAlign: 'right',
            marginRight: 20,
            color: 'red',
            fontWeight: 'bold',
          }}>
          {error}
        </Text>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    width: '90%',
    borderWidth: 2,
    borderColor:'red',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
