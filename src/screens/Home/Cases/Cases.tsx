import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../hooks';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CaseTab } from './caseTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Active from './Active/Active';
import Completed from './Completed/Completed';
import { Colors } from '../../../theme/Variables';



const Cases = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);

    const Tab = createMaterialTopTabNavigator();


    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const subCat = [
        {
            id: 1,
            title: "Active",
            iconName: 'clock_outline'

        },
        {
            id: 2,
            title: "Completed",
            iconName: 'check'

        },
    ];


    useEffect(() => {
        toggleModal();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F4F4', padding: 20 }}>


            {/* <View style={(Layout.center, Layout.fullSize)}> */}

            <View style={{ flexDirection: 'row', alignContent: "center", justifyContent: 'space-between', width: '100%' }}>
                <View style={{ justifyContent: "flex-end", marginTop: 6 }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 500,
                            color: Colors.textGray200,

                            textAlign: "left"
                        }}
                    >
                        {t("Welcome")}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start', }}>
                        <Text style={{
                            textAlign: "left",
                            fontSize: 24, fontWeight: 700, color: Colors.black
                        }}>
                            {t("Your Cases")}
                        </Text>

                    </View>

                </View>


            </View>

            <View style={{ flex: 1, backgroundColor: '#F4F4F4' }}>
                <Tab.Navigator
                    tabBar={(props: any) => <CaseTab {...props} />}
                    initialRouteName={"AllDates"}
                >
                    {subCat?.map((elm: any) => {
                        return (
                            <Tab.Screen
                                name={elm.title}
                                component={elm.iconName === 'clock_outline' ? Active : Completed}
                                initialParams={{}}
                                options={{
                                    tabBarLabel: elm.title,
                                }}
                                iconName={elm.iconName}
                            />
                        );
                    })}
                </Tab.Navigator>
            </View>



            {/* </View> */}
            {/* <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} /> */}
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});


export default Cases;
