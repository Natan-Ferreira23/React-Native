import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Cursos: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonte}>Tela de Cursos</Text>
      <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonte: {
    fontSize: 62,
    color: 'white',
  },
});

export default Cursos;
