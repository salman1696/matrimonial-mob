import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../../hooks';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon, Input } from 'react-native-elements';
import ReactNativeModal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CaseTab } from './caseTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlatList } from 'react-native';
import { Colors } from '../../../../theme/Variables';



const Distributed = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

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
        <View
            style={{
                flex: 1,
                height: '100%',
                paddingVertical: 10,
                backgroundColor: '#FAFAFA',
                alignContent: 'center',
            }}
        >


            <FlatList
                data={list}
                pagingEnabled={true}
                contentContainerStyle={{
                    alignItems: 'center',
                }}
                keyExtractor={(key: any) => key.index}
                renderItem={({ item, index }: any) => {
                    // console.log(item, "loopitem");

                    return (
                        <View
                            style={{
                                width: '99%',
                                flexDirection: 'row',
                                backgroundColor: Colors.white,
                                padding: 20,
                                borderRadius: 10,
                                marginVertical: 8,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.22,
                                shadowRadius: 2.22,

                                elevation: 3,
                            }}
                        >
                            <Image
                                testID={'brand-img'}
                                style={{
                                    height: 36,
                                    width: '20%',
                                }}
                                source={Images.sparkles.files}
                                resizeMode={'contain'}
                            />
                            <View
                                style={{
                                    width: '80%',
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: "left",
                                        fontSize: 20, fontWeight: 700, color: Colors.black
                                    }}
                                >
                                    {t("Residential Plot")}
                                </Text>
                                <Text
                                    style={{
                                        textAlign: "left",

                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: Colors.textGray200,
                                    }}
                                >
                                    {t("Lorem ipsum dolor, street 2, Clifton, NJ 07011")}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        textAlign: "left",

                                        fontWeight: 400,
                                        color: Colors.black,
                                    }}
                                >
                                    {t("Owned by")} <Text
                                        style={{
                                            fontSize: 16,
                                            textAlign: "left",
                                            fontWeight: 500,
                                            color: Colors.primary,
                                        }}
                                    > {t("You only")}</Text>
                                </Text>
                                <Text
                                    style={{
                                        textAlign: "left",
                                        fontSize: 16, fontWeight: 500, color: Colors.black
                                    }}
                                >
                                    {t("Valuation")} <Text
                                        style={{
                                            textAlign: "left",
                                            fontSize: 16,
                                            fontWeight: 500,
                                            color: Colors.primary,
                                        }}
                                    > SAR 50,000</Text>
                                </Text>
                            </View>

                        </View>
                    );
                }}
            />
        </View >
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


export default Distributed;
