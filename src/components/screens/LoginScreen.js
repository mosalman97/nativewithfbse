import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {InputItem, List} from '@ant-design/react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
