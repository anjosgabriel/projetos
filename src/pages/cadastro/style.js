import React from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    conteiner: {
        alignItems: "center",
        backgroundColor: "#f8d817",
        justifyContent: "center"  
    },
    image:{
        marginTop: 10,
        marginBottom: 10,
        alignItems:'center'
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 10,
        marginBottom: 15
    },
    txtInput: {
        backgroundColor: "#000000",
        width: 300,
        height: 45,
        borderRadius: 5,
        marginTop:10,
        color: "white"
    },
    btnCadastro: {
        borderRadius: 5,
        backgroundColor: "#01a956",
        fontSize: 18,
        fontWeight:"bold",
        color: "#fff",
        paddingHorizontal: 40,
        paddingVertical: 10,
        marginTop:20,
        width: 300,
        textAlign: "center"

    },
})

export default style