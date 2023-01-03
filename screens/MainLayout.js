import React from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTS, SIZES, icons, constants, dummyData } from '../constants';
import { Home, Search, CartTab, Favourite, Notification } from '../screens'
import { Header } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const MainLayout = ({navigation, children}) => {
  const currentTab = useSelector((state) => state.tab.selectedTab)
  const dispatch = useDispatch()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* Header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: 'center',
        }}
        title={currentTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.openDrawer()}>
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={dummyData?.myProfile?.profile_image}
              style={{
                width: 40,
                height: 40,
                borderRadius: SIZES.radius,
              }}
            />
          </TouchableOpacity>
        }
      />

      {/* Content */}
      {children}
      <Text
        style={{
          flex: 1,
        }}></Text>

      {/*  Footer */}
      <View
        style={{
          height: 100,
          justifyContent: 'flex-end',
        }}>
        {/* Shadow */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 4}}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={{
            position: 'absolute',
            top: 20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
      </View>
    </View>
  );
};

export default MainLayout;
