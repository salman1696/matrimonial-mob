/** @format */

import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabBar } from './tab';
import { Cases, Home, Profile } from '../..';
import Account from '../Account/Account';
import { Colors } from '../../../theme/Variables';



// const OrderFlowStack = createNativeStackNavigator()

// function OrderFlowStackScreen() {
//     return (

//     );
// }

const Tab = createBottomTabNavigator();

const MainFlow = ({ navigation }: { navigation: any }) => {
    // const { t, i18n } = useTranslation();


    return (
        <Tab.Navigator
            useLegacyImplementation
            screenOptions={{ headerShown: false }}
            tabBar={(props: any) => <TabBar {...props} />}
            // initialRouteName={
            //   route?.params?.route === 'ProfileTabs' ? 'Profile' : null
            // }
            initialRouteName={'Home'}
            tabBarOptions={{
                activeTintColor: '#000',
                style: {
                    borderWidth: 0.5,
                    borderBottomWidth: 1,
                    backgroundColor: Colors.primary,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderColor: 'grey',
                    position: 'absolute',
                },
            }}
        >
            <Tab.Screen
                component={Home}
                name={'Home'}
                options={{
                    tabBarLabel: 'Home',

                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={offer1}
                            resizeMode={'contain'}
                            style={{ height: 32, width: 32, marginHorizontal: 5 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                component={Cases}

                name={'Cases'}
                options={{
                    tabBarLabel: 'Cases',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="reorder" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                component={Profile}
                name={'Profile'}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                component={Account}
                name={'My'}
                options={{
                    tabBarStyle: { display: "none" },
                }}
            />
        </Tab.Navigator>
    );
};

export default MainFlow;
