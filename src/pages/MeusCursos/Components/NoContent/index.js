import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Banner from '../../../../../assets/SemConteudo/NoContent.png'

const NoContent = () => {
    return(
        <View style={styles.MainContent}>
            <Image style={styles.logo} source={Banner}/>
            <Text style={styles.titulo}>Nenhum Curso em andamento</Text>
            <Text style={styles.desc}>Você ainda não se inscreveu em nenhum curso, de uma olhada nos nossos cursos</Text>
            <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}>Veja nossos cursos</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContent:{
        alignItems: 'center',
        paddingHorizontal: 50,
        gap: 10
    },
    logo:{
        height: 225,
        marginBottom: 35
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'medium',
        textAlign: 'center',

    },
    desc:{
        fontSize: 18,
        textAlign: 'center',
    },
    button:{
        marginTop: 80,
        backgroundColor: '#1E0094',
        paddingHorizontal: 34,
        paddingVertical: 10,
        borderRadius: 8
    },
    buttonText:{
        color: '#fff',
        fontSize: 18
    }


})

export default NoContent;