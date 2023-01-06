import React from 'react'
import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import {COLORS, FONTS, SIZES, constants, icons, dummyData} from '../constants';
import menuData from '../constants/menuData'

console.log(menuData.foodData)

const Menu = ({}) => {

    const menuItems = menuData.foodData;
    console.log(menuItems.duration, '💊')

    const renderFood = menuItems.map(menuItem => (
      <View>
        <Image
          style={{width: '100%', height: 250}}
          source={menuItem.menu[0].photo}
        />
        <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 50}}>
          {menuItem.name}
        </Text>
      </View>
    ));

    const renderFoods = () => {
        return (
            <FlatList
              data={menuItems}
              renderItem={({menuItem}) => (
                <>
                  <Text style={{fontSize: 50, margin: 20}}>{menuItem.name}</Text>
                  <Text style={{fontSize: 20}}>{menuItem.duration}</Text>
               
                </>
              )}
            />
        );
       
    }

    
  return <ScrollView >{renderFood}</ScrollView>;
}

export default Menu