import * as React from 'react';
import NotificationsUtils from 'react-native-notifications-utils';
import {
  checkNotifications,
  requestNotifications,
} from 'react-native-permissions';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const onPress = async () => {
    const { status } = await checkNotifications();
    if (status !== 'granted') {
      await requestNotifications(['alert', 'sound']);
    }
    NotificationsUtils.openSettings({ channelId: 'default' });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Open App Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
