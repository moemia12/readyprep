import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { MainLayout } from '../screens'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants'


const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        // backgroundColor
      }}
      // onPress
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.black,
        }}
      />
      <Text
        style={{
          marginLeft: 15,
          color: COLORS.black
      }}
      >{label}</Text>
    </TouchableOpacity>
  );
}

const CustomDrawerContent = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}>
        {/* Close Button */}
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: 7,
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{
                height: 30,
                width: 30,
                tintColor: COLORS.black,
                marginTop: 25,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Profile */}
        <View style={{marginLeft: SIZES.radius}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: SIZES.radius,
              alignItems: 'center',
            }}>
            <Image
              source={dummyData.myProfile?.profile_image}
              style={{
                width: 50,
                height: 50,
                borderRadius: SIZES.radius,
                marginTop: 120,
                marginLeft: -15,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/** Profile */}
      <View style={{marginTop: 55, marginLeft: 75, position: 'relative'}}>
        <Text
          style={{
            color: COLORS.black,
            fontWeight: 'bold',
            fontSize: 16
          }}>
          {dummyData.myProfile?.name}
        </Text>
        <Text>View your profile</Text>
      </View>
      {/* Drawer Items */}
      <View
        style={{
          marginTop: 50,
          marginLeft: SIZES.radius,
        }}>
        {/* Home */}
        <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
        {/* My Wallet */}
        <CustomDrawerItem
          label={constants.screens.myWallet}
          icon={icons.wallet}
        />
        {/* Home */}
        <CustomDrawerItem
          label={constants.screens.notification}
          icon={icons.home}
        />
        {/* My Wallet */}
        <CustomDrawerItem
          label={constants.screens.favourite}
          icon={icons.favourite}
        />

        {/* Line Divider */}
        <View
          style={{
            height: 1,
            width: 175,
            marginVertical: SIZES.radius,
            marginLeft: SIZES.radius,
            backgroundColor: COLORS.lightGray1,
          }}></View>

        {/* Track your Order */}
        <CustomDrawerItem label="Track Your Order" icon={icons.location} />
        {/* Coupons */}
        <CustomDrawerItem label="Coupons" icon={icons.coupon} />
        {/* Settings */}
        <CustomDrawerItem label="Settings" icon={icons.setting} />
        {/* Track your Order */}
        <CustomDrawerItem label="Help Center" icon={icons.help} />
      </View>
    </SafeAreaView>
  );
}

const CustomDrawer = () => {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.primary}}>
        <Drawer.Navigator
          drawerType="slide"
          overlayColor="transparent"
          drawerStyle={{
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          }}
          sceneContainerStyle="transparent"
          initialRouteName="MainLayout"
          screenOptions={{
            headerShown: false,
          }}
          drawerContent={props => {
            return (
              <CustomDrawerContent
                navigation={props.navigation}></CustomDrawerContent>
            );
          }}>
          <Drawer.Screen name="MainLayout">
            {props => <MainLayout {...props} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </View>
    );
}

export default CustomDrawer