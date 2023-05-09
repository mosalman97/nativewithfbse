import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

// components
import Login from './src/components/screens/Login';
import Signup from './src/components/screens/Signup';
import PhoneNumber from './src/components/screens/PhoneNumber';
import PushNotification from './src/components/screens/PushNotification';

function App() {
  return (
    <SafeAreaView>
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <PhoneNumber /> */}
      <PushNotification />
    </SafeAreaView>
  );
}

export default App;
