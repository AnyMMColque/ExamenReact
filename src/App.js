/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import VectorIcons from 'react-native-vector-icons/AntDesign';
import Color from './layout/colors.js';
import CreateTarea from './views/CreateTarea.js';
import ListTareas from './views/ListTareas.js';
const Tab = createBottomTabNavigator();

class App extends React.Component {
  constructor(props){
    super(props);
  }
  ListTareas() {
    return <ListTareas />;
  }
  createTarea() {
    return <CreateTarea />;
  }
  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color,size}) =>{
              let iconName;
              switch (route.name){
                case 'Lista de Tareas': {
                  if (focused){
                    return (
                      <VectorIcons 
                        name="profile" 
                        size={23} 
                        color={Color.option1.thirthcolor} 
                      />
                    );
                  }
                  else {
                    return (
                      <VectorIcons 
                        name="profile" 
                        size={23} 
                        color={Color.option1.secondcolor}  
                      />
                    );
                  }
                }
                case 'Crear Tareas': {
                  if (focused){
                    return (
                      <VectorIcons 
                        name="form" 
                        size={23} 
                        color={Color[Color.key].thirthcolor} 
                      />
                    );
                  }
                  else {
                    return (
                      <VectorIcons 
                      name="form" 
                      size={23} 
                      color={Color[Color.key].secondcolor} 
                      />
                    );
                  }
                }
              } 
            }
          })}>
          <Tab.Screen name="Lista de Tareas" component={this.ListTareas} />
          <Tab.Screen name="Crear Tareas" component={this.createTarea} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;

