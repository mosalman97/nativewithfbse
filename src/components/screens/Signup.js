import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

// packages
import {InputItem, List} from '@ant-design/react-native';
import auth from '@react-native-firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
      });
  };

  return (
    <View style={{padding: 16}}>
      <List>
        <InputItem
          placeholder="Email"
          value={email}
          onChange={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <InputItem
          placeholder="Password"
          value={password}
          onChange={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
      </List>
      <Button
        title="Signup"
        onPress={() => {
          createAccount(email, password);
        }}
      />
    </View>
  );
};

export default Signup;
