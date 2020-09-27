/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ListaContatos from './components/ListaContatos';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.campoPesquisa}>
          <Text style={styles.label}>Pesquisar contato</Text>
          <TextInput style={styles.input}></TextInput>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pesquisar</Text>
          </TouchableOpacity>
        </View>
        <ListaContatos />
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
