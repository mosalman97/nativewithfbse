import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

// components
import Login from './src/components/screens/Login';
import Signup from './src/components/screens/Signup';
import PhoneNumber from './src/components/screens/PhoneNumber';

function App() {
  return (
    <SafeAreaView>
      {/* <Signup /> */}
      {/* <Login /> */}
      <PhoneNumber />
    </SafeAreaView>
  );
}

export default App;
