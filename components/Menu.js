import React, {useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, SIZES, constants, icons, dummyData} from '../constants';
import menuData from '../constants/menuData';
import DropShadow from 'react-native-drop-shadow';
import {Shadow} from 'react-native-shadow-2';

console.log(menuData.foodData);

const Menu = ({}) => {
  const [menuOption, setMenuOption] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const menuItems = menuData.foodData;

  const renderFoods = () => {
    return (
      <View>
        <FlatList
          data={menuItems}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setMenuOption(true), setClickedItem(item);
              }}>
              <View style={styles.foodCard}>
                <Image
                  style={styles.flatlistImages}
                  source={item.menu[0].photo}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>
                  {item.menu[0].calories} Calories
                </Text>
              </View>
              <Text style={styles.text}>£{item.menu[0].price}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

  const MenuOption = ({item}) => (
    <View style={styles.menuOption}>
      {/* Close Button */}
      <TouchableOpacity
        style={{marginLeft: 290}}
        onPress={() => setMenuOption(false)}>
        <Text style={{fontSize: 10}}>❌</Text>
      </TouchableOpacity>

      {/* Photo and Description */}
      <Text style={styles.text}>{item.name}</Text>
      <Image
        style={{
          width: '100%',
          height: 250,
          opacity: 1,
          borderRadius: 20,
        }}
        source={item.menu[0].photo}
      />
      <Text style={styles.descriptionText}>{item.menu[0].description}</Text>

      <View>
        <Text style={styles.macroText}>
          {item.menu[0].calories}{' '}
          ............................................................ Calories
        </Text>
        <Text style={styles.macroText}>
          {item.menu[0].carbs}g
          ................................................................ Carbs
        </Text>
        <Text style={styles.macroText}>
          {item.menu[0].protien}g
          .......................................................... Protien
        </Text>
        <Text style={styles.macroText}>
          {item.menu[0].fats}g
          ................................................................. Fats
        </Text>
      </View>

      {/* Add to cart Section */}
      <View styles={styles.addToCartSection}>
        <Text style={styles.price}>£{item.menu[0].price}</Text>
        <TouchableOpacity style={styles.addToCart}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      {renderFoods()}
      {menuOption && <MenuOption item={clickedItem} />}
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistImages: {
    width: '100%',
    height: 250,
    opacity: 1,
    marginTop: 50,
    borderRadius: 20,
  },
  foodCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.9,
    elevation: 5,
    shadowRadius: 5,
    borderRadius: 20,
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    marginHorizontal: 10,
    marginTop: 15,
  },
  descriptionText: {
    fontSize: 15,
    padding: 10,
    marginTop: -1,
  },
  menuOption: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    width: '90%',
    height: 565,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 30,
  },
  addToCartSection: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  addToCart: {
    backgroundColor: 'green',
    width: 150,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 160,
    marginTop: 40,
  },
  price: {
    marginTop: 46,
    position: 'absolute',
    fontSize: 20,
  },
  addToCartText: {
    color: 'white',
    fontSize: 15,
  },
});

export default Menu;
