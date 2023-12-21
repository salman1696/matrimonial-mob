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
import { Colors } from '../../../theme/Variables';
import { useTranslation } from 'react-i18next';

export const AssetTab = (props: any) => {
    const { state, descriptors, navigation, nav } = props;
    const [menuClick, setMenuClick] = useState(false);
    const { t } = useTranslation()

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
                    style={focused ? styles.foucedStyles : styles.inactiveStyle}
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
                            fontSize: 18,
                            textAlign: 'center',
                            fontWeight: '600',
                            color: focused ? Colors.primary : '#00000060',
                        }}
                    >
                        {t(name)}
                    </Text>
                </TouchableOpacity>
                {focused && (
                    <View
                        style={{
                            marginTop: 2,
                            position: 'absolute',
                            bottom: 0,
                        }}
                    >
                        <View
                            style={{
                                marginTop: 5,
                                width: name === 'OWNED' ? 100 : 140,
                                height: 3,
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
        height: 40,
        width: '100%',
        alignItems: 'center',
        // backgroundColor: theme.colors.purpleColor,
        flexDirection: 'row',
        borderColor: '#eee',
        elevation: 5,
        alignSelf: 'center',

        padding: 5,
        justifyContent: 'center',
    },
    foucedStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '70%',
        flexDirection: 'row',
    },
    inactiveStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '70%',
        flexDirection: 'row',
    },
});
