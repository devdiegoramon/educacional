import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Sobre = () =>{
    return(
        <View>
           <View style={styles.listItem}>
                <Ionicons name="alarm-outline" size={32}/>
                <Text style={{fontSize:18}}>6 Horas</Text>
           </View>
           <View style={styles.listItem}>
                <Ionicons name="document" size={32}/>
                <Text style={{fontSize:18}}>Certificado de competência</Text>
           </View>
           <View style={styles.listItem}>
                <Ionicons name="bar-chart-outline" size={32}/>
                <Text style={{fontSize:18}}>Iniciante</Text>
           </View>

           <View>
                <Text style={styles.tituloDesc}>O que nós vamos aprender?</Text>
                <Text style={styles.conteudoDesc}>The Macine learning basics program is designed to offer a soli foundation & work-ready skills for ML engineers. The Macine learning basics program is designed to offer a soli foundation & work-ready skills for ML engineers. </Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
        marginBottom:22
    },
    tituloDesc:{
        fontSize:18
    },
    conteudoDesc:{
        fontSize: 12,
        marginBottom: 24
    }
})

export default Sobre;