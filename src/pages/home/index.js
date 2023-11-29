import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity, ScrollView, StatusBar} from 'react-native';

import styles from "./style";

import tradicao from "./../../img/tradicao-branco-900ml.png";
import corante from "./../../img/corante_xadrez_50ml.webp";
import quartzolit from "./../../img/quartzolit.jpg";
import renova from "./../../img/renova.png";

class Home extends Component {
    
    Produto = () => {
        this.props.navigation.navigate('Produto')
    }
    
    render() {

        
        
        return (
            <ScrollView>
            <View style={styles.container}>
                <StatusBar style="light" backgroundColor="#000"></StatusBar>
                <View style={styles.header}>
                        <View style={styles.txtContainer}>
                            <Text style={styles.txtEmAlta}>Em Alta</Text>
                        </View>

                        <View style={styles.linha}></View>
                </View>
            
            <View style={styles.produtos}>
                <TouchableOpacity onPress={this.Produto}>
                    <Image source={tradicao} style={styles.imgProdutos}></Image>
                    <Text style={styles.txtProduto}>Tinta Tradição Branca 3,6 Litros Lukscolor</Text>
                    <Text style={styles.txtPreco}>R$ 56,00</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.produtos}>
                <TouchableOpacity onPress={this.Produto}>
                    <Image source={corante} style={styles.imgProdutos}></Image>
                    <Text style={styles.txtProduto}>Corante Xadrez Sherwin Williams</Text>
                    <Text style={styles.txtPreco}>R$ 6,00</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.produtos}>
                <TouchableOpacity onPress={this.Produto}>
                    <Image source={quartzolit} style={styles.imgProdutos}></Image>
                    <Text style={styles.txtProduto}>Tinta Branca 18 Litros Quartzolit</Text>
                    <Text style={styles.txtPreco}>R$ 158,00</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.produtos}>
                <TouchableOpacity onPress={this.Produto}>
                    <Image source={renova} style={styles.imgProdutos}></Image>
                    <Text style={styles.txtProduto}>Tinta Renova Tetos e parede Branca 3,6 Litros Coral</Text>
                    <Text style={styles.txtPreco}>R$ 58,99</Text>
                </TouchableOpacity>
            </View>
            
            </View>
            </ScrollView>
        );
    }
}

export default Home;
