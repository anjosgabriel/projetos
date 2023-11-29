/*
import React, {Component} from "react";
import { StyleSheet } from "react-native";
*/
import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 10 : 0, // Ajuste da barra de status no Android
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#333",
  },
  txtContainer: {
    flex: 1,
    alignItems: "center",
  },
  txtEmAlta: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linha: {
    height: 2,
    width: "40%",
    backgroundColor: "#fff",
  },
  produtos: {
    margin: 10,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  imgProdutos: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  txtProduto: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  txtPreco: {
    fontSize: 14,
    color: "#888",
  },
});

export default styles;
