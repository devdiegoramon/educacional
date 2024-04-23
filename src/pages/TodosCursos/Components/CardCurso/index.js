import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ curso }) => {
    return (
        <View style={styles.Card}>
            <Image style={styles.Imagem} source={curso.foto} />
            <View style={styles.Infos}>
                <Text style={styles.Titulo}>{curso.titulo}</Text>
                <Text style={styles.Categoria}>{curso.desc}</Text>
                <View style={styles.horizontalInfos}>
                    <Text style={styles.views}>{curso.Views} <Ionicons name="eye-outline" size={15} /></Text>
                    <Text style={styles.Data}>28 Jan 2021</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        width: 177,
        height: 215,
        // backgroundColor: 'red',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ddd',
    },
    Imagem: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    Infos: {
        marginHorizontal: 9,
        marginTop: 9,
        gap: 5
    },
    Titulo:{
        fontSize: 12
    },
    Categoria:{
        fontSize: 12
    },
    horizontalInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    views:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12
    },
    Data:{
        fontSize: 12
    }
})

export default Card