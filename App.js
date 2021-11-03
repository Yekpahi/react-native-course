/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text style ={styles.text}> Votre nom est {name} </Text>
      <TextInput
       style={styles.input}
       placeholder="useless placeholder"
       editable = {true}
       maxLength={5}
       onChangeText = {(value) => setName(value)}
       secureTextEntry
       />
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
    borderRadius:30,
    paddingLeft:30,
    textAlign:'center',
  },
  text : {
    fontSize: 20,
    margin: 10,
    position:'relative',
    top: 15,
    left:'30%',

  },
});

export default App;
