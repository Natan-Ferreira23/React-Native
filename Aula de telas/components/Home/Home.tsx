import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonte}>Tela Inicial</Text>
      <Button
        title="Ir para Notícias"
        onPress={() => navigation.navigate('Noticias')}
      />
      <Button
        title="Ir para Usuários"
        onPress={() => navigation.navigate('Usuarios')}
      />
       <Button
     
        title="Ir para Cursos"
        onPress={() => navigation.navigate('Cursos')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',   
    justifyContent:'center'
  },
  fonte: {
    fontSize: 62,
    color: 'white',
  },
  botao:{
    margin:5
  }
});

export default HomeScreen;
