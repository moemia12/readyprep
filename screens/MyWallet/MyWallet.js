import React from 'react';
import { View, Text } from 'react-native';
import {useSelector} from 'react-redux';
import MainLayout from '../MainLayout';

const MyWallet = ({navigation}) => {
  return (
    <MainLayout navigation={navigation}>
      <Text>MYWALLET SCREEN</Text>
    </MainLayout>
  );
};


export default MyWallet;
