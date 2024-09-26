import { StatusBar } from 'expo-status-bar';
import { Button,Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator();

function HomeScreen({navigation}){
return(
  <View style={{
    flex:1, 
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center',    
    borderColor:'black',
    width:'100%',
    height:'100%',
    gap:20,
    }}>
        <Image
        style={{
          width:230,
          height:260,        
          borderRadius:100,          
        }}
        source={require('./Images/Javali.jpg')}></Image>
        <Text style={{
           fontSize:28,
           textAlign:'center',
           color:'white'
        }}>Natan Ferreira dos Santos</Text>
        <TouchableOpacity style={{
          width:200,
          height:40,
          borderRadius:5,
          backgroundColor:'blue',         
        }} onPress={()=>navigation.navigate("Linkedin")}>
               <Text style={{
                  fontSize:28,
                  textAlign:'center',
                  color:'white'
               }}>Linkedin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width:200,
          height:40,
          borderRadius:5,
          backgroundColor:'blue',         
        }} onPress={()=>navigation.navigate("GitHub")}>
               <Text style={{
                  fontSize:28,
                  textAlign:'center',
                  color:'white'
               }}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width:200,
          height:40,
          borderRadius:5,
          backgroundColor:'blue',         
        }} onPress={()=>navigation.navigate("Email")}>
               <Text style={{
                  fontSize:28,
                  textAlign:'center',
                  color:'white'
               }}>E-MAIL</Text>
        </TouchableOpacity>
      
  </View>
);
};
function PaginaLinkedin({navigation}){
  return(
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'100%',
      backgroundColor:'blue',
      gap:10,
    }}>
        <Text style={{color:'white', fontSize:62}}> Linkedin </Text>
        <TouchableOpacity style={{
          width:300,
          height:70,
          borderRadius:5,
          backgroundColor:'white',         
        }}> 
            <Text style={{
                  fontSize:28,
                  textAlign:'center',
                  color:'black',
               }}>Ir para o Linkedin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
          width:180,
          height:50,
          borderRadius:5,
          backgroundColor:'green',         
        }}> 
            <Text style={{
                  fontSize:28,
                  textAlign:'center',
                  color:'black',
               }} onPress={()=>navigation.navigate('Home')}>Home</Text>
          </TouchableOpacity>
    </View>
  );
}

function PaginaGitHub({navigation}){
  return(
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'100%',
      backgroundColor:'black',
    }}>
        <Text style={{color:'white', fontSize:62}}> GitHub</Text>
    </View>
  );
}
function PaginaEmail({navigation}){
  return(
     <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'100%',
      backgroundColor:'green',
     }}>
       <Text style={{color:'white', fontSize:62}}>E-mail</Text>
     </View>
  );
}
function App(){
return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Linkedin' component={PaginaLinkedin}/>
        <Stack.Screen name='GitHub' component={PaginaGitHub}/>
        <Stack.Screen name='Email' component={PaginaEmail}/>
      </Stack.Navigator>
    </NavigationContainer>
  
);
}
export default App;