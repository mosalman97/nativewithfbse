import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import auth from '@react-native-firebase/auth';

export default function PhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verifyOtp, setVerifyOtp] = useState('');

  // should send phonenumber with countrycode
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log(confirmation, '++');
  }

  // confirm otp function
  const confirmCode = async code => {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        'AL3R4eRgt5poN6EG39IYbFQHEA_cCljGsmJx4D45HOUlCe4EPPBPOx5eVkzLmn-pu_-gd-4fr9tw8sIiDUIzg17L0bptZ7CqNqhsqMxb0XrhWgP8sTBpsqJ-MdlvHUoqJFOG2Uolt8qSnB4mJIDecdjuQP0kDITbuCuWRdmYx-GHeUjPHBq3d5tiKYKUMKL-ebbFnUbrh4aiDKQ7d-4qZgDrKUiG3Q5kpQb21WYMUuUgbSqvw2EwVrg',
        code,
      );
      await auth().signInWithCredential(credential);
      console.log('user oke');
    } catch (error) {
      console.log(error, '++');
    }
    console.log(code);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          onChangeText={text => setPhoneNumber(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          signInWithPhoneNumber(phoneNumber);
        }}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Verify otp"
          keyboardType="phone-pad"
          onChangeText={text => setVerifyOtp(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          confirmCode(verifyOtp);
        }}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
