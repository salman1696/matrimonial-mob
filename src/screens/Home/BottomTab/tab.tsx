/** @format */

import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {hasNotch} from 'react-native-device-info';
import { Icon } from 'react-native-elements';

import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../hooks';
import { Colors } from '../../../theme/Variables';
export const TabBar = (props: any) => {
    const { state, descriptors, navigation, nav } = props;

    const { Layout, Gutters, Images, Fonts } = useTheme();

    const { t } = useTranslation()


    let tabIconColor = 'grey';
    let selectedTabIconColor = 'orange';

    const IconStyle = {
        Home: {
            icon: Images.sparkles.home,
            iconfilled: Images.sparkles.home_fill,
            family: 'material-community',
            key: 'Home',
        },
        Cases: {
            icon: Images.sparkles.case,
            iconfilled: Images.sparkles.case_fill,
            family: 'font-awesome',
            key: 'explore',
        },
        Profile: {
            icon: Images.sparkles.user,
            iconfilled: Images.sparkles.user_fill,
            family: 'feather',
            key: 'Calender',
        },
        My: {
            icon: Images.sparkles.gg_dot,
            iconfilled: Images.sparkles.gg_dot,
            family: 'feather',
            key: 'Account',
        },
    };

    const _renderItem = (
        index: string,
        name: string,
        onPress: any,
        focused: any,
    ) => {
        let _icon = IconStyle[name];

        // alert(nav);
        return (
            <View
                key={index}
                style={{
                    alignItems: 'center',
                    backgroundColor: focused ? 'white' : 'transparent',
                    borderRadius: 25,
                    marginTop: Platform.OS === 'ios' ? 20 : 0,
                    marginHorizontal: Platform.OS === 'ios' ? 12 : 14,
                }}
            >
                <TouchableOpacity
                    style={focused ? [styles.foucedStyles,] : [styles.inactiveStyle, { marginHorizontal: 10, width: 30 }]}
                    onPress={onPress}
                >
                    {
                        <Image
                            source={focused ? _icon.iconfilled : _icon.icon}
                            resizeMode={'contain'}
                            style={{
                                height: 27,
                                width: 27,
                                tintColor: focused ? Colors.primary : Colors.white,
                            }}
                        />
                    }
                    {focused && <Text
                        style={{
                            fontSize: Platform.OS === 'ios' ? 16 : 14,
                            marginLeft: 3,
                            top: 2,
                            fontWeight: '500',
                            textAlign: 'center',
                            // backgroundColor: name === 'My Courses' ? '#ffffff99' : 'null',
                            color: focused ? Colors.black : Colors.white,
                        }}
                    >
                        {/* {name === 'My Courses' || 'بيت' ? '' : t(name)} */}
                        {/* {t(name) !== 'My Courses' ? t(name) : ''} */}
                        {t(name)}
                    </Text>}
                </TouchableOpacity>
                {/* {focused && (
                        <View
                            style={{
                            position: 'absolute',
                            bottom: name === 'My Courses' ? 14 : -7,
                            width: 17,
                            height: 5,
                            backgroundColor: 'red',
                            }}></View>
        )} */}
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const isFocused = state.index === index;
                // const icon = options.tabBarIcon(
                //   <MaterialCommunityIcons name="home" color={colors.p1} size={12} />,
                // );
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    route.name === 'Courses' && navigation.toggleDrawer();

                    if (!isFocused && !event.defaultPrevented) {
                        route.name !== 'Courses' && navigation.navigate(route.name);
                    }
                };

                return _renderItem(index, label, onPress, isFocused);
            })}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 75 : 70,
        width: '92%',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        borderRadius: 25,
        marginHorizontal: 15,
        marginBottom: 20,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        elevation: Platform.OS === 'android' ? Number.MAX_SAFE_INTEGER : undefined,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    foucedStyles: {
        // marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        // marginHorizontal: 5,
        padding: 10,

        width: Platform.OS === 'ios' ? 109 : 89,
    },
    inactiveStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        // marginHorizontal: 5,
        padding: 10,

        width: Platform.OS === 'ios' ? 109 : 69,
    },
});
