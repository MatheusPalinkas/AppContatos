import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Contato from '../Contato';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    nome: 'Maria',
    numero: 465464654,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    nome: 'pai',
    numero: 465464654,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    nome: 'Mariana',
    numero: 465464654,
  },
];
const ListaContatos = () => {
  return (
    <View style={styles.listasContatos}>
      <Text style={styles.labelTotal}>Total: {DATA.length}</Text>
      <FlatList
        style={styles.lista}
        data={DATA}
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
