import React, {Component} from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";

import styles from "./style"
import logo from "./../../img/logo-original.png"

class Cadastro extends Component {
    state = {
        nome: '',
        email: '',
        senha: '',
        telefone: '',
        endereco: '',
        cpf: ''
    }

    Home = () => {
        this.props.navigation.navigate('Home')
    }


    render(){

        

        return(
            <View style={styles.conteiner}>
                
                <Image source={logo} style={styles.image}/>

                <Text style={styles.title}>Faça seu Cadastro</Text>

                <TextInput placeholder="Insira seu Nome" style={styles.txtInput} value={this.state.nome} onChangeText={nome => this.setState({nome})}/>

                <TextInput placeholder="Insira seu E-mail" style={styles.txtInput} keyboardType="email-address" value={this.state.email} onChangeText={email => this.setState({email})}/>

                <TextInput placeholder="Insira sua Senha" style={styles.txtInput} secureTextEntry={true} value={this.state.senha} onChangeText={senha => this.setState({senha})}/>

                <TextInput placeholder="Insira seu numero de Telefone" style={styles.txtInput} keyboardType="numeric" value={this.state.telefone} onChangeText={telefone => this.setState({telefone})}/>
                
                <TextInput placeholder="Insira seu Endereço" style={styles.txtInput} value={this.state.endereco} onChangeText={endereco => this.setState({endereco})}/>

                <TextInput placeholder="Insira seu CPF/CNPJ" style={styles.txtInput} keyboardType="numeric" value={this.state.cpf} onChangeText={cpf => this.setState({cpf})}/>

                <TouchableOpacity onPress={this.Home}>
                    <Text style={styles.btnCadastro}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Cadastro