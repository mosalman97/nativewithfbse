import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

import notifee from '@notifee/react-native';

async function onDisplayNotification() {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    title: 'Mosalman',
    body: '',
    ios: {
      // iOS resource (.wav, aiff, .caf)
      sound: 'local.wav',
    },
    android: {
      channelId,
      smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });
}

const PushNotification = () => {
  return (
    <View styles={{flex: 1}}>
      <Button
        title="Display Notification"
        onPress={() => {
          onDisplayNotification();
        }}
      />
    </View>
  );
};

export default PushNotification;

const styles = StyleSheet.create({});
