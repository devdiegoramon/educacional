import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Svg, { Circle } from 'react-native-svg';

const CursoItem = ({ curso }) => {
    const radius = 30; // raio do círculo
    const strokeWidth = 10; // largura da borda do círculo
    const circumference = 2 * Math.PI * radius; // comprimento da circunferência

    const progress = 40 >= 100 ? 100 : 40; // garantir que o progresso não ultrapasse 100%

    const strokeDashoffset = circumference - (progress / 100) * circumference;


    return (
        <View style={styles.MainCard}>
            <View style={styles.Conteudo}>
                <View style={styles.Infos}>
                    <Text style={styles.InfoTitulo}>{curso.titulo}</Text>
                    <Text style={styles.InfoDesc}>{curso.desc}</Text>
                    <Text style={styles.InfoHour}><Ionicons name="time-outline" size={14} /> {curso.time} Horas faltando</Text>
                </View>
                <View style={styles.Graph}>
                    <Svg height="100" width="100">
                        <Circle
                            cx="50"
                            cy="50"
                            r={radius}
                            strokeWidth={strokeWidth}
                            stroke="#e0e0e0" // cor da borda do círculo
                            fill="none"
                        />
                        <Circle
                            cx="50"
                            cy="50"
                            r={radius}
                            strokeWidth={strokeWidth}
                            stroke="#4caf50" // cor do preenchimento do círculo
                            strokeLinecap="round"
                            fill="none"
                            strokeDasharray={`${circumference} ${circumference}`}
                            strokeDashoffset={strokeDashoffset}
                        />
                    </Svg>
                    <Text style={styles.ProgressText}>{`${progress}%`}</Text>
                </View>

            </View>
            <TouchableOpacity style={styles.ButtonCurso}>
                <Text>Voltar aos estudos</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    MainCard: {
        borderWidth: 2,
        borderColor: '#ddd',
        marginHorizontal: 25,
        paddingHorizontal: 17,
        paddingVertical: 21,
        borderRadius: 17
    },
    Conteudo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Infos: {
        width: '70%',
        gap: 11
    },
    InfoTitulo: {
        fontSize: 18
    },
    InfoDesc: {
        fontSize: 12
    },
    InfoHour: {
        fontSize: 12,
    },

    Graph: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },

    ProgressText: {
        position: 'absolute',
        fontSize: 12,

    },
    ButtonCurso: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        marginTop: 18,
        paddingTop: 9
    }
})


export default CursoItem;