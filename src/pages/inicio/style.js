import React, { Component } from "react";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f8d817",
    },
    image: {
        marginTop: 10,
        marginBottom: 10,
        width: 200, 
        height: 200,
        resizeMode: 'contain', 
    },
    txtConstru: {
        marginTop: 20, 
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 24, 
        color: '#000000',
        fontWeight: 'bold',
    },
    txtButton: {
        marginTop: 20,
        borderRadius: 5,
        overflow: 'hidden', 
        backgroundColor: '#01a956',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        textAlign: 'center',
    },
});

export default Styles;
