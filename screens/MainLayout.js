import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../constants';

const MainLayout = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>MainLayout</Text>
    </View>
  );
};

export default MainLayout;
