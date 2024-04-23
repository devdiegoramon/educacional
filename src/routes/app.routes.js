import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import TodosCursos from '../pages/TodosCursos';
import Cursos from '../pages/MeusCursos';
import Profile from '../pages/Profile';
import CursoDetalhe from '../pages/CursoDetalhe';
import CategoriaIndividual from '../pages/CategoriaIndividual';
import { Ionicons } from "@expo/vector-icons";

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();
const { Navigator: StackNavigator, Screen: StackScreen } = createStackNavigator();

const navigationItems = [
  { name: 'Home', icon: 'home', component: Home },
  { name: 'Meus Cursos', icon: 'play-circle', component: Cursos },
  { name: 'Cursos', icon: 'book', component: TodosCursos },
  { name: 'Perfil', icon: 'person-circle', component: Profile }
];

const navigationHiddenItens = [
  {name: 'CursoDetalhe', component: CursoDetalhe},
  {name: 'CategoriaIndividual', component: CategoriaIndividual}
]

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <TabNavigator>
        {navigationItems.map((tela) => (
          <TabScreen
            key={tela.name}
            name={tela.name}
            component={tela.component}
            options={{
              tabBarIcon: () => (
                <Ionicons name={tela.icon} size={25} color="#000" />
              ),
              headerShown: false,
              tabBarLabelStyle: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
              },
            }}
          />
        ))}
        {/* {navigationHiddenItens.map((telaOculta)=> (
          <TabScreen
            key={telaOculta.name}
            name={telaOculta.name}
            component={telaOculta.component}
            options={{
              headerShown: false,
              tabBarButton: () => false,
            }}
          />
        ))} */}
        
      </TabNavigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
