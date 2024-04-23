import React, { useRef, useEffect, useState } from "react";
import { Text, View, StyleSheet, Animated, Dimensions, Modal, ScrollView, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import Imagem1 from '../../../assets/Cursos/machineLearn-bg.png';
import CursoDetalhe from "../CursoDetalhe";

const { width } = Dimensions.get('window');

const CategoriaIndividual = ({ visible, closeModal, categoriaId }) => {
    const [modalActiveCurso, setModalActiveCurso] = useState(false);
    const [cursoId, setCursoId] = useState(null)
    const translateX = useRef(new Animated.Value(width)).current;

    useEffect(() => {
        if (visible) {
            openModal();
        }
    }, [visible]);

    const openModal = () => {
        Animated.timing(translateX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const openCursoDetalhe = (cursoListId) => {
        setModalActiveCurso(true);
        setCursoId(cursoListId);
    };

    const closeCursoDetalhe = () => {
        setModalActiveCurso(false);
    };

    const handleCloseModal = () => {
        Animated.timing(translateX, {
            toValue: width,
            duration: 300,
            useNativeDriver: true,
        }).start(() => closeModal());
    };

    const cursosCategoria = [
        { id: 1, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 2, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 3, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 4, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 5, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 6, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 7, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 8, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 9, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 10, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 11, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 12, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 13, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 14, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 15, titulo: 'Machine Learn', stars: 4.5, alunos: 100 },
        { id: 16, titulo: 'Machine Learn', stars: 4.5, alunos: 100 }
    ];

    return (
        <View style={styles.container}>
            <Modal animationType='fade' transparent={true} visible={visible} onRequestClose={handleCloseModal}>
                <View style={styles.outerview}>
                    <Animated.View
                        style={[
                            styles.modelview,
                            {
                                transform: [{ translateX }],
                            },
                        ]}
                    >
                        <ScrollView>
                            <View style={styles.headerCurso}>
                                <Ionicons name='arrow-back-sharp' size={30} color='#3F3F3F' onPress={handleCloseModal} />
                                <Text>Inteligencia Artificial</Text>
                            </View>
                            <View style={styles.ListaCategoria}>
                                {cursosCategoria.map((curso) => (
                                    <TouchableHighlight
                                        style={styles.card}
                                        onPress={() => openCursoDetalhe(curso.id)} // Trocado para openCursoDetalhe
                                        underlayColor="transparent"
                                        key={curso.id}
                                    >
                                        <View style={styles.Categoria}>
                                            <View>
                                                <Text style={styles.TituloCurso}>{curso.titulo}</Text>
                                                <Text>{curso.stars} <Ionicons name="star" size={13} color="#FFD112" /></Text>
                                                <Text>{curso.alunos} Alunos</Text>
                                            </View>
                                            <Image style={styles.ImagemCategoria} source={Imagem1} />
                                        </View>
                                    </TouchableHighlight>
                                ))}
                            </View>
                        </ScrollView>
                    </Animated.View>
                </View>
            </Modal>
            <CursoDetalhe
                visible={modalActiveCurso}
                closeModal={closeCursoDetalhe}
                cursoId={cursoId}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    outerview: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0, 0.2)',
    },
    modelview: {
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingVertical: 35,
        width: '100%',
        height: '100%',
    },
    headerCurso: {
        paddingHorizontal: 30,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    ListaCategoria: {
        paddingHorizontal: 30,
        width: '100%',
        height: '100%',
        gap: 15
    },
    Categoria: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    TituloCurso: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'medium'
    },
    ImagemCategoria: {
        width: 85,
        height: 85,
        borderRadius: 10
    },
});

export default CategoriaIndividual;
