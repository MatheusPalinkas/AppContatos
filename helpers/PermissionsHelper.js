import {PermissionsAndroid} from 'react-native';

export default class PermissionsHelper {
  static PedirPermicaoContatos(callback) {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contatos',
        message:
          'Para usar esse aplicativo é preciso liberar o acesso a sua lista de contatos.',
        buttonPositive: 'Liberar acesso',
      }).then(() => {
        callback();
      });
    } else {
      callback();
    }
  }
}
