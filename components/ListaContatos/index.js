import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Contato from '../Contato';

const ListaContatos = ({contatos}) => {
  return (
    <View style={styles.listasContatos}>
      <Text style={styles.labelTotal}>Total: {contatos.length}</Text>
      <FlatList
        style={styles.lista}
        data={contatos}
        renderItem={({item}) => <Contato contato={item} />}
        keyExtractor={(contato) => contato.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listasContatos: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  labelTotal: {
    color: '#333',
    fontSize: 18,
  },
  lista: {
    marginTop: 20,
  },
});

export default ListaContatos;
