import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import CategoriaIndividual from "../../../CategoriaIndividual";

const Categorias = ()=>{
    const [modalActive, setModalActive] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const openModal = (itemId) => {
        setModalActive(true);
        setSelectedItemId(itemId)
    };

    const closeModal = () => {
        setModalActive(false);
    };

    const items = [
        {id:1, titulo: "Segurança", texto: "150 cursos", icon: "home-outline"},
        {id:2, titulo: "digital", texto: "150 cursos", icon: "home-outline"},
        {id:3, titulo: "teste", texto: "150 cursos", icon: "home-outline"},
        {id:4, titulo: "teste", texto: "150 cursos", icon: "home-outline"},
        {id:5, titulo: "teste", texto: "150 cursos", icon: "home-outline"},
        {id:6, titulo: "teste", texto: "150 cursos", icon: "home-outline"}
      ];
    return (
        <View>
            <Text style={styles.tituloCategorias}>Categorias</Text>
            <FlatList
            data={items}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableHighlight
                        onPress={() => openModal(item.id)}
                        underlayColor="transparent" // Evita o efeito de destaque ao clicar
                    >
                    <View style={styles.card}>
                        <View style={styles.cardText}>
                            <Text style={styles.cardTitulo}>{item.titulo}</Text>
                            <Text style={styles.cardDesc}>{item.texto}</Text>
                        </View>
                        <Ionicons name={item.icon} size={30} color="#2803BA"/>
                    </View>
                </TouchableHighlight>
                
            )}
            />
            <CategoriaIndividual
            visible={modalActive}
            closeModal={closeModal}
            cursoId={selectedItemId}
            />
        </View>
        
      );
};

const styles = StyleSheet.create({
    tituloCategorias:{
        fontSize: 18,
    },
    card:{
        flexDirection:"row",
        justifyContent: "space-around",
        // backgroundColor:"red",
        width: 150,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#ddd',
        padding: 10,
        marginTop: 10,
        marginRight: 10
    },
    cardText:{
        gap: 10
    },
    cardTitulo:{
        fontSize: 12,
        fontWeight: "bold"
    },
    cardDesc:{
        fontSize: 12
    }
});

export default Categorias;