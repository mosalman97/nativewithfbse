import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Login from './src/components/screens/Login';
import Signup from './src/components/screens/Signup';

function App() {
  return (
    <SafeAreaView>
      {/* <Signup /> */}
      <Login />
    </SafeAreaView>
  );
}

export default App;
