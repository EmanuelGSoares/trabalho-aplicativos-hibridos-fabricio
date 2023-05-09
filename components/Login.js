import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from '../assets/styles/style';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
    // Aqui você pode adicionar sua lógica de autenticação
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text_login}> Login </Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Pressable
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.text}> Entrar </Text>
      </Pressable>
    </View>
  );
};

export default Login;