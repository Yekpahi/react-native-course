/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput, Pressable} from 'react-native';

const App = () => {
  const [name, SetName] = useState('');
  const [name2, SetName2] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const [submitted2, SetSubmitted2] = useState(false);
  const onpr = () => {
    SetSubmitted(!submitted);
  };

  const onpro = () => {
    SetSubmitted2(!submitted2);
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


      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={value => SetName2(value)}
      />
      <Pressable
          onPress={onpro}
          hitSlop={{ top: 10, bottom: 10, right: 30, left: 10 }}
          android_ripple={{color:'#00f'}}
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
            styles.button,
          ]}>
              <Text style={styles.text}>
          {submitted2 ? 'Clear' : 'Submit'}
        </Text>
          </Pressable>
          {submitted2 ?
        <Text style={styles.text}>
          You are registered as {name2}
        </Text>
        :
        null
      }
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
