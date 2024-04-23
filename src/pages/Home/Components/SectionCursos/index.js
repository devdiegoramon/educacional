import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import imagem1 from "../../../../../assets/Cursos/topcursos.png"
import { useNavigation } from '@react-navigation/native';
import CursoDetalhe from "../../../CursoDetalhe";

const Cursos = () => {
    const navigation = useNavigation();

    // const handlePaginaDetalhe = (itemId) => {
    //     // Navegar para a tela desejada, por exemplo, 'CursoDetalhe'
    //     navigation.navigate('CursoDetalhe', { itemId });
    // };

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
        { id: 1, imagem: imagem1, titulo: "Programação", stars: 4, alunos: 10.000 },
        { id: 2, imagem: imagem1, titulo: "Programação", stars: 4, alunos: 10.000 },
        { id: 3, imagem: imagem1, titulo: "Programação", stars: 4, alunos: 10.000 },
        { id: 4, imagem: imagem1, titulo: "Programação", stars: 4, alunos: 10.000 },
        { id: 5, imagem: imagem1, titulo: "Programação", stars: 4, alunos: 10.000 },
    ];

    return (
        <View>
            <Text style={styles.tituloCategorias}>Cursos</Text>
            <FlatList
                data={items}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        style={styles.card}
                        onPress={() => openModal(item.id)} 
                        underlayColor="transparent" // Evita o efeito de destaque ao clicar
                    >
                        <View>
                            <Image source={item.imagem} style={styles.imagem} />
                            <View style={styles.cardText}>
                                <Text style={styles.cardTitulo}>{item.titulo}</Text>
                                <View style={styles.cardInfos}>
                                    <Text style={styles.stars}>
                                        {item.stars}
                                        <Ionicons name="star" size={13} color="#FFD112" />
                                    </Text>
                                    <Text style={styles.alunos}>{item.alunos} alunos</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                )}
            />
            <CursoDetalhe

                visible={modalActive}
                closeModal={closeModal}
                cursoId={selectedItemId}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tituloCategorias: {
        fontSize: 18,
    },
    card: {
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#ddd',
        width: 230,
        height: 188,
        gap: 5,
        marginRight: 20,
        marginTop: 10,
    },
    imagem: {
        width: "100%",
        height: 133
    },
    cardText: {
        marginHorizontal: 10
    },
    cardTitulo: {
        fontSize: 12,
        fontWeight: "bold"
    },
    cardDesc: {
        fontSize: 12
    },
    cardInfos: {
        flexDirection: "row",
        gap: 10,
        marginTop: 2
    }
});

export default Cursos;
