/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput, Alert} from 'react-native';

const App = () => {
  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onpr = () => {
    if (name.length> 3) {
      SetSubmitted(!submitted);
    } else {
      Alert.alert (
        'warnin',
        'The name must be longer than 3 characters', [
           {
          text: 'Do not show again',
           onPress: () => Alert.alert('Do not show Pressed!') 
        },
        {
          text: 'Cancel',
           onPress: () => Alert.alert('Cancel pressed!')
        },
        {
           text: 'OK',
          onPress: () => Alert.alert('ok pressed!')
        },
        ],
        {
      cancelable: true,
     
    }
      )
    }
    
  };


  return (
    <View style={styles.body}>
      {submitted ? (
        <Text style={styles.text}> Votre nom est {name} </Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={value => SetName(value)}
      />
      <View style={styles.button}>
        <Button title={submitted ? 'Clear' : 'Submit'} onPress={onpr} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    paddingLeft: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    margin: 10,
    position: 'relative',
    top: 15,
    left: '30%',
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});

export default App;
