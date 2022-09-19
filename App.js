import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomDrawer from './navigation/CustomDrawer';
import MainLayout from './screens/MainLayout';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeTwo" component={CustomDrawer}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
