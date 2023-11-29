import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import styles from "./style";

class Carrinho extends Component {
  state = {
    items: [
      {
        id: 1,
        nome: "Tinta Tradição Branca 900ml Lukscolor",
        preco: 56.00,
        quantidade: 2,
        imagem: require("./../../img/tradicao-branco-900ml.png"),
      },
    ],
  };

  calcularTotal = () => {
    return this.state.items.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2);
  };

  removerItem = (itemId) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId),
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Carrinho</Text>

          {this.state.items.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Image source={item.imagem} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.nome}</Text>
              <Text style={styles.itemPrice}>R$ {item.preco.toFixed(2)}</Text>
              <Text style={styles.itemQuantity}>Quantidade: {item.quantidade}</Text>
              <TouchableOpacity onPress={() => this.removerItem(item.id)}>
                <Text style={styles.removeItem}>Remover</Text>
              </TouchableOpacity>
            </View>
          ))}

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalValue}>R$ {this.calcularTotal()}</Text>
          </View>

          <TouchableOpacity onPress={() => alert("Compra finalizada!")}>
            <Text style={styles.finalizarCompra}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Carrinho;
