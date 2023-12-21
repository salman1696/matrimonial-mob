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
import { Colors } from '../../../../theme/Variables';
import { useTranslation } from 'react-i18next';

export const AddAssetTab = (props: any) => {
    const { state, descriptors, navigation, nav } = props;
    const [menuClick, setMenuClick] = useState(false);
    const { t } = useTranslation()

    console.log(state, 'state')
    const _renderItem = (
        name: any,
        onPress: ((event: GestureResponderEvent) => void) | undefined,
        focused: boolean,
        iconName: any
    ) => {
        // alert(iconName);
        return (
            <View
                style={{
                    alignItems: 'center',
                    marginHorizontal: 10,
                    height: 150,
                    width: 150,
                    borderRadius: 35,
                    borderWidth: 1,
                    backgroundColor: focused ? Colors.primary : '#00000000',
                    borderColor: focused ? Colors.primary : '#00000030',
                    alignSelf: 'center',
                    justifyContent: 'center',

                }}
            >
                <TouchableOpacity
                    style={focused ? styles.foucedStyles : styles.inactiveStyle}
                    onPress={onPress}
                >
                    <Icon
                        name={name === 'Financial Account' ? 'bank' : name === 'Gold' ? 'sack' : name === 'Vehicle' ? 'car-side' : name === 'Other Valuables' ? 'diamond' : 'home'}
                        type={name === 'Financial Account' ? 'font-awesome' : name === 'Gold' ? "material-community" : name === 'Vehicle' ? 'font-awesome-5' : name === 'Other Valuables' ? 'font-awesome' : 'antdesign'}
                        size={45}
                        color={focused ? Colors.white : '#00000060'}
                    />
                    <Text
                        style={{
                            marginVertical: 5,
                            fontSize: 16,
                            textAlign: 'left',
                            fontWeight: '600',
                            color: focused ? Colors.white : '#00000060',
                        }}
                    >
                        {t(name)}
                    </Text>
                    <Text
                        style={{
                            fontSize: 13,
                            textAlign: 'left',
                            fontWeight: '500',
                            color: focused ? Colors.white : '#00000060',
                        }}
                    >
                        {t('Lorem ipsum dolor sit amet')}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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

                        // const iconName = 
                        console.log(route, 'route')

                        return _renderItem(label, onPress, isFocused);
                    },
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 180,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: '#eee',
        elevation: 5,
        alignSelf: 'center',

        padding: 5,
        justifyContent: 'center',
    },
    foucedStyles: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        padding: 10
    },
    inactiveStyle: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        padding: 10
    },
});
