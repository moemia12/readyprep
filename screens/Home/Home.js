import React from 'react';
import {View, Text, Image} from 'react-native';
import { COLORS, icons, SIZES } from '../../constants';
import MainLayout from '../MainLayout';
import Menu from '../../components/Menu'


const Home = ({ navigation, screen }) => {

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2
      }}
      >
        {/* Icon */}
        <Image
          source={icons.search}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black
          }}
        />
        {/* Text Input */}

        {/* Filter Button */}

      </View>
    )
  }
  return (
    <MainLayout navigation={navigation}>
      {renderSearch()}
      <Menu />
    </MainLayout>
  );
};

export default Home;
