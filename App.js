import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import Inicio from './src/pages/inicio';
import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';
import Home from './src/pages/home';
import Produto from './src/pages/produto';
import Carrinho from './src/pages/carrinho';

const Stack = createStackNavigator();

  
  export default function App() {
    return(
    <NavigationContainer>
    
   
   <StatusBar style="light" backgroundColor="#000"></StatusBar>
   <Stack.Navigator initialRouteName="Inicio" screenOptions={{headerShown:false}}>
     <Stack.Screen name="Inicio" component={Inicio}/>
     <Stack.Screen name="Login" component={Login}/>
     <Stack.Screen name="Cadastro" component={Cadastro}/>
     <Stack.Screen name="Home" component={Home}/>
     <Stack.Screen name="Produto" component={Produto}/>
     <Stack.Screen name="Carrinho" component={Carrinho}/>
   </Stack.Navigator>

  
    </NavigationContainer>
    
    )
}
