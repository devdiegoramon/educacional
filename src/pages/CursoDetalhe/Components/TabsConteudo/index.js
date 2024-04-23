// Tabs.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Sobre from '../TabSobre';

const Tabs = ({ tabSelecionada, onTabPress }) => {
    const renderizarConteudo = () => {
        switch (tabSelecionada) {
            case 'sobre':
                return <Sobre/>;
            case 'contato':
                return <Text>Conteudo Contato</Text>;
            default:
                return null;
        }
    };

    return (
        <View style={styles.MainTabs}>
            <View style={styles.tabs}>
                <TouchableOpacity onPress={() => onTabPress('sobre')}>
                    <Text style={[styles.tab, tabSelecionada === 'sobre' && styles.tabAtiva]}>Sobre</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTabPress('contato')}>
                    <Text style={[styles.tab, tabSelecionada === 'contato' && styles.tabAtiva]}>Conteudo</Text>
                </TouchableOpacity>
            </View>
            <View>{renderizarConteudo()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    MainTabs: {
        marginTop: 28,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    tab: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
    },
    tabAtiva: {
        color: 'blue',
    },
});

export default Tabs;
