/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { BleManager } from 'react-native-ble-plx';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function scanAndConnect(manager) {
  manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
          // Handle error (scanning will be stopped automatically)
          return
      }

      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      if (device.name === 'TI BLE Sensor Tag' || 
          device.name === 'SensorTag') {
          
          // Stop scanning as it's not necessary if you are scanning for one device.
          manager.stopDeviceScan();

          // Proceed with connection.
      }
  });
}

const App: () => React$Node = () => {
  const manager = new BleManager();
  scanAndConnect(manager);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
        <Button
            title="ENTRAR"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
        <Button
        title="REGISTRAR"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  
  view: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  scrollView: {
    flexDirection: "row",
    height: "100%"
  }
});

export default App;
