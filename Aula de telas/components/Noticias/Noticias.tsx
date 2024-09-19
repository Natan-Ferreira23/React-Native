import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Noticias: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonte}>Tela de Notícias</Text>
      <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonte: {
    fontSize: 62,
    color: 'white',
  },
});

export default Noticias;
