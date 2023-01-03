import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomDrawer from './navigation/CustomDrawer';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import tabReducer from './stores/tab/tabReducer'


const Stack = createStackNavigator();


const store = configureStore({
  reducer: {
    tab: tabReducer
  }
})

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={CustomDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
