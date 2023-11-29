import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import styles from "./style";

import tradicao from "./../../img/tradicao-branco-900ml.png";
import corante from "./../../img/corante_xadrez_50ml.webp";
import quartzolit from "./../../img/quartzolit.jpg";
import renova from "./../../img/renova.png";


class Produto extends Component {
  
  Carrinho = () => {
    this.props.navigation.navigate('Carrinho')
}

  
  render() {

    return (
      <ScrollView>
       <View style={styles.container}>
          <Image source={tradicao} style={styles.image} />
          <Text style={styles.title}>Tinta Tradição branco Lukscolor</Text>
          <Text style={styles.valor}>R$</Text>
          <Text style={styles.quantidade}>Quantidade: 5</Text>
          <TouchableOpacity onPress={this.Carrinho}>
            <Text style={styles.textoButton}>
              Adicionar ao Carrinho
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Image source={corante} style={styles.image} />
          <Text style={styles.title}>Tinta Tradição branco Lukscolor</Text>
          <Text style={styles.valor}>R$</Text>
          <Text style={styles.quantidade}>Quantidade: 50</Text>
          <TouchableOpacity onPress={this.Carrinho}>
            <Text style={styles.textoButton}>
              Adicionar ao Carrinho
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Image source={quartzolit} style={styles.image} />
          <Text style={styles.title}>Tinta Tradição branco Lukscolor</Text>
          <Text style={styles.valor}>R$</Text>
          <Text style={styles.quantidade}>Quantidade: 10</Text>
          <TouchableOpacity onPress={this.Carrinho}>
            <Text style={styles.textoButton}>
              Adicionar ao Carrinho
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Image source={renova} style={styles.image} />
          <Text style={styles.title}>Tinta Tradição branco Lukscolor</Text>
          <Text style={styles.valor}>R$</Text>
          <Text style={styles.quantidade}>Quantidade: 8</Text>
          <TouchableOpacity onPress={this.Carrinho}>
            <Text style={styles.textoButton}>
              Adicionar ao Carrinho
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

export default Produto;