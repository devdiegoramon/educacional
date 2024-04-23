import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CursoItem from "./Components/Curso";
import NoContent from "./Components/NoContent";
import { ScrollView } from "react-native-gesture-handler";

const Cursos = () => {

    const MeusCursos = [
        //Se não tiver nenhum curso, vai exibir a tela NoContent
        { id: 1, titulo: "Data Science", desc: "The Macine learning basics program is designed to offer a soli foundation & work-ready skills for ML engineers...", time: 4, percent: 40 },
        { id: 2, titulo: "Data Science", desc: "The Macine learning basics program is designed to offer a soli foundation & work-ready skills for ML engineers...", time: 4, percent: 40 },
        { id: 3, titulo: "Data Science", desc: "The Macine learning basics program is designed to offer a soli foundation & work-ready skills for ML engineers...", time: 4, percent: 40 },
        { id: 4, titulo: "Data Science", desc: "The Macine learning basics program is designed to offer a soli foundation & work-ready skills for ML engineers...", time: 4, percent: 40 },
        { id: 5, titulo: "Data Science", desc: "The Macine learning basics program is designed to offer a soli foundation & work-ready skills for ML engineers...", time: 4, percent: 40 }
    ]

    return (
        <View style={styles.MainContent}>
            <ScrollView style={styles.teste}>
                {MeusCursos && MeusCursos.length > 0 ? (
                    MeusCursos.map((curso) => (
                        <CursoItem key={curso.id} curso={curso} />
                    ))
                ) : (
                    <NoContent />
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContent: {
        marginVertical: 10,
        flex: 1,
        gap: 21
    },
    
})

export default Cursos;