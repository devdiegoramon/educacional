import React, {useState} from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbarTitleContainer}>
      <Text style={styles.navbarTitle}>Olá Recruta 01</Text>
      <Image source={require("../../../assets/recruta.jpg")} style={styles.navbarImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbarTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  navbarImage: {
    width: 55,
    height: 55,
    borderRadius: 25,
  },
  navbarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  diaSemana: {
    fontSize: 14, // Tamanho menor para o dia da semana
    color: 'white',
  },
})



export default Navbar