import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MainLayout from '../MainLayout';
//import  MainLayout from '../MainLayout'

const Notification = ({navigation}) => {
  const currentTab = useSelector((state) => state.tab.selectedTab)
  return (
    <MainLayout navigation={navigation}>
      <Text>Notification SCREEN</Text>
    </MainLayout>
  );
};

export default Notification;
