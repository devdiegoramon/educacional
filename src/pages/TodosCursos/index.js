import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from "react-native";
import Card from './Components/CardCurso'
import Imagem1 from '../../../assets/TodosCursos/curso.png'
import CursoDetalhe from "../CursoDetalhe";

const Cursos = () => {

    const [modalActive, setModalActive] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const openCurso = (itemId) => {
        setModalActive(true);
        setSelectedItemId(itemId)
    };

    const closeCurso = () => {
        setModalActive(false);
    };

    const cursos = [
        { id: 1, titulo: 'Data Science', desc: 'Categoria de exemplo', Views: 10, foto: Imagem1 },
        { id: 2, titulo: 'Data Science', desc: 'Categoria de exemplo', Views: 10, foto: Imagem1 },
        { id: 4, titulo: 'Data Science', desc: 'Categoria de exemplo', Views: 10, foto: Imagem1 },
        { id: 5, titulo: 'Data Science', desc: 'Categoria de exemplo', Views: 10, foto: Imagem1 },
        { id: 6, titulo: 'Data Science', desc: 'Categoria de exemplo', Views: 10, foto: Imagem1 },
        { id: 7, titulo: 'Data Science', desc: 'Categoria de exemplo', Views: 10, foto: Imagem1 },
        { id: 8, titulo: 'Data Science', desc: 'Categoria de exemplo', Views: 10, foto: Imagem1 },
        { id: 9, titulo: 'Data Science', desc: 'Categoria de exemplo', Views: 10, foto: Imagem1 },
        { id: 0, titulo: 'Data Science', desc: 'Categoria de exemplo', Views: 10, foto: Imagem1 },
        { id: 3, titulo: 'Data Science', desc: 'Categoria de exemplo', Views: 10, foto: Imagem1 }
    ]

    return (
        <ScrollView style={styles.Scroll}>
            <View style={styles.MainContent}>
                {cursos.map((curso) => (
                    <TouchableHighlight key={curso.id} onPress={() => openCurso(curso.id)} underlayColor="transparent">
                        <Card curso={curso} />

                    </TouchableHighlight>
                ))}
            </View>

            <CursoDetalhe

                visible={modalActive}
                closeModal={closeCurso}
                cursoId={selectedItemId}
            />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    Scroll: {
        marginHorizontal: 15,
        marginVertical: 10,
    },
    MainContent: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center'
    }


})

export default Cursos;