import React from "react";
import { View, Text, ScrollView } from "react-native";
import Carrossel from "./Components/Carrossel";
import { StyleSheet, Button } from "react-native";
import Categorias from "./Components/Categorias";
import Cursos from "./Components/SectionCursos";


const Home = ()=>{
    

    
    return(
        <ScrollView style={styles.mainContent}>
            <Carrossel/>

            <Categorias/>
            <Cursos/>
            {/* <Button title="Ir para Tela Secundária" onPress={handlePaginaDetalhe} /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
      },
      mainContent:{
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
      }
})

export default Home;