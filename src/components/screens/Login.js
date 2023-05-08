import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

// packages
import {InputItem, List} from '@ant-design/react-native';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginAccount = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('user signed');
      })
      .catch(error => {
        // if (error.code === 'auth/email-already-in-use') {
        //   console.log();
        // }
        // if (error.code === 'auth/invalid-email') {
        //   console.log('That email address is invalid!');
        // }
        console.log(error);
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
        title="Login"
        onPress={() => {
          loginAccount(email, password);
        }}
      />
    </View>
  );
};

export default Login;
