import React from 'react';
import { SafeAreaView, Pressable, Text } from 'react-native';
import Login from './components/Login';
import styles from './assets/styles/style';
import requestCameraPermission from './assets/permissions';

const App = () => {
  return (
    <SafeAreaView>
      <Login />
      <Text style={styles.item}>Teste de Permissão</Text>
      <Pressable  style={styles.button} onPress={requestCameraPermission}>
        <Text style={styles.text}> Permissão da Câmera </Text>
      </Pressable>

    </SafeAreaView>
  );
};



export default App;