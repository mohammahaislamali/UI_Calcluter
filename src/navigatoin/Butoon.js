import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Butoon = ({btn,onp,style}) => {
  
  return (
    <View>
      <TouchableOpacity onPress={onp} style={[styles.TouchableOpacity,style]}   >
        <Text style={styles.submit}>{btn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Butoon;

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: 'red',
    height: 50,
    width: 100,
    borderRadius: 20,
    alignSelf: 'center',
    
  },
  submit: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    
  },
});
