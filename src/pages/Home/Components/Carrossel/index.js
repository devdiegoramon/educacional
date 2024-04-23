import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import imagem1 from "../../../../../assets/banners/bannerslide1.png";
import imagem2 from "../../../../../assets/banners/bannerslide2.png";
import imagem3 from "../../../../../assets/banners/bannerslide3.png";
import imagem4 from "../../../../../assets/banners/bannerslide4.png";

const width = Dimensions.get("screen").width;

const imagens = [imagem1, imagem2, imagem3, imagem4];

const Carrossel = () => {
  return (
    <View style={styles.container}>
      <PagerView style={styles.viewPager} initialPage={0}>
        {imagens.map((imagem, index) => (
          <View style={styles.page} key={index.toString()}>
            <Image style={styles.imagemSlide} source={imagem} />
          </View>
        ))}
      </PagerView>
    </View>
  );
};

export default Carrossel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPager: {
    width: "100%",
    height: 100 / 1100 * width * 4, // Ajustando a altura para mostrar quatro itens
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemSlide: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
});
