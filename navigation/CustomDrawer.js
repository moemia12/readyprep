import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MainLayout } from '../screens'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants'
import {useSelector, useDispatch} from 'react-redux';
import { switchTabs } from '../stores/tab/tabReducer'


const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? '#FAC668' : null,
      }}
      onPress={onPress}>
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
          color: COLORS.black,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const CustomDrawerContent = ({ navigation, selectedTab }) => {
  const dispatch = useDispatch()

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
            fontSize: 16,
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
        <CustomDrawerItem
          label={constants.screens.home}
          icon={icons.home}
          isFocused={selectedTab == constants.screens.home}
          onPress={() => {
            dispatch(switchTabs(constants.screens.home));
            navigation.navigate('MainLayout');
          }}
        />
        {/* My Wallet */}
        <CustomDrawerItem
          label={constants.screens.myWallet}
          icon={icons.wallet}
          isFocused={selectedTab == constants.screens.myWallet}
          onPress={() => {
            dispatch(switchTabs(constants.screens.myWallet));
            navigation.navigate('MainLayout');
          }}
        />
        {/* Notification */}
        <CustomDrawerItem
          label={constants.screens.notification}
          icon={icons.home}
          isFocused={selectedTab == constants.screens.notification}
          onPress={() => {
            dispatch(switchTabs(constants.screens.notification));
            navigation.navigate('MainLayout');
          }}
        />
        {/* Favourite */}
        <CustomDrawerItem
          label={constants.screens.favourite}
          icon={icons.favourite}
          isFocused={selectedTab == constants.screens.favourite}
          onPress={() => {
            dispatch(switchTabs(constants.screens.favourite));
            navigation.navigate('MainLayout');
          }}
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
        <CustomDrawerItem
          label="Track Your Order"
          icon={icons.location}/>
        {/* Coupons */}
        <CustomDrawerItem label="Coupons" icon={icons.coupon} />
        {/* Settings */}
        <CustomDrawerItem label="Settings" icon={icons.setting} />
        {/* Track your Order */}
        <CustomDrawerItem label="Help Center" icon={icons.help} />
      </View>

      <View
        style={{
          marginTop: 130,
          marginLeft: SIZES.radius,
        }}>
        {/* Logout */}
        <CustomDrawerItem label="Logout" icon={icons.logout} />
      </View>
    </SafeAreaView>
  );
};

const CustomDrawer = ({ }) => {
  const currentTab = useSelector((state) => state.tab.selectedTab)
  
    return (
      <View style={{flex: 1, backgroundColor: 'COLORS.primary'}}>
        <Drawer.Navigator
          drawerType="slide"
          overlayColor="red"
          drawerStyle={{
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'red',
          }}
          sceneContainerStyle={{
            backgroundColor: "red"
          }}
          initialRouteName="MainLayout"
          screenOptions={{
            headerShown: false,
          }}
          drawerContent={props => {
            return (
              <CustomDrawerContent
                navigation={props.navigation}
                selectedTab={currentTab}
              />
            );
          }}>
          <Drawer.Screen name="MainLayout">
            {props => (
              <MainLayout {...props} />
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      </View>
    );
}

export default CustomDrawer

// function mapStateToProps(state) {
//   return {
//     selectedTab: state.rootReducer.selectedTab
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     setSelectedTab: (selectedTab) => {
//       return dispatch(setSelectedTab(selectedTab))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)
//   (CustomDrawer)