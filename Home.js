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
  View,
  Text,
  Image,
} from 'react-native';


function scanAndConnect(manager) {
    manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
            return
        }
  
        if (device.name === 'TI BLE Sensor Tag' || 
            device.name === 'SensorTag') {
            
            manager.stopDeviceScan();
        }
    });
  }

const Home: () => React$Node = () => {
    const manager = new BleManager();
    scanAndConnect(manager);
    return (
      <View style={styles.view}>
        <View style={styles.header}>
          <Image source={Logo}></Image>
        </View>
        <View style={styles.checkupDiario}>
          <Text> 
            Fazer check up diário
          </Text>
        </View>
        <View>
          <Text>
            Notificações
          </Text>
        </View>
        <View>
          <Text>
            Minha Família
          </Text>
        </View>
        <View>
          <Text>
            Tempo de Rastreio
          </Text>
        </View>
        <View>
          <Text>Início</Text>
          <Text>Mapa</Text>
          <Text>Alertas</Text>
          <Text>Agente Virtual</Text>
        </View>
       
      </View>
    );
  };

  export default Home;