import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'https://find-this-in-project-client-keys-section.ingest.sentry.io/some-number',
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

export default function App() {
  return (
    <View style={styles.container}>
      <Button onPress={() => { Sentry.Native.captureException(new Error('test error')); }} title="Send a test error" />
      <Button onPress={() => { Sentry.Native.captureMessage(new Error('test message')); }} title="Send a test message" />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
