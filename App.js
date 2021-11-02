import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, Linking} from 'react-native';

const App = () => {
  const [name, setName] = useState("Alice")
    const [bol, setBol] = useState(false)
 const onClickHandler = () => {
   setName('Abu Ben Riu')
   setBol(true)
 }
  return (
   <View style = {styles.body}>
  <View style = {styles.v1}>
   <Text>1</Text>
   </View>
   <View style = {styles.v2}>
    <Text>2</Text>
   </View>
   <View style = {styles.v3}>
   <Text>3</Text>
   </View>
   </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection : 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#f9c2ff',
  },

  v1: {
    flex: 1,
    height: 50,
    
    width:50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  v2: {
    flex: 1,
    height: 50,
    width:50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  v3: {
    flex: 1,
    height: 50,
    width:50,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default App;
