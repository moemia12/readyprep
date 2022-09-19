import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainLayout from '../screens/MainLayout'

const Drawer = createDrawerNavigator()

const CustomDrawer = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
        }}>
        <Drawer.Navigator
          drawerType="slide"
          overlayColor="transparent"
          drawerStyle={{
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          }}
          initialRouteName="MainLayout">
          <Drawer.Screen
            name="MainLayout"
            component={MainLayout}
          />
        </Drawer.Navigator>
      </View>
    );
}

export default CustomDrawer