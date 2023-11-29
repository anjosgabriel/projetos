import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
//import firebase from "../../config/firebase"; 
import styles from "./style";
import logo from "./../../img/logo-original.png"


class Login extends Component{
    state = {
        email: '',
        senha: '',
    }
    
    Home = () => {
        this.props.navigation.navigate('Home')
    }

    Cadastro = () => {
        this.props.navigation.navigate('Cadastro')
    }
    
    render(){

      

        return (
            <View style={styles.conteiner}>
                <Image source={logo} style={styles.image}/>

                <Text style={styles.title}>Entrar</Text>

                <TextInput placeholder="Digite seu E-mail" style={styles.txtEmail} autoFocus={true} keyboardType="email-address" value={this.state.email} onChangeText={email => this.setState({email})} />

                <TextInput placeholder="Digite sua Senha" style={styles.txtSenha} secureTextEntry={true} value={this.state.senha} onChangeText={senha => this.setState({senha})} />

                <TouchableOpacity   onPress={this.Home}>
                    <Text style={styles.btnLogin}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.txtEsqueci}>Esqueci minha senha</Text>

                <TouchableOpacity   onPress={this.Cadastro}> 
                    <Text style={styles.btnCadastro}>Criar nova conta</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default Login