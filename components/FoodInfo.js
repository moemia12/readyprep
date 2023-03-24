import React, {useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, SIZES, constants, icons, dummyData} from '../constants';
import menuData from '../constants/menuData';

const FoodMetrics = (calories, protien, carbs, fats) => {
    
      <View>
        <Text style={styles.macroText}>
          {calories}{' '}
          ............................................................ Caerlories
        </Text>
        <Text style={styles.macroText}>
          {carbs}g
          ................................................................ Carbs
        </Text>
        <Text style={styles.macroText}>
          {protien}g
          .......................................................... Protien
        </Text>
        <Text style={styles.macroText}>
          {fats}g
          ................................................................. Fats
        </Text>
      </View>;
}

const styles = StyleSheet.create({
    macroText: {
        fontSize: 30,

    }
})

export default FoodMetrics