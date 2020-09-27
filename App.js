/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ListaContatos from './components/ListaContatos';
import PermissionsHelper from './helpers/PermissionsHelper';
import Contacts from 'react-native-contacts';

const App = () => {
  const [filtro, setFiltro] = useState('');
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    PermissionsHelper.PedirPermicaoContatos(carregarContatos);
  }, [carregarContatos]);

  const carregarContatos = (filterName = '') => {
    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        console.warn('Acesso aos contatos negado');
      } else {
        const contatosAux = contacts.map((contato) => {
          return {
            nome: contato.givenName,
            numero: contato.phoneNumbers
              .map((phoneNumbers) => phoneNumbers.number)
              .join(', '),
          };
        });
        if (!filterName) setContatos(contatosAux);
        else {
          console.log(contatosAux[0].nome);
          setContatos(
            contatosAux.filter((contato) =>
              contato.nome.toLowerCase().includes(filterName.toLowerCase()),
            ),
          );
        }
      }
    });
  };

  const filtrar = (e) => {
    e.preventDefault();
    carregarContatos(filtro);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.campoPesquisa}>
          <Text style={styles.label}>Pesquisar contato</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFiltro(text)}
            value={filtro}
          />
          <TouchableOpacity style={styles.button} onPress={filtrar}>
            <Text style={styles.buttonText}>Pesquisar</Text>
          </TouchableOpacity>
        </View>
        <ListaContatos contatos={contatos} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  campoPesquisa: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    borderBottomColor: '#333',
    borderBottomWidth: 2,
  },
  label: {
    fontSize: 16,
    color: '#222',
  },
  input: {
    fontSize: 16,
    color: '#222',
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#2980b9',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
