import React, { useState, useContext, createContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import AppRoutes from './src/routes/app.routes';
import Navbar from './src/components/Navbar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar />
        <Navbar />
        
        <AppRoutes/>
        

        {/* <StatusBar style="auto" /> */}
      </View>
    </GestureHandlerRootView>
    
  );
};



// const Tabs = () => {
//   return (
//     <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabs}>
//       <Tab title="Aba 1" />
//       <Tab title="Aba 2" />
//       <Tab title="Aba 3" />
//     </ScrollView>
//   );
// };

// const Tab = ({ title }) => {
//   return (
//     <View style={styles.tab}>
//       <Text style={styles.tabTitle}>{title}</Text>
//     </View>
//   );
// };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  
  
  
  content: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1A1A1A',
  },
  
  tabs: {
    paddingHorizontal: 10,
  },
  tab: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  tabTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    backgroundColor: 'white',
  },
  button: {
    fontSize: 16,
    color: 'blue',
  },
  textContent: {
    color: 'white',
  },
});

export default () => (
  <App />
);
