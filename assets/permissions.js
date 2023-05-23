import React from 'react';
import {
  PermissionsAndroid,
} from 'react-native';


const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Teste de Permissão de Câmera',
          message:
            'Desejo obter a permissão da sua câmera' +
            'para princípios de teste.',
          buttonNeutral: 'Perguntar Depois',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Aceitar',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Agora pode usar a câmera');
      } else {
        console.log('Acesso a câmera negado!!');
      }
    } catch (err) {
      console.warn(err);
    }
  };

export default requestCameraPermission;
