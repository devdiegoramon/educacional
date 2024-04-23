// ModalComponent.js
import React, { useRef, useEffect, useState } from 'react';
import { View, Modal, StyleSheet, Animated, TouchableOpacity, Text, Dimensions, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Tabs from './Components/TabsConteudo';

import Imagem1 from '../../../assets/Cursos/machineLearn-bg.png';
import { ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const CursoDetalhe = ({ visible, closeModal, cursoId }) => {
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

  const handleCloseModal = () => {
    Animated.timing(translateX, {
      toValue: width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => closeModal());
  };

  const [tabSelecionada, setTabSelecionada] = useState('sobre');

  const handleTabPress = (tab) => {
    setTabSelecionada(tab);
  };



  return (
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
            </View>
            <Image source={Imagem1} style={styles.CursoBanner} />
            <View style={styles.CursoContent}>
              <View>
                <Text style={styles.TituloCurso}>Machine Learn</Text>
                <View style={styles.infosTitulo}>
                  <Text>5 <Ionicons name="star" size={13} color="#FFD112" /></Text>
                  <Text>100 Alunos</Text>
                </View>
              </View>


              <Tabs tabSelecionada={tabSelecionada} onTabPress={handleTabPress} style={styles.Tabs} />

              <Text>{cursoId}</Text>
              <TouchableOpacity style={styles.IniciarButton} onPress={() => console.log('Botão pressionado')}>
                <Text style={styles.IniciarTexto}>Iniciar curso</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CursoDetalhe

const styles = StyleSheet.create({
  outerview: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0, 0.2)',
  },
  modelview: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    // padding: 35
    paddingVertical: 35,
    width: '100%',
    height: '100%',

  },
  headerCurso: {
    paddingHorizontal: 30,
    marginBottom: 14
  },
  CursoBanner: {
    borderRadius: 15
  },
  CursoContent: {
    marginHorizontal: 25,
    marginTop: 9
  },
  infosTitulo: {
    flexDirection: 'row',
    gap: 22
  },
  TituloCurso: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'medium'
  },
  IniciarButton:{
    backgroundColor:'blue',
    width: 'auto',
    alignSelf: 'center',
    paddingHorizontal: 94,
    paddingVertical: 10,
    borderRadius: 8
  },
  IniciarTexto:{
    color: '#fff',
    fontSize: 18
  }

});