import React, { Component } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Capa from './../../img/logo-original.png';
import Styles from "./style.js";

class Inicio extends Component {
    Login = () => {
        this.props.navigation.navigate('Login')
    }

    Cadastro = () => {
        this.props.navigation.navigate('Cadastro')
    }
    
    render() {
        
        
        return (
            <View style={Styles.container}>
                <Image source={Capa} style={Styles.image} />
                <Text style={Styles.txtConstru}>Seja Bem-Vindo!</Text>
                
                <TouchableOpacity style={Styles.btnInicioContainer}  onPress={this.Login}>
                    <Text style={Styles.txtButton}>Logar</Text>
                </TouchableOpacity>

                <Text style={{margin:5, color:"#000"}}>ou</Text>

                <TouchableOpacity style={Styles.btnCadastrese} onPress={this.Cadastro}>
                    <Text style={Styles.txtButton}>Cadastre-se</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default Inicio;
