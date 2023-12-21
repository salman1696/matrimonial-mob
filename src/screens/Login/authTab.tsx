/** @format */

import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    Image,
    ScrollView,
    Alert,
    GestureResponderEvent,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '../../theme/Variables';

export const AuthTab = (props: any) => {
    const { state, descriptors, navigation, nav } = props;
    const [menuClick, setMenuClick] = useState(false);

    const _renderItem = (
        name: any,
        onPress: ((event: GestureResponderEvent) => void) | undefined,
        focused: boolean,
        iconName: any
    ) => {
        // alert(nav);
        return (
            <View
                style={{
                    alignItems: 'center',
                    paddingHorizontal: 4,
                    height: 40,
                    alignSelf: 'center', justifyContent: 'center'
                }}
            >
                <TouchableOpacity
                    style={focused ? [styles.foucedStyles, { paddingHorizontal: name === "LOGIN" ? 45 : 10 }] : [styles.inactiveStyle, { paddingHorizontal: name === "LOGIN" ? 45 : 0 }]}
                    onPress={onPress}
                >
                    <Icon
                        name={iconName}
                        type="material-community"
                        size={15}
                        color={'#9B0328'}
                    />
                    <Text
                        style={{
                            fontSize: 16,
                            paddingHorizontal: 6,
                            paddingEnd: 10,
                            textAlign: 'center',
                            fontWeight: '400',
                            color: focused ? Colors.primary : '#00000060',
                        }}
                    >
                        {name}
                    </Text>
                </TouchableOpacity>
                {focused && (
                    <View
                        style={{
                            marginTop: 2,
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                        }}
                    >
                        <View
                            style={{
                                marginTop: 5,
                                height: 2,
                                backgroundColor: Colors.primary,
                            }}
                        />

                    </View>
                )}
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            {state.routes.map(
                (route: { name: string; key: string | number }, index: any) => {
                    // console.log(route.name, 'route');
                    const { options } = descriptors[route.key];
                    // console.log(options, 'route');
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return _renderItem(label, onPress, isFocused);
                },
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        // backgroundColor: '#f1f1f1',
        // backgroundColor: theme.colors.purpleColor,
        flexDirection: 'row',
        borderColor: '#eee',
        elevation: 5,

        justifyContent: 'center',
    },
    foucedStyles: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

        // marginHorizontal: 5,
        flexDirection: 'row',

    },
    inactiveStyle: {
        borderRadius: 25,
        padding: 5,
        flex: 1,

        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 13,

    },
});
