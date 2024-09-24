import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack= createStackNavigator();
//Tela Home principal
function HomeScreen({navigation}){
   return (
      <View style={{
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
      }}>
         <Text style={{color:'yellow'}}>
            Home Principal
         </Text>
         <Button title="Ir para Home secundária" onPress={()=>navigation.navigate('HomeSecundaria')}/>

         
      </View>
   );
}
//Tela segundária
function HomeSecundaria({navigation}){
  return (
     <View style={{
       flex:1,
       backgroundColor:'red',
       justifyContent:'center',
       alignItems:'center',
     }}>
        <Text style={{color:'white'}}>
           Home secundario
        </Text>
        <Button title="Voltar para home principal" onPress={()=>navigation.navigate('Home')}/>


     </View>
  );
}



//Configurar as rotas no Stack Navigator 

function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
           <Stack.Screen name="Home" component={HomeScreen}/>
           <Stack.Screen name="HomeSecundaria" component={HomeSecundaria} />
        </Stack.Navigator>
      </NavigationContainer>
     );
}
export default App;