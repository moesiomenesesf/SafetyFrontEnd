/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { BleManager } from 'react-native-ble-plx';
import Logo from './assets/img/logo_short.png';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';

const App: () => React$Node = () => {
  const manager = new BleManager();
  scanAndConnect(manager);
  return (
      <View style={styles.view}>
        <Image source={Logo}></Image>
        <Text>
          Entrar como
        </Text>
        <View style="width: 100%">
          <Button
              title="Usuário"
              color="#2F80ED"
              accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View>
        <Button
          title="Agente de Saúde"
          color="#2F80ED"
          accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
      
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkupDiario: {
    backgroundColor: "#2F80ED",
    
  },
  
  view: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    backgroundColor: "#E4E9F3"
    
  },
});


export default App;
