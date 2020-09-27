import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Contato = ({contato}) => {
  return (
    <View style={styles.contato}>
      <Text style={styles.labelNome}>{contato.nome}</Text>
      <Text style={styles.labelNumero}>{contato.numero}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contato: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#666',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  labelNome: {
    color: '#333',
    fontSize: 16,
  },
  labelNumero: {},
});

export default Contato;
